import React from 'react';
import './Choose.css';
import choose1 from './choose-1.png';
import choose2 from './choose-2.png';
import choose3 from './choose-3.jpg';
import choose4 from './choose-4.png';
import choose5 from './choose-5.png';
import choose6 from './choose-6.png';
const Choose = () => {
  return (
    <>
      <section className='container pb-5'>
        <div className=' choose-title  text-center pb-5'>
          <h1>WHY CHOOSE YUME ONE</h1>
          <div class="diamond-line-centered-theme-colored"></div>
          <p>Learn about profitable financial opportunities with Yume One - Make Money Smarter with the Most Reliable and User-Friendly Platform</p>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='choose-single-card'>
              <div className='row shadow-lg p-3 bg-body rounded'>
                <div className='col-4'>
                  <div className='choose-image'>
                    <img src={choose1} alt="" />
                  </div>
                </div>
                <div className='col-8 p-0'>
                  <h2>Trusted </h2>
                  <p>Our commitment to honesty, reliability, and integrity is unwavering. Get to know our quality service.</p>
                </div>
              </div>
            </div>

          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='choose-single-card'>
              <div className='row shadow-lg p-3 bg-body rounded'>
                <div className='col-4'>
                  <div className='choose-image'>
                    <img src={choose2} alt="" />
                  </div>
                </div>
                <div className='col-8 p-0'>
                  <h2>Life Changing</h2>
                  <p>All in one trusted platform! Earn USD, mine coins, and put money into fixed deposits! Get Start !!!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='choose-single-card'>
              <div className='row shadow-lg p-3 bg-body  rounded'>
                <div className='col-4'>
                  <div className='choose-image'>
                    <img src={choose3} alt="" />
                  </div>
                </div>
                <div className='col-8 p-0'>
                  <h2>Referral </h2>
                  <p>Receive unlimited rewards with every successful referral. Enjoy a whopping 10% bonus just for inviting friends!</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='choose-single-card'>
              <div className='row shadow-lg p-3 bg-body rounded'>
                <div className='col-4'>
                  <div className='choose-image'>
                    <img src={choose4} alt="" />
                  </div>
                </div>
                <div className='col-8 p-0'>
                  <h2>Team Sells</h2>
                  <p>Profit from our Multi Level Referral System - Refer Friends and Enjoy Continual Profits, Up to 10%!
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='choose-single-card'>
              <div className='row shadow-lg p-3 bg-body rounded'>
                <div className='col-4'>
                  <div className='choose-image'>
                    <img src={choose5} alt="" />
                  </div>
                </div>
                <div className='col-8 p-0'>
                  <h2>Withdraw</h2>
                  <p>Experience Lightning-Fast Withdrawals and Keep Your Earnings in Your Pocket with Ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='choose-single-card'>
              <div className='row shadow-lg p-3 bg-body  rounded'>
                <div className='col-4'>
                  <div className='choose-image'>
                    <img src={choose6} alt="" />
                  </div>
                </div>
                <div className='col-8 p-0'>
                  <h2>Entertainment</h2>
                  <p>In this section of the site, you will find games that you can play for a chance to win amazing rewards!</p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </section>
    </>
  );
};

export default Choose;