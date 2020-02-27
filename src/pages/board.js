import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../components/firebaseConfig";
import Box from '@material-ui/core/Box'
import amber from '@material-ui/core/colors/amber';
import MessageForm from "../components/MessageForm";
import './border.css'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 30,
    color:amber.A400
  },
  pos: {
    marginBottom: 12
  }
});
const defaultProps = {
  bgcolor: 'background.paper',
  marginTop: 10,
  marginLeft: 20,
  marginRight: 25,
  
  style: { width: '30%', height: '25%' },

};

const Board = ({user}) => {
  const classes = useStyles();
  const [cards, setCards] = useState([]);
  const _get = () => {
    db.collection("board")
      .orderBy("createdAt","desc")
      .get()
      .then(function(querySnapshot) {
        const cards = [];
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          cards.push(
            {
              id:doc.id,
              title:doc.data().title,
              desc:doc.data().desc,
              combination:doc.data().combination,
              url:doc.data().url
            }
          )
          
        });
        setCards({cards:cards})
      });
  };
  useEffect(() => {
    _get();
  }, []);

  console.log(cards);
  console.log(cards.cards);
  console.log(cards["cards"]);
  

  return (
    <div className="board-container">
      <div>
      {cards.cards && cards["cards"].map((card,id )=> (
        <Box key={id} display="flex" justifyContent="flex-start">
        <Box borderColor="#2e7d32" {...defaultProps} >
        <Card className={classes.root}>
         <CardContent>
           <Typography className={classes.title}  gutterBottom>
              나만의 꿀조합 
           </Typography>
           <Typography variant="h5" component="h2">
              제목:{card.title}
           </Typography>
           <Typography className={classes.pos} color="textSecondary">
             설명:{card.desc}
           </Typography>
           <Typography className={classes.pos} color="textSecondary">
             레시피:{card.combination.join(",")}
           </Typography>
         </CardContent>
        <img src={card.url} alt="" width="100px" height="100px"/>
         <CardActions>
           <Button size="small">Learn More</Button>
         </CardActions>
       </Card>
        </Box>
      </Box>
      )
      )}
      </div>
      <MessageForm user={user}/>
    </div>
  )
};
export default Board;





