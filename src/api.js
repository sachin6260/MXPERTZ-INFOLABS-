 
export const fetchStories = async () => {
    try {
        const response = await fetch("https://mxpertztestapi.onrender.com/api/sciencefiction");
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching stories:", error);
        return [];
    }
};

export const fetchStoryDetails = async (id) => {
    try {
        const response = await fetch(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching story details:", error);
        return null;
    }
};
