import React from 'react';
import './App.css';
import './animate.css'
import ImageList from './images.json';
import Images from './components/images';
import Header from './components/header';


class App extends React.Component{
  
  
  incorrect = false;

  state={
    container: "fadeIn animated container",
    imgClass: "col s6 " ,
    id: 0,
    score: 0,
    currentStreak: 0,
    maxScore: 0
  }

  
  getId = (newId) =>{
  
   
    if(this.state.id===0){
      if(this.state.score>=this.state.maxScore){
      this.setState({id:newId, container:"fadeIn animated container", score:this.state.score+1,maxScore: this.state.maxScore+1});
      }
      else{
        this.setState({id:newId, container:"fadeIn animated container", score:this.state.score+1});

      }
    }
    else{
      
      if(this.state.id!==newId){
        console.log("correct");
         this.setState({container: "fadeIn animated container"});
          if(this.state.score>=this.state.maxScore){
            console.log("top score surpassed");
            this.setState({score:this.state.score+1,maxScore: this.state.maxScore+1});
            this.forceUpdate();
          }
          else{
            this.setState({id:0, score:this.state.score+1,maxScore: this.state.maxScore})
            this.forceUpdate();
          }
      }
      else{
         
          console.log("incorrect");
          this.incorrect = true;
          this.streak = false; 
          this.setState({id: 0, score: 0, container: "container shake animated"});
      }
    }
    
  }
  
  
  render() {
 
    var images = shuffle(ImageList).map(ImageList =>  <Images className={this.state.imgClass} image={ImageList.image}id={ImageList.id} key={ImageList.id} alt={ImageList.alt} getId={this.getId}></Images>);
  
    return (
      <div className="App">
        <Header score={this.state.score} maxScore={this.state.maxScore} ></Header>
          <div className={this.state.container} > 
           <div className="row"></div>
           <div className="row"></div>
          {images}
        </div>
    </div>
    );
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

export default App;
