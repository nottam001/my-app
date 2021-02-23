import React, { Component } from 'react';
import logo from './asset/img/logo.png'
import review from './asset/img/review.png'
import star5 from './asset/img/star5.png'
import star4 from './asset/img/star4.png'
import star3 from './asset/img/star3.png'
import star2 from './asset/img/star2.png'
import star1 from './asset/img/star1.png'
class Review_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const divStyle = {
            height: '650px',
        };
        const divStyles = {
            height: '250px',
        };
        const divStyless = {
            height: '400px',
        };

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


                                <li><a class="dropdown-item" href="#">Account12</a></li>



                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="row">
                    <div class="col-2 border-end border-3 border-success mt-3" style={divStyle}>

                        <div class="row text-center">
                            <div class="col">
                                <img src={review} alt="" height="80" ></img>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-start ms-1 mt-3">
                                Review
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-start ms-1 mt-3">
                                ยอดขาย
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-start ms-1 mt-3">
                                Member
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-start ms-1 mt-3">
                                Employee
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-start ms-1 mt-3">
                                Menu
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-start ms-1 mt-3">
                                Restaurant
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col mt-3 border-bottom border-2 border-secondary" style={divStyles}>
                                aaaaaa
                            </div>
                        </div>
                        <div class="row" style={divStyless}>
                            <div class="col border-end border-2 border-secondary ">
                                <div class="row mt-2">
                                    <div class="col-1 ">
                                        <button class="btn btn-secondary" onClick={()=> {this.props.history.replace('/rm')}}>ทั้งหมด</button>
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-secondary ms-4" onClick={()=> {this.props.history.replace('/rrrrr')}}>
                                            <img src={star5} alt="" height="20"></img>
                                        </button>
                                        <button class="btn btn-secondary ms-1"onClick={()=> {this.props.history.replace('/rrrr')}}>
                                            <img src={star4} alt="" height="20"></img>
                                        </button>
                                        <button class="btn btn-secondary ms-1" onClick={()=> {this.props.history.replace('/rrr')}}>
                                            <img src={star3} alt="" height="20"></img>
                                        </button>
                                        <button class="btn btn-secondary ms-1" onClick={()=> {this.props.history.replace('/rr')}}>
                                            <img src={star2} alt="" height="20"></img>
                                        </button>
                                        <button class="btn btn-success ms-1">
                                            <img src={star1} alt="" height="20"></img>
                                        </button>
                                    </div>
                                </div>
                                <div class="row border-top border-4 border-secondary mt-2 ">
                                    <div class="col mt-2">
                                        111111
                                    </div>
                                </div>
                            </div>
                            <div class="col mt-3 ">
                                aaaaaa
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Review_1;
