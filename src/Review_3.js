import React, { Component } from 'react';
import review from './asset/img/review.png'
import star5 from './asset/img/star5.png'
import star4 from './asset/img/star4.png'
import star3 from './asset/img/star3.png'
import star2 from './asset/img/star2.png'
import star1 from './asset/img/star1.png'
import { Bar } from 'react-chartjs-2';
import Navbar from './Nav_a';

class Review_3 extends Component {
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
        const divStylesss = {
            height: '221px',
        };
        const state = {
            labels: ['Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Star Point',
                    backgroundColor: 'rgba(255, 169, 0,5)',
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 2,
                    data: [65, 59, 42, 65,
                        56, 45, 39, 50,
                        42, 58, 67, 50]
                }
            ]
        };

        return (
            <div class="container-fluid ">
                <Navbar />
                <div class="row">
                    <div class="col-2 border-end border-3 border-success mt-3" style={divStyle}>

                        <div class="row text-center">
                            <div class="col">
                                <img src={review} alt="" height="80" ></img>
                            </div>
                        </div>
                        <div class="row border-start border-success border-5">
                            <div class="col text-start ms-1 mt-3">
                                รีวิว
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-start ms-1 mt-3" onClick={() => { this.props.history.replace('/sm') }}>
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
                        <div class="row border-bottom border-1 border-secondary border-top mt-3">
                            <div class="col-5  border-end border-secondary border-1" style={divStyles}>
                                <div class="row border-bottom border-secondary border-1">
                                    <div class="col-10 text-end border-end border-secondary border-1">
                                        รวม
                                    </div>
                                    <div class="col mb-1 text-end">
                                        100
                                    </div>
                                </div>
                                <div class="row " style={divStylesss}>
                                    <div class="col-5 border-end border-secondary text-center border-1">
                                        4.5
                                    </div>
                                    <div class="col-6 border-end border-secondary">
                                        <div class="row border-secondary border-bottom border-1">
                                            <div class="col mt-2 mb-2">
                                                <img src={star5} alt="" height="19"></img>
                                            </div>
                                            {/* <div class="col text-end border-start border-secondary border-2">
                                                85
                                            </div> */}
                                        </div>
                                        <div class="row border-secondary border-bottom border-1">
                                            <div class="col mt-2 mb-2">
                                                <img src={star4} alt="" height="19"></img>
                                            </div>
                                            {/* <div class="col text-end border-start border-secondary border-2">
                                                10
                                            </div> */}
                                        </div>
                                        <div class="row border-secondary border-bottom border-1">
                                            <div class="col mt-2 mb-2">
                                                <img src={star3} alt="" height="19"></img>
                                            </div>
                                            {/* <div class="col text-end border-start border-secondary border-2">
                                                4
                                            </div> */}
                                        </div>
                                        <div class="row border-secondary border-bottom border-1">
                                            <div class="col mt-2 mb-2 ">
                                                <img src={star2} alt="" height="19"></img>
                                            </div>
                                            {/* <div class="col text-end border-start border-secondary border-2">
                                                1
                                            </div> */}
                                        </div>
                                        <div class="row border-secondary border-1">
                                            <div class="col mt-2 mb-2">
                                                <img src={star1} alt="" height="20"></img>
                                            </div>
                                            {/* <div class="col text-end border-start border-secondary border-2">
                                                0
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="col-1 text-center">
                                        <div class="row border-secondary border-bottom border-1">
                                            <div class="col mt-2 mb-2">
                                                85
                                            </div>
                                        </div>
                                        <div class="row border-secondary border-bottom border-1">
                                            <div class="col mt-2 mb-2">
                                                10
                                            </div>
                                        </div>
                                        <div class="row border-secondary border-bottom border-1">
                                            <div class="col mt-2 mb-2">
                                                4
                                            </div>
                                        </div>
                                        <div class="row border-secondary border-bottom border-1">
                                            <div class="col mt-2 mb-2">
                                                1
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col mt-2 mb-2">
                                                0
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style={divStyless}>
                            <div class="col border-end border-2 border-secondary ">
                                <div class="row mt-2">
                                    <div class="col-1 ">
                                        <button class="btn btn-secondary" onClick={() => { this.props.history.replace('/rm') }}>ทั้งหมด</button>
                                    </div>
                                    <div class="col">
                                        <button class="btn btn-secondary ms-4" onClick={() => { this.props.history.replace('/rrrrr') }}>
                                            <img src={star5} alt="" height="20"></img>
                                        </button>
                                        <button class="btn btn-secondary ms-1" onClick={() => { this.props.history.replace('/rrrr') }}>
                                            <img src={star4} alt="" height="20"></img>
                                        </button>
                                        <button class="btn btn-success ms-1">
                                            <img src={star3} alt="" height="20"></img>
                                        </button>
                                        <button class="btn btn-secondary ms-1">
                                            <img src={star2} alt="" height="20" onClick={() => { this.props.history.replace('/rr') }}></img>
                                        </button>
                                        <button class="btn btn-secondary ms-1" onClick={() => { this.props.history.replace('/r') }}>
                                            <img src={star1} alt="" height="20"></img>
                                        </button>
                                    </div>
                                </div>
                                <div class="row border-top border-4 border-secondary mt-2 ">
                                    <div class="col mt-2">
                                        333333
                                    </div>
                                </div>
                            </div>
                            <div class="col mt-3 ms-3">
                                <div>
                                    <Bar
                                        data={state}
                                        options={{
                                            if() {
                                            },
                                            title: {
                                                display: true,
                                                text: 'กราฟการให้ดาวต่อปี',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'top'
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Review_3;