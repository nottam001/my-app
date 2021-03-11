import React, { Component } from 'react';
import logo from './asset/img/logo.png'
class Nav_a extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div class="container-fluid ">
                <nav class="bd-subnavbar sticky-top" aria-label="secondary navigation">
                    <div class="row border-bottom border-3 border-success bg-white">
                        <div class="col-2 text-center">
                            <img src={logo} alt="" height="75"></img>
                        </div>
                        <div class="col-2 offset-8">
                            <a class="nav-link dropdown-toggle text-end me-5 mt-3" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Panuwat</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Account</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav_a;