const courseData = {
    // SECTION 1: FOUNDATIONS
    "1": { title: "Introduction", videoId: "dQw4w9WgXcQ", section: "Foundations", notes: "Welcome! Here is what to expect." },
    "2": { title: "Core Concepts", videoId: "videoId2", section: "Foundations", notes: "Establishing the bedrock of our strategy." },
    "3": { title: "Setup & Tools", videoId: "videoId3", section: "Foundations", notes: "Everything you need to get started." },
    "4": { title: "First Steps", videoId: "videoId4", section: "Foundations", notes: "Taking your first actions today." },
    "5": { title: "Fundamentals A", videoId: "videoId5", section: "Foundations", notes: "Deep dive into fundamental theory." },
    "6": { title: "Fundamentals B", videoId: "videoId6", section: "Foundations", notes: "Part two of our fundamental deep dive." },
    "7": { title: "Applied Basics", videoId: "videoId7", section: "Foundations", notes: "Putting theory into practice." },
    "8": { title: "Common Pitfalls", videoId: "videoId8", section: "Foundations", notes: "Avoid these common beginner mistakes." },
    "9": { title: "Reviewing Concepts", videoId: "videoId9", section: "Foundations", notes: "Connecting the dots so far." },
    "10": { title: "Mini-Project", videoId: "videoId10", section: "Foundations", notes: "A quick win to test your knowledge." },
    "11": { title: "Section 1 Wrap-up", videoId: "videoId11", section: "Foundations", notes: "Getting ready for the advanced stage." },

    // SECTION 2: ADVANCED MECHANICS
    "12": { title: "Deep Dive", videoId: "videoId12", section: "Advanced Mechanics", notes: "Exploring advanced nuances." },
    "13": { title: "Complex Systems", videoId: "videoId13", section: "Advanced Mechanics", notes: "How different parts work together." },
    "14": { title: "Optimization", videoId: "videoId14", section: "Advanced Mechanics", notes: "Making your workflow faster and better." },
    "15": { title: "Strategies A", videoId: "videoId15", section: "Advanced Mechanics", notes: "High-level strategic planning." },
    "16": { title: "Strategies B", videoId: "videoId16", section: "Advanced Mechanics", notes: "Advanced execution techniques." },
    "17": { title: "Case Study 1", videoId: "videoId17", section: "Advanced Mechanics", notes: "Real world example breakdown." },
    "18": { title: "Case Study 2", videoId: "videoId18", section: "Advanced Mechanics", notes: "Another real world application." },
    "19": { title: "Automation", videoId: "videoId19", section: "Advanced Mechanics", notes: "Scaling your efforts through automation." },
    "20": { title: "Troubleshooting", videoId: "videoId20", section: "Advanced Mechanics", notes: "What to do when things go wrong." },
    "21": { title: "Live Application", videoId: "videoId21", section: "Advanced Mechanics", notes: "Watching the system in real-time." },
    "22": { title: "Section 2 Wrap-up", videoId: "videoId22", section: "Advanced Mechanics", notes: "Preparing for the Mastery phase." },

    // SECTION 3: MASTERY
    "23": { title: "Pro Techniques", videoId: "videoId23", section: "Mastery", notes: "Techniques used by the top 1%." },
    "24": { title: "Scaling Up", videoId: "videoId24", section: "Mastery", notes: "How to go from small to massive." },
    "25": { title: "Future Proofing", videoId: "videoId25", section: "Mastery", notes: "Ensuring long-term success." },
    "26": { title: "Expert Interviews", videoId: "videoId26", section: "Mastery", notes: "Insights from industry leaders." },
    "27": { title: "Resource Management", videoId: "videoId27", section: "Mastery", notes: "Handling your assets efficiently." },
    "28": { title: "Security & Compliance", videoId: "videoId28", section: "Mastery", notes: "Protecting your business and brand." },
    "29": { title: "Final Project Intro", videoId: "videoId29", section: "Mastery", notes: "Overview of your graduation project." },
    "30": { title: "Final Project Build", videoId: "videoId30", section: "Mastery", notes: "Step-by-step build along." },
    "31": { title: "Final Project Review", videoId: "videoId31", section: "Mastery", notes: "Checking your final work." },
    "32": { title: "Next Steps", videoId: "videoId32", section: "Mastery", notes: "Where to go from here." },
    "33": { title: "Graduation", videoId: "videoId33", section: "Mastery", notes: "You've officially mastered the course!" }
};

// Logic to fill the template
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || "1";
    const lesson = courseData[id];

    if (lesson) {
        document.getElementById('lesson-title').innerText = lesson.title;
        document.getElementById('lesson-section').innerText = lesson.section;
        document.getElementById('lesson-notes').innerText = lesson.notes;
        document.getElementById('video-frame').src = `https://www.youtube.com/embed/${lesson.videoId}`;
    } else {
        // Fallback if ID is invalid
        document.body.innerHTML = "<h1>Lesson not found</h1><a href='dashboard.html'>Return to Dashboard</a>";
    }
};
