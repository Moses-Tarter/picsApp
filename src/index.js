import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import SearchBar from './SearchBar'
import PicsList from './PicsList'

class App extends React.Component{

    state = {results: []};

    onTermSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                'Authorization': 'Client-ID 1fAIwlialrO887w0bq3iyMstZVJWt-d-OQ_JEgtWpxg'
            },
            params: {
                'query': term,
            }
        });
        this.setState({results: response.data.results});
    }

    render() {
     return (
         <div>
            <SearchBar onTermSubmit={this.onTermSubmit}/>
            <PicsList results={this.state.results}/>
        </div>
     );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));