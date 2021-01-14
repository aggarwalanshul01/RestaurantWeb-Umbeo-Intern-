import React,{useState,useEffect} from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../css/Navbar.css';

const arrow={
    marginTop: '.3rem'
}
const arrowInside={
    marginTop: '.4rem',
    marginLeft : '-.1rem'
}


function Navbar() {
    const [navbar, setnavbar] = useState('navbar');
    useEffect(() => {
        const listenScrollEvent =() =>{
            if (window.scrollY > 3) {
                setnavbar('navbar scrolled')
            } else {
                setnavbar('navbar')
            }
        }
        window.addEventListener('scroll', listenScrollEvent)
    }, [navbar]);

    return (
        <div className={navbar}>
            <div className='navbar-text'>
                <div className='logo'><img className='logo_img' src='/img/logo.png' alt='logo'/></div>
                <ul className='navbar_ul'>
                    <li className='li1'>
                        <a className='li1a' href="">
                            HOME 
                            <ArrowDropDownIcon style={arrow}/>
                        </a>
                        <ul className='insideLiUl'>
                            <li className='ulli'><a href="">HOME DEFAULT</a></li>
                            <li className='ulli'><a href="">HOME SLIDER</a></li>
                            <li className='ulli'><a href="">HOME ZIGZAG</a></li>
                            <li className='ulli'><a href="">HOME TYPED</a></li>
                        </ul>
                    </li> 
                    <li className='li1'><a className='li1a' href="">PAGES <ArrowDropDownIcon style={arrow}/></a>
                    <ul className='insideLiUl'>
                        <li className='ulli'><a href="">ABOUT</a></li>
                        <li className='ulli'><a href="">SPECIAL</a></li>
                        <li className='ulli'><a href="">MENU ITEMS</a></li>
                        <li className='ulli'><a href="">RESERVATION</a></li>
                        <li className='ulli'><a href="">CONTACT</a></li>
                        <li className='ulli ulli1'><a href="">NEWS<ArrowDropDownIcon style={arrowInside}/></a>
                            <ul className='insideLiUll'>
                                <li className='ullii'><a href="">NEWS LIST</a></li>
                                <li className='ullii'><a href="">NEWS SINGLE</a></li>
                                <li className='ullii ulli2'><a href="">DROPDOWN 3<ArrowDropDownIcon style={arrowInside}/></a>
                                    <ul className='insideLiUll1'>
                                    <li className='ulliii'><a href="">DROPDOWN 3</a></li>
                                    <li className='ulliii'><a href="">DROPDOWN 3</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className='ulli'><a href="">SINGLE ITEMS</a></li>
                    </ul>
                    </li> 
                    <li className='li2'><a href="">ABOUT</a></li> 
                    <li className='li2'><a href="">SPECIAL</a></li> 
                    <li className='li2'><a href="">MENU</a></li> 
                    <li className='li1'><a className='li1a' href="">NEWS <ArrowDropDownIcon style={arrow}/></a>
                        
                    <ul className='insideLiUl'>
                        <li className='ulli'><a href="">NEWS LIST</a></li>
                        <li className='ulli'><a href="">NEWS SINGLE</a></li>
                    </ul>
                    </li> 
                    <li className='li2'><a href="">CONTACT</a></li>    
                    <div class="btn_area">
                        <a class="navbar_btn" href="">Reservation</a>
                    </div>
                </ul>           
            </div>
        </div>
    )
}

export default Navbar
