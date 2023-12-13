import React from 'react'
import './Footer.css'
import compoy_log from '../../Assets/logo.png'
import wattsapp from '../../Assets/whatsapp_icon.png'
import pintester_icon from '../../Assets/../Assets/pintester_icon.png'
import insta from '../../Assets/instagram_icon.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-brand">
                <Link to="/" style={{textDecoration:"none"}}>
                    <img src={compoy_log} alt="" />
                    <span>MY STORE</span>
                </Link>
            </div>
            <div className="footer-mid">
                <ul>
                    <li>Compony</li>
                    <li>Products</li>
                    <li>offices</li>
                    <li>About</li>
                    <li>Contect</li>
                </ul>
            </div>
            <div className="footer-end">
                <img src={insta} alt="" />
                <img src={pintester_icon} alt="" />
                <img src={wattsapp} alt="" />
            </div>
            <dir className="footer-last">
                <hr />
                <span>Copyright @ 2023 - All Right Reserved</span>
            </dir>
        </div>
    )
}

export default Footer