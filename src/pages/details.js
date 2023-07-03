import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../components/appBar';
import Info from './info';
import { useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../config"

const defaultTheme = createTheme();

export default function Details() {
  let params = useParams();

  const [item, setItem] = React.useState([])

  const fetchInfo = () => { 
    return fetch(`${baseUrl}/items/${params.id}`) 
            .then((res) => res.json()) 
            .then((d) => setItem(d)) 
    }
    
    React.useEffect(() => {
      fetchInfo();
    }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      
      <ResponsiveAppBar />
      <main>
        
        <Container sx={{ py: 8 }} maxWidth="md">
          <Info item={item}></Info>
        </Container>
      </main>
    </ThemeProvider>
  );
}