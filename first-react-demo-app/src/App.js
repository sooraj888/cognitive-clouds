import logo from './logo.svg';
import './App.css';
const title = "react"
const welcome = {
    greeting: 'Hey',
    title: 'React',
};
const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];

function setTitle(titlename) {
    return (titlename);
}

function App() {
    
    return (
        <div>
        ...
        <hr/>
        <ul>
        {list.map(function (item) {
        return (<div>
                    <li>{item.title}</li>
                    <li>{item.url}</li>
                    <li>{item.author}</li>
                    <li>{item.num_comments}</li>
                    <li>{item.points}</li>
                    <br></br>
                    
                </div>);
        })}
        </ul>
        </div>);
       
   
}

export default App;