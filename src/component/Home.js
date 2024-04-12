import React, { useState, useRef, useEffect } from 'react'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import icon from '../assets/icon.webp'
import about from '../assets/about1.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.avif'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/about.jpg'
import review1 from '../assets/3.jpeg'
import review2 from '../assets/13.jpeg'
import review3 from '../assets/muni.jpg'
import review4 from '../assets/6.jpeg'
import review5 from '../assets/18.jpeg'
import contact from '../assets/contact.jpg'
function Home() {
    const [cardData, setCardData] = useState([
        { "id": 1, "img": img1, "title": "LillyTulips", "rate": "150", "oldrate": "170" },
        { "id": 2, "img": img2, "title": "Species Tulips", "rate": "140", "oldrate": "160" },
        { "id": 3, "img": img3, "title": "Darwin Tulips", "rate": "170", "oldrate": "180" },
        { "id": 4, "img": img4, "title": "Parrot Tulips", "rate": "180", "oldrate": "190" },
        { "id": 5, "img": img5, "title": "Emporor Tulips", "rate": "180", "oldrate": "200" },
        { "id": 6, "img": img6, "title": "Fringed Tulips", "rate": "190", "oldrate": "210" },
        { "id": 7, "img": img7, "title": "Triumph Tulips", "rate": "200", "oldrate": "230" },
        { "id": 8, "img": img8, "title": "Tulipa", "rate": "190", "oldrate": "240" },
        { "id": 9, "img": img9, "title": "Greigii Tulips", "rate": "240", "oldrate": "270" }])
    const [review] = useState([
        { "id": 1, "img": review1, "title": "Josephin" },
        { "id": 2, "img": review2, "title": "Vimal" },
        { "id": 3, "img": review3, "title": "Muni" },
        { "id": 4, "img": review4, "title": "Ravi" },
        { "id": 5, "img": review5, "title": "Mercy" },
    ])
    // const handleTabChange = (e) => {
    //     var tabs = ["hometab", "abouttab", "producttab", "reviewtab", "contacttab"]
    //     // eslint-disable-next-line
    //     tabs?.map((it) => {
    //         if (e?.target?.id === it) {
    //             document.getElementById(e?.target?.id).className = "nav-link active"
    //         }
    //         else {
    //             document.getElementById(it).className = "nav-link"
    //         }
    //     })
    // }
    const handleWishlist = (data) => {
        let value;
        var x = cardData?.map(item => {
            if (item?.id === data?.id) {
                if (item?.wishlist === true) {
                    value = "removed"
                    return { ...item, "wishlist": false };
                } else {
                    value = "added"
                    return { ...item, "wishlist": true };
                }
            }
            return item;
        })
        setCardData(x)
        toast(value === "added" ? 'Added to wishlist' : 'Removed from wishlist', {
            position: "top-right",
            autoClose: 1500,
            progressStyle: {
                background: '#7a0914'
            },
            style: {
                height: "30px",
                width: "300px",
            },
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            closeButton:false
        });
    }
    const handleCartList = (data) => {
        let value;
        var x = cardData?.map(item => {
            if (item?.id === data?.id) {
                if (item?.cart === true) {
                    value = "removed"
                    return { ...item, "cart": false };
                } else {
                    value = "added"
                    return { ...item, "cart": true };
                }
            }
            return item;
        })
        setCardData(x)
        toast(value === "added" ? 'Added to cartlist' : 'Removed from cartlist', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            progressStyle: {
                background: '#7a0914'
            },
            style: {
                height: "10px",
                width: "300px",
            },
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            closeButton:false
        });
    }

    const sectionRefs = useRef([]);

    // Set up the refs for each section
    const handleRef = (ref, index) => {
        sectionRefs.current[index] = ref;
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust for viewport height
            for (let i = 0; i < sectionRefs.current.length; i++) {
                const sectionRef = sectionRefs.current[i];
                if (sectionRef && sectionRef.offsetTop <= scrollPosition && sectionRef.offsetTop + sectionRef.clientHeight > scrollPosition) {
                    var tabs = ["hometab", "abouttab", "producttab", "reviewtab", "contacttab"]
                    // eslint-disable-next-line
                    tabs?.map((it) => {
                        let x = `${sectionRef.id}tab`
                        if (x === it) {
                            document.getElementById(x).className = "nav-link active"
                        }
                        else {
                            document.getElementById(it).className = "nav-link"
                        }
                    })
                    break; // Exit loop once we've found the visible section
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='App'>
            {/* navbar */}
            <div className='header fixed-top'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#home">
                            <img src={icon} alt="Logo" width="40" height="40" class="d-inline-block align-text-top" />
                            Flower</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* onClick={(e) => handleTabChange(e)} */}
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#home" id="hometab">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about" id="abouttab">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#product" id="producttab">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#review" id="reviewtab">Review</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact" id="contacttab">Contact</a>
                                </li>
                            </ul>
                            <div className='imgData'>
                                <span className='p-2 icons' role='button'><a href="#product" className='icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg></a>
                                </span>
                                <span className='p-2 icons' role='button'><a href="#product" className='icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg></a>
                                </span>
                                <span className='p-2 icons' role='button'><a href="#contact" className='icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="progress-container">
                    <div class="progress-bar" id="myBar"></div>
                </div>
            </div>
            {/* Home */}
            <section id="home" ref={(ref) => handleRef(ref, 0)}>
                <div className='row col-12'>
                    <div className='col-lg-6 text-center'>
                        <p className='display-3 fw-bold '>Fresh Flowers</p>
                        <h2>Natural & Beautiful Flowers</h2>
                        <p>“Flowers are like friends; they bring color to your world.” "The flowers that bloom tomorrow are the seeds you planted today." "In joy or sadness, flowers are our constant friends." "Nothing in nature blooms all year — be patient with yourself."</p>
                    </div>
                </div>
            </section>
            {/* About */}
            <section id="about" ref={(ref) => handleRef(ref, 1)}>
                <div className='container-fluid'>
                    <div className='container'>
                        <div className='bg text-center'>About Us</div>
                        <div className='row p-5'>
                            <div className='col-lg-6 img-container'>
                                <img src={about} alt="about" className='rounded' />
                                <div className='d-flex container-fluid justify-content-center centered h3'>Best Flower Sellers</div>
                            </div>
                            <div className='col-lg-6 text-center'>
                                <h1>Why Choose US</h1>
                                <p>Be like a tree, bloom like a flower, sing like a bird, and dance like a peacock. Life is like a bud, it always dreams to bloom like a flower. You are blooming like the rare flower you are. Let the beauty of love bloom like a flower, and then welcome everyone you meet with that flower.</p>
                                <p>Be like a tree, bloom like a flower, sing like a bird, and dance like a peacock. Life is like a bud, it always dreams to bloom like a flower. You are blooming like the rare flower you are. Let the beauty of love bloom like a flower, and then welcome everyone you meet with that flower.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card p-3'>
                        <div className='row  d-flex justify-content-between'>
                            <span className='col-lg-3 row align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-truck col-lg-6" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg>
                                <span className='col-lg-6 text-center'>
                                    <strong>Free Shipping</strong>
                                    <p>On All Orders</p>
                                </span>
                            </span>
                            <span className='col-lg-3 row align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-rocket-takeoff col-lg-6" viewBox="0 0 16 16">
                                    <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362s.96-1.932.362-2.531c-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532" />
                                    <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9 9 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a10 10 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093q.1.026.16.045c.184.06.279.13.351.295l.029.073a3.5 3.5 0 0 1 .157.721c.055.485.051 1.178-.159 2.065m-4.828 7.475.04-.04-.107 1.081a1.54 1.54 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a9 9 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006M5.205 5c-.625.626-.94 1.351-1.004 2.09a9 9 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a3 3 0 0 0-.045-.283 3 3 0 0 0-.3-.041Z" />
                                    <path d="M7.009 12.139a7.6 7.6 0 0 1-1.804-1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                                </svg>
                                <span className='col-lg-6 text-center'>
                                    <strong>10 Days Returns</strong>
                                    <p>Moneyback Guarantee</p>
                                </span>
                            </span>
                            <span className='col-lg-3 row align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-gift col-lg-6" viewBox="0 0 16 16">
                                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                                </svg>
                                <span className='col-lg-6 text-center'>
                                    <strong>Offer & Gifts</strong>
                                    <p>On All Orders</p>
                                </span>
                            </span>
                            <span className='col-lg-3 row align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-credit-card-2-front col-lg-6" viewBox="0 0 16 16">
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                    <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <span className='col-lg-6 text-center'>
                                    <strong>Secure Payment</strong>
                                    <p>Protected By Paypal</p>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product */}
            <section id="product" ref={(ref) => handleRef(ref, 2)}>
                <div className='container'>
                    <div className='bg text-center'>Latest Products</div>
                    <div className='row'>
                        {
                            cardData?.map((it, ind) => (
                                <div className='col-lg-4'>
                                    <div class="card m-3">
                                        <img src={it?.img} class="card-img-top rounded-top cartImg" alt={`card${ind}`} />
                                        <div className='d-flex justify-content-around align-items-center p-2 cartItem container-fluid'>
                                            <span onClick={() => handleWishlist(it)} role='button'>
                                                {
                                                    it?.wishlist === true ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                }

                                            </span>
                                            <span onClick={() => handleCartList(it)} role='button'>{it?.cart === true ? "Added to cart" : "Add to cart"}</span>
                                            <span role='button' className='linkColor'>
                                                <a href="https://wa.me/918778451528" target='_blank' rel="noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply-fill" viewBox="0 0 16 16">
                                                    <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                                                </svg>
                                                </a>
                                            </span>
                                        </div>
                                        <div class="card-body text-center">
                                            <h3 class="card-title fw-bold">{it?.title}</h3>
                                            <h5 class="card-text fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                            </svg> {it?.rate} <sub className='text-dark'><del><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                            </svg> {it?.oldrate}</del></sub></h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* Review */}
            <section id="review" ref={(ref) => handleRef(ref, 3)}>
                <div className='container'>
                    <div className='bg text-center'>Customer's Review</div>
                    <div className='row'>
                        {
                            review?.map(it => (
                                <div className='col-lg-4 p-2'>
                                    <div>
                                        {(() => {
                                            const arr = [];
                                            let count = 5
                                            for (let i = 0; i < count; i++) {
                                                arr.push(
                                                    <span className=''>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill m-1 txtback" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </span>
                                                );
                                            }
                                            return arr;
                                        })()}
                                    </div>
                                    <p>A quote image is a quote that has been transformed into a picture for visual appeal. Quotes in image form not only look more appealing, they also have more impact. Besides that, they also become more shareable!</p>
                                    <div className='row'>
                                        <div className='col-lg-8 row d-flex align-items-start'>
                                            <div className='col-lg-4'>
                                                <img src={it?.img} alt={it?.title} className='rounded-circle' height={"50px"} width={"50px"} />
                                            </div>
                                            <div className='col-lg-8'>
                                                <label className='fw-bold'>{it?.title}</label>
                                                <p><small>Happy Customer</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section id="contact" ref={(ref) => handleRef(ref, 4)}>
                <div className='container'>
                    <div className='bg text-center'>Contact Us</div>
                    <div className='row pt-5'>
                        <div className='col-lg-6 card p-4'>
                            <input type='text' className='form-control mt-2 place' placeholder='Eg: Mercy Angelin'/>
                            <input type='email' className='form-control mt-2 place' placeholder='Eg: mercy@gmail.com'/>
                            <input type='text' className='form-control mt-2 place' placeholder='Eg: +919876543210'/>
                            <textarea type='text' rows={8} className='form-control mt-2 place' placeholder='Hello everyone...'/>
                           <button className='btn btn-default mt-2 txtbackcolor place'>Send Message</button>
                        </div>
                        <div className='col-lg-6'>
                        <img src={contact} alt="contact" className='contactImg'/>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Home