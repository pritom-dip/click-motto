import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { getAllData } from "../../store/actions/galleryActions";

const SearchForm = () => {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();
    const searchingData = (inputText, e) => {
        e.preventDefault();
        dispatch(getAllData(inputText));
    }

    return (
        <form onSubmit={(e) => searchingData(inputText, e)} className="mt-3 w-full px-2">
            <div className="d-flex position-relative">
                <input type="text"
                    className="form-control w-100 rounded-pill"
                    placeholder="Search Photos and Videos"
                    onChange={(e) => setInputText(e.target.value)} />
                <button className={`rounded-pill position-absolute ${styles.search_button}`} type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </form>
    );
};

export default SearchForm;