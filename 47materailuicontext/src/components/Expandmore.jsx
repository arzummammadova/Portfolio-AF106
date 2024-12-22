import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { productList } from '../context/UserContext';
const Expandmore = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState({});


    const handleExpandClick = (id) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id], 
        }));
    };

    const products = productList();
return(
  <div className="container"   spacing={{ xs: 1, sm: 2 }}
  style={{ maxWidth: "80%", margin: "100px auto" ,display:"flex",flexWrap:"wrap",gap:"55px"}}>
        {
            products.map((product) => {
                return (

                    <Card key={product.id} sx={{ width: "30%" }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor:"rgb(162, 148, 249)" }} aria-label="recipe">

                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={product.title}
                            subheader={product.year}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={product.image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                               
                               
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <Expandmore
                                expand={expanded[product.id]} 
                                onClick={() => handleExpandClick(product.id)}
                                aria-expanded={expanded[product.id]}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </Expandmore>
                        </CardActions>
                        <Collapse in={expanded[product.id]} timeout="auto" unmountOnExit>
                            <CardContent>
                               
                                <Typography sx={{ marginBottom: 2 }}>
                                   {product.description}
                                </Typography>
                               
                            </CardContent>
                        </Collapse>
                    </Card>
                )
            })
        }
    </div>    
)
  


}
