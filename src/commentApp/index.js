//import dependancies and libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

//import components
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

// App component
const App = () => {
    return (
        <div className="ui container comments">
           <ApprovalCard>
                <CommentDetail 
                    url={faker.image.avatar()} 
                    name={faker.name.firstName()} 
                    date="Today at 6:00p" 
                    text="Hellow World..."
                />
           </ApprovalCard>
           <ApprovalCard>
                <CommentDetail 
                    url={faker.image.avatar()} 
                    name={faker.name.firstName()}  
                    date="Today at 5:00p" 
                    text="What what what..."
                />
           </ApprovalCard>
           <ApprovalCard>
                <CommentDetail 
                    url={faker.image.avatar()} 
                    name={faker.name.firstName()}  
                    date="Today at 4:00p" 
                    text="Bird Boxing..."
                />
           </ApprovalCard>  
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector('#root'));