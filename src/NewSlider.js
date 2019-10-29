import React from "react";
import Slider from "react-slick";
import './NewSlider.css'

class NewSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            slidesToShow:1,
            variableWidth: true,
            rows: 2,
            slidesPerRow: 3
        };
        return (
            <Slider {...settings}>
                {this.props.children}
            </Slider>
        );
    }
}

export default NewSlider;

