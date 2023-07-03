import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../components/appBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Divider, TextField } from '@mui/material';

const defaultTheme = createTheme();

export default function Checkout() {
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

    console.log(checkoutItems)

    const totalPrice = checkoutItems.reduce((sum, item) => sum + item.itemPrice, 0);
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />

            <ResponsiveAppBar />
            <main>

                <Container sx={{ py: 8 }} maxWidth="md">
                    <h2>Checkout</h2>
                    <Divider style={{margin: '20px 0'}}></Divider>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ background: '#f5f5f5' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b></b></TableCell>
                                    <TableCell><b>Item</b></TableCell>
                                    <TableCell><b></b></TableCell>
                                    <TableCell align="right"><b>Price</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {checkoutItems.map((item) => (
                                <TableRow>
                                    <TableCell component="th" scope="row" style={{ width: '120px'}}>
                                    <img src={item.itemImage} style={{ width: '80px'}} />
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {item.itemName}
                                </TableCell>
                                <TableCell component="th" scope="row" align="right">
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <RemoveCircleOutlineIcon fontSize="small" />
                                    &nbsp;
                                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} value={1} style={{ width: '40px'}} size='small' />

                                    {/* <input type='number' style={{ width: '40px' }} value='1' /> */}
                                    &nbsp;
                                    <AddCircleOutlineIcon fontSize="small" />
                                    </Box>
                                </TableCell>
                                <TableCell component="th" scope="row" align="right">
                                    $ {item.itemPrice}
                                </TableCell>
                                </TableRow>
                            ))}
                            
                            </TableBody>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b></b></TableCell>
                                    <TableCell><b>Total</b></TableCell>
                                    <TableCell><b></b></TableCell>
                                    <TableCell align="right"><b>$ {totalPrice}</b></TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                    <Divider style={{margin: '20px 0'}}></Divider>
                    <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        
                        <Button variant="contained" style={{ background: 'black'}}>Checkout</Button>
                    </Box>
                </Container>
            </main>
        </ThemeProvider>
    );
}