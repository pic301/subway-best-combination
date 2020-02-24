import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';


const messages = [
  {
    id: 1,
    primary: "꿀조합이 무엇인가요?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg"
  },
  {
    id: 2,
    primary: '꿀조합은 어떻게 조합하나요?',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
 
];

const useStyles = makeStyles(theme => ({
  text: {
    textAlign: "center",
    padding: 20
    
  },
  paper: {
    paddingBottom: 50,
    
  },
  list: {
    height: 602,
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
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
}));



const Bar = () => {
  const classes = useStyles(); 

  return <>
  
           {/* AppBar */}
            <AppBar color="primary" className={classes.appBar}>
            <CssBaseline/>
          <Paper square className={classes.paper}>
            <Typography className={classes.text} variant="h5" gutterBottom>
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
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
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
