 import React,{useState} from 'react'
 import { storage } from '../components/firebaseConfig'
 import './Picture.css'
 
 const Picture = () => {
    const[imageAsFile, setImageAsFile] = useState('')
    const[imageAsUrl, setImageAsUrl] = useState({imgUrl:''})
    console.log(imageAsFile)

 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }
  const handleFireBaseUpload = e => {
    e.preventDefault()
  console.log('start of upload')
  if(imageAsFile === '') {
    console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
  }
  const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
  //firebase upload 시작
  uploadTask.on('state_changed', 
  (snapShot) => {
    console.log(snapShot)
  }, (err) => {
    //catches the errors
    console.log(err)
  }, () => {
    // 다운로드한 url을 state imaUrl의 값으로 변경
    storage.ref('images').child(imageAsFile.name).getDownloadURL()
     .then(fireBaseUrl => {
       console.log(fireBaseUrl)
       setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
       console.log(imageAsUrl)
     })
  })
  }

   return (
     <div>
       <form onSubmit={handleFireBaseUpload}>
         <img classname="upload_image"src={imageAsUrl.imgUrl ||"https://via.placeholder.com/400x300"} 
         alt="image tag" width="300px" height="300px"/>
         <button className="btn btn_image">업로드</button>
         <div class="filebox"> 
          <label for="ex_file">파일추가하기</label> 
            <input type="file" id="ex_file" onChange={handleImageAsFile}/> 
          </div>
       </form>
       
     </div>
   );
 };
 
 export default Picture;
