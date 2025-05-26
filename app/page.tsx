import Image from "next/image";
import axios from "axios";


async function getUserDetails() {
  await new Promise((r)=>setTimeout(r,2000));
  const response = await axios.get("http://localhost:3000/api/user");
	return response.data;
}

//async component
export default async function Home() {
  const userdetails = await getUserDetails();
  return (
     <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userdetails?.name}
                </div>
                
                Email: {userdetails?.email}
            </div>
        </div>
    </div>
  );
}
