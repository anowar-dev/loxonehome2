"use client";
// Inside `app/home1/page.tsx`

import { Inter } from 'next/font/google';
import '../home1.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Make sure to load necessary weights
});

const Home1Page = () => {
  return (
    <main className={inter.className}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="pt-56 md:pt-48 text-center">
          <div className="container">
            <h1 className="text-5xl font-semibold">1Home Server Loxone</h1>
            <p className="topPara mt-4">The first device in the world to combine Loxone and Matter smart home standards.</p>
            <p className="topPBara mt-4">Choose between different mobile apps and voice interfaces to control your Loxone home. Set up complex automation in a simple way. Directly integrate 100s of Matter-certified IoT devices.</p>

            <div className="top2section">
              <div className="buttons">
                <a href="/home1/#products1" className="buynowlinik">BUY NOW</a>
                <span>* 1000+ shipped already.</span>
              </div>
              <a href="#" className="btnunderlink">Access partner shop</a>
            </div>
            <div className="topImgDiv">
              <div className="imgsmall">
                <img src="/assets/img/home1/loxone-server-hero-logos.webp" alt="" />
              </div>
              <div className="imgLearge">
                <img src="/assets/img/home1/loxone-server-hero.webp" alt="" />
              </div>
            </div>

          </div>
        </section>

        {/* Hero Section two */}
        <section className="sections top text-center">
          <h2 className="subtitle one">First device in the world to control Loxone and Matter</h2>
          <img className="bigImage" src="/assets/img/home1/loxone-server-logos.webp" alt="" />
        </section>

        {/* Control Section */}
        <section className="sections second text-center">
          <h2 className="subtitle controll">Control Loxone devices from all Matter supported apps and voice interfaces</h2>
          <div className="controllImages">

            {/* Single */}
            <div className="controllSingle">
              <img className="conImage" src="/assets/img/home1/knx-server-mobile-apps-1.webp" alt="" />
              <h5 className="contSubTitle">Apple Home</h5>
              <p className="conPara">* Hub required</p>
              <a href="#" target="_blank" className="hublink">Learn more</a>
            </div>

            {/* Single */}
            <div className="controllSingle">
              <img className="conImage" src="/assets/img/home1/knx-server-mobile-apps-2.webp" alt="" />
              <h5 className="contSubTitle">Google Home</h5>
              <p className="conPara">* Hub required</p>
              <a href="#" target="_blank" className="hublink">Learn more</a>
            </div>

            {/* Single */}
            <div className="controllSingle">
              <img className="conImage" src="/assets/img/home1/knx-server-mobile-apps-3.webp" alt="" />
              <div className="titleDiv">
                <h5 className="contSubTitle">Amazon Alexa </h5>
                <span>Beta</span>
              </div>
              <p className="conPara">* Hub required</p>
              <a href="#" target="_blank" className="hublink">Learn more</a>
            </div>

            {/* Single */}
            <div className="controllSingle">
              <img className="conImage" src="/assets/img/home1/knx-server-mobile-apps-4.webp" alt="" />
              <div className="titleDiv">
                <h5 className="contSubTitle">SmartThings</h5>
                <span>Beta</span>
              </div>
              <p className="conPara">* Hub required</p>
              <a href="#" target="_blank" className="hublink">Learn more</a>
            </div>

            {/* Single */}
            <div className="controllSingle">
              <img className="conImage" src="/assets/img/home1/knx-server-mobile-apps-5.webp" alt="" />
              <div className="titleDiv">
                <h5 className="contSubTitle">Home Assistant</h5>
                <span>Beta</span>
              </div>
              <p className="conPara">* Hub required</p>
              <a href="#" target="_blank" className="hublink">Learn more</a>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="products1" className="py-20 bg-secondary text-white text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4">Email: contact@example.com</p>
        </section> */}
      </div>

      

    </main>
  );
};

export default Home1Page;
