import React, {useEffect, useMemo, useState} from 'react';
import {useSelector} from "react-redux";
import SidebarComponent from "../sidebar/sidebar.component";
import {useAuth} from "react-oidc-context";

const HeaderComponent = () => {
    const user = useSelector(state => state.user);
    const cartItems = useSelector(state => state.cart.item);
    const itemCount = cartItems ? cartItems.length : 0;
    const [open, setOpen] = useState(false)
    const auth = useAuth();

    return (
        <div className="flex text-white justify-between px-5 py-5">
            <div>
                <img src="/depass logo.png"/>
            </div>
            <div className="flex items-center ">
                <div className="flex">
                    <div className="px-5">
                        <p>Member Tier</p>
                    </div>
                    <div>
                        {user.userId ?
                            <p className="text-yellow-500"> {user?.credential?.credentialSubject?.membershipLevel}</p> :
                            <p className="text-yellow-500">Not Verified</p>
                        }
                    </div>
                </div>
                <div className="px-4">
                    {
                        !user.userId && <div
                            className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center bg-slate-900 rounded-full back">
                                <p className=" text-white p-2"
                                   onClick={() => {
                                       auth.signinRedirect();
                                   }}>Verify Membership</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="pr-5">
                    <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center">
                            <p className=" text-white p-2">Become a member</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-slate-800 p-4 rounded-full relative">
                    <div
                        className="flex justify-center items-center text-xs absolute top-1 left-5 bg-yellow-500 rounded-full h-4 w-4 top-0 ">{itemCount}</div>
                    <div>
                        <img src="/cart-icon.png" onClick={() => {
                            setOpen(true)
                        }}/>
                    </div>
                </div>
                <SidebarComponent open={open} setOpen={setOpen}/>
            </div>
        </div>
    );
};

export default HeaderComponent;