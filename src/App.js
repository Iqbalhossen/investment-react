import React from 'react';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import HomeMain from './Components/Layouts/HomeMain';
import './color.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import VerifiedEmail from './Components/Auth/VerifiedEmail/VerifiedEmail';
import VerifyNow from './Components/Auth/VerifyNow/VerifyNow';
import VerifiedEmailRoute from './Route/VerifiedEmailRoute';
import Forgot from './Components/Forgot/Forgot';
import ResetPassword from './Components/Auth/ResetPassword/ResetPassword';
import MyInfo from './Components/Pages/MyInfo/MyInfo';
import UserProfileChange from './Components/Pages/UserProfileChange/UserProfileChange';
import Entertainment from './Components/Pages/Entertainment/Entertainment';
import CoinDirectSellsBonus from './Components/Pages/CoinMining/Bouns/DirectSellsBonus/CoinDirectSellsBonus';
import CoinRoiMintBonus from './Components/Pages/CoinMining/Bouns/RoiMintBonus/CoinRoiMintBonus';
import CoinGenerationBonus from './Components/Pages/CoinMining/Bouns/GenerationBonus/CoinGenerationBonus';
import CoinTeamSellsBonus from './Components/Pages/CoinMining/Bouns/TeamSellsBonus/CoinTeamSellsBonus';
import CoinMiningItem from './Components/Pages/CoinMining/Mining/CoinMiningItem';
import CoinMiningTransferBalance from './Components/Pages/CoinMiningTransferBalance/CoinMiningTransferBalance';
import Monthly from './Components/Pages/FDP/Pages/Monthly/Monthly';
import Monthlypackage from './Components/Pages/FDP/Pages/Monthly/MonthlyPackage/Monthlypackage';
import NotificationView from './Components/Pages/Profile/MobileProfile/pages/Notification/NotificationView';
import ChangeImage from './Components/Pages/Profile/MobileProfile/ChangeProfile/ChangeImage';
import ChangePassword from './Components/Pages/Profile/MobileProfile/ChangeProfile/ChangePassword';
import FreeGames from './Components/Pages/Entertainment/Page/FreeGames';
import EtcGames from './Components/Pages/Entertainment/Page/EtcGames';
import Ludo from './Components/Pages/Entertainment/Page/Ludo';
import HungryTiger from './Components/Pages/Entertainment/Page/HungryTiger';
import HorseRaceing from './Components/Pages/Entertainment/Page/HorseRaceing';
import PaidGames from './Components/Pages/Entertainment/Page/PaidGames';
import PremiumGame from './Components/Pages/Entertainment/Page/PremiumGame';
function App() {

  return (
    <>

      {/*     
      <RouterProvider router={router} >

      
      </RouterProvider> */}

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeMain />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about/us" element={<About />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/contact/us" element={<ContactUs />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/verify/account/:all/:id" element={<VerifiedEmail />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset/password/:idid/:id" element={<ResetPassword />} />
            <Route path="/verify/now" element={<VerifiedEmailRoute> <VerifyNow /> </VerifiedEmailRoute>} />
            <Route path="/blog/details/:id" element={<BlogsDetails />} />
            <Route path="/invite/:InviteUserName/:id" element={<UrlSignupRoute><LoginRoute><UrlSignup /></LoginRoute></UrlSignupRoute>} />
            <Route path="/account/view" element={<UserPrivateRoute>< AllAccount /></UserPrivateRoute>} />
            <Route path="/deposit/record" element={<UserPrivateRoute><DepositRecord /></UserPrivateRoute>} />
            <Route path="/all/commission" element={<UserPrivateRoute><AllCommission /></UserPrivateRoute>} />
            <Route path="/team/details" element={<UserPrivateRoute><TeamDetails /></UserPrivateRoute>} />
            <Route path="/withdraw/record" element={<UserPrivateRoute><WithdrawRecord /></UserPrivateRoute>} />
            <Route path="/notification" element={<UserPrivateRoute><Notification /></UserPrivateRoute>} />
            <Route path="/deposit/now" element={<UserPrivateRoute><Deposit /></UserPrivateRoute>} />
            <Route path="/withdraw/now" element={<UserPrivateRoute><Withdraw /></UserPrivateRoute>} />
            <Route path="/usd/generate" element={<UserPrivateRoute><UsdGenerate /></UserPrivateRoute>} />
            <Route path="/fdp" element={<UserPrivateRoute><FDP /></UserPrivateRoute>} />
            <Route path="/fdp/monthly" element={<UserPrivateRoute><Monthly /></UserPrivateRoute>} />
            <Route path="/fdp/monthly/:date/:id" element={<UserPrivateRoute><Monthlypackage /></UserPrivateRoute>} />



            <Route path="/coin/mining" element={<UserPrivateRoute><CoinMining /></UserPrivateRoute>} />
            <Route path="/usd/generate/mining/:id" element={<UserPrivateRoute><Mining /></UserPrivateRoute>} />
            <Route path="/usd/generate/direct/sells/bonus/:userName/:id" element={<UserPrivateRoute><DirectSellsBonus /></UserPrivateRoute>} />
            <Route path="/usd/generate/roi/mint/bonus/:userName/:id" element={<UserPrivateRoute><RoiMintBonus /></UserPrivateRoute>} />
            <Route path="/usd/generate/team/sells/bonus/:userName/:id" element={<UserPrivateRoute><TeamSellsBonus /></UserPrivateRoute>} />
            <Route path="/usd/generate/generation/bonus/:userName/:id" element={<UserPrivateRoute><GenerationBonus /></UserPrivateRoute>} />
            <Route path="/usd/generate/transfer/balance" element={<UserPrivateRoute><TransferBalance /></UserPrivateRoute>} />


            <Route path="/coin/minig/direct/sells/bonus/:userName/:id" element={<UserPrivateRoute><CoinDirectSellsBonus /></UserPrivateRoute>} />
            <Route path="/coin/minig/roi/mint/bonus/:userName/:id" element={<UserPrivateRoute><CoinRoiMintBonus /></UserPrivateRoute>} />
            <Route path="/coin/mining/generation/bonus/:userName/:id" element={<UserPrivateRoute><CoinGenerationBonus /></UserPrivateRoute>} />
            <Route path="/coin/mining/team/sells/bonus/:userName/:id" element={<UserPrivateRoute><CoinTeamSellsBonus /></UserPrivateRoute>} />
            <Route path="/coin/mining/view/:id" element={<UserPrivateRoute><CoinMiningItem /></UserPrivateRoute>} />
            <Route path="/coin/mining/transfer/balance" element={<UserPrivateRoute><CoinMiningTransferBalance /></UserPrivateRoute>} />



            <Route path="/my/info" element={<UserPrivateRoute><MyInfo /></UserPrivateRoute>} />
            <Route path="/profile/change" element={<UserPrivateRoute><UserProfileChange /></UserPrivateRoute>} />
            <Route path="/password/change" element={<UserPrivateRoute><ChangePassword /></UserPrivateRoute>} />
            <Route path="/profile/photo" element={<UserPrivateRoute><ChangeImage /></UserPrivateRoute>} />
            <Route path="*" element={<h1>404 page</h1>} />

            <Route path="/login" element={<LoginRoute><Login /></LoginRoute>} />
            <Route path="/signup" element={<LoginRoute><Signup /></LoginRoute>} />
            <Route path="/account" element={<UserPrivateRoute><Profile /></UserPrivateRoute>} />
            <Route path="/notification/details/:id" element={<UserPrivateRoute><NotificationView /></UserPrivateRoute>} />


            {/* Game  */}

            <Route path="/free/games" element={<FreeGames />} />
            <Route path="/etc/games" element={<EtcGames />} />
            <Route path="/ludo/games" element={<Ludo />} />
            <Route path="/hungry/tiger/games" element={<HungryTiger />} />
            <Route path="/horse/raceing/games" element={<HorseRaceing />} />
            <Route path="/paid/games" element={<PaidGames />} />
            <Route path="/premium/games" element={<PremiumGame />} />


          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
