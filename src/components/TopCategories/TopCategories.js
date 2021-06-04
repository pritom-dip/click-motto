import Slider from "../Slider/Slider";
import styles from "./TopCategories.module.css";

const TopCategories = () => {

    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },

        ]
    };

    return (
        <section className="container category-container mb-5">
            <div className={`row p-2 px-3 ${styles.category_wrapper}`}>
                <h4 className="m-2 mb-3 mx-0">Top Categories</h4>

                {/* Slider for categories  */}
                <Slider settings={settings} />
            </div>
        </section>
    );
};

export default TopCategories;