import React from 'react';
import './Chart.css'

const Chart = (props) => {
    return (
        <div className="chart-wrapper">
            <div class="chart">
                <div>Chart</div>
                <div class="chart-wrapper">
                    <div class="list-wrap">
                        <ul>
                            {props.chart.map(track => (
                                <li>{track.track.album.name}</li>
                            ))}
                            <li class="rank_item active">
                                <div class="rank_number nth1">
                                    <p>1</p>
                                </div>

                            </li>

                            <li class="rank_item odd">
                                <div class="rank_number nth2">
                                    <p>2</p>
                                </div>

                            </li>

                            <li class="rank_item">
                                <div class="rank_number nth3">
                                    <p>3</p>
                                </div>


                            </li>

                            <li class="rank_item odd">
                                <div class="rank_number nth4">
                                    <p>4</p>
                                </div>


                            </li>

                            <li class="rank_item">
                                <div class="rank_number nth5">
                                    <p>5</p>




                                </div>

                            </li>

                            <li class="rank_item odd">
                                <div class="rank_number nth6">
                                    <p>6</p>


                                </div>

                            </li>

                            <li class="rank_item">
                                <div class="rank_number nth7">
                                    <p>7</p>

                                </div>

                            </li>

                            <li class="rank_item odd">
                                <div class="rank_number nth8">

                                    <p>8</p>


                                </div>

                            </li>

                            <li class="rank_item">
                                <div class="rank_number nth9">
                                    <p>9</p>
                                </div>

                            </li>

                            <li class="rank_item odd">
                                <div class="rank_number nth10">
                                    <p>10</p>


                                </div>

                            </li>


                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chart;