import React from 'react';
import { Marked, marked } from 'marked';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'

interface PreviewerProps {
    markdown: string;
}


function Previewer(props: PreviewerProps){
  // Utilizziamo dangerouslySetInnerHTML per inserire l'HTML generato dal Markdown

  
  const convertMarkdownToHTML = (markdown: string) => {
 
    if (markdown) {
        const html = marked(markdown);
        return { __html: html};
    } else {
        return 
    }
  };



  return (
    <div className="preview">
        <div className='header'>
            <FontAwesomeIcon icon={faEye} />
            <h3>Previewer</h3>
        </div>
        <div className='previewer-box' >
            <div id="preview" dangerouslySetInnerHTML={convertMarkdownToHTML(props.markdown)} />
        </div>
    </div>
  );
};

export default Previewer;