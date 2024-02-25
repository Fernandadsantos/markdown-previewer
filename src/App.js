import { useState } from 'react';
import './App.css';
import Editor from './components/editor/editor';
import Preview from './components/preview/preview';
import reactIcon from './assets/structure.png';

function App() { 
  const defaultText = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  There's also [links](https://www.freecodecamp.org).
  \`<div></div>\`

  \`\`\`
  //this is a function

  function test(params1, params2){
    return params1 + params2;
  }
  \`\`\`
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  > Block Quotes!

  Or... wait for it... **_both!_** 
  ![React Logo](${reactIcon})`;

  const [currentText, setCurrentText] = useState(defaultText);

  return (
    <div className="App"> 
      <h1 className='app-title'>Markdown Previewer</h1>
      <div className='text-box'>
        <Editor
          setCurrentText={setCurrentText}
          currentText={currentText}
        />
        <Preview
          currentText={currentText}
        /> 
      </div>
    </div>
  );
}

export default App;
