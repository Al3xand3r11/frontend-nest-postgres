import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";

export default function Login() {
    const [userData, setUserData] = useState<any>(); 
    

    const checkLogin = async (e: any) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/users');
        setUserData(await response.json());
        
    }

    return (
        <div className="h-screen bg-white content-center flex justify-center pt-60 ">
            <div className="border w-6/12 rounded-xl bg-slate-300 h-2/5 ">
                <div className="pl-4 flex">
                <h1 className="text-2xl pt-4">Test users</h1>
                <button onClick={checkLogin}>Get Users</button>
                <p>{userData?.map((userData: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => <div>{userData.name}</div>)}</p>
                </div>
            </div>
        </div>
    );
}