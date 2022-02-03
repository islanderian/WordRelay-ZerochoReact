import { useState, useRef } from "react";

const React = require("react");

const WordRelay = () => {
  const [word, setWord] = useState("제로초");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    let valFirst = value.charAt(0);
    let wordLast = word.charAt(word.length - 1);

    if (valFirst === wordLast) {
      setWord(value);
      setValue("");
      setResult("딩동댕");
    } else {
      setValue("");
      setResult("땡");
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} ref={inputRef} />
        <button>입력!</button>
        <div>{result}</div>
      </form>
    </>
  );
};

export default WordRelay;
