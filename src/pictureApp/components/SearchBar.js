import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    // arrow function prevents need for constructor and binding of this 
    // this.onFormSubmit = this.onFormSubmit.bind(this); <-- inside of constructor
    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);

    }
    render() {
        return (
            <div className="ui segment" style={{marginTop: '10px'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            onChange={e => this.setState({term: e.target.value})}
                            value={this.state.term}
                        />    
                    </div>
                </form>              
            </div>
        );
    }
}

export default SearchBar;