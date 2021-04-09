import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
class review_g extends Component {
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
        );
    }
}

export default review_g;