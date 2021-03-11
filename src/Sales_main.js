import React, { Component } from 'react';
import sales from './asset/img/sales.png'
import { Bar } from 'react-chartjs-2';
import Navbar from './Nav_a';

class Sales_main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                { name: "กะเพราไก่", item: 52 },
                { name: "แกงจืด", item: 45 },
                { name: "ผัดไทย", item: 38 },
                { name: "ข้าวหมูกรอบไข่ต้ม", item: 36 },
                { name: "ข้าวต้มกุ้ง", item: 30 },
                { name: "ข้าวผัดปู", item: 26 },
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
        const state = {
            labels: ['Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'ยอดขาย',
                    backgroundColor: 'rgba(87, 0, 255,5)',
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 2,
                    data: [65000, 59000, 71000, 65000,
                        56000, 53000, 55000, 54000,
                        51000, 58000, 67000, 54000]
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
                                <img src={sales} alt="" height="80" ></img>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col text-start ms-1 mt-3" onClick={() => { this.props.history.replace('/rm') }}>
                                รีวิว
                            </div>
                        </div>
                        <div class="row border-start border-success border-5">
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
                                        <button class="btn btn-secondary ms-1" onClick={() => { this.props.history.replace('/s') }}>
                                            ต่อเดือน
                                        </button>
                                        <button class="btn btn-secondary ms-1" onClick={() => { this.props.history.replace('/ss') }}>
                                            ต่อปี
                                        </button>
                                        <button class="btn btn-secondary ms-1 me-5" onClick={() => { this.props.history.replace('/sss') }}>
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
                                                    this.state.arr.map((i, j) =>
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
                            <div class="col">
                                <div class="row mt-3 border-secondary border-bottom border-1" style={divStylesm}>
                                <div>
                                    <Bar
                                        data={state}
                                        options={{
                                            if() {
                                            },
                                            title: {
                                                display: true,
                                                text: 'กราฟยอดขายต่อปี',
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

export default Sales_main;