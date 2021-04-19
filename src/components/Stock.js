import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';
import './css/Stock.css';

const Stock = ({ tickerSymbol }) => {

    const [ xValues, setXValues ] = useState();
    const [ stockOpenValues, setStockOpenValues ] = useState();
    const [ stockHighValues, setStockHighValues ] = useState();
    const [ stockLowValues, setStockLowValues ] = useState();
    const [ stockCloseValues, setStockCloseValues ] = useState();

    useEffect(() => {
        const fetchStock = async () => {
            let days = [];
            let openValues = [];
            let highValues = [];
            let lowValues = [];
            let closeValues = [];
            let API_Key = "84IK1K1X5LLTJN2L";
            let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${tickerSymbol}&outputsize=compact&apikey=${API_Key}`;

            try {
                const response = await fetch(API_Call);
                const responseData = await response.json();
                const data = responseData['Time Series (Daily)'];
					console.log(data);
					days = Object.keys(data);
					days.forEach((day) => {
                        openValues.push(data[day]['1. open']);
                        highValues.push(data[day]['2. high']);
                        lowValues.push(data[day]['3. low']);
						closeValues.push(data[day]['4. close']);
                    });
                
                setXValues(days);
                setStockOpenValues(openValues);
                setStockHighValues(highValues);
                setStockLowValues(lowValues);
                setStockCloseValues(closeValues);
            }
            catch (err) {
                console.log('Error');
            }
        };
        fetchStock();
    }, [ tickerSymbol ]
    );


    return (
        <div className="stock-container">
            { xValues && ( 
                <div>
                    <h2 className="h2">{`${tickerSymbol} stock history (last 100 days)`}</h2>

                    <Chart
						X={xValues}
						Y={stockOpenValues}
						tickerSymbol={tickerSymbol}
						label="Opening values in last 100 days"
					/>
                    <Chart
						X={xValues}
						Y={stockHighValues}
						tickerSymbol={tickerSymbol}
						label="High values in last 100 days"
					/>
                    <Chart
						X={xValues}
						Y={stockLowValues}
						tickerSymbol={tickerSymbol}
						label="Low values in last 100 days"
					/>
					<Chart
						X={xValues}
						Y={stockCloseValues}
						tickerSymbol={tickerSymbol}
						label="Closing values in last 100 days"
					/>
                </div>
            )}
        </div>
    );
};

export default Stock;