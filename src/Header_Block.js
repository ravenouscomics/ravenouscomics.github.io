import React, { Component, useState, useEffect } from 'react';
import logo from './static/rc_logo.svg';
import './Header_Block.css';

class Header_Block extends Component {

    componentDidMount(){
        console.log("Component Mounted")

        window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("Header_Block");
        var sticky = navbar.offsetTop;

        // Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                // console.log('adding sticky')
                navbar.classList.add("sticky")
            } else {
                // console.log('removing sticky')
                navbar.classList.remove("sticky");           
            }
        }
    }

    render(){
        return(
            <div id='Header_Block'>
                <img src={logo} className="Header_Block-rc-logo" alt="logo" /> 
            </div>        
        )
    }
}

export default Header_Block;
