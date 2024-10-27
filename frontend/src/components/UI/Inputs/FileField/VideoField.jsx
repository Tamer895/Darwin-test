import React, { useState } from 'react';

export default function VideoField({ ...props }) {
    const [video, setVideo] = useState(null);
    const [videoTitle, setVideoTitle] = useState("");

    function videoName(e) {
        const selectedFile = e.target.files[0];

        // Additional checks can be added here for video file type/size if needed
        if (selectedFile && selectedFile.type.startsWith('video/')) {
            const fileName = selectedFile.name;
            setVideoTitle(fileName);
            props.setVideo(selectedFile);
            props.setURL(URL.createObjectURL(selectedFile));
        } else {
            alert("Please select a valid video file.");
        }
    }

    return (
        <div className={`relative inline-block ${props.className}`}>
            <label
                htmlFor="file-upload-video"
                className={`block flex-center h-12 px-4 text-sm text-white bg-primary-def rounded-md cursor-pointer text-center leading-12`}
            >
                {videoTitle == "" ? 'Выберите видео файл' : videoTitle}
            </label>
            <input
                {...props.required}
                id="file-upload-video"
                onChange={videoName}
                type="file"
                accept="video/*"
                className="hidden"
            />
        </div>
    );
}
