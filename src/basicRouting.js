import {Routes, Route} from 'react-router-dom';
import LogIn from './pages/login';
import Registration from './pages/registration';
import Items from './pages/items';
import Details from './pages/details';
import Checkout from './pages/checkout';
import LogOut from './pages/logout';

export default function RouteComponent() {
    return (
        <Routes>
            <Route path='/' element={<Items />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/logout' element={<LogOut />} />
            <Route path='/items' element={<Items />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    )
}