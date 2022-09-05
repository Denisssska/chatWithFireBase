import React from 'react';
import {Form} from "./Form";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {setUser} from "../Store/Slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../Hooks/Hooks";


export const SignUp = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRegister = async (email: string, password: string) => {
        const auth = getAuth()
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            dispatch(setUser({email: user.email, id: user.uid, token: user.refreshToken}));
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Form title={"Register"} handleClick={handleRegister}/>
        </div>
    );
};

