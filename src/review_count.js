import React, { Component } from 'react';
import star5 from './asset/img/star5.png'
import star4 from './asset/img/star4.png'
import star3 from './asset/img/star3.png'
import star2 from './asset/img/star2.png'
import star1 from './asset/img/star1.png'

class review_count extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const divStyle = {
            height: '634px',
        };
        const divStyles = {
            height: '250px',
        };
        const divStyless = {
            height: '380px',
        };
        const divStylesss = {
            height: '221px',
        };

        return (
            <div class="row border-bottom border-1 border-secondary border-top mt-3">
                <div class="col-5  border-end border-secondary border-1" style={divStyles}>
                    <div class="row border-bottom border-secondary border-1">
                        <div class="col-10 text-end border-end border-secondary border-1">
                            รวม
                        </div>
                        <div class="col-2 text-end">
                            100
                        </div>
                    </div>
                    <div class="row" style={divStylesss}>
                        <div class="col-5 border-end border-secondary text-center border-1">
                            4.5
                        </div>
                        <div class="col-6 border-end border-secondary">
                            <div class="row border-secondary border-bottom border-1">
                                <div class="col-12 mt-2 mb-2">
                                    <img src={star5} alt="" height="19"></img>
                                </div>
                            </div>
                            <div class="row border-secondary border-bottom border-1">
                                <div class="col-12 mt-2 mb-2">
                                    <img src={star4} alt="" height="19"></img>
                                </div>
                            </div>
                            <div class="row border-secondary border-bottom border-1">
                                <div class="col-12 mt-2 mb-2">
                                    <img src={star3} alt="" height="19"></img>
                                </div>
                            </div>
                            <div class="row border-secondary border-bottom border-1">
                                <div class="col-12 mt-2 mb-2 ">
                                    <img src={star2} alt="" height="19"></img>
                                </div>
                            </div>
                            <div class="row border-secondary border-1">
                                <div class="col-12 mt-2 mb-2">
                                    <img src={star1} alt="" height="20"></img>
                                </div>
                            </div>
                        </div>
                        <div class="col-1 text-center">
                            <div class="row border-secondary border-bottom border-1">
                                <div class="col-12 mt-2 mb-2">
                                    85
                                </div>
                            </div>
                            <div class="row border-secondary border-bottom border-1">
                                <div class="col-12 mt-2 mb-2">
                                    10
                                </div>
                            </div>
                            <div class="row border-secondary border-bottom border-1">
                                <div class="col-12 mt-2 mb-2">
                                    4
                                </div>
                            </div>
                            <div class="row border-secondary border-bottom border-1">
                                <div class="col-12 mt-2 mb-2">
                                    1
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mt-2 mb-2">
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default review_count;