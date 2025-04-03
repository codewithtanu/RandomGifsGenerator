import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [tag, setTag] = useState('');
    const { fetchdata, gif, loading } = useGif(tag);

    return (
        <div className="w-1/3 h-[450px] bg-blue-300 rounded-lg border border-black flex flex-col items-center gap-y-4 mt-4 p-4">
            {/* Title */}
            <h1 className="mt-2 text-2xl underline uppercase font-bold text-center">
                Random {tag} Gif
            </h1>

            {/* GIF Container */}
            <div className="w-[90%] h-[250px] flex items-center justify-center overflow-hidden rounded-lg bg-white">
                {loading ? (
                    <Spinner />
                ) : (
                    <img src={gif} className="max-w-full h-auto object-contain rounded-lg" alt="Random GIF" />
                )}
            </div>

            {/* Input Field */}
            <input
                className="w-10/12 text-lg py-2 px-3 rounded-lg border border-gray-400 outline-none"
                placeholder="Enter tag..."
                onChange={(event) => setTag(event.target.value)}
            />

            {/* Generate Button */}
            <button
                onClick={() => fetchdata(tag)}
                className="w-10/12 bg-yellow-300 text-lg py-2 rounded-lg hover:bg-yellow-400 transition"
            >
                Generate
            </button>
        </div>
    );
};

export default Tag;
