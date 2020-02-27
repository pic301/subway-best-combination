 import React,{useState} from 'react'
 import { storage } from '../components/firebaseConfig'
 import './Picture.css'
 
 const Picture = ({imageAsUrl,handlerImageAsUrl}) => {
    const[imageAsFile, setImageAsFile] = useState('')


 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }
  const handleFireBaseUpload = e => {
    e.preventDefault()

 
  if(imageAsFile === '') {
    console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
  }
  const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
  //firebase upload 시작
  uploadTask.on('state_changed', 
  (snapShot) => {
    
  }, (err) => {
    //catches the errors
 
  }, () => {
    // 다운로드한 url을 state imaUrl의 값으로 변경
    storage.ref('images').child(imageAsFile.name).getDownloadURL()
     .then(fireBaseUrl => {
    
       handlerImageAsUrl(fireBaseUrl)
     
     })
  })
  }

   return (
     <div>
       <form onSubmit={handleFireBaseUpload}>
         <button className="btn btn_image">업로드</button>
         <div className="filebox"> 
          <label htmlFor="ex_file">파일추가하기</label> 
            <input type="file" id="ex_file" onChange={handleImageAsFile}/> 
          </div>
       </form>
       
     </div>
   );
 };
 
 export default Picture;
