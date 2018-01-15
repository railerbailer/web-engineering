import Tree from 'react-tree-graph';
import { easeElastic } from 'd3-ease';
import React, { Component } from 'react';
 import '../App.css';

 export default class TreeGraph extends Component {




  render() {

  	let data =  
  {
    "name": "Top Level",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Son of A",
            "parent": "Level 2: A"
          },
          {
            "name": "Daughter of A",
            "parent": "Level 2: A"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  }


    return (

 <div className="custom-container">
		<Tree
		    data={data}
		    height={400}
		    width={400}
		    nodeRadius={10}
		    
		    
		    
		    easing={easeElastic}

		    gProps={{ className: 'node'}}
		    pathProps={{className: 'link' }}
		    
		    svgProps={{
				transform: 'rotate(270)'
			}}
			circleProps={{
				border: '2px solid red'
			}}
			textProps={{
				transform: 'rotate(90)'}}
		/>

	</div>
    )}


}