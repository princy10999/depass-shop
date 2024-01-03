import React from "react";

const Popup = ({
  children,
  title,
  showPopup,
  setShowPopup,
  showFooter = true,
}) => {
  return (
    <>
      {showPopup ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  ">
            <div className="relative w-auto my-6 mx-auto max-w-5xl ">
              {/*content*/}
              <div className="w-[25em] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-[#1B2335]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-xl text-xl font-semibold">{title}</h3>
                  <button
                    className="ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowPopup(false)}
                  >
                    <span className="bg-transparent  text-2xl block outline-none focus:outline-none text-white">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-10 py-4 flex-auto">{children}</div>
                {/*footer*/}
                {/*<div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">*/}
                {/*    <button*/}
                {/*        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                {/*        type="button"*/}
                {/*        onClick={() => setShowPopup(false)}*/}
                {/*    >*/}
                {/*        Close*/}
                {/*    </button>*/}
                {/*    /!*<button*/}
                {/*  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                {/*  type="button"*/}
                {/*  onClick={() => setShowPopup(false)}*/}
                {/*>*/}
                {/*    Save Changes*/}
                {/*</button>*!/*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Popup;
