import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    width:"20rem",
    height:"10rem"
  },
  bullet: {
    display: 'inline-block',
    // margin: '0 2px',
    // transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
//   pos: {
//     margin: 12,
//   },
});

export default function SimpleCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Card Text Her
        </Typography>
        
        
        
      </CardContent>
      <CardActions>
        <Button size="small">More info</Button>
      </CardActions>
    </Card>
  );
}

























// import React from 'react';
// import { Card, Button, CardTitle, CardText } from 'reactstrap';
// import YouTubeCounter from '../Youtube/YouTubeCounter'


// const Cards = (props) => {
//     return (
//         <div>
//             <Card body inverse color="danger">
//                 <CardTitle><h1></h1></CardTitle>
//                 <CardText></CardText>
//                 <Button color="secondary">Button</Button>
//             </Card>
//         </div>
//     );
// };

// export default Cards;