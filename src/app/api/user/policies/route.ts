import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    try {
        const prisma = new PrismaClient();
        const {searchParams}= new URL(req.url)
        const type =  searchParams.get('type') as any
        let result = await prisma.policies.findMany({
            where:{type:type}
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (error: any) {
        return NextResponse.json({ status: "fail", data: error });
    }
    }
