import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Projects.css";
import TabItem from '../TabItem/TabItem';
import useAuth from '../hooks/useAuth';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const { themeBlack } = useAuth();

    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const mern = projects.filter(project => project.category === "MERN");
    const react = projects.filter(project => project.category === "REACT");
    const html = projects.filter(project => project.category === "HTML/CSS");

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={themeBlack == true ? "bg-[#1E293B] text-[#94A3B8] duration-700" : "bg-white duration-700 text-black"}>
            <div className='max-w-[1120px] mx-auto py-32 '>
                <SectionTitle title={"Portfolio"} subTitle={"My Work & Projects"}></SectionTitle>
                <div className='mt-20 px-4'>
                    <Tabs >
                        <TabList>
                            <div className='text-center text-xl font-semibold '>
                                <Tab>ALL</Tab>
                                <Tab>MERN</Tab>
                                <Tab>REACT</Tab>
                                <Tab>HTML/CSS</Tab>
                            </div>
                        </TabList>

                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                                {
                                    projects.map(project => <TabItem
                                        key={project._id}
                                        project={project}
                                    ></TabItem>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                                {
                                    mern.map(project => <TabItem
                                        key={project._id}
                                        project={project}
                                    ></TabItem>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                                {
                                    react.map(project => <TabItem
                                        key={project._id}
                                        project={project}
                                    ></TabItem>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                                {
                                    html.map(project => <TabItem
                                        key={project._id}
                                        project={project}
                                    ></TabItem>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Projects;