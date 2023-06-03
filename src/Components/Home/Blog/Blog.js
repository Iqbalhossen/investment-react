import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './blog1.webp';
import image2 from './blog2.webp';
import image3 from './blog3.webp';
import image4 from './blog4.webp';

import './Blog.css'
import SingleItem from './SingleItem';
import Slider from 'react-slick';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Blog = () => {

    const data = [

        {
            "_id": "1",

            "title": "Secure Your Future with Daily Rewards",

            "shortDisc": "We all want our money to work for us and secure our financial futures. By investing in a daily rewards program that offers a bonus for making a deposit,  you can do this. You need to do your research and understand the risks and potential rewards before taking the plunge. First, it's important to understand how daily rewards programs work. Typically, these programs offer a bonus for making a deposit, which can then earn interest or be used to purchase products or services. The amount of the bonus, as well as the interest rate, can vary greatly depending on the program and the amount of the deposit.",

            "disc": "Before investing, it's important to thoroughly research the daily rewards program to ensure that it's legitimate and has a good reputation. Be wary of any offers that seem too good to be true, as they may be scams or have hidden fees or risks associated with them. It's also important to understand the potential risks of daily rewards programs. For example, there may be restrictions on when and how you can withdraw your money, or the program may suddenly close or become insolvent, resulting in the loss of your deposit. To make an informed decision, it's recommended to consult with a financial advisor or professional who can help you determine if a daily rewards program is right for your individual financial situation. This can help you understand the potential rewards and risks of the program, as well as any fees or restrictions that may be associated with it. In conclusion, daily rewards programs can be an attractive opportunity to boost your earnings, but it's important to do your research and understand the potential rewards and risks before making a decision. By working with a financial advisor and thoroughly researching the program, you can make an informed decision and ensure that your hard-earned money is working for you.",

            "image": image2
        },
        {
            "_id": "2",

            "title": "Coin Mining",

            "shortDisc": "Financial freedom is an important goal for many people and it's never too early or too late to start taking the steps towards it. One of the best ways to start your journey is by investing in a reputable and well-established package that can offer you a steady stream of income over time. And that's exactly what we have for you today!",

            "disc": "When you purchase this package, you'll be opening the doors to a world of opportunities and financial security. You'll have access to a variety of tools and resources that will help you manage your investments and maximise your returns. And the best part is, you'll see the growth of your earnings right before your eyes. One of the most exciting aspects of this package is the bonus that you'll receive when you log into your account and claim your daily rewards. This bonus is a great way to jumpstart your earnings and see the results of your investment almost immediately. And with daily rewards, you can expect to see steady growth in your earnings over time. Another benefit of this package is the peace of mind that comes with investing in a reputable and secure platform. You won't have to worry about losing your money or falling prey to scams and fraudulent schemes. Our platform has been carefully designed and tested to ensure that your investments are safe and secure. So, what are you waiting for? Take the first step towards financial freedom and start investing today! With this package, you can be well on your way to achieving your financial goals and securing a better future for yourself and your loved ones. Don't miss out on this incredible opportunity – claim your bonus and start growing your earnings today!",

            "image": image3
        },
        {
            "_id": "3",

            "title": "Fixed Deposit Package",

            "shortDisc": "Are you looking for a way to take your success to new heights? Do you want to unlock a world of opportunities that can help you achieve your financial and personal goals? If so, then you need to take advantage of this once-in-a-lifetime opportunity!",

            "disc": "By purchasing a specific service for a fixed number of days, you'll be opening the door to a world of possibilities. This service has been carefully designed to help you succeed and reach your full potential. With its comprehensive features and flexible options, you'll have everything you need to achieve your goals and more. One of the best things about this service is that you'll be rewarded for your efforts. For completing all the conditions and making the most of the opportunities available to you, you'll be eligible for a sum that matches your package. This means that the more you put into the service, the more you'll get out of it. And with this reward, you can take your success to new heights! So, what are you waiting for? Don't miss out on this incredible opportunity. By taking advantage of this service, you'll be able to propel your success to new heights and achieve your financial and personal goals. With its flexible options and comprehensive features, you'll have everything you need to succeed. So, don't hesitate – take the first step towards a brighter future today!",

            "image": image1
        },
        {
            "_id": "4",

            "title": "The Exciting Entertainment Universe of Games",

            "shortDisc": "Entertainment is an essential part of human life. It is a way to escape the stresses of daily life, relax, and have some fun. While there are many forms of entertainment, games have always been a popular choice for people of all ages. Games offer a unique way to engage our minds and have some fun, and there are countless options to choose from in the entertainment universe.",

            "disc": "In the modern era, the entertainment universe has evolved significantly. With the rise of technology and the internet, we now have access to an endless array of games and other forms of entertainment at our fingertips. Whether you prefer playing video games on your computer or console, mobile games on your phone, or board games with friends and family, there is something for everyone. One of the great things about games is that they can be played alone or with others. This means you can enjoy them at any time, whether you are feeling social or prefer some solitary time. Playing games is also an excellent way to bond with friends and family, as you can share the experience of playing together and create memories that last a lifetime. The entertainment universe is full of exciting and innovative games that are designed to challenge, entertain, and engage players. Some of the most popular games today are multiplayer games that allow players to compete against each other or work together to achieve a common goal. These games are often highly immersive, with detailed graphics and complex storylines that draw players in and keep them engaged for hours. Of course, not all games are created equal. Some are simple and easy to play, while others are more complex and challenging. Some games are designed for younger players, while others are geared towards adults. As a result, it is important to choose games that are appropriate for your age and skill level, as well as your personal preferences and interests. In addition to traditional video games and board games, there are many other types of games that you can enjoy in the entertainment universe. For example, escape rooms have become increasingly popular in recent years, allowing players to work together to solve puzzles and riddles and escape from a locked room. Virtual reality (VR) games are also becoming more prevalent, offering players an immersive experience that transports them to new worlds and environments. Overall, the entertainment universe is a vast and exciting place, full of games and other forms of entertainment that are sure to delight and engage people of all ages. Whether you prefer playing solo or with friends, there is always something new and unique to discover. So, the next time you're feeling bored or stressed, why not take a break and explore the world of games? You never know what adventures and experiences await you! Regenerate response",

            "image": image4
        }



    ]

    return (
        <>
            <section className='blogs'>
                <div className='container'>
                    <div className='blog-header text-center'>
                        <h1>LATEST <h2>NEWS</h2></h1>
                        <div className="diamond-line-centered-theme-colored"></div>
                        <p>Get ready to unleash the power of the future with our upcoming features! Don't miss out on the excitement and stay tuned for more updates.....</p>
                    </div>


                </div>

            </section>

            <section className='container'>


                <Slider {...settings}>
                    {data.map((blog) => (
             
                        <div className="p-3 w-100 h-100 ">
                            <div className="card h-100 shadow-lg mx-2 pb-3 overflow-hidden mb-5 bg-body rounded border-0">
                                <Link><img src={blog.image} className="card-img-top services-zoom" alt="..." /></Link>
                                <div className="card-body pb-4">
                                    <Link to=""><h5 className="card-title">{blog.title}</h5></Link>
                                    <p className="card-text">{(blog.shortDisc).substring(0, 80) + "..."}</p>
                                    <div className='blog-view-details-btn'>
                                        <Link to={`/blog/details/${blog._id}`} >View Details</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}

                </Slider>
            </section>
        </>
    );
};

export default Blog;