import React from 'react';

import Header from 'components/Header';
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import CentralPart from 'components/CentralPart';

import './mainPage.less';

const MainPage = () => {
    return(
        <div className='main'>
            <Header />
            <div className='main-page'>
                <LeftSidebar />
                <CentralPart />
                <RightSidebar />
            </div>
        </div>
    );
}

export default MainPage;
