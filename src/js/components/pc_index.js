import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import { BackTop } from 'antd';

import PCNewsContainer from './pc_newscontainer';

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <BackTop />
                <PCFooter></PCFooter>
            </div>
        )
    }
}
