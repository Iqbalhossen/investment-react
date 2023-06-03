import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import wave from './wave.png'
import iamge1 from './image-2.webp'
import iamge4 from './image-33.webp'
import iamge5 from './about5.webp'
import bannar from './about-bannar.webp'
import Picture2 from './Picture2.png'
import Picture3 from './Picture3.png'
import Picture4 from './Picture4.png'
const About = () => {
    const styles = {
        header: {
            backgroundImage: `url(${bannar})`,

        }
    }
    return (
        <>

            <section className=' w-100'>

                <div className=" abouts text-center " style={styles.header}>
                    <div className='about-overlay' >
                        <div className='container  py-5 px-1'>
                            <div className='slider-content about-top px-2'>
                                <h1>Build the future now with Yume One

                                </h1>
                                <p >Become a Yume One! Let's work together to push the boundaries of what's possible in the world of finance with our dynamic, global community of crypto enthusiasts. Shape the future of crypto together and be at the forefront of it all.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='wave'>
                        <img src={wave} alt="" />

                    </div>
                </div>

                <div className='container'>
                    <div className='about-products text-center'>
                        <div className='about-products-title pb-5'>
                            <h1>Key Of Growth </h1>
                            <p>
                                Discover Your Earning Potential, Fuel Your Aspirations, and Join our Community of Coin Enthusiasts Today! We are looking forward to seeing you soon!
                            </p>
                        </div>
                        <div className='about-products'>
                            <div className="row row-cols-1 row-cols-md-3   row-cols-lg-3 g-4">
                                <div className="col">
                                    <div className='work-slider-section shadow-lg p-2 mb-5 bg-body rounded'>
                                        <div className='about-product-image'>
                                            <img src={Picture2} className="card-img-top" alt="..." />
                                            <h5 className="card-title">Coin Enthusiasts</h5>
                                            <p className="card-text">
                                                People all over the world have benefited from our unique solutions analysing the crypto market!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='work-slider-section shadow-lg p-2 mb-5 bg-body rounded'>
                                        <div className='about-product-image'>
                                            <img src={Picture3} className="card-img-top" alt="..." />
                                            <h5 className="card-title">Aspirations</h5>
                                            <p className="card-text">STo empower entrepreneurs, we aim to engage millions of members in more than 100 countries.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='work-slider-section shadow-lg p-2 mb-5 bg-body rounded'>
                                        <div className='about-product-image'>
                                            <img src={Picture4} className="card-img-top" alt="..." />
                                            <h5 className="card-title">Earning Potential</h5>
                                            <p className="card-text">Improve your financial future with our service, skyrocketing your income in record time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='about-video overflow-hidden'>
                        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-2 g-4">
                            <div className="col">
                            <iframe width="100%" height="360" src="https://www.youtube.com/embed/8cCVAs1Nd7Q" title="Japan made bitcoin a legal currency - now it&#39;s more popular than ever | CNBC Reports" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col">
                            <iframe width="100%" height="360" src="https://www.youtube.com/embed/6DQxRQb9dCE" title="Tokyo in 8K ULTRA HD - 1st Largest city in the world (60 FPS)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>

                    </div>.


                    <div className='py-5 about-blog w-100'>
                        <div className="row row-cols-1 row-cols-md-2 m-0 w-100  row-cols-lg-2 g-5">
                        <div className="col about-blog-mobile-show">
                                <img src={iamge1} className="card-img-top" alt="..." />

                            </div>
                            <div className="col about-content">
                                <h1>Shine your life stay with Yume One....</h1>
                                <p> It is a trusted company with which you can reach the pinnacle of your success. So join us without delay and invite your close friends to join too....</p>
                                <div className='slider-btn pt-lg-5'>
                                </div>
                            </div>
                            <div className="col about-blog-mobile">
                                <img src={iamge1} className="card-img-top" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <div className="row row-cols-1 w-100 row-cols-md-2 m-0  row-cols-lg-2 g-5">
                            <div className="col">
                                <img src={iamge5} className="card-img-top" alt="..." />

                            </div>
                            <div className="col about-content">
                                <h1>Grow your balance by Contribute money in Yume One. Create your team to earn more...
</h1>
                                <p> You can Contribute here and increase your money.  You can raise money very easily and in a short time through riskless Infusion.  At the same time, you can withdraw money through your wallet in a very short time.....</p>
                                <div className='slider-btn pt-lg-5 pt-1 text-end'>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <section className='container  py-lg-5 py-2'>

                <div className="row row-cols-1 row-cols-md-2 w-100  row-cols-lg-2 g-4">
                    <div className="col">
                        <div className='about-title px-3' >
                            <h1>Founded in 2023, Yume One supports people in achieving their dreams. CEO Ibrahim Kimora and Founder Yamamoto Hirose Are Aiming To "Gain Your Future Today!</h1>
                        </div>

                    </div>
                    <div className="col align-self-end">
                        <div className='about-sub-title '>
                            <p>With Yume One, whose name means "dream" in Japanese, the company's goal is to provide people with the tools, resources, and support they need to achieve their dreams.</p>
                        </div>

                    </div>
                </div>

            </section>
            <div className='about-image py-3'>
                <img src={iamge4} alt="" />

            </div>

            <section className='container about-maddile py-4'>
                <hr />

                <div className="row row-cols-1 row-cols-md-2 w-100  row-cols-lg-2 g-4">
                    <div className="col">
                        <div className='about-title px-3' >
                            <h1>As part of our mission to empower entrepreneurs, we aim to attract millions of members in over 100 countries who are passionate about improving their lives. This is just the beginning of our journey to empower entrepreneurs around the world. Let's get started!</h1>
                        </div>

                    </div>
                    <div className="col">
                        <div className='about-sub-title '>
                            <h5>Yume One claims to offer its members the chance to earn money through hirose revenue sharing programs, games and deposit packages. Basically, it's a way for people to generate passive income. Short Deposit offers high profits.</h5>
                            <p>With Yume One  revenue-generating programs, games, and deposit packages, individuals can earn substantial amounts of money. People can create a reliable stream of passive income using this platform, without extensive finance or marketing knowledge or experience. We believe in providing our members with the tools and resources they need to succeed financially. Yamamoto has something for both experienced and new marketers.
                                By participating in the company's revenue sharing program, you can grow your wealth through Deposit and gain a profit. With their games, you can make some extra cash on the side while Deposit your funds .
                                 It offers high-opportunity, low-risk solutions for those looking to control their financial future. Deposit just a few dollars and start earning passive income. With a commitment to providing members with the highest quality resources and support, this is a worthwhile opportunity. Ultimately, Yamamoto is the right platform to achieve financial freedom and increase your income. Its revenue-generating programs, games, and deposit packages make it a one-stop shop for all your financial needs. Why wait? Start your financial journey with Yamamoto!
                            </p>
                        </div>

                    </div>
                </div>


                <div className='company-author mt-5'>
                    <div className="row row-cols-1 w-100 m-0 row-cols-md-2  row-cols-lg-2 g-4">
                        <div className="col h-100">
                            <div className='shadow-lg p-3 px-lg-4 px-2 mb-lg-5 mb-2 text-start  rounded company-author-bg-color'>
                                <div className='row'>
                                    <div className='col-12 h-100'>
                                        <h3>Yamamoto Hirose (Founder)</h3>
                                        <p>Yamamoto hirose was born in tokyo japan. After he left
                                            school he studied at the local technology college to
                                            become a Secretary. He started his admin career at a local
                                            firm of solicitors. He has subsequently worked at hirose
                                            legal firms and also the mid-tier and local level firms of
                                            accountants. He decided at 40 to enter into the world of
                                            crypto being an entrepreneur leading to this opportunity of
                                            crypto currency and decided to create blockchain
                                            technologys platform! </p>
                                    </div>

                                    
                                </div>
                               
                            </div>


                        </div>
                        <div className="col h-100">
                            <div className='shadow-lg p-3 m-0 px-lg-4 px-2 mb-lg-5 mb-2 text-start  company-author-bg-color rounded'>
                                <div className='row'>
                                    <div className='col-12 h-100'>
                                        <h3>Ibrahim kimura (CEO)</h3>
                                        <p>Ibrahim kimura was born in tokyo japan. After passing out
                                            from school. He moved to London to pursue his further
                                            studies. He did his Diploma in International Business
                                            Management from Wandsworth College London UK, After
                                            coming back from UK, He started a few business like crypto
                                            currency and virtual technology with small Infusions in
                                            crypto where he collected some good knowledge about the
                                            crypto industry. Now he is maked a decision to starting a
                                            project with long term vision to create an empire 
                                          
                                            </p>
                                    </div>

                                  
                                </div>
                             
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default About;