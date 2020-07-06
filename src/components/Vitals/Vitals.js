import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';

class Vitals extends Component {

    state = {
        chartData: {}
    }

    componentDidMount () {
        this.getChartData();
    }

    getChartData = () => {
        this.setState({
            chartData: {
                labels: ['00:00', '05:00', '10:00', '15:00', '20:00'],
                datasets: [
                    {
                        label: 'Temperature',
                        data: [ 27, 25, 28, 35, 40 ],
                        backgroundColor: [
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(255, 99, 132, 0.6)']
                    }
                ]
            }
        })
    }


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
    }


    render () {
        return (
            <div>
        <Line
          data={(this.state.chartData)? this.state.chartData: ''}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Temperature For Patient',
              fontSize:25
            },
            maintainAspectRatio: false,
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        height={100}
        width={100}
        />

        <Bar
          data={(this.state.chartData)? this.state.chartData: ''}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Temperature For Patient',
              fontSize:25
            },
            maintainAspectRatio: false,
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        height={50}
        width={50}
        />
            </div>
        )
    }

}


export default Vitals;
