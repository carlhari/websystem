import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import jsonwebtoken from 'jsonwebtoken';

const { sign } = jsonwebtoken;

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        const user = await prisma.user.findUnique({
            where: { name: username },
        });

        if (!user) {
            return NextResponse.json({ message: 'Login Failed' });
        }

        const concatenatedString = username + password;
        const hashedInput = crypto.createHash('md5').update(concatenatedString).digest('hex');
        const isValid = hashedInput === user.password;

        if (!isValid) {
            return NextResponse.json({ ok: false, message: 'Invalid credentials' });
        }

        const userWithStringId = {
            ...user,
            id: user.id.toString(),
        };

        const accessToken = generateAccessToken(userWithStringId);
        const refreshToken = generateRefreshToken(userWithStringId);

        // Include the tokens in the response
        const response = NextResponse.json({ 
            ok: true, 
            accessToken, 
            refreshToken 
        });

        return response;

    } catch (err: any) {
        return NextResponse.json({ message: 'Error: ' + err.message });
    }
}

function generateAccessToken(user: any) {
    return sign(user, process.env.ACCESS_TOKEN_SECRET || "keyboard cat", { expiresIn: '1h' });
}

function generateRefreshToken(user: any) {
    return sign(user, process.env.REFRESH_TOKEN_SECRET || "keyboard cat", { expiresIn: '1d' });
}
