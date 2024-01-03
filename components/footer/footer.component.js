import React from 'react';
import {useRouter} from "next/router";

const FooterComponent = () => {
    const router = useRouter();
    return (
        <div className="border-t border-solid border-gray-700 mt-auto py-2 px-5">
            <div className="flex justify-between">
                <div>
                    <img src="/depass logo.png"/>
                </div>
                <div className="flex items-center ">
                    <div className="px-2">
                        <img src="/Vector.png"/>
                    </div>
                    <div>
                        <img src="/Vector (1).png"/>
                    </div>

                </div>
                <div className="flex items-center ">
                    <div>
                        <p className="text-white px-2">Privacy Policy</p>
                    </div>
                    <div>
                        <p className='text-white cursor-pointer' onClick={()=>{
                        }}>https://depass/id</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FooterComponent;