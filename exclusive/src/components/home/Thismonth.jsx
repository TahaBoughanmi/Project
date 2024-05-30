import React,{useState,useEffect} from "react";
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import SquareIcon from '@mui/icons-material/Square';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";


const Thismonth = () => {
  const [products,setproducts]=useState([])
  const navigate=useNavigate()
  useEffect(() => {
    axios.get('http://localhost:5000/Client/products') 
      .then(response => {
        setproducts(response.data.slice(8,12));
        console.log(response);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []); 
  return (
    <Box sx={{ padding: 3, marginTop: "50px" }}>
      <Typography variant="h5" component="h5" sx={{ color: "red", display: "flex", alignItems: "center" }}>
        <SquareIcon /> This Month
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Typography variant="h4" component="div">
          Best Selling Products
        </Typography>
        <Button variant="contained" style={{ color: "white", backgroundColor: "red" }}>
          View all
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ marginBottom: 3, marginTop: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard
              product={product}
              onClick={() => navigate('/oneProduct', { state: { productId: product.id } })}
            />
          </Grid>
        ))}
      </Grid>
      <img src="https://i.ytimg.com/vi/jEh6MvMwem0/maxresdefault.jpg" alt="jbl" style={{width:"100%", marginTop:"30px"}}/>

    </Box>
  );
};

export default Thismonth;
