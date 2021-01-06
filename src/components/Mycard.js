import React ,{ useState ,Fragment }from 'react';
import './Mycard.css';
import { getMatchDetail } from '../api/api' ;
//import '../img/vs.png';

import { Card, CardContent,Typography,Grid,Button,CardActions,DialogContentText,DialogContent,Dialog,DialogTitle,DialogActions} from '@material-ui/core';
const Mycard=({match})=>{

	const [detail,setDetail]=useState({});
	const [open,setOpen]=useState(false);

	const handleClick=(id)=>{
		getMatchDetail(id).then((data)=>{
			//alert(data)
			//console.log(data);
			setDetail(data);
			handleOpen();
			//console.log({detail.description});

		}).catch((error)=>console.log(error));
	};

	const getMatchCard=()=>{
		return(
			<Card style={{marginTop:15}}> 
				<CardContent>
					<Grid container justify='center' alignItems='center' spacing={4}>
						<Grid item>
							<Typography variant='h6'>{match["team-1"]}</Typography>
						</Grid>
						<Grid item>
							<img    src={'data:image/jpeg;base64,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'} alt=""/>
						</Grid>
						<Grid item>
							<Typography variant='h6'>{match["team-2"]}</Typography>
						</Grid>
					</Grid>	
				</CardContent>
				<CardActions>
					<Grid container justify='center'>
						<Button  onClick={()=>{
							handleClick(match.unique_id); 
						}} variant='contained' color='primary'>Show Detail</Button>
						<Button  style={{left:5}} variant='contained' color='primary'>Start Time{new Date(match.dateTimeGMT).toLocaleString()}</Button>
					</Grid>
				</CardActions>

			</Card>




			)

	}
	const handleClose=()=>{
		setOpen(false);

	};

	const handleOpen=()=>{
		setOpen(true);

	};

	const getDialog=()=>(
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle id="alert-dialog-title">{"Match Detail.."}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
				<Typography>{detail.stat}</Typography>
				<Typography>
					Match:<span style={{fontStyle:"italic",fontWeight:"bold"}}>
					{detail.matchStarted ?"Started":"Still not Started"}
					</span>
				</Typography>

				<Typography>
					Score:<span style={{fontStyle:"italic",fontWeight:"bold"}}>
					{detail.score}
					</span>
				</Typography>




				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
				Close</Button>
			</DialogActions>




		</Dialog>
	)

	return (
	<Fragment>
		{getMatchCard()}
		{getDialog()}
		

	</Fragment>
	);


};

export default Mycard;