import React, { useState } from "react";
import "./franchiseInquiry.css";

// =============================
//      material-ui
// =============================
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  root: {},
  margin:{
    marginLeft:"10px"
  }

}));
const FranchiseInquiry = () => {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState("");
  const classes = useStyles();
  const handleChange = e => {
    setChecked(e.target.checked);
  };
  const handleSelectChange = e => {
    setSelected(e.target.value);
  };
  return (
    <div className="franchise">
      <div className="franchise-bg">
        <div className="franchise-wrapper">
          <div className="franchise-header">
            <div className="franchise-title">가맹신청ㆍ문의</div>
            <div className="franchise-privacy">
              <div>
                <p>개인정보수집 및 이용동의</p>
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
                    onChange={handleChange}
                    value="primary"
                    color="primary"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  개인정보수집 및 이용에 동의합니다.(필수)
                </p>
              </div>
              <div>
                <p>개인정보 위탁동의</p>
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
                    defaultChecked
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
            <FormControl className={classes.root} noValidate autoComplete="off">
              <div>
                {" "}
                <span>이름:</span>{" "}
                <TextField id="text_name" placeholder="이름을 입력해주세요" />
              </div>
              <div>
                <span>연락처:</span>
                <TextField
                  id="text_phone"
                  placeholder="연락처를 입력해주세요"
                />
              </div>
              <div>
                <span>이메일:</span>{" "}
                <TextField id="text_name" placeholder="이름을 입력해주세요" />{" "}
              </div>
              <span>지역:</span>{" "}
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>시/도</em>
                </MenuItem>
                <MenuItem value={10}>경기도 </MenuItem>
                <MenuItem value={20}>인천광역시</MenuItem>
                <MenuItem value={30}>대전광역시</MenuItem>
                <MenuItem value={40}>세종특별자치시</MenuItem>
                <MenuItem value={50}>충청남도</MenuItem>
                <MenuItem value={60}>경상남도</MenuItem>
                <MenuItem value={70}>울산광역시</MenuItem>
                <MenuItem value={80}>부산광역시</MenuItem>
                <MenuItem value={90}>서울특별시</MenuItem>
                <MenuItem value={100}>전라북도</MenuItem>
                <MenuItem value={110}>충청북도</MenuItem>
                <MenuItem value={120}>광주광역시</MenuItem>
                <MenuItem value={130}>전라남도</MenuItem>
                <MenuItem value={140}>경상북도</MenuItem>
                <MenuItem value={150}>강원도</MenuItem>
              </Select>
              <div>
                <span>제목:</span>{" "}
                <TextField id="text_name" placeholder="제목을 입력해주세요" />{" "}
              </div>
              <div>
                <span>내용:</span>{" "}
                <TextareaAutosize
                  rowsMin={5}
                  aria-label="maximum height"
                  placeholder="내용을 입력해주세요"
                  defaultValue=""
                />
              </div>
              <input type="file" />
              <div>
                <span>
                  신청·문의사항에 대한 답변은 메일로 발송됩니다.
                  동의하시겠습니까?
                </span>
                <Checkbox
                  defaultChecked
                  value="third"
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
            </FormControl>
          </div>
          <div className="franchise-footer">
            <div className="franchise-footer-container">
                <div><PriorityHighIcon color="primary" fontSize="large"/></div>
                <div>
                · 문의가 집중되거나 주말의 경우 답변이 지연될 수 있습니다. 최대한
                빠르게 답변 드리도록 하겠습니다.
                <br />· 욕설, 비속어, 비방성 등의 부적절한 단어 포함되어 있는
                경우, 답변 진행이 어려울 수 있습니다.
                </div>
            </div>
            <div className="franchise-button-container">
            <Button variant="contained"  className={classes.margin}>
              취소
            </Button>
            <Button variant="contained"   color="primary" className={classes.margin}>
              등록
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseInquiry;
