'use client';
import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Toggle from './components/themetoggle';

export default function Home() {
    const [userData, setUserData] = useState<any>([]); 
    const [isStarFilled, setIsStarFilled] = useState<boolean>(false);
    const newData = {
        name: 'test',
        email: 'test@new.com',
        preferences: 'test',
    }

    const addUser = async (e: any) => {
        e.preventDefault();
            await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(newData),
        });
    }

    const setStarState = () => {
        setIsStarFilled(!isStarFilled);
    }

    const checkLogin = async (e: any) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/users');
        setUserData(await response.json());
        
    }

    return (
        <div className="h-screen content-center flex justify-center pt-60 ">
        <div className="flex flex-col w-full items-center justify-center">
            <div className="pb-4">
                <button className="text-black border-4 mx-auto py-2 px-2">
                    Save Changes
                </button>
                <Toggle/>
                
            </div>
            <div className="border w-6/12 rounded-xl bg-slate-300 h-2/5 ">
                <div className="pl-4 flex flex-col">
                <h1 className="text-2xl pt-4">Test users</h1>
                <button onClick={addUser} className="border rounded-xl">Add User</button>
                <button onClick={checkLogin} className="border rounded-xl">Get Users</button>
                <p>{userData?.map((userData: { name: string }) => <div>{userData.name}</div>)}</p>
                { /*<form>
                    <label className="text-lg">name</label>
                    <input className="border rounded-lg" type="text" name="name" />
                    <label className="text-lg">email</label>
                    <input className="border rounded-lg" type="email" name="email" />
    </form> */}
                </div>
            </div>
            <div className="pt-24 grid grid-cols-3 w-full items-center justify-center content-center">
                <div className="border bg-black w-1/3 h-48 text-center">
                    <div className="items-center mx-auto p-2">
                    {isStarFilled ? <FaStar onClick={setStarState} /> : <FaRegStar onClick={setStarState} />
                    }
                    Channel One
                    </div>
                </div>
                <div className="border bg-red-700 w-1/3 h-48 text-center">
                <div className="items-center mx-auto p-2">
                    {isStarFilled ? <FaStar onClick={setStarState} /> : <FaRegStar onClick={setStarState} />
                    }
                    Channel Two
                    </div>
                </div>
                <div className="border bg-emerald-800 w-1/3 h-48 text-center">
                <div className="items-center mx-auto p-2">
                    {isStarFilled ? <FaStar onClick={setStarState} /> : <FaRegStar onClick={setStarState} />
                    }
                    Channel Three
                    </div>
                </div>
                <div className="border bg-yellow-600 w-1/3 h-48 text-center">
                <div className="items-center mx-auto p-2">
                    {isStarFilled ? <FaStar onClick={setStarState} /> : <FaRegStar onClick={setStarState} />
                    }
                    Channel Four
                    </div>
                </div>
                <div className="border bg-green-700 w-1/3 h-48 text-center">
                <div className="items-center mx-auto p-2">
                    {isStarFilled ? <FaStar onClick={setStarState} /> : <FaRegStar onClick={setStarState} />
                    }
                    Channel Five
                    </div>
                </div>
                <div className="border bg-cyan-700 w-1/3 h-48 text-center">
                <div className="items-center mx-auto p-2">
                    {isStarFilled ? <FaStar onClick={setStarState} /> : <FaRegStar onClick={setStarState} />
                    }
                    Channel Six
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
