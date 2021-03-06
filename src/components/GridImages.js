import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom"
import { storage } from './firebaseConfig'
// ============================================
//         material-ui
// ============================================
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width:"100%"
  },
  container:{
  
  },
  image: {
    "&:hover": {
      opacity: 0.25,
      transition: "0.9s",
    }
  }
}));


const GridImages = props => {
  const classes = useStyles();
  const [urls, setUrls] = useState([]);

  const _get = () => {
    storage
      .ref("sandwichsImages/")
      .listAll()
      .then(function(res) {
        res.items.forEach(itemRef => {
         

          displayImage(itemRef);
        });
      })
      .catch(error => {
     
      });
    const displayImage = images => {
      images
        .getDownloadURL()
        .then(url => {
          urls.push({ url });
        })
        .catch(error => console.log(error));
      setUrls(() => ({ urls: urls }));
    };
  };
  useEffect(() => {
    _get();
  }, []);




  return (
    <div className={classes.root} >
      <Grid container spacing={1} className={classes.container}>
          {urls.urls && urls.urls.map((url,i) => 
            <Grid key={i}item lg={4} md={6} sm={6} className={classes.image}>
                <Link
                    to={`/detail/${i}/${
                      props.sliderTitle[i]
                    }/${
                      props.sandwichDesc[i]
                    }`}
                  >
                  <img key={url.url} src={url.url} alt="" />
                   <div style={{textAlign:"center",color:"#999999"}}>{props.sliderTitle[i]}</div>
                </Link>
            </Grid>
          )
        }
        </Grid>
    </div>
    
  );
};


export default GridImages;
