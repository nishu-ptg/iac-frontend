import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

function Info(props) {
  let item = props.item;
  console.log(item)

let checkoutItems = sessionStorage.getItem('checkoutItems');

if (!checkoutItems) {
  checkoutItems = [];
} else {
  try {
    checkoutItems = JSON.parse(checkoutItems);
  } catch (error) {
    console.error('Invalid JSON data in sessionStorage: ', error);
    checkoutItems = [];
  }
}

const handleAddCheckout = () => {
  checkoutItems = [...checkoutItems, item];

  sessionStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));

  checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems'));
  console.log(checkoutItems);
  alert(`${item.itemName} added successfully!`)
};

  return (
    <>
    <Grid item xs={12} md={6}>
      <CardActionArea  href="#">
        <Card sx={{ display: 'flex' }} variant="outlined">
        <CardMedia
            component="img"
            sx={{ width: 360, display: { xs: 'none', sm: 'block' } }}
            // image="./items-pictures/1.jpg"
            alt=""
            style={{ backgroundImage: `url(${item.itemImage})` }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{ textAlign: 'left' }}>
              <b>{item.itemName}</b>
            </Typography>
            <h4 style={{ textAlign: 'left' }}>Price: ${item.itemPrice}</h4>
            <Divider style={{ margin: '20px 0 20px 0' }} />

            <Typography style={{ textAlign: 'left' }}>
            {item.itemDescription} 
            </Typography>

            <Divider style={{ margin: '20px 0 20px 0' }} />
            <Button variant="outlined" size="small" style={{ background: 'black', color: '#fff'}}
              onClick={handleAddCheckout}
            >Add to cart</Button>
          </CardContent>
          
        </Card>
      </CardActionArea>
    </Grid>
    </>
  );
}


export default Info;