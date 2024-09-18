import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    try {
        const prisma = new PrismaClient();
        const { searchParams } = new URL(req.url);
        const postID = parseInt(searchParams.get("postID") as any);
        let result = await prisma.comments.findMany({
        where: { postID: postID },
        include: {
            users: { select: { firstName: true, lastName: true } },
        },
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (error: any) {
        return NextResponse.json({ status: "fail", data: error });
    }
    }
