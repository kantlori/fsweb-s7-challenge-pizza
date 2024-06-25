import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import icon1 from '../mile2-aseets/icons/1.svg';
import icon2 from '../mile2-aseets/icons/2.svg';
import icon3 from '../mile2-aseets/icons/3.svg';
import icon4 from '../mile2-aseets/icons/4.svg';
import icon5 from '../mile2-aseets/icons/5.svg';
import icon6 from '../mile2-aseets/icons/6.svg';

import FIcon1 from '../mile2-aseets/footer/icons/icon-1.png';
import FIcon2 from '../mile2-aseets/footer/icons/icon-2.png';
import FIcon3 from '../mile2-aseets/footer/icons/icon-3.png';
import FLogo from '../mile2-aseets/footer/logo-footer.svg';

import IPic0 from '../mile2-aseets/footer/insta/li-0.png';
import IPic1 from '../mile2-aseets/footer/insta/li-1.png';
import IPic2 from '../mile2-aseets/footer/insta/li-2.png';
import IPic3 from '../mile2-aseets/footer/insta/li-3.png';
import IPic4 from '../mile2-aseets/footer/insta/li-4.png';
import IPic5 from '../mile2-aseets/footer/insta/li-5.png';

import p1 from '../mile2-aseets/pictures/food-1.png';
import p2 from '../mile2-aseets/pictures/food-2.png';
import p3 from '../mile2-aseets/pictures/food-3.png';

const customButtonStyle = {
    marginTop: '1rem',
    display: 'inline-block',
    padding: '10px 40px',
    borderRadius: '20px',
    backgroundColor: '#fdc913',
    color: 'black',
    textDecoration: 'none',
    fontSize: 'large',
};
const customButtonStyle2 = {
    borderRadius: '20px',
    backgroundColor: 'white',
    color: '#CE2829',
    textDecoration: 'none',
    fontSize: 'small',
};

export default function AdvMain() {
    return (
        <div className="AdvContainer">
            <header>
                <div className="AdvMain">
                    <section>
                        <img className="logo" src={logo} alt="" />
                    </section>
                    <p className="satisfy-regular">kod acıktırır</p>
                    <p className="mainP">KOD ACIKTIRIR </p>
                    <p className="mainP">PIZZA, DOYURUR</p>
                    <Link to="/order">
                        <Button style={customButtonStyle}>Acıktım</Button>
                    </Link>
                </div>
                <section className="headBot">
                    <span>
                        <img src={icon1} alt="" />
                        YENI Kore
                    </span>
                    <span>
                        <img src={icon2} alt="" />
                        Pizza
                    </span>
                    <span>
                        <img src={icon3} alt="" />
                        Burger
                    </span>
                    <span>
                        <img src={icon4} alt="" />
                        Kızartmalar
                    </span>
                    <span>
                        <img src={icon5} alt="" />
                        Fast Food
                    </span>
                    <span>
                        <img src={icon6} alt="" />
                        Gazlı İçecekler
                    </span>
                </section>
            </header>
            <section className="cards">
                <div className="leftCard">
                    <h3>Özel </h3>
                    <h3> lezzetus</h3>
                    <p>Position:Absolute Acı Burger</p>
                    <Link to="/order">
                        <Button to="/order" style={customButtonStyle2}>
                            {' '}
                            SİPARİŞ VER
                        </Button>
                    </Link>
                </div>
                <div className="rightCard">
                    <div className="rightTop">
                        <p>Hackathlon</p>
                        <p>Burger Menü</p>
                        <Link to="/order">
                            <Button style={customButtonStyle2}> SİPARİŞ VER</Button>
                        </Link>
                    </div>{' '}
                    <div className="rightBot">
                        <p>Çoooook hızlı </p>
                        <p>npm gibi kurye</p>
                        <Link to="/order">
                            <Button style={customButtonStyle2}> SİPARİŞ VER</Button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="cards2">
                <p className="satisfy-regular2">en çok paketlenen menüler</p>
                <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
                <div className="bodyBot">
                    <span>
                        <img src={icon1} alt="" />
                        YENI Kore
                    </span>
                    <div className="darkicon">
                        <img className="darkicon" src={icon2} alt="" />
                        Pizza
                    </div>
                    <span>
                        <img src={icon3} alt="" />
                        Burger
                    </span>
                    <span>
                        <img src={icon4} alt="" />
                        Kızartmalar
                    </span>
                    <span>
                        <img src={icon5} alt="" />
                        Fast Food
                    </span>
                    <span>
                        <img src={icon6} alt="" />
                        Gazlı İçecekler
                    </span>
                </div>
                <div className="products">
                    <span className="productCard">
                        <img src={p1} alt="" />
                        <h4>Terminal Pizza</h4>
                        <div className="productDis">
                            <p>4.9</p>
                            <p>(200)</p>
                            <p>60₺</p>
                        </div>
                    </span>
                    <span className="productCard">
                        <img src={p2} alt="" />
                        <h4>Position Absolute Acı Pizza</h4>
                        <div className="productDis">
                            <p>4.9</p>
                            <p>(928)</p>
                            <p>85₺</p>
                        </div>
                    </span>
                    <span className="productCard">
                        <img src={p3} alt="" />
                        <h4>useEffect Tavuklu Burger</h4>
                        <div className="productDis">
                            <p>4.9</p>
                            <p>(462)</p>
                            <p>75₺</p>
                        </div>
                    </span>
                </div>
            </section>
            <footer className="AdvFooter">
                <div className="F1">
                    <img className="logoF" src={FLogo} alt="" />
                    <span>
                        <img src={FIcon1} alt="" />
                        <p>341 Londonderry Road, Istanbul Türkiye</p>
                    </span>
                    <span>
                        <img src={FIcon2} alt="" />
                        <p>aciktim@teknolojikyemekler.com</p>
                    </span>
                    <span>
                        <img src={FIcon3} alt="" />
                        <p>+90 216 123 45 67</p>
                    </span>
                </div>
                <div className="F2">
                    <h4>Sıccacık Menuler</h4>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>
                <div className="F3">
                    <h4>instagram</h4>
                    <span>
                        <img src={IPic0} alt="" />
                        <img src={IPic1} alt="" />
                        <img src={IPic2} alt="" />
                    </span>
                    <span>
                        <img src={IPic3} alt="" />
                        <img src={IPic4} alt="" />
                        <img src={IPic5} alt="" />
                    </span>
                </div>
            </footer>
            <div className="F4">
                <p>@ 2023 Teknolojik Yemekler.</p>
            </div>
        </div>
    );
}