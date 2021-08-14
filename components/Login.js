import Image from "next/image";
import { signIn, signOut, useSession } from 'next-auth/client'
import { FlagIcon, SearchIcon,PlayIcon,ShoppingCartIcon } from "@heroicons/react/outline";


function Login() {
    return (
        <div className="grid place-items-center">
            <Image src="https://links.papareact.com/t4i" width={400} height={400} objectFit="contain"/>
            <h1
            onClick={signIn}
             className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer
             ">
                 login with facebook
             
             </h1>
        </div>
        

    );
}

export default Login;
