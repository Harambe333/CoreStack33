const courseData = {
    "1": { title: "Introduction", videoId: "dQw4w9WgXcQ", section: "Foundations", notes: "Welcome to the course!" },
    "2": { title: "Core Concepts", videoId: "videoId2", section: "Foundations", notes: "Deep dive into the basics." },
    // ... repeat until 33
    "33": { title: "Graduation", videoId: "videoId33", section: "Mastery", notes: "You made it!" }
};

// Simple Logic to fill the template
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || "1";
    const lesson = courseData[id];

    if (lesson) {
        document.getElementById('lesson-title').innerText = lesson.title;
        document.getElementById('lesson-section').innerText = lesson.section;
        document.getElementById('lesson-notes').innerText = lesson.notes;
        document.getElementById('video-frame').src = `https://www.youtube.com/embed/${lesson.videoId}`;
    }
};