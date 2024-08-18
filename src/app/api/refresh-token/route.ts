import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jsonwebtoken from 'jsonwebtoken';

const { verify, sign } = jsonwebtoken;

export async function POST(req: NextRequest) {
    try {
        const { refreshToken } = await req.json();

        if (!refreshToken) {
            return NextResponse.json({ message: 'No refresh token provided' });
        }


        const decoded = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET || "keyboard cat") as any;

        const accessToken = sign({ id: decoded.id }, process.env.ACCESS_TOKEN_SECRET || "keyboard cat", { expiresIn: '1h' });

        return NextResponse.json({ accessToken });

    } catch (err: any) {
        return NextResponse.json({ message: 'Error: ' + err.message });
    }
}
