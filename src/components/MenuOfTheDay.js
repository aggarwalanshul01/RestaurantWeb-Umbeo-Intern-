import React from 'react'
import "../css/MenuOfTheDay.css";
let li1='active';
let li2='';
let li3='';
let li4='';

function MenuOfTheDay() {
    return (
        <div id="csi-menu" className="csi-menu">
            <div className="csi-inner">
                <div className='container'>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="csi-heading">
                                <h3 className="subtitle">Food Recipe Items</h3>
                                <h2 className="title">Menu Of The Day</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="csi-nav-pills-area">
                                <ul className="nav nav-pills csi-nav-pills">
                                    <li className={li1}><a data-toggle="pill" href="#home"><img src="/img/tab-menu1.png" alt=""/> Speacial</a></li>
                                    <li className={li2}><a data-toggle="pill" href="#menu1"><img src="/img/tab-menu2.png" alt=""/> Breakfast</a></li>
                                    <li className={li3}><a data-toggle="pill" href="#menu2"><img src="/img/tab-menu3.png" alt=""/> Lunch</a></li>
                                    <li className={li4}><a data-toggle="pill" href="#menu3"><img src="/img/tab-menu4.png" alt=""/> Dinner</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        
    )
}

export default MenuOfTheDay
