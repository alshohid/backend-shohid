import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        const reqBody = await req.json();
        reqBody.otp = "0"
        const prisma = new PrismaClient();
        let result = await prisma.users.create({
            data: reqBody,
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (error: any) {
        return NextResponse.json({ status: "fail", data: error });
    }
}