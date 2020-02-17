import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import  Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
    margin: "0 50px",
  },
  indicator: {
    backgroundColor: " #029132"
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    fontSize: "1.2rem",
    textTransform: "none",
    minWidth: 72,
    color:"#029132",
    marginRight: theme.spacing(4),
    "&:hover": {
      color: "#ffc20e",
      opacity: 1
    },
    "&$selected": {
      color: "#ffc20e",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#ffc20e"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  TabLink: {
    display:"inline-block",
    marginRight: "50px",
    "&:visited":{
      color: "#666666" ,
      textDecoration: "none"
    }
  },
  Link:{
    color:"inherit",
    textDecoration:"none",
    "&:visited":{
      color: "#666666" ,
      textDecoration: "none"
    }
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs  value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="꿀조합 메뉴" />
          <AntTab label="꿀조합 이용하기" />
          <AntTab label="써브웨이" />
          <AntTab label="새소식" />
          <AntTab label="이벤트" />
        </AntTabs>
        <TabPanel  value={value} index={0}>
          <RouterLink className={classes.TabLink} to="/detail/0/로스트%20치킨/오븐에%20구워%20담백한%20저칼로리%20닭가슴살의%20건강한%20풍미">
            로스트치킨
          </RouterLink>
          <RouterLink  className={classes.TabLink}to="/detail/1/터키베이컨/담백한%20터키와%20바삭한%20베이컨의%20기분%20좋은%20만남">
            터키베이컨
          </RouterLink>
          <RouterLink className={classes.TabLink} to="/detail/2/스테이크&치즈/육즙이%20쫙~풍부한%20비프%20스테이크의%20풍미가%20입안%20한가득">
            스테이크&치즈
          </RouterLink>
          <RouterLink className={classes.TabLink} to="/detail/3/터키%20베이컨%20아보카도/담백한%20터키와%20바삭한%20베이컨%20환상조합에%20부드러운%20아보카도는%20신의%20한수">
            터키 베이컨 아보카도
          </RouterLink>
          <RouterLink className={classes.TabLink} to="/detail/4/치킨%20베이컨%20랜치/바삭한%20베이컨과%20담백한%20치킨의%20이중주">
            치킨 베이컨 랜치
          </RouterLink>
          <RouterLink className={classes.TabLink} to="/detail/5/써브웨이%20멜트/자신있게%20추천하는%20터키,%20햄,%20베이컨의%20완벽한%20맛의%20밸런스">
            써브웨이 멜트
          </RouterLink>
          <RouterLink className={classes.TabLink} to="/detail/6/스파이시%20이탈리안/살라미,%20페퍼로니가%20입안%20한가득!%20쏘%20핫한%20이탈리아의%20맛">
            스파이시 이탈리안
          </RouterLink>
          <RouterLink className={classes.TabLink} to="/detail/7/치킨%20데리야끼/담백한%20치킨%20스트립에%20달콤짭쪼름한%20써브웨이%20특제%20데리야끼%20소스와의%20환상적인%20만남">
            치킨 데리야끼
          </RouterLink>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RouterLink className={classes.TabLink} to="/combination">꿀조합 만들기</RouterLink>
          <RouterLink className={classes.TabLink} to="/board">꿀조합 게시판</RouterLink>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RouterLink className={classes.TabLink} to="/store">매장 찾기</RouterLink>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Link className={classes.Link} href="https://youtu.be/ZR1smxzfu90">꿀조합 영상보러가기</Link>
        </TabPanel>
        <TabPanel  value={value} index={4}>
            <RouterLink className={classes.TabLink} to="/">이벤트 및 프로모션</RouterLink>
        </TabPanel>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
