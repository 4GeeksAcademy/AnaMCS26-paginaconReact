import React from "react";

const Jumbotron = () => {
    return(
        <div className="bg-light rounded w-80 p-10" style={{padding:'50px', margin:'50px', justifyContent: 'center'}}>
            <h1>A Warm Welcome!</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <a className="btn btn-primary btn-lg m-3" role="button" style={{display: 'flex', flexDirection: 'row', paddingRigth: '20px', width: '13rem'}} >
				Call to action
			</a>
       
        </div>
    );
};

export default Jumbotron; 