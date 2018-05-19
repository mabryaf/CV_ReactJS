import React from 'react';
import Objective from './rightpanel-objective'
import Education from './rightpanel-education'
import WorkExperience from './rightpanel-workexperience'
import CoCurricular from './rightpanel-cocurricular'
import Seminars from './rightpanel-seminars'
import SkillsInterest from './rightpanel-skillsinterest'


const RightPanel = (props) => {
    return (
        <div className = 'RightPanel'>
        <Objective />
        <Education />
        <SkillsInterest />
        <WorkExperience />
        <CoCurricular />
        <Seminars />
        </div>
    );
};

export default RightPanel;