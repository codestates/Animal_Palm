import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Board.css'

     
     function Board_write() {

      const [context,setContext] = useState({
        title:'',
        content:'',
        hash:'',
        hashTag:[]
      })

      const location = useLocation()

      const handleInputValue = (key) => (e) => {
        
        if((!context.hash==='' && e.nativeEvent.data===' ')){
          setContext({...context, hashTag:[...context.hashTag,[context.hash]],[key]:''  })
        }
        if(context.hash.split('').filter(el=>el!==' ').length>0 && e.nativeEvent.data===' '){
          setContext({...context, hashTag:[...context.hashTag,[context.hash.split('').filter(el=>el!==' ').join('')]],[key]:''  })
        }
        else{setContext({...context, [key]: e.target.value })}
      }

      const postContext = () => {
        if(context.title===''|| context.content===''){
          alert('빈칸을 입력해주세요')
        }
        else{
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/boards/${location.state.animalId}`,
            {
              title: context.title,
              content: context.content,
              hash: context.hashTag
            }
            ,{ withCredentials: true }
          ).then(()=>{
            alert('글을 게시했습니다')
            setContext({
              title:'',
              content:'',
              hash:'',
              hashTag:[]
            })
          })
          .catch((err)=>{
            alert(err)
          })
          }
      }

       return (
         
         <div className="Board_write">
             <h2>제목</h2>
             <input placeholder="제목을 입력하세요" type="title" onChange={handleInputValue('title')} value={context.title} ></input>
             <h3>내용</h3>
             <div>
             <textarea placeholder="내용을 입력하세요" onChange={handleInputValue('content')} value={context.content} ></textarea>
             <input placeholder="#" onChange={handleInputValue('hash')} value={context.hash} ></input>
             <div className="hashTag">
             {context.hashTag.length > 0 ? 
             context.hashTag.map((el,idx)=> <span key={idx}><a onClick={()=>{context.hashTag.splice(idx,1);setContext({...context})}}>✕</a>{el}</span>)
             : ''}
             </div>
             </div>
             <button type='submit' onClick={postContext} >완료</button>
         </div>
       );
     }
     
     export default Board_write;
     