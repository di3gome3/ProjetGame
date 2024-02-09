import React from "react";
import CustomContainer from "../customContainer";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import logoGame from '../../../public/images/logo-game.png'


export default function Navbar() {

    const linkstyle = {
        fontSize: '20px',
        color: '#FFFFFF'
    }
    return (
        <>
            
                <Container> 
                   
                    <AppBar sx={{ width: '100%', height: '80px', bgcolor: '#1F3A5F', display: 'flex', justifyContent: 'center' }}> 
                    <CustomContainer>
                        <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Image src={logoGame} width={70} height={70} />
                            </Box>
                            <Typography sx={linkstyle}>
                                About
                            </Typography>
                            <Typography sx={linkstyle}>
                                Gameplay
                            </Typography>
                            <Typography sx={linkstyle}>
                                Comunitty
                            </Typography>
                        </Toolbar>
                        </CustomContainer>
                    </AppBar>
                </Container>

            
        </>
    )
}
