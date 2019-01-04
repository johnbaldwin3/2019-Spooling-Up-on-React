import React from 'react'; 

class SearchBar extends React.Component {
    state = {searchTerm: ''};

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.searchTerm);
    }
    render() {
        return (
            <div className="search-bar ui segment" style={{marginTop: '10px'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Video Search</label>
                    <input 
                        type="text"
                        onChange={e => this.setState({searchTerm: e.target.value})}
                        value={this.state.searchTerm}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;