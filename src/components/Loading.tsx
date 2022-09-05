import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import ball from '../assets/Ball-1s-200px.svg';

export const Loading = () => {
    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}}
                  alignItems={"center"} justifyContent={"center"}>
                <Grid container
                      direction={"column"} alignItems={"center"}>
                    <Box p={5}>
                        <img src={ball} alt="loading"/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
