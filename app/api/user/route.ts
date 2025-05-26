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

export async function POST(req: NextRequest){

    //extract the body
    const body = await req.json();

    //store the body in the database
    console.log(body);
    
    return Response.json({
        message: "You are logged in!"
    })
}


