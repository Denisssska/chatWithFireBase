import React, {useState} from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../Hooks/use-Auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {getDocs, getFirestore} from "firebase/firestore";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../fireBase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import avatar1 from "../assets/Ball-1s-200px.svg";
import avatar2 from "../assets/avatar-svgrepo-com.svg";
import {useAuthState} from "react-firebase-hooks/auth";
import {getAuth} from "firebase/auth";

export const HomePage = () => {
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(collection(db, 'users'))
    const auth = getAuth()
    const [user] = useAuthState(auth)
    const {isAuth, email} = useAuth()
    if (user) {
        // @ts-ignore
        const date = new Date(user.metadata.creationTime)
    }

    const sendMessage = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: email,
                message: value,
                avatar: avatar2,
                uid: user && user.uid

            });
            console.log("Document written with ID: ", docRef.id);
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        } finally {
            setValue('')
        }
    }

    return isAuth ? (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}}
                  alignItems={"center"} justifyContent={"center"}>
                <div style={{width: "80%", height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages && messages.map((item, index) =>
                        <div key={index}
                             style={{ marginLeft: user && user.uid === item.uid ? "50px" : "650px"}}>
                            <Grid container>
                                <Avatar src={item.avatar}/>
                                <div>{item.name}</div>
                                <div>{item.message}</div>
                            </Grid>
                        </div>)}
                </div>
                <Grid container direction="column" alignItems="flex-end" style={{width: '80%'}}>
                    <TextField onChange={e => setValue(e.currentTarget.value)} value={value} fullWidth maxRows={2}
                               variant='outlined'/>
                    <Button onClick={sendMessage} variant="outlined">send</Button>
                </Grid>
            </Grid>
        </Container>
    ) : (
        <Navigate to="/login"/>
    );
};

