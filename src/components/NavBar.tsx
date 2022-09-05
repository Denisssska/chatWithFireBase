import React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {useAuth} from "../Hooks/use-Auth";
import {NavLink} from "react-router-dom";
import {removeUser} from "../Store/Slices/userSlice";
import {useAppDispatch} from "../Hooks/Hooks";

export const NavBar = () => {
    const {isAuth, email} = useAuth()
    const dispatch = useAppDispatch()
    return (
        <AppBar color={"secondary"} position={"static"}>
            <Toolbar>
                <Grid container justifyContent='flex-end'>
                    {!isAuth ?
                        <></>
                        :
                        <Button onClick={() => dispatch(removeUser())} variant={"outlined"}>Exit</Button>}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};