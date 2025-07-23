import React, { useState } from "react";
import VideoInput from "./VideoInput";

export default function Submission() {
  const [data, setData] = useState({
    title: "",
    desc: "",
    github: "",
    video:null
  });

  const handleVideoSelect = (videoFile) => {
  setData((prev) => ({
    ...prev,
    video: videoFile,
  }));
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!data.video) {
    alert("Please upload a video before submitting.");
    return;
  }
    console.log(data);

    setData({
      title: "",
      desc: "",
      github: "",
      video:""
    });
  };

  return (
    <div className="min-h-full my-6 max-w-md mx-auto p-2 bg-gray-100 rounded-lg shadow-md text-center font-sans">
      <h1 className="text-3xl font-semibold text-gray-800 mb-2 cursor-default">
        Video Upload
      </h1>

      <form onSubmit={handleSubmission}>
        <div className="inline-block border-2 border-gray-300 rounded-lg overflow-hidden mb-2 cursor-default">
          <VideoInput width={400} height={400} onVideoSelect={handleVideoSelect} />
        </div>

        <label className="block mb-2 text-gray-700 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Add Your Project Title"
          className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="video-description" className="block mb-2 text-gray-700 font-medium">
          Video Description
        </label>
        <textarea
          id="video-description"
          name="desc"
          value={data.desc}
          onChange={handleChange}
          placeholder="Add a description for your video..."
          rows={2}
          className="w-full p-3 mb-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 text-gray-700 font-medium">GitHub</label>
        <input
          type="url"
          name="github"
          value={data.github}
          onChange={handleChange}
          placeholder="Add Your GitHub Repo Link"
          className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 mx-auto block cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
