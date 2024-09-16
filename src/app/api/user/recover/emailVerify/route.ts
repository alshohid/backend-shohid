import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import { SendEmail } from "@/utill/emailUtility";
 



// Send OTP TO Email
export async function GET(req:NextRequest) {
    try{
       let {searchParams}= new URL(req.url);
       let email=searchParams.get('email')

        // User Count
        const prisma=new PrismaClient();
        const count=await prisma.users.count({where:{email:email as string}});

        if(count===1){


           let code=Math.floor(100000+Math.random()*900000);
            const result=await prisma.users.update(
                {
                    where:{email:email as string},
                    data:{otp:code.toString()}
                }
            );


            // Send Email
            let EmailText=`Your Code Is ${code}`;
            let EmailSubject="Inventory Verification Email"
            await SendEmail(email as string,EmailText as string,EmailSubject as string)



            return  NextResponse.json({status:"success",data:"6 Digit code has been sent"})

        }else{

            return  NextResponse.json({status:"fail",data:"No user found"})
        }

    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}
