import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import './css/Chart.css';

const Chart = ({ X, Y, label }) => {

    useEffect(() => {}, [ X, Y ]);

    return (
        <div className="plot">
            <Plot
				data={[
					{
						x: X,
						y: Y,
						type: 'scatter',
						mode: 'lines+markers',
						marker: { color: 'red' }
					}
				]}
				layout={{width: 720, height: 440, title: label }}
			/>
            
        </div>
    );
};

export default Chart;