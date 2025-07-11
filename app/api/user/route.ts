// //backend routes



export function GET(){
    //database logic

    return Response.json({
        email: "theharshkrthakur17@gamil.com",
        name: "Harsh"
    })
}

// export function POST(){
//     //database logic

//     return Response.json({
//         email: "theharshkrthakur17@gamil.com",
//         name: "Harsh"
//     })
// }

// export function PUT(){
//     //database logic

//     return Response.json({
//         email: "theharshkrthakur17@gamil.com",
//         name: "Harsh"
//     })
// }
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import client from "@/db"

export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}

// export async function GET() {
//     const user = await client.user.findFirst({});
//     return Response.json({ name: user?.username, email: user?.username })
// }


