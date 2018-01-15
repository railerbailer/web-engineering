import React from 'react';
import Tree from 'react-d3-tree';
 
const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 3: B',
          children: [
      {
        name: 'Level 3: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
          
      },

    ],
      },

    ],
   
  },
];
 
export default class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      styler: ''
    }
  }

  mouseOver(){

  }
  render() {
    return (
  
      <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
 
        <Tree 
        nodeSize={{x: 140, y: 140}}
        onMouseOver={()=>this.setState({styler:'black'})}
          data={myTreeData} 
          orientation="vertical bottom-to-top"
          style={{stroke: 'red'}}
          />
 
      </div>
    );
  }
}