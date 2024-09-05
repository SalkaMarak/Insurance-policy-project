import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
        <div className="hero-section">
            <div className="pic">
                <div className="hero-text">
                    <h1>Get Your Insurance Today</h1>
                    <p>Get comprehensive coverage today and secure a brighter future for your family.</p>
                    <br/>
                    <button className='btn btn-dark'>Get Started</button>
                </div>
            </div>
        </div>
        <div className="quote-area">
            <p>"Insurance is not just a policy, it's a promise to protect your future."
            — Unknown</p>
        </div>
        <div className="boxes-area">
            <div className="box1">
                <div className="home-ins"></div>
                <div className="box-text">
                    <h3><strong>Home Insurance</strong></h3>
                    <p>Shield your home from the unexpected and protect your peace of mind.</p>
                </div>
            </div>
            <div className="box2">
                <div className="car-ins"></div>
                <div className="box-text">
                    <h3><strong>Car Insurance</strong></h3>
                    <p>Drive with confidence, knowing you’re covered for every mile.</p>
                </div>
            </div>
            <div className="box3">
                <div className="life-ins"></div>
                <div className="box-text">
                    <h3><strong>Life Insurance</strong></h3>
                    <p>Ensure a secure future for your loved ones with comprehensive coverage.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
