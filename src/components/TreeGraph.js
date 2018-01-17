import Tree from 'react-tree-graph';
import { easeElastic } from 'd3-ease';
import React, { Component, Text } from 'react';
 import '../App.css';
 import 'react-tree-graph/dist/style.css'


 export default class TreeGraph extends Component {
 	constructor(props){
 		super(props);
 		this.state={
 			classNameRed: 'red-node' ,
 			classNameBlue: 'blue-node' ,
 			classNameGreen: 'green-node' ,
 			classNameOrange: 'orange-node' ,
 			classNameWhite: 'white-node' ,
 			classNameBlack: 'black-node' ,
 			classNameGray: 'gray-node' ,
 			showDescription: '' ,

 			gameProps:{},

 			value: 1
 			
 		}
 	

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
    handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

componentDidMount(){
	
this.setState({
	gameProps: {className: this.state.classNameGray},

})
	
}


  render() {


function onMouseOver(nodeKey) {
  		let descr='To reach yolo'
  		return descr
  		
	}
  	


	  	function onMouseOut(nodeKey) {
		

	}
  	function onClick(nodeKey) {
	alert(nodeKey);

	}

  	let data =  
  {
    name: this.onMouseOver,
 	gProps:{
	   	className: this.state.classNameWhite,
	   	onMouseOver: onMouseOver,
	   	onMouseOut: onMouseOut,
	},    
    "parent": "null",
    date: 5000,
    "children": [
      			{
                name: 'Child Care', date: 2015,
                
                gProps:{
						className: this.state.classNameRed
						 },
                            //3 levels
                               children: [

                                    {
                                      name: 'cLevel 1', date: 2016,
                                      gProps:{
									    	className: this.state.classNameRed
									   },
                                        children: [
                                            {
                                              name: 'cLevel 2', date: 2016,
                                              gProps:{
											    	className: this.state.classNameRed

											  },
											  
                                              attributes: {
                                                ToEvolve: 'Complete 7 more tasks',   
                                              },
		                                              children: [
		                                            {
		                                              name: 'csLevel 3', date:2016,
		                                              gProps:{
													    	className: this.state.classNameGray
													  },
													    pathProps:{
													    	className: this.state.classNameGray
													  },
													 
		                                              attributes: {
		                                                ToEvolve: 'Complete 7 more tasks',   
		                                              },
		                                                                              
		                                            },
		                                        ], 
                                                                              
                                            },
                                        ],                         
                                    },
                                  ],//3 levels
              },


              {
                name: 'Leadership', date: 2014,
                gProps:{
			    	className: this.state.classNameBlue
			    },
                            //3 levels
                               children: [
                                    {
                                      name: 'lLevel 1', date: 2014,
                                      gProps:{
									    	className: this.state.classNameBlue
									   },
											   children: [
		                                    {
		                                      name: 'lLevel 2', date: 2015,
		                                      gProps:{
											    	className: this.state.classNameBlue
											   },
													   children: [
				                                    {
				                                      name: 'lLevel 3', date: 2016,
				                                      gProps:{
													    	className: this.state.classNameBlue
													   },
				                                                    
				                                    },
				                                  ],//3 levels
		                                                    
		                                    },
		                                  ],//3 levels

                                    },
                                  ],//3 levels
              },



              {
                name: 'Medical Aid', date: 2010,
                
                gProps:{
			    	className: this.state.classNameOrange
			    },
			    //3 levels
                               children: [
                                    {
                                      name: 'mLevel 1', date: 2011,
                                      gProps:{
									    	className: this.state.classNameOrange
									   },
											   children: [
		                                    {
		                                      name: 'mLevel 2', date: 2011,
		                                       gProps:{
													    	className: this.state.classNameGray
													  },
													    pathProps:{
													    	className: this.state.classNameGray
													  },
															   children: [
						                                    {
						                                      name: 'mLevel 3', date: 2011,
						                                      gProps:{
															    	className: this.state.classNameGray
															  },
															    pathProps:{
															    	className: this.state.classNameGray
															  },
																	  children: [
								                                    {
								                                      name: 'mLevel 4', date: 2013,
								                                      gProps:{
																	    	className: this.state.classNameGray
																	  },
																	    pathProps:{
																	    	className: this.state.classNameGray
																	  },
																			children: [
										                                    {
										                                      name: 'mLevel 5', date: 2015,
										                                      gProps:{
																			    	className: this.state.classNameGray
																			  },
																			    pathProps:{
																			    	className: this.state.classNameGray
																			  },
								                                                    
										                                    },
										                                  ],//3 levels
						                                                    
								                                    },
								                                  ],//3 levels
				                                                    
						                                    },
						                                  ],//3 levels
		                                                    
		                                    },
		                                  ],//3 levels

                                    },
                                  ],//3 levels
              },
              {
                name: 'Language', date: 2009,
                gProps:{
			    	className: this.state.classNameGreen
			    },
                    //Extrachild
                    children: [
                            {
                              	name: 'English', date: 2009,
								 gProps:{
									className: this.state.classNameGray
								},
								pathProps:{
									className: this.state.classNameGray
								},

	                              //3 levels
	                                 children: [
	                                      {
	                                        name: 'eLevel 1', date: 2010,
	                                    	gProps:{
												className: this.state.classNameGray
											},
											pathProps:{
												className: this.state.classNameGray
											},
	                                          children: [
	                                              {
	                                                name: 'eLevel 2',date: 2011,
	                                               gProps:{
														className: this.state.classNameGray,
														onMouseOver: onMouseOver
													},
													pathProps:{
														className: this.state.classNameGray
													},
	                                                     children: [
	                                                        {
	                                                          name: 'eLevel 3', date: 2012,
	                                                           gProps:{
																	className: this.state.classNameGray
																},
																pathProps:{
																	className: this.state.classNameGray
																},                                                                          
	                                                        },
	                                                      ],                             
	                                              },
	                                          ],                         
	                                      },
	                                    ],//3 levels
                        },
				              {
				                name: 'German', date: 2011,
				                gProps:{
							    	className: this.state.classNameGreen
							    },
				                              //3 levels
				                                 children: [
				                                      {
				                                        name: 'glevel 1', date: 2011,
				                                        gProps:{
													    	className: this.state.classNameGreen
													    },
				                                          children: [
				                                              {
				                                                name: 'gLevel 2', date: 2011,
				                                                gProps:{
															    	className: this.state.classNameGreen
															    },
				                                                     children: [
				                                                        {
				                                                          name: 'gLevel 3', date: 2017,
				                                                          gProps:{
																		    	className: this.state.classNameGreen
																		    },                                                                          
				                                                        },
				                                                      ],                             
				                                              },
				                                          ],                         
				                                      },
				                                    ],//3 levels
				                            
				               },

                    ], //Extrachild end
                
          },
    ]
  }
{var yolo=this.state.value}
    return (
<div>

 <div className="custom-container">
<div class="form-group">
  <label for="sel1">Filter on year</label>
  <select value={this.state.value} onChange={this.handleChange} class="form-control" id="sel1">
  	<option value='0'>All Time</option>
    <option value='2017'>1 year</option>
	<option value='2014'>3 years</option>
    <option value='2012'>5 years</option>
    <option value='2007'>10 years</option>
  </select>
</div>

		<Tree 
		    data={data}
		    height={700}
		    width={700}
		    nodeRadius={10}
		    margins={{ bottom : 10, left : 20, right : 100, top : 10}}
			getChildren={function getChildren(n) { 
								    	if (n.date>=yolo){		    		
											return n.children;
										}
								  }
						}
		    

		    gProps={{onClick: onClick}}
		    pathProps={{className: 'link'}}
		    
		    svgProps={{
				transform: 'rotate(90)'
			}}
			circleProps={{
				border: '2px solid red'
			}}
			textProps={{
				transform: 'rotate(270)'}}
		/>
		

	</div>
	{this.props.docData}
	</div>
    )}


}