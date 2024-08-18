// utils/auth.ts
import { verify } from 'jsonwebtoken';

export function verifyToken(token: string | undefined) {
    if (!token) {
        return false;
    }

    try {
        verify(token, process.env.ACCESS_TOKEN_SECRET || "keyboard cat");
        return true;
    } catch {
        return false;
    }
}

export function getAuthToken(req: Request) {
    const authHeader = req.headers.get('Authorization');
    return authHeader ? authHeader.replace('Bearer ', '') : undefined;
}
