import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../components/appBar';
import Copyright from '../components/copyright';
import { Divider } from '@mui/material';
import { baseUrl } from "../config"

const defaultTheme = createTheme();

export default function Items() {
  const [data, setData] = React.useState([])

  const fetchInfo = () => { 
    return fetch(`${baseUrl}/items`) 
            .then((res) => res.json()) 
            .then((d) => setData(d)) 
    }
    
    React.useEffect(() => {
      fetchInfo();
    }, [])

  let checkoutItems = sessionStorage.getItem("checkoutItems");
  if(checkoutItems == null) {
    checkoutItems = [];
  }
  console.log(checkoutItems);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <main style={{ marginBottom: '80px'}}>
        <Container maxWidth="md">
        <h2 style={{ marginBottom: 0}}>Products</h2>
        <Divider style={{ marginBottom: '40px', borderWidth: '3px'}} />
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  class='glass-box'
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    style={{ backgroundImage: `url(${item.itemImage})`, borderRadius: '8px', overflow: 'hidden', margin: '10px', boxShadow: '2px 2px 33px -6px rgba(0,0,0,0.83)' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.itemName}
                    </Typography>
                    <Typography>
                    {item.itemDescription}
                    </Typography>
                  </CardContent>
                  {/* <CardActions sx={{ justifyContent: 'space-between' }}> */}
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button variant="outlined" size="small" href={`./details/${item._id}`} style={{ borderColor: 'black', color: 'black'}}>View</Button>
                    {/* <Button variant="contained" size="small" style={{ background: 'black'}}>Add to cart</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  );
}