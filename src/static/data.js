import React from 'react';
import Project from '../components/Project'

const data = {
    aboutText: `Hello! My name is Katy Mollenkopf. I am a senior-level (fourth-year) student at Rochester Institute of Technology pursing a 
        Bachelor of Science degree in Game Design and Development. My primary skills lie in programming with C++, JavaScript, and C#, but I also have 
        experience working in Unity (both 2D and 3D) and I am currently studying Unreal Engine. While I love to code (particularly 
        for game development) I am especially drawn to game and level design – working with teams of programmers, artists, 
        and other designers to turn a common vision into a memorable experience for players. I have an insatiable desire to 
        grow my skillset and learn new technologies, and I am always looking for ways to improve and connect with others. 
        Below, I have posted links to my LinkedIn, GitHub, and NexusMods profiles, as well as my blog on level design, in addition to 
        a contact page and a .pdf of my resume.`,
    midbarTitle: "Published Levels and Mods for Existing Titles",
    midbarProjects: [
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
                    to the published level. The level can be added to a Steam copy of Skyrim through the Workshop, linked below.
                    I primarily worked on this level in April 2019."
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
            includes my layout map. The map can be played through Far Cry 5's Arcade mode on the PC.
            Development spanned late February - March 2019."
            videoEmbed="https://www.youtube.com/embed/videoseries?list=PLDFNbfZMUL-K10leAH0-QguDcZGIlbN8z&amp;controls=0"
            link="https://far-cry-arcade.ubi.com/en-us/pc/map/5c8e86fea7e139219867b460"
            linkText="View on Far Cry Arcade (requires user login)"
            link2={require("../static/fc-ldd.pdf")}
            link2Text="View design document"
        />,
    ],
    topbarTitle: "Independent Projects (Unity and Otherwise)",
    topbarProjects: [
        <Project
            key='4'
            title="Procedural Generation Tool (with Modular Assets)"
            img={require("../static/imgs/modular-unity.jpg")}
            shortDesc="Unity 3D"
            fullDesc="Using Maya to model and import simple assests, I am working on coding an algorithm that will randomly generate a space
            using the asset prefabs I assign to it and render that space in a Unity scene. My primary goal for this project is to practice
            working with metrics and improve my skills in 3D modeling/texturing. I also aim to better understand procedural generation and
            how I can modify the algorithm to better suit different gameplay or space purposes.
            I am independently working on this project outside of my classes."
            videoEmbed=""
            link=""
            linkText=""
            link2=""
            link2Text=""
        />,
        <Project
            key='5'
            title="Vault Prisoner"
            img={require("../static/imgs/vault.jpg")}
            shortDesc="MonoGame (With Visual Studio 2015)"
            fullDesc="For this project, I fully designed and programmed (in C#) a timed Rougelike where the player must traverse five
            procedurally-generated maps to find two keys to escape a dangerous vault. The vault contains various hazards,
            such as traps and monsters, but there are also tools the player can find to increase their own chances of escape.
            I independently completed this long-term project to not only better my programming skills, but also to practice 
            implementing and balancing game mechanics outside of my classes. Primary development took place August 2017 - May 2018."
            videoEmbed=""
            link=""
            linkText=""
            link2=""
            link2Text=""
        />,
    ],
}

export default data