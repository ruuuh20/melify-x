import React from 'react';
import './Chart.css'

const Chart = (props) => {
    return (
        <div className="chart-wrapper">
            <div className="chart">
                <div>Chart</div>
                <div className="">
                    <div className="list-wrap">
                        <ul>
                            {props.chart.map((track, index) => (
                                <li className="rank_item">
                                    <div className="rank_number nth">
                                        <span className="rank">{index + 1}</span>
                                    </div>
                                    <div className="rank_cntt">
                                        <div className="rank_info">
                                            <span className="song">{track.track.album.name}</span>
                                            <div className="artist">
                                                <div className="ellipsis">

                                                {track.track.artists[0].name}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                          
                                
                                </li>
                            ))}
                            


                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chart;