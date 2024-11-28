import React, { useEffect, useState } from "react";
import { fetchStories } from "../api";
import { useNavigate } from "react-router-dom";
import './Home.css'

const IMAGE_BASE_URL = "https://ik.imagekit.io/dev24/";

const Home = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const loadStories = async () => {
            const data = await fetchStories();
            setStories(data);
            setLoading(false);
        };
        loadStories();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="home-container">
             <div className="hero-section">
                <h1>Science Fiction Stories</h1>
                <div className="button-row">
                    <button className="status-button">New</button>
                    <button className="status-button">In Progress</button>
                    <button className="status-button">Complete</button>
                    <button className="status-button">Clear All</button>
                </div>
            </div>

            {/* Story Grid */}
            <div className="card-grid">
                {stories.length > 0 ? (
                    stories.map((story) => (
                        <div
                            className="card"
                            key={story._id}
                            onClick={() => navigate(`/story/${story._id}`)}
                        >
                            <img
                                src={
                                    story.Image?.[0]
                                        ? `${IMAGE_BASE_URL}${story.Image[0]}`
                                        : "https://via.placeholder.com/300"
                                }
                                alt={story.Title || "No Image"}
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300";
                                }}
                            />
                            <h2>{story.Title}</h2>
                            <h3>{story.Storyadvenure?.Storytitle || "No Subtitle"}</h3>
                        </div>
                    ))
                ) : (
                    <p>No stories available.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
