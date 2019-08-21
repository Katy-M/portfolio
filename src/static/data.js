import React from 'react';
import Project from '../components/Project'

const data = {
    aboutText: "Hello! My name is Katy. A little about myself - I am a student majoring in Game Design and Development at Rochester Institute of Technology. I have a zeal for coding engaging projects and I am eager to learn new ways to improve a user's experience through technology. C# is my strongest programming language, but I am reaching out to encompass other languages such as Javascript, C++, and Python.",
    topbarTitle: "Published Levels and Mods for Existing Titles",
    topbarProjects: [
        <Project
            key='1'
            altText="Documentation for Brumal Passage"
            title="Brumal Passage"
            img={require("../static/imgs/brumal-passage.jpg")}
            shortDesc="The Elder Scrolls V: Skyrim (Creation Kit)"
            fullDesc="I prototyped and created this level for Skyrim using Adobe Photoshop (for the layout map) and the Creation Kit. One of my high-level goals was to 
                    practice implementing a space appropriate for radiant quests and hooking up any required functionality to do so through the editor.
                    I also experimented with optimally combining different asset kits to create an atmospheric dungeon
                    that fits well with the world. I created a five-part video series documenting my design process from the first prototype
                    to the published level. The level can be added to a Steam copy of Skyrim through the Workshop, linked below."
            videoEmbed="https://www.youtube.com/embed/videoseries?list=PLDFNbfZMUL-IMB0jancS_dxEMBOSEv44r;controls=0"
            link="https://steamcommunity.com/sharedfiles/filedetails/?id=1730964124"
            linkText="View on Steam Workshop"
            link2={require("../static/sk-ldd.pdf")}
            link2Text="View design document"
        />,
        <Project
            key='2'
            altText="Documentation for Long Shadows"
            title="Long Shadows"
            img={require("../static/imgs/long-shadows.jpg")}
            shortDesc="Far Cry 5 (Arcade Editor)"
            fullDesc="I planned and designed this level for Far Cry 5 using Adobe Photoshop (for mapping) and the Arcade Editor.
            I designed this level to practice using light in guiding the player and creating a space that provides options for different
            playstyles. I created a three-part video series documenting my process and I've included my design document as well, which
            includes my layout map. The map can be played through Far Cry 5's Arcade mode on the PC."
            videoEmbed="https://www.youtube.com/embed/videoseries?list=PLDFNbfZMUL-K10leAH0-QguDcZGIlbN8z&amp;controls=0"
            link="https://far-cry-arcade.ubi.com/en-us/pc/map/5c8e86fea7e139219867b460"
            linkText="View on Far Cry Arcade (requires user login)"
            link2={require("../static/fc-ldd.pdf")}
            link2Text="View design document"
        />,
    ],
    midbarTitle: "Bar 2",
    midbarProjects: [
        <Project
            key='4'
            title="Project 4"
            img={require("../static/imgs/long-shadows.jpg")}
            shortDesc="Placeholder description goes here."
        />,
        <Project
            key='5'
            title="Project 5"
            img={require("../static/imgs/long-shadows.jpg")}
            shortDesc="Placeholder description goes here."
        />,
    ],
}

export default data