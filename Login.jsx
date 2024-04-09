import React from 'react';
import Card from '@mui/joy/Card';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

function Login(){

	return(
		<div style={{margin:'80px 500px'}}>
			<Card variant="outlined">
				<div style={{display:'flex', flexDirection:'column'}}>
					<h1 style={{alignSelf:'center'}}>Login</h1>
					<div style={{margin:'0px 0px 0px 0px'}}>
						<h3>Username</h3>
						<Input placeholder="Enter username" variant="outlined" size='lg' color='primary'/>
					</div>
					<div style={{margin:'0px 0px 40px 0px'}}>
						<h3>Password</h3>
						<Input placeholder="Enter password" variant="outlined" size='lg' color='primary'/>
					</div>
					<div style={{alignSelf:'center'}}>
						<Button variant='outlined' onClick={console.log(userInputValue)}>Submit</Button>
					</div>
					
				</div>
			</Card>
		</div>
	);
}

export default Login;
