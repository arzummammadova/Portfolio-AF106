import React from 'react'
import search from '../../assets/icons/search.svg'
import email from  '../../assets/icons/email.svg'
import phone from  '../../assets/icons/phone.svg'
import telegram from '../../assets/icons/telegram.svg'
import facebook from '../../assets/icons/facebook.svg'
import wp from '../../assets/icons/wp.svg'
import insta from '../../assets/icons/instagram.svg'
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="container">

            <div class="footer_top">
                <a href="index.html">Snobella</a>
                <input placeholder="Search all product" type="text" class="search"></input>
                <img src={search} alt="" class="searchicon"></img>
            </div>
            <div class="footer_bottom">
                <div class="footer_bottom_left">
                    <p>
                        The wise man therefore always holds
                        selectionThe wise man therefore always
                        rejects pleasures to secure other greater
                    </p>
                    <div class="footer_bottom_left_contact">
                        <img src={email} alt=""></img>
                        <a href="mailto:Snobella@gmail.com">Snobella@gmail.com</a>
                    </div>
                    <div class="footer_bottom_left_contact">
                        <img src={phone} alt=""></img>
                        <a href="tel:+748 383 23 14">+748 383 23 14</a>
                    </div>


                    <a class="send" href="www.telegram">
                        <img src={telegram} alt=""></img>
                        Send message
                    </a>
                </div>

                <div class="footer_bottom_right">
                    <div class="footer_bottom_right_contact">
                        <h2>Shop</h2>
                        <a href="">Shoulder Bag</a>
                        <a href="">Backpack</a>
                        <a href="">Tote Bag</a>
                        <a href="">Hand Bag</a>
                        <a href="">Evening bags</a>
                        <a href="">Purse</a>
                    </div>
                    <div class="footer_bottom_right_contact">
                        <h2>Company</h2>

                        <a href="">About us</a>
                        <a href="">Contact</a>
                        <a href="">Terms of Use</a>
                        <a href="">Customer service</a>


                    </div>
                    <div class="footer_bottom_right_contact">
                        <h2>Help</h2>

                        <a href="">FAQ</a>
                        <a href="">Delivery</a>

                        <a href="">Cancellation of
                            the order</a>
                        <a href="">Don't go back</a>


                    </div>
                </div>

            </div>


        </div>
        <div class="copyright">
            <div class="container">
                <div class="copyright_text">
                    <div class="copyright_text_left">
                        © 2020. All rights reserved.

                    </div>
                    <div class="copyright_text_right">
                        <a href="www.instagram.com"> <img src={insta} alt="instagram"></img></a>
                        <a href="www.facebook.com"><img src={facebook} alt="facebook"></img></a>
                        <a href="www.whatsapp.com"><img src={wp} alt="whatsapp"></img></a>



                    </div>
                </div>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer
