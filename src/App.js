import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import HomeMain from './Components/Layouts/HomeMain';
import './color.css';
import Services from './Components/Pages/Services/Services';
import Blogs from './Components/Pages/Blogs/Blogs';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Profile from './Components/Pages/Profile/Profile/Profile';
import DepositRecord from './Components/Pages/Profile/MobileProfile/pages/DepositRecord/DepositRecord';
import AllCommission from './Components/Pages/Profile/MobileProfile/pages/AllCommission/AllCommission';
import TeamDetails from './Components/Pages/Profile/MobileProfile/pages/TeamDetails/TeamDetails';
import Notification from './Components/Pages/Profile/MobileProfile/pages/Notification/Notification';
import Deposit from './Components/Pages/Deposit/Deposit';
import Withdraw from './Components/Pages/Withdraw/Withdraw';
import UsdGenerate from './Components/Pages/UsdGenerate/UsdGenerate';
import FDP from './Components/Pages/FDP/FDP';
import CoinMining from './Components/Pages/CoinMining/CoinMining';
import UserPrivateRoute from './Route/UserPrivateRoute';
import 'react-loading-skeleton/dist/skeleton.css'
import LoginRoute from './Route/LoginRoute';
import Mining from './Components/Pages/UsdGenerate/Mining/Mining';
import UrlSignup from './Components/Auth/UrlSignup/UrlSignup';
import UrlSignupRoute from './Route/UrlSignupRoute';
import AllAccount from './Components/Pages/Profile/MobileProfile/AllAccount';
import DirectSellsBonus from './Components/Pages/UsdGenerate/Bouns/DirectSellsBonus/DirectSellsBonus';
import RoiMintBonus from './Components/Pages/UsdGenerate/Bouns/RoiMintBonus/RoiMintBonus';
import TeamSellsBonus from './Components/Pages/UsdGenerate/Bouns/TeamSellsBonus/TeamSellsBonus';
import GenerationBonus from './Components/Pages/UsdGenerate/Bouns/GenerationBonus/GenerationBonus';
import TransferBalance from './Components/Pages/TransferBalance/TransferBalance';
import Wallets from './Components/Pages/Wallets/Wallets';
import WithdrawRecord from './Components/Pages/Profile/MobileProfile/pages/WithdrawRecord/WithdrawRecord';
import BlogsDetails from './Components/Pages/BlogsDetails/BlogsDetails';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import About from './Components/Pages/About/About';
import FAQ from './Components/Pages/FAQ/FAQ';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
function App() {
  const router = createBrowserRouter([
    <ScrollToTop />,
    {
      path: '/',
      element: <HomeMain></HomeMain>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Services></Services>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/about/us',
          element: <About></About>
        },
        {
          path: '/contact/us',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/blog/details/:id',
          element: <BlogsDetails></BlogsDetails>
        },
        {
          path: '/invite/:InviteUserName/:id',
          element:<UrlSignupRoute><LoginRoute><UrlSignup></UrlSignup></LoginRoute></UrlSignupRoute> 
        },
        {
          path: '/login',
          element: <LoginRoute><Login></Login></LoginRoute>
        },
        {
          path: '/signup',
          element: <LoginRoute><Signup></Signup></LoginRoute>
        },
        {
          path: '/account',
          element:<UserPrivateRoute><Profile></Profile></UserPrivateRoute> 
        },
        {
          path: '/account/view',
          element:<UserPrivateRoute><AllAccount></AllAccount></UserPrivateRoute> 
        },
        {
          path: '/deposit/record',
          element: <UserPrivateRoute><DepositRecord></DepositRecord></UserPrivateRoute>
        },
        {
          path: '/all/commission',
          element: <UserPrivateRoute><AllCommission></AllCommission></UserPrivateRoute>
        },
        {
          path: '/team/details',
          element:<UserPrivateRoute> <TeamDetails></TeamDetails></UserPrivateRoute>
        },
        {
          path: '/withdraw/record',
          element:<UserPrivateRoute> <WithdrawRecord></WithdrawRecord></UserPrivateRoute>
        },
        {
          path: '/notification',
          element:<UserPrivateRoute> <Notification></Notification></UserPrivateRoute>
        },
        {
          path: '/deposit/now',
          element: <UserPrivateRoute><Deposit></Deposit></UserPrivateRoute>
        },
        {
          path: '/withdraw/now',
          element: <UserPrivateRoute><Withdraw></Withdraw></UserPrivateRoute>
        },
        {
          path: '/usd/generate',
          element: <UserPrivateRoute><UsdGenerate></UsdGenerate></UserPrivateRoute>
        },
        {
          path: '/fdp',
          element: <UserPrivateRoute><FDP></FDP></UserPrivateRoute>
        },
        {
          path: '/coin/mining',
          element: <UserPrivateRoute><CoinMining></CoinMining></UserPrivateRoute>
        },
        {
          path: '/usd/generate/mining/:id',
          element: <UserPrivateRoute><Mining></Mining></UserPrivateRoute>
        },
        {
          path: '/usd/generate/direct/sells/bonus/:userName/:id',
          element: <UserPrivateRoute><DirectSellsBonus></DirectSellsBonus></UserPrivateRoute>
        },
        {
          path: '/usd/generate/roi/mint/bonus/:userName/:id',
          element: <UserPrivateRoute><RoiMintBonus></RoiMintBonus></UserPrivateRoute>
        },
        {
          path: '/usd/generate/team/sells/bonus/:userName/:id',
          element: <UserPrivateRoute><TeamSellsBonus></TeamSellsBonus></UserPrivateRoute>
        },
        {
          path: '/usd/generate/generation/bonus/:userName/:id',
          element: <UserPrivateRoute><GenerationBonus></GenerationBonus></UserPrivateRoute>
        },
        {
          path: '/usd/generate/transfer/balance',
          element: <UserPrivateRoute><TransferBalance></TransferBalance></UserPrivateRoute>
        },
        {
          path: '/wallets',
          element: <UserPrivateRoute><Wallets></Wallets></UserPrivateRoute>
        },
        {
          path: '*',
          element: <h1>404</h1>
        },
      ],

    },


  ])
  return (
    <>
   
    
      <RouterProvider router={router} >

      
      </RouterProvider>
      

      {/* <Footer></Footer> */}
    </>

  );
}

export default App;
