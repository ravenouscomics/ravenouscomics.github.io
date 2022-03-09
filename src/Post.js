import React, { Component } from 'react';
import Header_Block from './Header_Block';
import './Post.css';
import page_01 from './static/s01_e01_uncensored.png';
import page_02 from './static/s01_e02_uncensored.png';
import page_03 from './static/s01_e03_uncensored.png';
import page_04 from './static/s01_e04_uncensored.png';
import page_05 from './static/s01_e05_01_uncensored.png';
import page_06 from './static/s01_e05_02_uncensored.png';

class Post extends Component {
    
    render(){
        const pages = [
            page_01,
            page_02,
            page_03,
            page_04,
            page_05,
            page_06
        ]
        

        return(
            <div className='Post'>            
                <Header_Block/>
                <div className='Post-Container'>
                    {
                        pages.map((page) =>
                            <img src={page} key={page.toString()} className='Post-Page'/>
                        )
                    }
                </div>          
            </div>         
        )
    }
}

export default Post;
