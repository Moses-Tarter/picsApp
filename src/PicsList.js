import React from 'react'
import ImageCard from './ImageCard'


class PicsList extends React.Component {

    getUrls() {
        if(this.props.results.length > 0) {
            const images = this.props.results.map(image => {
                return <ImageCard url={image.urls.small} />;
            });
            return images;
        }
    }

    render() {
        const list = this.getUrls();

        return (
            <div className="grid-container">
                {list}
            </div>
        );
    }
}

export default PicsList;