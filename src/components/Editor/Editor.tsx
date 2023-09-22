import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

interface EditorProps {
    onMarkdownChange: (newMarkdown: string) => void //ritorna una funzione
}



function Editor(props: EditorProps){
 
    const defaultMarkdown = `
    # Welcome to my React Markdown Previewer!
    334
    ## This is a sub-heading...
    ### And here's some other cool stuff:
      
    Heres some code, <div></div>, between 2 backticks.
      
    \`\`\` 
    // this is multi-line code:
      
    function anotherExample(firstLine, lastLine) {
        if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
        return multiLineCode;
        }
    }
    \`\`\`
      
    You can also make text **bold**... whoa!
    Or _italic_.
    Or... wait for it... **_both!_**
    And feel free to go crazy ~~crossing stuff out~~.
      
    There's also [links](https://www.freecodecamp.org), and
    > Block Quotes!
      
    And if you want to get really crazy, even tables:
      
    Wild Header | Crazy Header | Another Header?
    ------------ | ------------- | -------------
    Your content can | be here, and it | can be here....
    And here. | Okay. | I think we get it.
      
    - And of course there are lists.
      - Some are bulleted.
         - With different indentation levels.
            - That look like this.
      
    1. And there are numbered lists too.
    1. Use just 1s if you want!
    1. And last but not least, let's not forget embedded images:
    
    ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
    
    
    const [markdown, setMarkdown] = useState<string>();

    const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMarkdown = e.target.value;
        setMarkdown(newMarkdown);
        props.onMarkdownChange(newMarkdown);
    };



useEffect(() => {
    setMarkdown(defaultMarkdown);
    props.onMarkdownChange(defaultMarkdown);
  }, []);

    return (
        <div className="markdown-editor">
            <div className='header'>
            <FontAwesomeIcon icon={faPenToSquare} />
            <h3>Editor</h3>
            </div>
            <textarea 
                id="editor"
                value={markdown}
                onChange={handleMarkdownChange}
                placeholder="Insert here your markdown..."
                autoComplete="off"
                spellCheck="false"
                />
        </div>
    );
};

export default Editor;