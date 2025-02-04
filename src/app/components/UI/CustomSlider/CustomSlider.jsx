import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.scss";

const CustomSlider = ({ items, maxItems = 5 }) => {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    dots: true,
    arrows: false,
  }

  return (
    <Slider className='custom-slider' {...settings}>
      {items.slice(0, maxItems).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
