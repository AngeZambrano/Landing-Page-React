import React from "react";

const Card = () => {
    // syle={{marginRight: spacing + 'em'}}
    return (
    <div className="d-flex justify-content-between" style={{margin: "30px 200px"}}> 
      <div className="card" style={{width: "18rem"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG/1024px-Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary" style={{margin: "0 48px"}}>Found out more!</a>
        </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG/1024px-Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary" style={{margin: "0 48px"}}>Found out more!</a>
        </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG/1024px-Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary" style={{margin: "0 48px"}}>Found out more!</a>
        </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG/1024px-Panda_Cub_from_Wolong%2C_Sichuan%2C_China.JPG" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary" style={{margin: "0 48px"}}>Found out more!</a>
        </div>
      </div>

    </div>)
}

export default Card;