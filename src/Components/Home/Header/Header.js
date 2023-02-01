import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import './Header.css';
import { Button, Menu, MenuItem } from '@mui/material';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const Header = () => {

    const [openMenu, setopen] = useState(null);
    const handlemenu = () => {
        setopen(true)
    }
    const closeMenu = () => {
        setopen(false)
    }
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";

    const SignOut = () =>{
    
        localStorage.removeItem("ID");
          const data = null;
          LoginWithEmail(data);

          console.log(authUser)
      
        Navigate(from, { replace: true });
       }



    return (
        <>
            <nav className='py-3 bg-body-tertiary menuBar sticky-top'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2 col-md-2 col-sm-6 col-6'>
                            <Link className="logo" to="/">
                                <img src="https://static.crowd1.com/cdn-cgi/image/width=180,format=auto,quality=100/static/assets/images/crowd-public/home/logo-light.svg" alt="" />
                                {/* <h4>Yumeone</h4> */}
                            </Link>
                        </div>

                        <div className='col-lg-7   menu'>

                            <ul className='nav-items d-flex align-items-center m-0 justify-content-between '>
                                <li className='nav-item'>
                                    <Link to="" data-text='&nbsp;Home' >&nbsp;Home &nbsp;</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/products" data-text='&nbsp;Products'>&nbsp;Products &nbsp;</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/wallets" data-text='&nbsp;Wallet'>&nbsp;Wallet &nbsp;</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/blogs" data-text='&nbsp;Blog'>&nbsp;Blog &nbsp;</Link >
                                </li>
                                <li className='nav-item'
                                ><Link to='/about/us' data-text='&nbsp;About' >   &nbsp;About &nbsp;</Link>
                                </li>

                            </ul>
                        </div>

                        <div className='col-3 d-flex text-end align-items-center justify-content-around d-md-none d-none d-lg-block'>
                            {authUser?._id && authUser?.userName ? 
                            <><Link to="/account" className='join'>Account</Link>
                            <span>or</span>
                            <Link  data-text='&nbsp;Login' onClick={SignOut} className='login'>Logout</Link>
                            </> :
                            <><Link to="/signup" className='join'>Join Now</Link>
                            <span>or</span>
                            <Link to="/login" data-text='&nbsp;Login'  className='login'>Login</Link>
                            </>}
                            
                        </div>

                    </div>


                </div>



            </nav>

            <div className='mobile-menu sticky-top bg-light'>
                <div className='px-2  py-lg-2 mobile-menu-fixed d-flex justify-content-between align-items-center '>
                    <div className='logo'>
                        <Link className="logo" to="/">
                            {/* <img src="https://static.crowd1.com/cdn-cgi/image/width=180,format=auto,quality=100/static/assets/images/crowd-public/home/logo-light.svg" alt="" /> */}
                            <h4>Yumeone</h4>
                        </Link>
                    </div>

                    <div className='menu-item px-lg-5'>
                        <Button onClick={handlemenu}><i class="fa-solid fa-bars"></i></Button>

                    </div>
                </div>

            </div>




            <Menu open={openMenu}>
                <div className='menu-close-item '>
                    <MenuItem onClick={closeMenu} className='close d-flex'><h4 as={Link} to="/">Yumeone</h4></MenuItem>
                    <MenuItem onClick={closeMenu} className='close'><i class="fa-solid fa-xmark"></i></MenuItem>
                </div>
                <div className='menu-hover'>
                     <MenuItem onClick={closeMenu} as={Link} to="/" className="menu-items">Home</MenuItem>
                    <MenuItem onClick={closeMenu} as={Link} to="/products" className="menu-items">Products</MenuItem>
                    <MenuItem onClick={closeMenu} as={Link} to="/wallets" className="menu-items">Wallet</MenuItem>
                    <MenuItem onClick={closeMenu} as={Link} to="/blogs" className="menu-items">Blog</MenuItem>
                    <MenuItem to='/about/us' onClick={closeMenu} as={Link} className="menu-items">About</MenuItem>

                    <div className='menu-sign-login'>


                    {authUser?._id && authUser?.userName ? 
                            <>
                            <MenuItem onClick={closeMenu} as={Link} to="/account" className="menu-items">Account</MenuItem>
                        <div className='menu-or'>
                        <MenuItem className="menu-items">Or</MenuItem>
                        </div>
                        
                    
                        <MenuItem onClick={SignOut} className="menu-items">Logout</MenuItem>
                            </> :
                            <>
                             <MenuItem onClick={closeMenu} as={Link} to="/login" className="menu-items">Login</MenuItem>
                        <div className='menu-or'>
                        <MenuItem className="menu-items">Or</MenuItem>
                        </div>
                        
                    
                        <MenuItem onClick={closeMenu} as={Link} to="/signup" className="menu-items">Sign Up</MenuItem>
                            </>}
                            
                        
                       
                    </div>

                </div>

            </Menu>

        </>

    );
};

export default Header;