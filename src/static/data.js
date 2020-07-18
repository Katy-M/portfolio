import React from 'react';
import Project from '../components/Project'

const data = {
    aboutText: `Hello! My name is Katy Mollenkopf. I will graduate college with a bachelor's degree in game development by the end of Summer 2020. 
        My primary skills lie in programming with C++, JavaScript, and C#, but I also have 
        experience working in Unity (both 2D and 3D) and I am currently studying Unreal Engine 4. While I love to code (particularly 
        for game development) I am especially drawn to game and level design – working with teams of programmers, artists, 
        and other designers to turn a common vision into a memorable experience for players. I have an insatiable desire to 
        grow my skillset and learn new technologies, and I am always looking for ways to improve and connect with others. 
        Below, I have posted links to my LinkedIn, GitHub, and NexusMods profiles, as well as my blog on level design, in addition to 
        a contact form and a .pdf of my resume.`,
    topbarTitle: "Highlighted Games and Levels",
    topbarProjects: [
        <Project
            key='1'
            featured='true'
            title='The Corridors of Chernobog'
            img={require("../static/imgs/coc.PNG")}
            shortDesc="Unreal Engine 4"
            fullDesc="Using Unreal Engine 4, I am designing a level from scratch based on a custom adaptation of The Little Red Riding Hood fairytale narrative. I started this project in my Real-Time Design class in fall 2019. Currently, the game is functional, but I am going to add some of the gameplay features I mention in my design document, refine the enemy AI, and improve upon my work based on feedback."
            videoEmbed="https://www.youtube.com/embed/FYKfjppDI-8"
            link={require("../static/coc-ldd.pdf")}
            linkText="View design document"
            link2=""
            link2Text=""
        />,
        <Project
            key='2'
            altText="Documentation for Brumal Passage"
            title="Brumal Passage"
            img={require("../static/imgs/brumal-passage.jpg")}
            shortDesc="The Elder Scrolls V: Skyrim (Creation Kit)"
            fullDesc="I prototyped and created this level for Skyrim using Adobe Photoshop (for the layout map) and the Creation Kit. One of my high-level goals was to practice implementing a space appropriate for radiant quests and hooking up any required functionality to do so through the editor. I also experimented with optimally combining different asset kits to create an atmospheric dungeon that fits well with the world. I created a five-part video series documenting my design process from the first prototype to the published level. I primarily worked on this level in April 2019."
            videoEmbed="https://www.youtube.com/embed/videoseries?list=PLDFNbfZMUL-IMB0jancS_dxEMBOSEv44r;controls=0"
            link="https://steamcommunity.com/sharedfiles/filedetails/?id=1730964124"
            linkText="View on Steam Workshop"
            link2={require("../static/sk-ldd.pdf")}
            link2Text="View design document"
        />,
        <Project
            key='3'
            altText="Documentation for Long Shadows"
            title="Long Shadows"
            img={require("../static/imgs/long-shadows.jpg")}
            shortDesc="Far Cry 5 (Arcade Editor)"
            fullDesc="I planned and designed this level for Far Cry 5 using Adobe Photoshop (for mapping) and the Arcade Editor. I designed this level to practice using light in guiding the player and creating a space that provides options for different playstyles. I created a three-part video series documenting my process and I've included my design document as well, which includes my layout map. The map can be played through Far Cry 5's Arcade mode on the PC. Development spanned late February - March 2019."
            videoEmbed="https://www.youtube.com/embed/videoseries?list=PLDFNbfZMUL-K10leAH0-QguDcZGIlbN8z&amp;controls=0"
            link="https://far-cry-arcade.ubi.com/en-us/pc/map/5c8e86fea7e139219867b460"
            linkText="View on Far Cry Arcade (requires user login)"
            link2={require("../static/fc-ldd.pdf")}
            link2Text="View design document"
        />,
        <Project
            key='4'
            title="Vault Prisoner"
            img={require("../static/imgs/vault.jpg")}
            shortDesc="MonoGame (With Visual Studio)"
            fullDesc="For this project, I fully designed and programmed (in C#) a timed Rougelike where the player must traverse five procedurally-generated maps to find two keys to escape a dangerous vault. The vault contains various hazards, such as traps and monsters, but there are also tools the player can find to increase their own chances of escape. I independently completed this long-term project to not only better my programming skills, but also to practice implementing and balancing game mechanics outside of my classes. Primary development took place August 2017 - May 2018."
            videoEmbed=""
            link="https://github.com/Katy-M/Source-Vault-Prisoner"
            linkText="View on GitHub"
            link2=""
            link2Text=""
        />,
    ],
}

export default data