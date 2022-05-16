import React from 'react';
import { Line } from '@ant-design/charts';
import './style.scss';

interface IProps {
    chartData: any[];
}

interface IStates { }

class Chart extends React.Component<IProps, IStates> {
    state = {}

    render() {
        const { chartData } = this.props;
        const config = {
            // autoFit: true,
            height: 250,
            data: chartData,
            xField: 'year',
            yField: 'value',
            label: {},
            point: {
                size: 2,
                shape: 'diamond',
                style: {
                    fill: 'white',
                    stroke: '#5B8FF9',
                    lineWidth: 2,
                },
            },
            tooltip: { showMarkers: false },
            state: {
                active: {
                    style: {
                        shadowBlur: 4,
                        stroke: '#000',
                        fill: 'red',
                    },
                },
            },
            interactions: [{ type: 'marker-active' }],
        };
        return (
            <div className="line-chart-component-box">
                <Line {...config} />
            </div>
        );
    }
}

export default Chart;
