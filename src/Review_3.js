import React, { Component } from 'react';
import review from './asset/img/review.png'
import star5 from './asset/img/star5.png'
import star4 from './asset/img/star4.png'
import star3 from './asset/img/star3.png'
import star2 from './asset/img/star2.png'
import star1 from './asset/img/star1.png'
import Rg from './review_g'
import Navbar from './Nav_a';
import Rvc from './review_count';
import styles from './asset/css/test.css';

class Review_3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            clients: ["อาหารอร่อยมากๆครับ", "อาหารอร่อยมากคะ", "อาหารอร่อยมากครับ", "ชอบเมนูในร้านมาก", "พนักงานบริการไม่ดีเลยครับ"],
        };
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
        const comment = {
            padding: '0 0 0 0',
        };

        return (
            <div class="container-fluid ">
                <Navbar />
                <div class="row">
                    <div class="col-2 border-end border-3 border-success mt-3" style={divStyle}>

                        <div class="row text-center">
                            <div class="col-12">
                                <img src={review} alt="" height="80" ></img>
                            </div>
                        </div>
                        <div class="row border-start border-success border-5">
                            <div class="col-12 text-start ms-1 mt-3">
                                รีวิว
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-start ms-1 mt-3" onClick={() => { this.props.history.replace('/sm') }}>
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
                    <div class="col-10">
                        <Rvc />
                        <div class="row" style={divStyless}>
                            <div class="col-6 border-end border-2 border-secondary ">
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
                                <div class="row border-top border-4 border-secondary mt-2" style={comment}>
                                    <div class="col-12 bg-success {}" style={comment}>
                                        <div class={styles.content}>
                                            <div class='flexitem2'>
                                                <div class="log_area">
                                                    <div class="log_item">
                                                        {
                                                            this.state.clients.map((i, j) =>
                                                                <div>
                                                                    <div class='row'>
                                                                        <div class='col'>
                                                                            <div class='row'>
                                                                                <div class='row'>
                                                                                    <div class='col-3 rounded-pill bg-warning text-center mt-2'>
                                                                                        <img src={star3} alt="" height="19"></img>
                                                                                    </div>
                                                                                </div>
                                                                                <div class='row ms-1 text-decoration-underline fw-bold'>
                                                                                    รีวิวอาหาร
                                                                                </div>
                                                                                <div class={styles.content} class='ms-2 mt-1'>
                                                                                    {i}
                                                                                </div>
                                                                            </div>
                                                                            <hr></hr>
                                                                            <div class='row'>
                                                                                <div class='row'>
                                                                                    <div class='col-12 '>
                                                                                        <form>
                                                                                            <div class="form-group">
                                                                                                <input class="form-control" id="exampleFormControlInput1" type="text"></input>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                </div>
                                                                                <div class='row border-bottom border-5 border-secondary'>
                                                                                    <div class='col-10'></div>
                                                                                    <div class='col-2 rounded-pill bg-success text-center mt-2 mb-2 btn btn-secondary'>
                                                                                        ตอบกลับ
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mt-3 ">
                                <Rg />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Review_3;