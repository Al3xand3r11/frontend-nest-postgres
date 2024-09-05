'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Toggle from '../components/themetoggle';
export default function Preferences( email: {email: string}) {
    const [userData, setUserData] = useState<any>([]); 
    const [isStarTwoFilled, setIsStarTwoFilled] = useState<boolean>(false);
    const [isStarFourFilled, setIsStarFourFilled] = useState<boolean>(false);
    const [isStarSixFilled, setIsStarSixFilled] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);
    const router = useSearchParams();
    const newEmail = router.toString().replace('%40', '@');
    const finalEmail = newEmail.slice(0, -1);
    console.log(finalEmail);

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

    const setTwoStarState = () => {
        setIsStarTwoFilled(!isStarTwoFilled);
    }

    const setFourStarState = () => {
        setIsStarFourFilled(!isStarFourFilled);
    }

    const setSixStarState = () => {
        setIsStarSixFilled(!isStarSixFilled);
    }


    const checkLogin = async (e: any) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/users');
        setUserData(await response.json());
        
    }

    const handleSave = async (e: any) => {
        e.preventDefault();
        const dark = "dark:";
        const darkString = isDark.toString();
        const isStarTwoFilledString = isStarTwoFilled.toString();
        const isStarFourFilledString = isStarFourFilled.toString();
        const isStarSixFilledString = isStarSixFilled.toString();
        const finalString = dark.concat(" ", darkString, "- isStarTwoFilled: ", isStarTwoFilledString, "- isStarFourFilled: ", isStarFourFilledString, "- isStarSixFilled: ", isStarSixFilledString); 
        const fixedString = finalString.split('-').join(',');
        const userData = {
            name: 'test',
            email: finalEmail,
            preferences: fixedString,
        }
        console.log(userData);
       // await fetch('http://localhost:3000/users', {
         //   method: 'POST',
           // body: JSON.stringify(userData),
        //});
    }

    console.log(isDark);


    return (
        <div className="h-screen content-center flex justify-center pt-60  ">
        <div className="flex flex-col w-full items-center justify-center">
            <div className="pb-4">
                <button className=" border-4 mx-auto py-2 px-2" onClick={handleSave}>
                    Save Changes for {finalEmail}
                </button>
                
                <Toggle 
                    isDark={isDark}
                    setIsDark={setIsDark}
                />
                
            </div>
            <div className="pt-24 grid grid-cols-3 w-full items-center justify-center content-center">
                <div className="border bg-red-700 w-1/3 h-48 text-center">
                <div className="items-center mx-auto p-2">
                    {isStarTwoFilled ? <FaStar onClick={setTwoStarState} /> : <FaRegStar onClick={setTwoStarState} />
                    }
                    Channel Two
                    </div>
                </div>
                <div className="border bg-yellow-600 w-1/3 h-48 text-center">
                <div className="items-center mx-auto p-2">
                    {isStarFourFilled ? <FaStar onClick={setFourStarState} /> : <FaRegStar onClick={setFourStarState} />
                    }
                    Channel Four
                    </div>
                </div>
                <div className="border bg-cyan-700 w-1/3 h-48 text-center">
                <div className="items-center mx-auto p-2">
                    {isStarSixFilled ? <FaStar onClick={setSixStarState} /> : <FaRegStar onClick={setSixStarState} />
                    }
                    Channel Six
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
