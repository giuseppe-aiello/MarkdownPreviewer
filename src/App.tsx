


import './App.scss';
import * as React from 'react';

import { useState, useEffect} from 'react';

import Editor from '../src/components/Editor/Editor';
import Previewer from '../src/components/Previewer/Previewer';

function App() {



  const[markdown, setMarkdown] = useState<string>();
  
  const handleMarkdownChange = (newMarkdown: string) => {
    setMarkdown(newMarkdown);
  };
  

  return (
    <div className="App" >
        <Editor onMarkdownChange={handleMarkdownChange}  />
        <Previewer markdown={markdown} />
    </div>
  );
}

export default App;
