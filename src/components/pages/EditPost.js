import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import { Await, Navigate, useParams } from 'react-router-dom';
import Editer from '../Editer';

function EditPost() {
    const {id} = useParams();
    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [content,setContent] = useState('');
    const [files,setFiles] = useState('');
    const [cover,setCover] = useState('');
    const [redirect, setRedirect] = useState(false);


    useEffect(()=>{
        fetch('http://localhost:4000/post/'+id)
        .then(res=>{
            res.json().then(postInfo => {
                setTitle(postInfo.title);
                setSummary(postInfo.summary);
                setContent(postInfo.content);
            })
        })
    },[])
   async function updatePost(ev){
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('id',id);
        if(files?.[0]){
            data.set('file', files?.[0]);
        }
        
        ev.preventDefault();
        
       const response = await fetch('http://localhost:4000/post', {
            method:'PUT',
            body:data,
            credentials: 'include',
        })
        if(response.ok){
            setRedirect(true);
        }
        
    }

    if(redirect){
        return <Navigate to={'/post/'+id}/>
      }



      return (
      <form onSubmit={updatePost}>
          <input type="title" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)}/>
          <input type="summary" placeholder={'Summary'} value={summary} onChange={ev => setSummary(ev.target.value)} />
          <input type="file" 
          onChange={ev => setFiles(ev.target.files)}/>
            
     <Editer onChange={setContent} value={content} /> 
          <button style={{marginTop:'5px'}}>Update post</button>
      </form>
    )
}

export default EditPost