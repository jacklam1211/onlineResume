import React, { useEffect, useState } from 'react';

function ContentDisplay() {
    return <>
        <div className="grid grid-rows-2 ">
            <div className="flex h-screen flex-col justify-center p-4" id="intro">
                <Introduction />
            </div>
            <div className="flex h-screen flex-col justify-center p-4" id="experience">
                <Educations />
                <br />
                <WorkExperience />
            </div>
            <div className="flex h-screen flex-col justify-center p-4" id="skill">
                <SkillSet />
                <br />
                <Language />
            </div>
        </div>

    </>
}

function Introduction() {
    return <div className='text-4xl lg:text-7xl lg:text-left'>
        <p>Hello World!</p>
        <p>I am Jack Lam</p>
        <p>A <span className="underline">Software Developer</span></p>
    </div>
}

function Educations() {
    return <div>
        <p className='text-3xl lg:text-5xl text-left'>Education History</p>
        <div className='text-lg lg:text-2xl text-left lg:my-2.5'>
            <p className="font-semibold">Bachelor (Hons) in Electronic and Information Engineering</p>
            <p>The Hong Kong Polytechnic University</p>
            <p>2018 - 2022</p>
            <p>Hong Kong</p>
        </div>
    </div>
}

function WorkExperience() {
    return <div>
        <p className='text-3xl lg:text-5xl text-left'>Work Experience</p>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">Associate Technology Consultant, IBM</p>
            <p>Jul 2022 - Now</p>
            <p>Hong Kong</p>
        </div>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">Summer Internship, CLP</p>
            <p>Jul 2021 - Sep 2021</p>
            <p>Hong Kong</p>
        </div>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">Project Coordinator, Hong Kong RFID</p>
            <p>Jul 2020 - Jun 2021, Oct 2021 - May 2022</p>
            <p>Hong Kong</p>
        </div>
    </div>
}

function SkillSet() {
    return <div>
        <p className='text-3xl lg:text-5xl text-left'>Skill Set</p>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">Java</p>
            <p>Spring, Spring Boot and Hibernate</p>
        </div>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">SQL and NoSQL</p>
            <p>MongoDB, MySQL and OracleDB</p>
        </div>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">Python</p>
            <p>Pytorch, Pandas and Matplotlib</p>
        </div>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">JavaScript</p>
            <p>React.js</p>
        </div>
    </div>
}

function Language() {
    return <div>
        <p className='text-3xl lg:text-5xl text-left'>Language</p>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">Cantonese</p>
        </div>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">English</p>
        </div>
        <div className='text-lg lg:text-2xl text-left my-2.5'>
            <p className="font-semibold">Mandarin</p>
        </div>
    </div>
}

function ScrollPosition() {

    const [offset, setOffset] = useState(0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // console.log(vh)
    // console.log(offset);
    const [red, green, blue] = [255, 255, 255]
    if(offset<=vh){
        window.addEventListener('scroll', () => {
            const y = 1 + (window.scrollY || window.pageYOffset)
            const [r, g, b] = [red - y, green - y, blue - y].map(Math.round)
            document.getElementById("intro").style.color = `rgb(${r}, ${g}, ${b})`
        })
    }else if(offset>vh && offset<=2*vh){
        window.addEventListener('scroll', () => {
            // console.log((window.scrollY || window.pageYOffset))
            const y = 1 + (window.scrollY || window.pageYOffset)-vh
            const [r, g, b] = [red - y, green - y, blue - y].map(Math.round)
            document.getElementById("experience").style.color = `rgb(${r}, ${g}, ${b})`
        })
    }
    else if(offset>2*vh && offset<=3*vh){
        window.addEventListener('scroll', () => {
            // console.log((window.scrollY || window.pageYOffset))
            const y = 1 + (window.scrollY || window.pageYOffset)-2*vh
            const [r, g, b] = [red - y, green - y, blue - y].map(Math.round)
            document.getElementById("skill").style.color = `rgb(${r}, ${g}, ${b})`
        })
    }
    
};

const Content = () => {
    return (
        <div>
            <ContentDisplay />
            <ScrollPosition />
        </div>
    );
};

export default Content;