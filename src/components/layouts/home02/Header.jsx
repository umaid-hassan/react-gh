import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menus from '../menus';
import bloglinks from '../bloglinks';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header id="header" className="header header-style2 has-menu-model">
                <div className="container">
                    <div className="flex-header d-flex justify-content-between align-items-center">
                    <img src="images/logo/2.png" alt="images" />
                        <div className="socials-list-hd s1 hv1">
                            <Link to="https://www.facebook.com/umaidhassan08
"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                            <Link to="https://twitter.com/umaid008
"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="https://www.instagram.com/umaidhassan/
"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                            <Link to="https://github.com/umaid-hassan
"><i className="fa fa-github-alt" aria-hidden="true" /></Link>
                            <Link to="https://www.instagram.com/umaidhassan/
"><i className="fa fa-snapchat-ghost" aria-hidden="true" /></Link>
                        </div>
                        <div dir="rtl" className="btn-menu mobile-header__menu-button">
                            <div className="line line-1" />
                            <div className="line line-2" />
                            <div className="line line-3" />
                            <div className="line line-4" />
                        </div>
                        <div className="content-menu d-lg-flex">
                            <div className="nav-wrap">
                                <nav id="mainnav" className="mainnav">
                                    <ul className="menu ace-responsive-menu" data-menu-style="horizontal">
                                        <li><Link to="/" className="active">Home</Link>
                                        </li>   
                                        {
                                            menus.map(menu => (
                                                <li key={menu.id}><Link to={menu.tomenu} className="click-model">{menu.namemenu}</Link></li>
                                            ))
                                        }                           
                                        <li><Link to="#">Blog</Link>
                                            <ul className="sub-menu" >
                                                {
                                                    bloglinks.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.toblog} onClick={() => {window.location.href=data.toblog}}>
                                                                {data.nameblog}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>   
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
