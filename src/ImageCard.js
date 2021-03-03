import React from 'react'


class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {span: 0};
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.addEventListener('load', () => this.setSpans());
        console.log(this.ref);
    }

    setSpans() {
        const span = Math.ceil(this.ref.current.clientHeight / 10);
        this.setState({span: span});
    }

    render() {
        return (
            <div className="card-item" style={{gridRowEnd: "span " + this.state.span}}>
                <img ref={this.ref} src={this.props.url} alt="image"/>
            </div>
        );   
    };
}

export default ImageCard;