import { Container } from "@mui/material";
import React from "react";


export default function CustomContainer({ children }) {
    return (
        <>
            <Container sx={{width: '100%', maxWidth: {lg: '1200px', md: '900px', sm: '600px', xs: '100%'}}}>
                {children}
            </Container>
        </>
    )
}