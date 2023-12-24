import './App.css';
import Field from './components/Field';
import Markdown from 'react-markdown';
import {useState} from 'react'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import defaultMarkdown from './components/defaultMarkdown';


function App() {

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [icon, SetIcon] = useState("toExpand");
  const [editorWindow, setEditorWindow] = useState(true)
  const [previewerWindow, setPreviewerWindow] = useState(true)  
  const [height, setHeight] = useState('0') 
  
  function handleOnChange(e){
    setMarkdown(e.target.value)    
  }

   function OnClickEditor(e){ 
    if (icon === "toExpand"){
      SetIcon("toMinimize");
      setPreviewerWindow(false); 
      setHeight("100vh")     
    }else{
      SetIcon("toExpand");
      setPreviewerWindow(true);
      setHeight("0")  
    }       
  }
  
  function OnClickPreviewer(e){ 
    if (icon === "toExpand"){
      SetIcon("toMinimize");
      setEditorWindow(false); 
      setHeight("100vh")     
    }else{
      SetIcon("toExpand");
      setEditorWindow(true);
      setHeight("0")  
    }    
        
  }


  return (
    <div className="App">      

      {editorWindow && <Field
        windowIcon={icon}        
        type="editor"        
        headerName="Editor"
        funcOnChange={handleOnChange}
        defaultValue={markdown}
        funcOnClick={OnClickEditor} 
        height={height}       
      />}          

      {previewerWindow && <Field
       height={height} 
       windowIcon={icon}            
       type="previewer"
       headerName="Previewer"
       funcOnClick={OnClickPreviewer}       
       generateMarkdown=<Markdown remarkPlugins={[remarkGfm, remarkBreaks ]}>{markdown}</Markdown>      
       /> }        

    </div>
  );
}

export default App;
