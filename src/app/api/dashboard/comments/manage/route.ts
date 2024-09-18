import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const headerlist = headers();
    const user_Id = parseInt(headerlist.get("id") as any);
    const prisma = new PrismaClient();
    const result = await prisma.comments.findMany({
      where: { id: user_Id },
      include:{
        news_list:{
          select:{
            title:true,
          }
        }
      }
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error: any) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

export async function POST(req: Request, res: Response) {
    try {
        const headerlist = headers();
        const user_Id = parseInt(headerlist.get("id") as any);
        const reqBody = await req.json();
        reqBody.userID = user_Id;
        const prisma = new PrismaClient();
        const result = await prisma.comments.create({
        data: reqBody,
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (error: any) {
        return NextResponse.json({ status: "fail", data: error });
    }
}

export async function DELETE(req: Request, res: Response) {
    try {
        const headerlist = headers();
        const user_Id = parseInt(headerlist.get("id") as any);
        const reqBody = await req.json();
        const comment_id = reqBody.id;
        const prisma = new PrismaClient();
        const result = await prisma.comments.deleteMany({
        where: {
            AND: [
                {
                    userID:user_Id
                },
                {
                    id:comment_id
                }
            ],
        },
        });
        return NextResponse.json({status:"success",data:result})
    } catch (error) {
        return NextResponse.json({ status: "fail", data: error });
    }
    }
