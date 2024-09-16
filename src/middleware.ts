import { NextRequest, NextResponse } from 'next/server'
import { VerifyToken } from './utill/jwtTokenhelper';
 
export async function middleware(req:NextRequest) {

    if (req.nextUrl.pathname.startsWith("/api/dashboard")) {
        try {
            let token = req.cookies.get('token');
            let payload = await VerifyToken(token?.value as string );


            const requestHeader=new Headers(req.headers);
            requestHeader.set('email',payload.email as string);
            requestHeader.set('id',payload.id as any)


            return NextResponse.next({
                request:{headers:requestHeader}
            });

        }catch (e) {
            return  NextResponse.json({status:"fail",data:"unauthorized"}, {status:401})
        }
    }



    if (req.nextUrl.pathname.startsWith("/api/user")) {
        return NextResponse.next();
    }


}