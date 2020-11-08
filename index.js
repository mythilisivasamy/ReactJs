import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './mystyle.css';
class MainApp extends Component{
  
  
  render(){
    return(
	<div>
        <h1 class="top-header">Welcome To</h1>
	<h2 class="top-subheader">React Online class</h2>
	<p><span>Child of this paragraph</span></p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	<ul>
	<li>Frameworks</li>
	<ul>
	<li>Vue</li>
	<li>Angular</li>
	<li>Nested Child</li>
	</ul>
	<li>React JS</li>
	<li>HTML</li>
	<li>CSS</li>
	</ul>
	</div>
	 	
  );}

}

 ReactDOM.render(<MainApp/>,document.getElementById('root'));
