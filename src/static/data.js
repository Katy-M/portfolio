import React from 'react';
import Project from '../components/Project'

const data = {
    aboutText: "Hello! My name is Katy. A little about myself - I am a student majoring in Game Design and Development at Rochester Institute of Technology. I have a zeal for coding engaging projects and I am eager to learn new ways to improve a user's experience through technology. C# is my strongest programming language, but I am reaching out to encompass other languages such as Javascript, C++, and Python.",
    topbarProjects: [
        <Project
            title="Project 1"
            img={require("../static/avatar.jpg")}
            shortDesc="Placeholder description goes here."
        />,
        <Project
            title="Project 2"
            img={require("../static/avatar.jpg")}
            shortDesc="Placeholder description goes here."
        />,
        <Project
            title="Project 3"
            img={require("../static/avatar.jpg")}
            shortDesc="Placeholder description goes here."
        />,
    ],
    midbarProjects: [
        <Project
            title="Project 4"
            img={require("../static/avatar.jpg")}
            shortDesc="Placeholder description goes here."
        />,
        <Project
            title="Project 5"
            img={require("../static/avatar.jpg")}
            shortDesc="Placeholder description goes here."
        />,
    ],
}

export default data