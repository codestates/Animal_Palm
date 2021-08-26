import axios from 'axios';
import { useState } from 'react';
import '../Board.css'

     
     function Board_write() {

      const [context,setContext] = useState({
        title:'',
        content:'',
        hash:'',
      })

      const handleInputValue = (key) => (e) => {
        setContext({...context, [key]: e.target.value })
      }

      const postContext = () => {
        if(context.title===''|| context.content===''){
          alert('빈칸을 입력해주세요')
        }
        else{
        axios
          .post(
            `http://localhost:4000/boards/${1}`,
            {
              title: context.title,
              content: context.content,
              hash: context.hash
            }
          )
          }
      }

       return (
         
         <div className="Board_write">
             <h2>제목</h2>
             <input placeholder="제목을 입력하세요" type="title" onChange={handleInputValue('title')} ></input>
             <br></br>
             <textarea placeholder="내용을 입력하세요" onChange={handleInputValue('content')} ></textarea>
             <br></br>
             <input placeholder="해쉬태그" onChange={handleInputValue('hash')} ></input>
             <button type='submit' onClick={postContext} >완료</button>
         </div>
       );
     }
     
     export default Board_write;
     