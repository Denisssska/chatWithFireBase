import React from 'react';
import {Form} from "./Form";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {changeLoader, setUser} from "../Store/Slices/userSlice";
import {useAuth} from "../Hooks/use-Auth";
import {Navigate, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../Hooks/Hooks";


export const Login = () => {

    const {isAuth} = useAuth()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleClick = async (email: string, password: string) => {
        dispatch(changeLoader(true))
        const auth = getAuth()
        console.log(auth)
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password);
            console.log(user)
            dispatch(setUser({email: user.email, id: user.uid, token: user.refreshToken}));
            navigate("/")
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(changeLoader(false))
        }
    }
    return isAuth ? (<Navigate to={"/"}/>) : (
        <Form title={"Login"} handleClick={handleClick}/>

    );
};

