import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class sales_g extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
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

        );
    }
}

export default sales_g;