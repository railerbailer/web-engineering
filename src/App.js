import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TreeGraph from './components/TreeGraph'
import TryTree from './components/TryTree'
import {db} from './database/firebase'

class App extends Component {
  constructor(){
    super();
    this.state={
      heading: 'To get started, edit <code>src/App.js</code> and save to reload.',
      docData: 'bög'
    }
  }
addData(){
          //Add 1QZm1W1NgVPpqAxIILHF
    db.collection("users").add({
        first: "Ralleballe",
        last: "böggatan", 
        born: 'din mamma',
        heading: this.state.heading
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
 updateData() {
  const batch = db.batch();
  const sfRef = db.collection("users").doc("hey");
  batch.update(sfRef, {"hehehe": this.state.docData});
  return batch.commit()
  console.log()
  }

  componentWillMount(){
    this.updateData();
     //Write
     const laRef = db.doc("users/hey")
     laRef.get().then((doc)=>{
      if(doc && doc.exists) {
        const myData = doc.data();
        
        this.setState({docData: myData.hehehe})
        
        
      }
    })




     
  }

  render() {
    this.addData()
    
   //  const laRef = db.doc("users/hey")
   // laRef.onSnapshot((doc)=> {
   //      console.log("Current data: ", doc && doc.data());
   //  });
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        
        </header>
        <p className="App-intro">
         
         {this.state.docData}
        </p>
        <TryTree/>

      </div>
    );
  }

}

export default App;
