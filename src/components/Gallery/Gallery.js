import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../store/actions/galleryActions';
import Categories from '../Categories/Categories';
import "./Gallery.css";

const AllCategories = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Photos"
    },
    {
        id: 3,
        name: "Videos"
    },
    {
        id: 4,
        name: "Freebies"
    },
    {
        id: 5,
        name: "360"
    },
];

const Gallery = () => {
    const [categories] = useState(AllCategories);
    const dispatch = useDispatch();
    const gallaries = useSelector(state => state.galleries);
    const [loader, setLoader] = useState(true);
    const [video, setVideo] = useState(false);

    useEffect(() => {
        dispatch(getAllData());
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    }, []);

    const handleFilteredItems = name => {
        if (name === "Videos") {
            setVideo(true);
        } else {
            setVideo(false);
        }
        setLoader(true);
        dispatch(getAllData(name.toLowerCase()));
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    }

    return (
        <section className="container gallery-wrapper mb-5">
            <div className="row">
                <div className="d-flex">
                    <Categories handleFilteredItems={handleFilteredItems} categories={categories} />
                    {/* <Sorting /> */}
                </div>

                {
                    loader ? (
                        <div className="d-flex m-5 justify-content-center align-items-center">
                            <div className="spinner-border" role="status">
                            </div>
                        </div>
                    ) : (
                            <div className="gallery_container">
                                <div className="gallery_row">
                                    {
                                        gallaries?.map((gallery, index) => {
                                            return (
                                                <div key={index} className="item">
                                                    {
                                                        video ? <video src={gallery?.video_files?.link} controls><source src={gallery?.video_files?.[0].link} type="video/mp4"></source></video> : <img src={gallery?.src?.portrait} alt="" />
                                                    }

                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                }

            </div>
        </section>
    );
};

export default Gallery;