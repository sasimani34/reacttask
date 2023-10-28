import React from 'react'
import  '../App.css';

const Home = () => {
  return (
    <div className="container home">
      <h2 className='text-center mb-5'>Flower Boutique</h2>
    <div className="row ">
        <div className="col-md-3">
          <div className="card bg-light">
            <img src="./images/flower1.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body ">
              <h5 className="card-title">Buttercup Blooms</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a to="#" className="btn btn-primary">Read More</a>
              {/* // <i className="fa-solid fa-sort-down bg-primary ms-1 "></i>  */}
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-light">
            <img src="./images/flower2.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Charming Cacti.</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a to="#" className="btn btn-primary">Read More</a>
              
              
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-light">
            <img src="./images/flower3.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> Superblume Florals</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a to="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-light">
            <img src="./images/flower4.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> The English Rose</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a to="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        {/* <BsFillBagPlusFill className='icons' /> */}
    </div>
  </div>
  )
}

export default Home