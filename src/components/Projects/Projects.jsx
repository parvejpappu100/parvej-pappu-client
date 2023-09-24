import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Projects.css";
import TabItem from '../TabItem/TabItem';
import classNames from 'classnames';

const Projects = () => {

    const [projects, setProjects] = useState([]);

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
        <div className='max-w-[1120px] mx-auto my-32 border'>
            <SectionTitle title={"Portfolio"} subTitle={"My Work & Projects"}></SectionTitle>
            <div className='mt-20 px-4'>
                <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                    <TabList className="tab-list">
                        <div className='text-center'>
                            <Tab
                                className={classNames("tab", { 'border-b-4 bg-white': activeTab === 0 })}>  ALL
                            </Tab>
                            <Tab
                                className={classNames("tab", { 'border-b-4 bg-white': activeTab === 1 })}>MERN
                            </Tab>
                            <Tab
                                className={classNames("tab", { 'border-b-4 bg-white': activeTab === 2 })}>REACT
                            </Tab>
                            <Tab
                                className={classNames("tab", { 'border-b-4 bg-white': activeTab === 3 })}
                            >HTML/CSS
                            </Tab>
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
    );
};

export default Projects;