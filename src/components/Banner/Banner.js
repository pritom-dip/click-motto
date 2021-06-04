import SearchForm from "../SearchForm/SearchForm";
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <section className="mx-5">
            <div className={`hero-banner-wrapper d-flex justify-content-center align-items-center ${styles.bannerBg}`}>
                <div className="w-50 mx-5 hero-banner">
                    <h2 className="text-white font-bold px-2 px-4">
                        Your local source of high quality images and videos directly from their creators</h2>

                    <SearchForm />
                </div>
            </div>
        </section>
    );
};

export default Banner;