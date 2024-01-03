import React, {useCallback, useEffect} from 'react';
import {useAuth} from "react-oidc-context";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setUserAddress_Action} from "../../store/actions/user.action";

const VerifyCredentialPage = (props) => {
    const auth = useAuth();
    const router = useRouter();
    const dispatch = useDispatch();

    const verifyCredential = useCallback(async () => {
        if (auth?.isAuthenticated) {
            const user = auth?.user;
            const credential = user.profile._vp_token
            console.log({credential});
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/verifiable-credentials/proof/verifyJson`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({proofDocument: credential})
            });
            return response.json();
        }
        console.log({auth})
    }, [auth]);

    useEffect(() => {
        if (auth?.isAuthenticated) {
            verifyCredential().then((res) => {
                if (res?.userId) {
                    setTimeout(() => {
                        localStorage.setItem('depass-user-token', JSON.stringify(res));
                        const credential = auth?.user.profile._vp_token;
                        console.log('credential 2', credential);
                        dispatch(setUserAddress_Action({
                            userId: res.userId,
                            accessToken: res.token,
                            credentialProof: res.proofResponse,
                            credential: credential
                        }))
                        router.push('/depass-shop');
                    }, 1000)
                } else {
                    console.log('No User Id found');
                }
            })
        }
    }, [auth]);

    return (
        <div>
            <div className="flex h-screen justify-center items-center">
                {/*{auth?.isLoading && <div className="text-lg">Verifying Credential...</div>}*/}
                {/*{auth?.isAuthenticated && <div className="text-lg">Verified ✅</div>}*/}
                {auth?.isLoading && <div>
                    <div className="flex flex-col items-center justify-center py-5 ">
                        <img src="/Privatyze-Logo.png"/>
                        <p className="text-lg text-semibold ">Privatyze</p>
                        <p className="text-gray-500 ">Depass Store</p>
                    </div>
                    <div className="flex justify-center items-center shadow-xl  h-72 w-96 rounded">
                        <div className="text-lg">Verifying Credential...</div>
                    </div>
                </div>}
                {auth?.isAuthenticated &&
                    <div>
                        <div className="flex flex-col items-center justify-center py-5 ">
                            <img src="/Privatyze-Logo.png"/>
                            <p className="text-lg text-semibold ">Privatyze</p>
                            <p className="text-gray-500 ">Depass Store</p>
                        </div>
                        <div className="flex justify-center items-center shadow-xl  h-72 w-96 rounded">
                            <div className="text-lg">Verified ✅</div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};
export default VerifyCredentialPage;
