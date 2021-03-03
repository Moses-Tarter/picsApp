import React from 'react'


class SearchBar extends React.Component {

    state = {term: ''};

    onSub = (e, term) => {
        e.preventDefault();
        this.props.onTermSubmit(term);
        this.setState({term: ''})
    }

    render() {
        return (
        <div className="search-box-container">
            <form onSubmit={(e) => this.onSub(e, this.state.term)}>
                <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
            </form>
        </div>
        )
    }
}

export default SearchBar;