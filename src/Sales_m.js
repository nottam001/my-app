import React, { Component } from 'react';
import sales from './asset/img/sales.png'
import Navbar from './Nav_a';
import Sg from './sales_g';

class Sales_m extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                { name: "กะเพราไก่", item: 152 },
                { name: "แกงจืด", item: 145 },
                { name: "ผัดไทย", item: 138 },
                { name: "ข้าวหมูกรอบไข่ต้ม", item: 136 },
                { name: "ข้าวต้มกุ้ง", item: 130 },
                { name: "ข้าวผัดปู", item: 126 },
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
        const divStylesm = {
            height: '350px',
        };

        return (
            <div class="container-fluid ">
                <Navbar />
                <div class="row">
                    <div class="col-2 border-end border-3 border-success mt-3" style={divStyle}>

                        <div class="row text-center">
                            <div class="col-12">
                                <img src={sales} alt="" height="80" ></img>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-start ms-1 mt-3" onClick={() => { this.props.history.replace('/rm') }}>
                                รีวิว
                            </div>
                        </div>
                        <div class="row border-start border-success border-5">
                            <div class="col-12 text-start ms-1 mt-3">
                                ยอดขาย
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-start ms-1 mt-3">
                                Member
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-start ms-1 mt-3">
                                Employee
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-start ms-1 mt-3">
                                Menu
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-start ms-1 mt-3">
                                Restaurant
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col-6 mt-3 border-end border-2 border-secondary" style={divStyle}>
                                <div class="row border-top border-2 border-secondary">
                                    <div class="col-12 mt-2 border-bottom border-2 border-secondary text-center">
                                        รายการอาหารที่ขาย
                                </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-12">
                                        <button class="btn btn-secondary " onClick={() => { this.props.history.replace('/sm') }}>
                                            ต่อวัน
                                        </button>
                                        <button class="btn btn-success ms-1">
                                            ต่อเดือน
                                        </button>
                                        <button class="btn btn-secondary ms-1" onClick={() => { this.props.history.replace('/ss') }}>
                                            ต่อปี
                                        </button>
                                        <button class="btn btn-secondary ms-1 me-5" onClick={() => { this.props.history.replace('/sss') }}>
                                            คลอดการเปิดราย
                                        </button>
                                    </div>
                                </div>
                                <div class="row mt-2 border-top border-2 border-secondary">
                                    <div class="col-12">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">เมนู</th>
                                                    <th scope="col" class='text-end'>จำนวน</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.arr.map((i, j) =>
                                                        <tr>
                                                            <td>{i.name}</td>
                                                            <td class='text-end'>{i.item}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row mt-3 border-secondary border-bottom border-1" style={divStylesm}>
                                    <Sg />
                                </div>
                                <div class="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sales_m;