import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Input } from "antd";

const { TextArea } = Input;

function App() {
  const [text, setText] = React.useState("");

  function handleChange(e) {
    if (e.key === "Enter") {
      setText(`${e.target.value}\n`);
    }
    setText(e.target.value);
  }

  return (
    <div>
      <TextArea
        rows={4}
        style={{ margin: "20px", width: "40%" }}
        value={text}
        onChange={handleChange}
        onPressEnter={handleChange}
      />

      {text.length > 0 && text.split("\n").map((l, i) => <p key={i}>{l}</p>)}
    </div>
  );
}

export default App;
