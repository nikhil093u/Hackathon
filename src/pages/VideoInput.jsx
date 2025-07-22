import React from "react";

export default function VideoInput({ width, height }) {
  const inputRef = React.useRef();
  const [source, setSource] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSource(url);
    }
  };

  const handleChoose = () => {
    inputRef.current.click();
  };

  return (
    <div className="w-full" style={{ maxWidth: width }}>
      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept=".mov,.mp4"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Choose button */}
      {!source && (
        <button
          onClick={handleChoose}
          className="w-full py-3 px-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
          type="button"
        >
          Choose video file
        </button>
      )}

      {/* Video preview */}
      {source && (
        <video
          width="100%"
          height={height}
          controls
          src={source}
          className="rounded-md"
        />
      )}

      {/* Footer text */}
      <div className="mt-2 text-gray-600 text-sm min-h-[1.25rem]">
        {!source ? "No file chosen" : "Video ready to submit"}
      </div>
    </div>
  );
}
