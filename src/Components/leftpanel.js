import React from 'react';
import Fold from './leftpanel-fold';
import Header from './leftpanel-header';

const LeftPanel = (props) => {
    return (
        <div className = 'LeftPanel'>
            <Header />
            <Fold />
        </div>
    );
};

export default LeftPanel;