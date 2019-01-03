import React from 'react';
import ReactDOM from 'react-dom';

//import Components
import SeasonDisplay from './weatherComponents/SeasonDisplay';
import LoadingComponent from './weatherComponents/LoadingComponent';
//App
class App extends React.Component {
    // same functionality as using constructor method
    state = { lat: null, errorMsg: '',};

    // any data loading should be handled in componentDidMount rather than constructor
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err =>this.setState({errorMsg: "Code " + err.code + " - " + err.message})
        );
    }

    renderContent() {
        if(this.state.errorMsg && !this.state.lat) {
            return <div>Error: {this.state.errorMsg} </div>
        }

        if(!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } />
        }

        return <LoadingComponent  message="Please accept location request" />
    }
    // any class component requires render - always...!
    render() {
        return (
            <div className="border">
                {this.renderContent()}
            </div>
        )
     }
        
}

ReactDOM.render(<App/>, document.querySelector('#root'));