import "./styles.css";
import React, { useState } from "react";

var primaryColor = "#7c3aed";

export default function App() {
  const [dateInp, setDate] = useState(0);
  const [displayStatement, setDisplayStatement] = useState("");

  function dateInputHandler(event) {
    setDate(event.target.value);
  }

  function checkPalindrome(dob) {
    var str1 = dob.split("");
    var temp = str1.reverse();
    var str2 = temp.join("");

    // console.log(dob);
    // console.log(str2);

    if (dob === str2) {
      return true;
    } else {
      return false;
    }
  }

  function getNextPallindrome() {
    return "2020-09-0202";
  }
  function getDateDifference() {
    return 100;
  }

  function buttonClickHandler() {
    if (dateInp === 0) {
      alert("Please choose a date");
      return;
    }

    let dob = dateInp.replaceAll("-", "");
    if (checkPalindrome(dob)) {
      setDisplayStatement("Yes! Your birthday is pallindrome.");
    } else {
      var nextPallindrome = getNextPallindrome(dateInp);
      var dateDifference = getDateDifference(dateInp, nextPallindrome);

      setDisplayStatement(
        "Your birthday is not pallindrome. You have missed the next pallinrome by " +
          dateDifference +
          " days and the next pallindrome is on " +
          nextPallindrome
      );
    }
  }

  return (
    <div className="App">
      <h1>Palindrome Birthday!</h1>
      <h3>Enter you birthdate:</h3>
      <input
        onChange={dateInputHandler}
        style={{
          border: "2px solid #7c3aed",
          borderRadius: "0.3rem",
          width: "15rem",
          padding: "0.5rem"
        }}
        type="date"
      ></input>
      <br />
      <button
        onClick={buttonClickHandler}
        style={{
          margin: "1rem",
          backgroundColor: primaryColor,
          border: "none",
          padding: "0.6rem",
          borderRadius: "0.3rem",
          color: "#FFFFFF",
          fontSize: "large",
          cursor: "pointer"
        }}
      >
        Show
      </button>
      <div>{displayStatement}</div>
    </div>
  );
}
