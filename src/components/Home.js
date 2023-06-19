import React, { useRef } from 'react';
import { TopNav } from './TopNav';
import './Home.css';
import { NavLink } from 'react-router-dom';
import logoshesha from './images/logoshesha.png';
import { FaTwitter, FaFacebook, FaInstagram, } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';


export const Home = () => {
  const recipeElRef = useRef();
  const pancakeIngredientsEl = useRef();
  const burgerEl = useRef();

  return (<>
    <section>
      <TopNav />

      <div className='home_header_left' style={{ marginRight: "auto" }}>
        <h1>Life is uncertain. Eat  first</h1>
        <p className="homeHeaderLeft_p3"> “ A recipe has no soul.<br />You as the cook must bring soul to the recipe”<br /><b>-Thomas Keller</b> </p>
      </div>

      <img src="images/swirlyArrow.png" style={{ position: "relative", left: "27%", top: "5px" }}></img><br />
      <button className="homeHeaderLeft_Button" onClick={function () { recipeElRef.current.click() }}>Explore Recipes <NavLink ref={recipeElRef} to="/Recomendations" hidden /></button>

      <img src={`images/homeHeaderRight.png`} style={{ position: "relative", height: "100%", width: "45%", left: "50%", top: "-350px", }} alt='' />


     



      <div className='home_header1'>
        <div className='home_header_right'>
          <img src={`images/homeHeader2.png`} style={{ position: "relative", left: "20%", height: "350px", top: "-290px", }} alt='' />
        </div>

        <div className='home_header_left'>
          <h1 style={{ position: "relative", left: "-45%", top: "-290px", }}>Create your own Recipe</h1>
          <h3 className="homeHeaderLeft_H3" style={{ position: "relative", left: "-45%", top: "-250px", fontWeight: "400", }}>
            Using the ingredients you have we can help you make a meal<br /><br />Porem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Nunc vulputate libero et velit<br /> interdum, ac aliquet odio mattis.
          </h3>
        </div>
      </div>

      <Swiper style={{ position: "relative", top: "-280px", width: "120%", left: "2%", }}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="swiperslide" style={{}}>
          <img src="images/food1.jpg" alt="" style={{ height: "80vh", position: "relative", left: "25%", }} />
          <button style={{ backgroundColor: "green", borderRadius: "40px", color: "white", position: "relative", left: "-7%", top: "220px", fontWeight: "bold", width: "14%", }}>View Recipe</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/food2.webp" alt="" style={{ height: "80vh", position: "relative", left: "25%", }} />
          <button style={{ backgroundColor: "green", borderRadius: "40px", color: "white", position: "relative", left: "-7%", top: "220px", fontWeight: "bold", width: "14%", }}>View Recipe</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/food3.jpg" alt="" style={{ height: "80vh", position: "relative", left: "25%", }} />
          <button style={{ backgroundColor: "green", borderRadius: "40px", color: "white", position: "relative", left: "-7%", top: "220px", fontWeight: "bold", width: "14%", }}>View Recipe</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/food4.jpg" alt="" style={{ height: "80vh", position: "relative", left: "25%", }} />
          <button style={{ backgroundColor: "green", borderRadius: "40px", color: "white", position: "relative", left: "-7%", top: "220px", fontWeight: "bold", width: "14%", }}>View Recipe</button>
        </SwiperSlide>
      </Swiper>

      <div style={{ marginTop: "20vh", width: "fit-content" }}>
        <h1 style={{ position: "relative", top: "-280px", left: "7%" }}>Trending Recipes for the Month</h1>

        <div className="home_footer">
          <div className="homeFooter_div1">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
              <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px", height: "40px", width: "40px", borderRadius: "50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top: "27px", translate: "9px -17px", left: "10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/pancake.png`} alt='' style={{ borderRadius: "10px", }} />
              <button onClick={() => pancakeIngredientsEl.current.click()} style={{ width: "40%", height: "35px", position: "relative", top: "-50px", left: "5%", backgroundColor: "green", color: "white", }} >View ingredient<NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' hidden /></button>
            </div>
            <div>
              <h2 className="homeHeaderLeft_h2">Pancake</h2>
              <div><img src={`images/gordonRamsy.png`} alt='' style={{ position: "relative", top: "-55px", }} /><h4 style={{ position: "relative", top: "-50px", left: "20%", fontSize: "20px", fontWeight: "400", }}>Gordon Ramsay</h4></div>
            </div>
          </div>

          <div className="homeFooter_div2">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
              <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px", height: "40px", width: "40px", borderRadius: "50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top: "27px", translate: "9px -17px", left: "10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/friedChickenAndRice.png`} alt='' style={{ borderRadius: "10px", }} />
              <button style={{ width: "40%", height: "35px", position: "relative", top: "-50px", left: "5%", backgroundColor: "green", color: "white", }} >View ingredient</button>

            </div>
            <div>
              <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2>
              <div><img src={`images/pierreGagnaire.png`} alt='' style={{ position: "relative", top: "-55px", }} /><h4 style={{ position: "relative", top: "-50px", left: "20%", fontSize: "20px", fontWeight: "400", }}>Pierre Gagnaire</h4></div>
            </div>
          </div>

          <div className="homeFooter_div3">
            <div style={{ position: "relative", width: "auto", height: "auto" }} >
              <button style={{ cursor: 'pointer', position: "absolute", backgroundColor: "green", left: "25%", translate: "129px -10px", height: "40px", width: "40px", borderRadius: "50%", }}><img style={{ width: "15px", height: "20px", position: "absolute", top: "27px", translate: "9px -17px", left: "10%", }} src={`images/bookmarkFeature.png`} alt='' /></button>
              <img src={`images/burger.png`} alt='' style={{ borderRadius: "10px", }} />
              <button onClick={() => burgerEl.current.click()} style={{ width: "40%", height: "35px", position: "relative", top: "-50px", left: "5%", backgroundColor: "green", color: "white", }} >View ingredient<NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden /></button>
            </div>
            <div>

              <h2 className="homeHeaderLeft_h2">Fried Chicken & Rice</h2>
              <div><img src={`images/pierreGagnaire.png`} alt='' style={{ position: "relative", top: "-55px", }} /><h4 style={{ position: "relative", top: "-50px", left: "20%", fontSize: "20px", fontWeight: "400", }}>Pierre Gagnaire</h4></div>
            </div>
          </div>
        </div>
      </div>

      <em><h1 style={{ position: "relative", top: "-140px", left: "50%", }}>Our Community</h1></em>

      <div className="socialmedia" style={{ position: "relative", left: "57%", top: "-120px", }}>
        <FaTwitter size={25} />
        <FaFacebook size={25} />
        <FaInstagram size={25} />
      </div>

      <Swiper style={{ position: "relative", top: "-50px", width: "100%", left: "10%", }}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="swiperslide" style={{ width: "100%",}}>
          <img src="images/food1.jpg" alt="" style={{ width: "100%", borderRadius: "30px", }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="images/food2.webp" alt="" style={{ width: "100%", borderRadius: "30px", }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="images/food3.jpg" alt="" style={{ width: "100%", borderRadius: "30px", }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="images/food4.jpg" alt="" style={{ width: "100%", borderRadius: "30px", }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="images/food4.jpg" alt="" style={{ width: "100%", borderRadius: "30px", }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="images/food4.jpg" alt="" style={{ width: "100%", borderRadius: "30px", }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="images/food4.jpg" alt="" style={{ width: "100%", borderRadius: "30px", }} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="images/food4.jpg" alt="" style={{ width: "100%", borderRadius: "30px", }} />
        </SwiperSlide>
      </Swiper>


      <div className="footer" style={{ position: "relative", left: "-1%", }}>
        <h3 style={{ position: "relative", top: "10px", left: "4%", color: "lightgrey", fontWeight: "700", }}>Thank You For Visting Our Website<br />{/*<span style={{color:"aqua",fontWeight:"700", fontSize:"30px",}}>Hope You Visit Again & Enjoy Our New Food</span>*/} </h3>
        <div className="sb_footer section_padding">

          <div className="sb_footer-links">

            <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>

            <div className="sb_footer-links_div">

              <a href="/Home">
                <p>Home</p>
              </a>
              <a href="/Lessons">
                <p>Lessons</p>
              </a>
              <a href="/Recipes">
                <p>Recipes</p>
              </a>
              <a href="/Categories">
                <p>Categories</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <a href="/Home">
                <p>About Us</p>
              </a>
              <a href="/Recipes">
                <p>Contact Us</p>
              </a>
            </div>

            <div className="sb_footer-links_div">
              <h4 style={{ position: "relative", left: "-40%", }}>Follow Us :</h4>
              <div className="socialmedia" style={{ position: "relative", left: "-40%", }}>
                <FaTwitter size={25} />
                <FaFacebook size={25} />
                <FaInstagram size={25} />
              </div>
            </div>
          </div>

          <hr></hr>

          <h6 style={{ color: "white", position: "relative", top: "20px", left: "18%", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>

              </p>
            </div>

          </div>

        </div>
      </div>
    </section></>


  )
}
