import React, { Component } from 'react';
import logo from './asset/img/logo.png'
import sales from './asset/img/sales.png'

class Sales_main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {name: "กะเพราไก่", item: 52},
                {name: "แกงจืด", item: 45},
                {name: "ผัดไทย", item: 38},
                {name: "ข้าวหมูกรอบไข่ต้ม", item: 36},
                {name: "ข้าวต้มกุ้ง", item: 30},
                {name: "ข้าวผัดปู", item: 26},
            ]
        };
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
                                <li><a class="dropdown-item" href="#">Account</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="row">
                    <div class="col-2 border-end border-3 border-success mt-3" style={divStyle}>

                        <div class="row text-center">
                            <div class="col">
                                <img src={sales} alt="" height="80" ></img>
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
                            <div class="col-6 mt-3 border-end border-2 border-secondary" style={divStyle}>
                            <div class="row border-top border-2 border-secondary">
                                <div class="col mt-2 border-bottom border-2 border-secondary text-center">
                                    รายการอาหารที่ขาย
                                </div>
                            </div>
                            <div class="row mt-2">
                                    <div class="col">
                                        <button class="btn btn-success ">
                                            ต่อวัน
                                        </button>
                                        <button class="btn btn-secondary ms-1">
                                            ต่อเดือน
                                        </button>
                                        <button class="btn btn-secondary ms-1">
                                            ต่อปี
                                        </button>
                                        <button class="btn btn-secondary ms-1 me-5">
                                            คลอดการเปิดราย
                                        </button>
                                        <button class="btn btn-success ms-5">
                                            \/
                                        </button>
                                        <button class="btn btn-secondary ms-1">
                                            /\
                                        </button>
                                    </div>
                                </div>
                                <div class="row mt-2 border-top border-2 border-secondary">
                                    <div class="col">
                                    <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">เมนู</th>
                                        <th></th>
                                        <th scope="col">จำนวน</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.arr.map((i,j) =>
                                            <tr>
                                                <td>{i.name}</td>
                                                <td></td>
                                                <td>{i.item}</td> 
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Sales_main;