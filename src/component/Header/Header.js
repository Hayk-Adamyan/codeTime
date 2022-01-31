import "./Header.css"
import logo from "./../../img/Logo.png"
import telegram from "./../../img/telegram.png"
import mail from "./../../img/mail.png"
import phone from "./../../img/phone.png"
import wooter from "./../../img/advertising/wooter.png"
import cobify from "./../../img/advertising/cobify.png"
import kaii from "./../../img/advertising/kaii.png"
import smart from "./../../img/advertising/smart.png"
import vector from "./../../img/advertising/Vector (9).png"
import img2 from "./../../img/img2.png"
import img1 from "./../../img/Frame.png"


const Header = props => {


    return (
        <>
            <div className="all">
                <div className="allMine">
                    <div className="nav">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="icon">
                            <a><img src={telegram} alt=""/></a>
                            <a><img src={mail} alt=""/></a>
                            <div className="spanDiv"><img src={phone} alt=""/><span>+7 800 301-79-27</span></div>
                            <div className="btn1">
                                <button>НАЧАТЬ ПРОЕКТ</button>
                            </div>
                        </div>
                    </div>
                    <div className="content1">
                        <div className="it">
                            <div className="left">
                                <div className="leftContentleftContent">
                                    <div className="divH1">
                                        <div>
                                            <h1>Разработка IT‑продуктов
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="divSpan">
                                        <span>Разработаем проект с нуля,<br/>доработаем текущий проект или усилим вашу<br/>
                                            ИТ-команду лучшими разработчиками на рынке</span>
                                    </div>

                                    <button className="buttonMob">НАЧАТЬ НОВЫЙ ПРОЕКТ</button>
                                </div>
                            </div>
                        </div>

                        <div className="img1">

                            <img src={img1} alt=""/>
                        </div>

                    </div>

                </div>

            </div>
            <div className="wooter">
                <div className="wooterMine">
                    <img src={wooter} alt=""/>
                    <img src={cobify} alt=""/>
                    <img src={kaii} alt=""/>
                    <img src={smart} alt=""/>
                    <div className="vector"><img src={vector} alt=""/></div>


                </div>

            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active caruselDiv">
                        <img className="d-block w-100" src={wooter} alt="First slide"/>
                    </div>
                    <div className="carousel-item caruselDiv">
                        <img className="d-block w-100 " src={cobify} alt="Second slide"/>
                    </div>
                    <div className="carousel-item  caruselDiv">
                        <img className="d-block w-100" src={kaii} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/*/!*//*!/*/}
            {/*<div className="contentAll">*/}
            {/*    <div className="content2">*/}
            {/*        <div className="carts">*/}
            {/*            <div className='cart'><img src="/src/img/slide/interv.png" alt=""/></div>*/}
            {/*            <div className='cart'></div>*/}
            {/*            <div className='cart'></div>*/}
            {/*            <div className='cart'></div>*/}
            {/*            <div className='cart'></div>*/}
            {/*        </div>*/}
            {/*        <div className="leftright">*/}
            {/*            <div className="left2">*/}
            {/*                <img src={img2} alt=""/>*/}
            {/*            </div>*/}
            {/*            <div className="right2">*/}
            {/*                <div className="right">*/}
            {/*                    <div className="rightContent">*/}
            {/*                        <div className="div1H1">*/}

            {/*                            <h1>*/}
            {/*                                Проведём интервью<br/>*/}
            {/*                                и подготовим проект<br/>*/}
            {/*                                к разработке*/}
            {/*                            </h1>*/}

            {/*                        </div>*/}

            {/*                        <div className="divSpan">*/}
            {/*                            <span>*/}
            {/*                                Проведём продуктовое интервью онлайн <br/> и дадим рекомендации по подготовке проекта <br/> к разработке. Это бесплатно.*/}
            {/*                            </span>*/}
            {/*                        </div>*/}
            {/*                        <div className="btn2">*/}
            {/*                            <button>Записаться на интервью</button>*/}
            {/*                        </div>*/}

            {/*                    </div>*/}

            {/*                </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </>
    );
};


export default Header;