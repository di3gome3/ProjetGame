import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import adventureGroup from '../../public/images/adventure-group.jpg'
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: '80px' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Container sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{ fontSize: '42px', color: '#FFFFFF' }}>
                  About The game
                </Typography>
                <Typography sx={{fontSize: '20px', color: '#e0e0e0'}}>

                  "Whispers from the Deep Dungeon" immerses players in a thrilling adventure through ancient catacombs, guided by the whispers of the past. They face puzzles and battles, uncovering secrets in the dim corridors.
                </Typography>
                <Typography sx={{fontSize: '20px', color: '#e0e0e0'}}>
                  With courage and wit, players unravel the dungeon's mysteries, crafting a tale of exploration and valor.
                </Typography>
              </Container>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Image src={adventureGroup} layout="responsive" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
