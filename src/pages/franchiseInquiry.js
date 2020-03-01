// =============================
//      material-ui
// =============================
import Button from '@material-ui/core/Button';
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';

import React, { useState, useCallback } from "react";
import "./franchiseInquiry.css";
import DaumPostcode from '../components/DaumPost';
import {withRouter} from 'react-router-dom'


const useStyles = makeStyles(() => ({
  root: {
    "& span": {
      margin: 5
    }
   
     
  },
  margin:{
    marginLeft:"15px"
  },
  content:{
    margin:10,
   
  },
  textContainer:{
    display:"flex",
    justifyContent:"flex-start",
    width:"700px",
    margin:10,
    "& textarea": {
      width:"500%",
      padding: 10,
  
    }
  },   


}));
const FranchiseInquiry = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')
  const [fileName, setFileName] = useState('')

  const [isNameValid , setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [checked, setChecked] = useState(true);
  const [regexp, setRegexp] = useState(/^[0-9\b]+$/)
  const [emailregexp, setEmailregexp] = useState(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)
  const classes = useStyles();
  


  const handleChange = useCallback( e => {
    setChecked(!checked);
  },[checked]
  )
  const onChangeName = useCallback(
    ( e ) => {
      let name = e.target.value
      setName(e.target.value)
      if(name && name.length > 2){
        setIsNameValid(true)
      } else{
        setIsNameValid(false)
      }
     
    }
  ,[])
  const onChangePhone = useCallback((e) =>{
    let phone = e.target.value
    if(phone === "" || regexp.test(phone) ){
      setPhone(phone)
      setError(false)
      setOpen(false)
    }else{
      setError(true)
      setOpen(true)
    }

  },[regexp])
  
  const onChangeEmail = useCallback((e) =>{
    let email = e.target.value
    if( email === "" || emailregexp.test(email)){
      setEmail(email)
      setIsEmailValid(true)
    }else {
      setEmail(email)
      setIsEmailValid(false)
    }
  },[emailregexp])
  
  const onChangeTitle = useCallback((e) =>{
    let title = e.target.value
    setTitle(title)
  },[])

  const onChangeDesc = useCallback((e) =>{
    let desc = e.target.value
    setDesc(desc)
  },[])

  const onChangeFileName = useCallback( (e ) =>{
    let reader = new FileReader();
    reader.readAsText(e.target.files[0],)
    setFileName( e.target.value)
},[])
  

  const onSubmit = useCallback((e) =>{
    e.preventDefault()
    if(checked === false){
      alert("필수항목에 동의해주세요")
    }
 
  },[checked])

  return (
    <div className="franchise">
      <div className="franchise-bg">
        <div className="franchise-wrapper">
    <FormControl>
      <form  onSubmit={onSubmit} >
          <div className="franchise-header">
            <div className="franchise-title"><span>꿀조합</span>신청ㆍ문의</div>
            <div className="franchise-privacy">
              <div>
                <p className="prevacy-title">개인정보수집 및 이용동의</p>
                <textarea
                  className="franchise-privacy-left"
                  id=""
                  cols="30"
                  rows="10"
                  defaultValue=" 프랑시스 마디씩 많은 하나에 지나고 사랑과 불러 있습니다. 비둘기, 남은 별이 이제 우는 토끼, 오면 언덕 거외다. 하나에 이제 이름과, 때 소학교 시와 버리었습니다. 새겨지는 많은 소녀들의 듯합니다. 별 사람들의 별들을 이름과, 거외다. 이네들은 별에도 부끄러운 겨울이 멀듯이, 있습니다. 헤일 별 묻힌 풀이 어머님, 책상을 별이 밤이 패, 까닭입니다. 언덕 아침이 별 어머니, 까닭입니다. 오는 나는 나는 소녀들의 까닭입니다. 별이 아이들의 벌써 봅니다.

북간도에 차 것은 속의 벌레는 무덤 오면 계십니다. 당신은 어머니, 묻힌 무덤 피어나듯이 새겨지는 소학교 이름을 노루, 듯합니다. 그리워 흙으로 가을 사람들의 별에도 부끄러운 이국 하나 있습니다. 아스라히 벌레는 별이 봅니다. 봄이 까닭이요, 흙으로 어머님, 이름을 거외다. 불러 걱정도 딴은 다 이름과, 별이 책상을 거외다. 남은 새워 이름과, 내 멀듯이, 거외다. 까닭이요, 이웃 하나의 봄이 까닭입니다. 벌써 별 내일 별 동경과 보고, 어머님, 아침이 까닭입니다. 이름을 위에 경, 풀이 노루, 라이너 별들을 않은 없이 거외다.

강아지, 풀이 못 밤을 있습니다. 아무 하나에 쓸쓸함과 별 슬퍼하는 하늘에는 봅니다. 나의 내 쓸쓸함과 북간도에 어머니, 까닭입니다. 내린 이웃 나는 시인의 사람들의 있습니다. 까닭이요, 한 이름자를 그리고 듯합니다. 쉬이 무성할 아침이 옥 것은 사랑과 별 언덕 별들을 있습니다. 별 노새, 사랑과 파란 마리아 흙으로 내 라이너 가슴속에 까닭입니다. 오면 아무 벌레는 별 거외다. 까닭이요, 릴케 나는 봅니다. 이름자를 덮어 프랑시스 다하지 거외다. 하나에 잠, 언덕 슬퍼하는 이름과, 있습니다."
                ></textarea>

                <p>
                  <Checkbox
                    checked={checked}
                    name="privacy-left"
                    onChange={handleChange}
                    value="primary"
                    color="primary"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  개인정보수집 및 이용에 동의합니다.(필수)
                </p>
              </div>
              <div>
                <p className="prevacy-title">개인정보 위탁동의</p>
                <textarea
                  className="franchise-privacy-right"
                  id=""
                  cols="30"
                  rows="10"
                  defaultValue=" 프랑시스 마디씩 많은 하나에 지나고 사랑과 불러 있습니다. 비둘기, 남은 별이 이제 우는 토끼, 오면 언덕 거외다. 하나에 이제 이름과, 때 소학교 시와 버리었습니다. 새겨지는 많은 소녀들의 듯합니다. 별 사람들의 별들을 이름과, 거외다. 이네들은 별에도 부끄러운 겨울이 멀듯이, 있습니다. 헤일 별 묻힌 풀이 어머님, 책상을 별이 밤이 패, 까닭입니다. 언덕 아침이 별 어머니, 까닭입니다. 오는 나는 나는 소녀들의 까닭입니다. 별이 아이들의 벌써 봅니다.

북간도에 차 것은 속의 벌레는 무덤 오면 계십니다. 당신은 어머니, 묻힌 무덤 피어나듯이 새겨지는 소학교 이름을 노루, 듯합니다. 그리워 흙으로 가을 사람들의 별에도 부끄러운 이국 하나 있습니다. 아스라히 벌레는 별이 봅니다. 봄이 까닭이요, 흙으로 어머님, 이름을 거외다. 불러 걱정도 딴은 다 이름과, 별이 책상을 거외다. 남은 새워 이름과, 내 멀듯이, 거외다. 까닭이요, 이웃 하나의 봄이 까닭입니다. 벌써 별 내일 별 동경과 보고, 어머님, 아침이 까닭입니다. 이름을 위에 경, 풀이 노루, 라이너 별들을 않은 없이 거외다.

강아지, 풀이 못 밤을 있습니다. 아무 하나에 쓸쓸함과 별 슬퍼하는 하늘에는 봅니다. 나의 내 쓸쓸함과 북간도에 어머니, 까닭입니다. 내린 이웃 나는 시인의 사람들의 있습니다. 까닭이요, 한 이름자를 그리고 듯합니다. 쉬이 무성할 아침이 옥 것은 사랑과 별 언덕 별들을 있습니다. 별 노새, 사랑과 파란 마리아 흙으로 내 라이너 가슴속에 까닭입니다. 오면 아무 벌레는 별 거외다. 까닭이요, 릴케 나는 봅니다. 이름자를 덮어 프랑시스 다하지 거외다. 하나에 잠, 언덕 슬퍼하는 이름과, 있습니다."
                ></textarea>

                <p>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name="privacy-right"
                    value="secondary"
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  개인정보 위탁에 동의합니다. (필수)
                </p>
              </div>
            </div>
          </div>
          <div className="franchise-main">
           
              <div className={classes.content}>
                <span>이름:</span>
                <TextField id="text_name" placeholder="이름을 입력해주세요" 
                onChange={onChangeName} value={name} error={!isNameValid} required />
              </div>
              <Collapse in={!isNameValid}>
                 <Alert
                   severity="warning"
                   action={
                     <IconButton
                       aria-label="close"
                       color="inherit"
                       size="small"
                       onClick={() => {
                         setIsNameValid(true)
                       }}
                     >
                       <CloseIcon fontSize="inherit" />
                     </IconButton>
                   }
                 >
                   이름은 2자 이상 이어야 합니다.
                 </Alert>
               </Collapse>


              <div className={classes.content}>
                <span>연락처:</span>
                <TextField
                  id="text_phone"
                  placeholder="연락처를 입력해주세요"
                  onChange={onChangePhone}
                  value={phone}
                  error={error}
                  required
                />
              </div>
              <Collapse in={open}>
                 <Alert
                   severity="warning"
                   action={
                     <IconButton
                       aria-label="close"
                       color="inherit"
                       size="small"
                       onClick={() => {
                         setOpen(false);
                       }}
                     >
                       <CloseIcon fontSize="inherit" />
                     </IconButton>
                   }
                 >
                   연락처는 숫자로 이루어져야 합니다.
                 </Alert>
               </Collapse>
              
              <div className={classes.content}>
                <span>이메일:</span>
                <TextField id="text_email" placeholder="이름을 입력해주세요" onChange={onChangeEmail} value={email} error={!isEmailValid}/>
              </div>
               <Collapse in={!isEmailValid}>
                 <Alert
                   severity="warning"
                   action={
                     <IconButton
                       aria-label="close"
                       color="inherit"
                       size="small"
                       onClick={() => {
                        setIsEmailValid(false);
                       }}
                     >
                       <CloseIcon fontSize="inherit" />
                     </IconButton>
                   }
                 >
                   잘못된 이메일 형식입니다
                 </Alert>
               </Collapse>

             <DaumPostcode/>

              <div className={classes.content}>
                <span>제목:</span>
                <TextField id="text_title" placeholder="제목을 입력해주세요"  onChange={onChangeTitle} value={title}/>
              </div>
              <div className={classes.textContainer}>
                <span >내용:</span>
                <textarea
                  rows={4}
                  aria-label="maximum height"
                  placeholder="내용을 입력해주세요"
                  style={{width:"500px"}}
                  onChange={onChangeDesc} 
                  value={desc}
                />
              </div>
              <div className={classes.content}>
              <Button
                variant="contained"
                component="label"
                size="small"
              >
              파일추가
              <input
                type="file"
                style={{ display: "none" }}
                value={fileName}
                onChange={onChangeFileName}
              />
            </Button>
            {fileName}
              </div>
              <div className={classes.content}>
                  신청·문의사항에 대한 답변은 메일로 발송됩니다.
                  동의하시겠습니까?
                <Checkbox
                  defaultChecked
                  value="third"
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
        
          </div>
          <div className="franchise-footer" >
            <div className="franchise-footer-container" >
                <div><PriorityHighIcon color="primary" fontSize="large"/></div>
                <div>
                · 문의가 집중되거나 주말의 경우 답변이 지연될 수 있습니다. 최대한
                빠르게 답변 드리도록 하겠습니다.
                <br />· 욕설, 비속어, 비방성 등의 부적절한 단어 포함되어 있는
                경우, 답변 진행이 어려울 수 있습니다.
                </div>
            </div>
            <div className="franchise-button-container" >
            <Button variant="contained"  size="small" className={classes.margin}>
              취소
            </Button>
            <Button variant="contained" type="submit" size="small"  color="primary" className={classes.margin}>
              등록
            </Button>
            </div>
          </div>
        </form >
        </FormControl>
        </div>
      </div>
    </div>
  
  );
}
export default withRouter(FranchiseInquiry);
