import React, { useState, useEffect } from "react";
import "./App.css";
import colorArray from "./colors.jsx";


const url_for_coding_quotes = "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en";
var g_quotes = "";
var g_author = "";
var g_coding_quotes = false;




//spinner for loading 
const spinner = document.getElementById("spinner");
function showSpinner() {
  spinner.className = "show";
}

//hide spinner 
function hideSpinner(){
  spinner.className = spinner.className.replace("show", "");
}


//main ui componenet

function App() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("#00B1E1");


const style = {
  backgroundColor: color,
  height: "100%",
  width: "100%"
};



//On Quote type button click event 
//if programming 
//or life quotes
function onBtnClick(event){
  if(event.target.id=="programing_btn"){
    const element = document.getElementById(event.target.id);    
    g_coding_quotes=true;
    
  }else{
    g_coding_quotes=false;
  }
  getAPIResult();
}


  


//get the programming quotes

  function getCodingQuotes(){
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random/lang/en").then(res=> res.json()).then(res=>{
       g_quotes = res.en;
       g_author = res.author;
       setText(g_quotes);
       setAuthor(g_author);

       var item = colorArray[Math.floor(Math.random() * colorArray.length)];
       var result = "";
       setColor(item);
       hideSpinner();
    })
  }

  //get the life quotes

  function getNormalQuotes(){

    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(res => {
        hideSpinner();
        setText(res.content);
        setAuthor(res.author);
        var item = colorArray[Math.floor(Math.random() * colorArray.length)];
        var result = "";
        setColor(item);
        
        
      }).catch(function(error) {

        setText("Server error");
        setAuthor("");
    });

  }

  //driver function to fetch quotes programing or life depends on user selection 

  function getAPIResult() {

   
  

    showSpinner();
    if(g_coding_quotes){
      getCodingQuotes();
      
    }else{
      getNormalQuotes();
      //setText(g_quotes);
      //setAuthor(g_author);
    }
    //setColor(item);    
  }




  useEffect(() => {
    // Update the document title using the browser API

    if (text != "") {
    } else {
      getAPIResult();
    }
  });
  const bgcolor = {
    backgroundColor: { color }
  };
  return (
    <div className="container-fluid" style={style}> 
    <div className="row">
      <div className="col .d-flex mr-md-3 p-3">
        <button style={{color:'black'}} id="programing_btn" onClick={(event)=>onBtnClick(event)} className="btn btn-outline-primary btn-lg mr-md-3">Programming Quotes</button>
        <button style={{color:'black'}} id="life_btn" onClick={(event)=>onBtnClick(event)} className="btn btn-outline-primary btn-lg">Life  Quotes</button>
      </div>
    </div>
     
      <div className="row" style={{ height: "95%", backgroundColor: "" }}>
        <div className="col-12" style={{ textAlign: "center" }}>
          <Quetes
            name={text}
            author={author}
            getAPIResult={getAPIResult}
            color={color}
          />
        </div>
      </div>
    </div>
  );
}




//nav bar componenet
function navBar(){
  return(
    <div>

    </div>
  )
}



//quotes componenet


const Quetes = ({ name, author, getAPIResult, color }) => {
  const box_style = {
    width: "40%",
    height: "auto",
    backgroundColor: "",
    margin: "0 auto",
    position: "relative",
    top: "20%",
    border: "1px solid #1C6EA4",
    borderRadius: "3px",
    backgroundColor: "#fff"
  };

  return (
    <div className="container-fluid" style={box_style}>
      <div className="row">
        <div className="col-12" style={{ height: "auto", padding: "10px" }}>
          <i className="fa fa-quote-left"></i>
          <blockquote
            style={{ fontWeight: "500", fontSize: "1.5em", color: color }}
          >
            {name}
          </blockquote>
          <p style={{ float: "right", margin: "10px" }}>- {author}</p>
        </div>
      </div>

      <div className="row">
      <div
        className="col-12"
        style={{ height: "auto", position: "relative", float: "right" }}
      >
        <button
          style={{
            margin: "10px",
            display: "inline",
            backgroundColor: color,
            border: "none",
            color: "white",
            borderRadius: "3px",
            height: "40px",
            width: "100px"
            ,float:"right"
          }}
          onClick={() => {
            getAPIResult();
          }}
        >
          New Quote{" "}
        </button>

        <a style={{float:"left",margin:"3px",position:"relative",top:"38%"}} className="twitter-share-button"
  href={`https://twitter.com/intent/tweet?text="${name}`}>
Tweet</a>
      </div>

      </div>

      
    </div>
  );
};

export default App;
