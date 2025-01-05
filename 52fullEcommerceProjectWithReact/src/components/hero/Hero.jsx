import React from 'react'
import hero from '../../assets/images/hero.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
          <section class="hero" id="hero">
            <div class="container">
                <div class="hero active" data-bg="#f4e2d8">
                    <div class="hero__left">
                        {/* <img src={hero} alt="" /> */}
                        <p class="hero__left__desc">
                            30% off
                        </p>
                        <h2 class="hero__left__title">Handbag products</h2>
                        <p class="hero__left__subtitle">
                            It is a long established fact that a reader will be distracted by the readable content
                            expound the actual teachings of the great explorer
                        </p>
                        <Link to="/shoulderbag">Shop now</Link>
                        <div class="circles">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>

                    </div>
                    <div class="hero__right">
                        <figure>
                            <img src={hero} alt=""></img>
                        </figure>
                    </div>
                </div>
                <div class="hero" data-aos="fade-left" data-bg="#d8e2f4">
                    <div class="hero__left">
                        <p class="hero__left__desc">
                            30% off
                        </p>
                        <h2 class="hero__left__title">Handbag products</h2>
                        <p class="hero__left__subtitle">
                            It is a long established fact that a reader will be distracted by the readable content
                            expound the actual teachings of the great explorer
                        </p>
                        <a href="">Shop now</a>
                        <div class="circles">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>

                    </div>
                    <div class="hero__right">
                        <figure>
                            <img src={hero} alt=""></img>
                        </figure>
                    </div>
                </div>
                <div class="hero" data-bg="wheat" data-aos="fade-left">
                    <div class="hero__left">
                        <p class="hero__left__desc">
                            30% off
                        </p>
                        <h2 class="hero__left__title">Handbag products</h2>
                        <p class="hero__left__subtitle">
                            It is a long established fact that a reader will be distracted by the readable content
                            expound the actual teachings of the great explorer
                        </p>
                        <a href="">Shop now</a>
                        <div class="circles">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>

                    </div>
                    <div class="hero__right">
                        <figure>
                            <img src={hero} alt=""></img>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
