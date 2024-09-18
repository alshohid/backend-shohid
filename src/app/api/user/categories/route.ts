import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    try {
        const prisma = new PrismaClient();
        const result = await prisma.categories.findMany({
            select:{id:true,name:true},
            orderBy:{id:"asc"}
        })
        return NextResponse.json({ status: "success", data: result });
    } catch (error: any) {
        return NextResponse.json({ status: "fail", data: error });
    }
    }
