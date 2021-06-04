import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "react-slick";
import { categoriesData } from "../../utils/categoriesData"

const Slider = ({ settings }) => {

    return (
        <div>
            <Sliders {...settings}>
                {
                    categoriesData?.map(category => {
                        return (
                            <div style={{ margin: '10px' }} key={category?.id}>
                                <img src={category?.image} className="img-fluid" />
                            </div>
                        )
                    })
                }
            </Sliders>
        </div>
    );
};

export default Slider;