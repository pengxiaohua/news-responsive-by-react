import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {

        const settings = {
            dots: true,
            autoplay: true,
            speed: 500,
        };

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg" /></div>
                                    <div><img src="./src/images/carousel_2.jpg" /></div>
                                    <div><img src="./src/images/carousel_3.jpg" /></div>
                                    <div><img src="./src/images/carousel_4.jpg" /></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际新闻" imageWidth="112px" />
                        </div>

                        <Tabs class="tabs_news">
                            <TabPane tab="头条" key="1">
                                {/*控制新闻的条数和类型*/}
                                <PCNewsBlock count={22} type="junshi" width="100%" border="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" border="false" />
                            </TabPane>
                            <TabPane tab="科技" key="3">
                                <PCNewsBlock count={22} type="keji" width="100%" border="false" />
                            </TabPane>
                            <TabPane tab="体育" key="4">
                                <PCNewsBlock count={22} type="tiyu" width="100%" border="false" />
                            </TabPane>
                            <TabPane tab="娱乐" key="5">
                                <PCNewsBlock count={22} type="yule" width="100%" border="false" />
                            </TabPane>
                        </Tabs>
                        <Tabs class="tabs_product">
                            <TabPane tab="ReactNews网易产品" key="1">
                                <PCProduct />
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px" />
                            <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}