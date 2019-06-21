import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router';

export default class PCNewsImageBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type
            + "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({ news: json }));
    }


    render() {

        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        }

        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",   //超出的部分用“...”表示
            overflow: "hidden",
            textOverflow: "ellipsis"
        }

        const { news } = this.state;
        const newsList = news.length
            ?
            news.map((newsItem, index) => (
                <div key={index} class="imageblock">
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        <div class="custom-image">
                            <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s} />
                        </div>
                        <div class="custom-card">
                            <h3 style={styleH3}>
                                {newsItem.title}
                                <p>{newsItem.author_name}</p>
                            </h3>
                        </div>
                    </Link>
                </div>
            ))
            :
            '没有加载到任何新闻！';

        return (
            <div class="topNewsList">
                <Card title={this.props.cartTitle} style={{ width: this.props.width }}>
                    {newsList}
                </Card>
            </div>
        );
    };
}