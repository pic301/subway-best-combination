import React,{useEffect,useState} from 'react';
import { storage } from './firebaseConfig'
import { func } from 'prop-types';

// ============================================
//         material-ui
// ============================================
// import { withStyles } from "@material-ui/core/styles";
// import GridList from '@material-ui/core/GridList'
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import ListSubheader from "@material-ui/core/ListSubheader";

const styles = () =>({
    root:{

    },
    gridList:{

    },
    image:{

    }
})


const GridImages = () => {
    const [urls,setUrls] = useState([])
   
 const _get = () =>{
     storage
     .ref("sandwichsImages/")
     .listAll()
     .then(function(res) {
        res.items.forEach((itemRef) =>{
            console.log(itemRef.toString())
       
            displayImage(itemRef)
        })
      }).catch(error =>{
          console.log(error)
      })
    const displayImage = (images)=>{
        images.getDownloadURL()
        .then(url =>{
            urls.push({url})
        })
        .catch(error => console.log(error))
        setUrls(() =>({urls:urls}))
    }
     
     }
     useEffect(() => {
        _get();
      }, []);
      console.log(urls.urls)

return (
    <div>
    {urls.urls && urls.urls.map( (url,i)=>
      <img src={url.url} alt=""/>  
        )}    
    </div>
    );
}
// export default withStyles(GridImages);
export default GridImages;