import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import HelpIcon from '@material-ui/icons/Help';

const messages = [
  {
    id: 1,
    primary: "꿀조합이 무엇인가요?",
    secondary:
      "서브웨이 샌드위치를 선택할때 여러사람들에게 맛을 인정받은 일종의 가이드라인 입니다.",
    person: "/static/images/avatar/5.jpg"
  },
  {
    id: 2,
    primary: '꿀조합은 어떻게 조합하나요?',
    secondary: `나만의 꿀조합 만들기 버튼을 눌러 시작해보세요.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: "홈페이지를 왜 만들게 됐나요?",
    secondary:
      "서브웨이 메뉴를 선택할때 어려움을 겪거나 편하게 먹을 수 있는 정보를 제공해 주고 싶었습니다.",
    person: "/static/images/avatar/5.jpg"
  },
];

const useStyles = makeStyles(theme => ({
  text: {
    textAlign: "center",
    color:"#282828",
    padding: 20,
    backgroundColor: theme.palette.primary.secondary,
    letterSpacing:0.9,
    fontSize: "1.1rem"
  },
  paper: {
    paddingBottom: 50,
    
  },
  list: {
    height: 602,
  },
  subheader: {
    
  },
  appBar: {
    position:"absolute",
    top: 'auto',
    width: '300px',
    top:-800,
    left:0,
    '@media (min-width: 978px)': {
    }
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  help:{
    position:"absolute",
    top:15,
    left:65,
    fontSize: "2rem",
    color: theme.palette.primary.main,
  }
}));



const Bar = () => {
  const classes = useStyles(); 

  return <>
  
           {/* AppBar */}
            <AppBar color="primary" className={classes.appBar}>
            <CssBaseline/>
          <Paper square className={classes.paper}>
            <Typography className={classes.text} variant="h5" gutterBottom>
            <HelpIcon className={classes.help}/>
                자주묻는질문
            </Typography>
            <List className={classes.list}>
              {messages.map(({id, primary, secondary,person})=>
                 <>
                 {id === 1 && <ListSubheader key={id}className={classes.subheader}>Today</ListSubheader>}
                {id === 3 && <ListSubheader key={id} className={classes.subheader}>Yesterday</ListSubheader>}
                <ListItem button>
                  <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary}/>
                </ListItem>
              </>
              )}
            </List>
          </Paper>
              <Toolbar className={classes.toolBar}>
              <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
              </Toolbar>
            </AppBar>
            
         </>;
};

export default Bar;
