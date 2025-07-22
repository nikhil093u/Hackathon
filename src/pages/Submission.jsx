import React from "react";
import VideoInput from "./VideoInput";

export default function Submission() {
  return (
    <div className="min-h-full my-6 max-w-md mx-auto  p-6 bg-gray-100 rounded-lg shadow-md text-center font-sans">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 cursor-default">
        Video Upload
      </h1>
      <div className="inline-block border-2 border-gray-300 rounded-lg overflow-hidden mb-6 cursor-default">
        <VideoInput width={400} height={400} />
      </div>
      <label
        htmlFor="video-description"
        className="block mb-2 text-gray-700 font-medium"
      >
        Video Description
      </label>
      <textarea
        id="video-description"
        // value={description}
        // onChange={handleDescriptionChange}
        placeholder="Add a description for your video..."
        rows={4}
        className="w-full p-3 mb-6 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 mx-auto block cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}
