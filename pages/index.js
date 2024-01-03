import React, {useState} from 'react';
import UsersComponent from "../components/login-mange/users.component";
import BusinessComponent from "../components/login-mange/business.component";
import UserTabsComponent from "../components/tabs/user-tabs.component";
import {useRouter} from "next/router";
import FooterComponent from "../components/footer/footer.component";

const Index = () => {
    const router = useRouter();
    function handleClick(){
        router.push('/depass-shop');
    }
    const [tabs, setTabs] = useState([{
        label: 'For Users', name: 'For Users', component: <UsersComponent/>, isActive: true
    }, {
        label: 'For Business', name: 'For Business', component: <BusinessComponent/>, isActive: false
    },]);
    return (<div className="main  w-full h-[100vh]	bg-[#0F172A]">
            <div className="flex justify-center md:justify-start px-8 py-4">
                <div className="flex w-full justify-between py-2">
                    <div>
                        <img src="/depass-logo.svg" width={180}/>
                    </div>
                    <div className="">
                        <button type="button"
                                onClick={handleClick}
                                className="flex justify-center text-white bg-[#e84ca4]  font-medium rounded-full text-sm w-[10em] py-2.5 text-center inline-flex items-center mr-2">
                            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            </svg>
                            Shop
                        </button>
                    </div>
                </div>

                <div>
                </div>
            </div>
            <div className="flex  justify-between ">
                <div className="hidden md:block">
                    <img src="/Left arrow.png" width={250}/>
                </div>
                <div className=" py-20">
                    <UserTabsComponent tabs={tabs} setTabs={setTabs}/>
                    {tabs.reduce((button, tab) => {
                        if (tab.isActive) {
                            if (tab.name === 'For Users') {
                                button = <div className="flex  justify-center ">
                                    {/*<button*/}
                                    {/*    className="bg-[#e84ca4] font-semibold text-base text-white rounded-md w-[10em] h-12	"*/}
                                    {/*    onClick={() => {*/}
                                    {/*        // setCreateSignInPopup(true);*/}
                                    {/*    }}>Sign In*/}
                                    {/*</button>*/}
                                </div>
                            } else if (tab.name === 'For Business') {
                                button = <div className="flex  justify-center">
                                    {/*<button*/}
                                    {/*    className="bg-[#e84ca4] font-semibold text-white  rounded-md w-[14em] h-12	"*/}
                                    {/*    onClick={() => {*/}
                                    {/*    }}>Go to the Dashboard*/}
                                    {/*</button>*/}
                                </div>
                            }
                        }
                        return button
                    }, <></>)}
                </div>
                <div className="hidden md:block ">
                    <img src="/Right arrow.svg" width={250}/>
                </div>
            </div>
        <div>
            <div className="mt-auto">
                <FooterComponent/>
            </div>
        </div>
        </div>);
};

export default Index;