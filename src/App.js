import { Route, Routes } from 'react-router-dom';
import './assets/styles/app.scss'
import CartPage from './pages/cartPage';
import FavouritePage from './pages/favouritePage';
import Catalog from './pages/catalog';
import CatalogItemPage from './pages/catalogitempage';
import Main from "./pages/main";
import ProfilePage from './pages/profilePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ConfirmationPage from './pages/confirmationPage';
import ForgetPage from './pages/forgetPage';
import ForgetConfirmPage from './pages/forgetConfirmPage';
import Header from './layout/header';
import Footer from './layout/footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/:id' element={<CatalogItemPage/>}/>
        <Route path='/favourite' element={<FavouritePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/confirmation' element={<ConfirmationPage/>}/>
        <Route path='/forget' element={<ForgetPage/>}/>
        <Route path='/forgetconfirm' element={<ForgetConfirmPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
