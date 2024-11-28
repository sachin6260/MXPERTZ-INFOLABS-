import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchStoryDetails } from "../api";
import HeroPage from "../components/HeroPage";  

const IMAGE_BASE_URL = "https://ik.imagekit.io/dev24/";

const StoryDetails = () => {
    const { id } = useParams();  
    const [storyDetails, setStoryDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStoryDetails = async () => {
            try {
                const data = await fetchStoryDetails(id);  
                setStoryDetails(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching story details:", error);
                setLoading(false);
            }
        };

        loadStoryDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!storyDetails) return <p>No story details available.</p>;

    // Extracting data for rendering
    const { Wordexplore } = storyDetails;

    return (
        <div className="story-details">
             <HeroPage />

 
             {Wordexplore && Wordexplore.length > 0 ? (
                <div className="card-grid">
                    {Wordexplore.map((item, index) => (
                        <div key={item._id || index} className="card">
                            <h3>{item.Storytitle || "No Title Available"}</h3>
                            <p><strong>Description:</strong> {item.Storyitext || "No Description Available"}</p>
                            <p><strong>Text:</strong> {item.Storyttext || "No Text Available"}</p>
                            <p><strong>Synonyms:</strong> {item.Synonyms || "No Synonyms Available"}</p>
                            <p><strong>Antonyms:</strong> {item.Antonyms || "No Antonyms Available"}</p>
                            <p><strong>Noun:</strong> {item.Noun || "No Noun Available"}</p>

                            {item.Storyimage && item.Storyimage.length > 0 && (
                                <div className="image-container">
                                    <img
                                        src={`${IMAGE_BASE_URL}${item.Storyimage[0]}`}
                                        alt={item.Storytitle || "Story Image"}
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/300";  
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No additional details available.</p>
            )}
        </div>
    );
};

export default StoryDetails;
