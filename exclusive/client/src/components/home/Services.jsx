import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
const Services = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Box sx={{ padding: 3, marginTop: "50px" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={4} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <LocalShippingOutlinedIcon style={{ fontSize: "100px" }} />
            <Typography variant="h6" align="center">FREE AND FAST DELIVERY</Typography>
            <Typography variant="subtitle1" align="center">Free delivery for all orders over $140</Typography>
          </Grid>
          <Grid item xs={4} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <HeadsetMicOutlinedIcon style={{ fontSize: "100px" }} />
            <Typography variant="h6" align="center">24/7 CUSTOMER SERVICE</Typography>
            <Typography variant="subtitle1" align="center">Friendly 24/7 customer support</Typography>
          </Grid>
          <Grid item xs={4} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <PriceCheckOutlinedIcon style={{ fontSize: "100px" }} />
            <Typography variant="h6" align="center">MONEY BACK GUARANTEE</Typography>
            <Typography variant="subtitle1" align="center">We return money within 30 days</Typography>
          </Grid>
        </Grid>
      </Box>
      <ArrowCircleUpOutlinedIcon
        variant="contained"
        color="inherit"
        onClick={scrollToTop}
        style={{
          marginBottom:"50px",
          bottom: "20px",
          right: "20px",
          float:"right",
          fontSize:"50px"
        }}
        startIcon={<KeyboardArrowUpIcon />}
      >
       
      </ArrowCircleUpOutlinedIcon>
    </div>
  );
};

export default Services;
