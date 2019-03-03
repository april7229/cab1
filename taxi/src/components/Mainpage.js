import React, { Component } from 'react'
import './Main.css'










class Main extends Component
{
    render()
    {
        return (
            <div>
            <div class="header">
                    <h1>D & M</h1>
                    <h1>Medi-Care</h1>
            <h1>Medical Transportation</h1>
            </div>

            <div class="topnav">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>

            <div class="row">
                <div class="column">
                    <h2>Column</h2>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                </div>

                    <div class="column">
                        <img  src="./image/car1.png" alt="2012 impala"/>
                    <h2>Column</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                </div>

                <div class="column">
                    <h2>Column</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Main;
