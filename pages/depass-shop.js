import React, { useState } from "react";
import Popup from "../components/popup/popup.component";
import HeaderComponent from "../components/header/header.component";
import FooterComponent from "../components/footer/footer.component";
import { useDispatch, useSelector } from "react-redux";
import { addToCart_Action } from "../store/actions/cart.action";
import { useAuth } from "react-oidc-context";

import SidebarComponent from "../components/sidebar/sidebar.component";
import Popupbox from "../components/PopupCommone/Popupbox";
import ColorButton from "../components/ColorButton/ColorButton";
import BorderButton from "../components/BorderButton/BorderButton"

const DepassShop = () => {
  const [verifyCredentialPopup, setVerifyCredentialPopup] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const data = [
    {
      id: 1,
      img: "/silver.png",
      name: "Silver",

    },
    {
      id: 2,
      img: "/gold.png",
      name: "Gold",

    },
    {
      id: 3,
      img: "/diamond.png",
      name: "Diamond",

    },
  ]

  const shopItems = [
    {
      id: 1,
      salePercentage: 3,
      productName: "California Sports Suit",
      regularPrice: 200,
      productImage: "/image-card.png",
    },
    {
      id: 2,
      salePercentage: 5,
      productName: "Oxford Mens Formal Suit",
      regularPrice: 250,
      productImage: "/image-142-1.png",
    },
    {
      id: 3,
      salePercentage: 5,
      productName: "Plain Cotton Formal Shirt",
      regularPrice: 250,
      productImage: "/image-142.png",
    },
    {
      id: 4,
      salePercentage: 5,
      productName: "Oxford Men Suits",
      regularPrice: 280,
      productImage: "/image-142-2.png",
    },
    {
      id: 5,
      salePercentage: 5,
      productName: "Oxford Cotton Formal Shirt",
      regularPrice: 300,
      productImage: "/image-142-3.png",
    },
  ];
  const auth = useAuth();
  function handleAddToCart(item) {
    dispatch(addToCart_Action(item));
    setOpen(true);
  }
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col  bg-slate-900 min-h-screen">
      <div>
        <HeaderComponent />
      </div>
      <SidebarComponent open={open} setOpen={setOpen} />
      <div className="py-5 px-5">
        <div className="text-3xl text-white pb-5 px-2">
          <p>Take advantage of your member only discounted pricing today</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          {shopItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-80 border-2 border-gray-700 rounded-lg bg-slate-800 text-white px-5 py-5"
              >
                <div className="flex justify-between items-center pb-5">
                  <div className="bg-white text-[#32324D] p-2 pl-3 pr-3 rounded-md font-semibold">
                    <p>Sale {item.salePercentage}%</p>
                  </div>
                  <div
                    className="rounded-md bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 cursor-pointer"
                    onClick={() => {
                      setVerifyCredentialPopup(true);
                    }}
                  >
                    <div className="flex px-1 items-center justify-center bg-gray-800 back rounded-md ">
                      <p className="text-white text-sm p-2 font-medium">
                        Want a Better Deal?
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  {item.productImage ? (
                    <img src={item.productImage} />
                  ) : (
                    <img src="/image-card.png" />
                  )}
                </div>
                <div className="flex justify-center py-5">
                  <p className="font-semibold text-xl">{item.productName}</p>
                </div>
                <div className="flex justify-between ">
                  {user?.credentialProof?.isValid && (
                    <div>
                      <p className="font-semibold text-lg ">
                        $
                        {item.regularPrice -
                          (item.regularPrice *
                            user.credential.credentialSubject
                              .discountPercentage) /
                          100}
                        <span className="ml-2 text-sm text-green-400">
                          -{" "}
                          {user.credential.credentialSubject.discountPercentage}
                          % Off
                        </span>
                      </p>
                    </div>
                  )}
                  {user?.credentialProof?.isValid ? (
                    <div>
                      <del className="font-semibold text-lg">
                        ${item.regularPrice}
                      </del>
                    </div>
                  ) : (
                    <div>
                      <p className="font-semibold text-lg">
                        ${item.regularPrice}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex justify-center pt-5">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart({
                        ...item,
                        regularPrice: user.userId
                          ? item.regularPrice -
                          (item.regularPrice *
                            user.credential.credentialSubject
                              .discountPercentage) /
                          100
                          : item.regularPrice,
                      });
                    }}
                    className="py-2.5 w-64 mr-2 mb-2 font-semibold rounded-full border-0 outline-0 text-sm font-medium text-gray-900 focus:outline-none bg-gradient-to-br from-white to-purple-400 rounded-lg border border-gray-200 "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-auto">
        <FooterComponent />
      </div>
      <Popup
        title="Please verify your membership to proceed"
        showPopup={verifyCredentialPopup}
        setShowPopup={setVerifyCredentialPopup}
      >
        <div className="flex flex-col justify-center">
         <Popupbox data={data}/>
         <ColorButton text="Verify Membership"/>
          <div className="flex w-full mb-7 ">
            <div className="flex-1 flex flex-col space-y-2 items-start text-white">
              <div className="text-black text-lg font-normal text-xl text-[#FFFFFF] mb-3 ">Recommended disclosures:</div>
              <div className="flex flex-row items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-black"
                >
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p className="text-black text-base text-[#FFFFFF] text-xl font-light">Full Name </p>
              </div>
              <div className="flex items-center space-x-4  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-black"
                >
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p className="text-black text-base text-[#FFFFFF] text-xl font-light">Email Address</p>
              </div>
            </div>
          </div>
          <p className="  text-[#FFFFFF] font-normal text-xl my-2.5 text-center ">Not a Member Yet? </p>
         <BorderButton title="Become A Member" />
         <p className="  text-[#FFFFFF] font-light text-xs mt-3 text-center ">Powered by Privatyze </p>
        </div>
      </Popup>
    </div>
  );
};

export default DepassShop;
