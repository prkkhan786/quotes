import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import colorArray from "./colors.jsx";


const spinner = document.getElementById("spinner");
function showSpinner() {
  spinner.className = "show";
}

function hideSpinner(){
  spinner.className = spinner.className.replace("show", "");
}



function App() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("#00B1E1");
  const style = {
    backgroundColor: color,
    height: "100%",
    width: "100%"
  };

  function getAPIResult() {
    showSpinner();
    var result = "";
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(res => {
        var item = colorArray[Math.floor(Math.random() * colorArray.length)];
        hideSpinner();
        setText(res.content);
        setAuthor(res.author);
        setColor(item);
      });
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

  console.log(text);

  return (
    <div className="container-fluid" style={style}>
      <div className="row" style={{ height: "100%", backgroundColor: "" }}>
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

const Quetes = ({ name, author, getAPIResult, color }) => {
  const box_style = {
    width: "40%",
    height: "auto",
    backgroundColor: "",
    margin: "0 auto",
    position: "relative",
    top: "30%",
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
