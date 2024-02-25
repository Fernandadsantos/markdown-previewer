import './preview.css';   
import ReactMarkdown from 'react-markdown';

export default function Preview({currentText}){  
    return(
        <div className='preview-box' >
            <h1 className='preview-title'>Preview</h1>
            <div className='display-text' id='preview'>
                <ReactMarkdown children={currentText}/>
            </div>
        </div>
    );
};