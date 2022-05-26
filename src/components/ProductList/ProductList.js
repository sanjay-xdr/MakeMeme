import { Link } from "react-router-dom";
import "./ProductList.css"
import Button from '@mui/material/Button';

import { memeDB } from "../../data";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  }));
  

const ProductList = () => {
  return (
    <div className="container">

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {memeDB.data.map(({ imgSrc, id, name }) => (
          <Grid item xs={5} sm={4} md={3} key={id}>
                <Item >
          <img src={imgSrc} alt={name} className="meme-img"/>
         
         <p> <Link to={`/generatememe/${id}`} className="link-btn">Use this</Link></p>
          </Item>
          </Grid>
      ))}
      
      </Grid>
    </Box>
 
    </div>
  );
};

export { ProductList };
