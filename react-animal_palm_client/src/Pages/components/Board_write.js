import axios from 'axios';
import { useState } from 'react';
import '../Board.css'

     
     function Board_write({ animalId }) {

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
          console.log(animalId)
          alert('빈칸을 입력해주세요')
        }
        else{
        axios
          .post(
            `http://localhost:4000/boards/${animalId}`,
            {
              title: context.title,
              content: context.content,
              hash: context.hash
            }
          ).then(()=>{
            alert('글을 게시했습니다')
            setContext({
              title:'',
              content:'',
              hash:'',
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
             <br></br>
             <textarea placeholder="내용을 입력하세요" onChange={handleInputValue('content')} value={context.content} ></textarea>
             <br></br>
             <input placeholder="해쉬태그" onChange={handleInputValue('hash')} value={context.hash} ></input>
             <button type='submit' onClick={postContext} >완료</button>
         </div>
       );
     }
     
     export default Board_write;
     