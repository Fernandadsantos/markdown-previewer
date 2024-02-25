import './editor.css';

export default function Editor({setCurrentText, currentText}){  
    return(
        <div className='editor-box'>
            <h1 className='editor-title'>Editor</h1>
            <textarea  
                className='textArea'
                id="editor"
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}    
            ></textarea>
        </div>
    );
};