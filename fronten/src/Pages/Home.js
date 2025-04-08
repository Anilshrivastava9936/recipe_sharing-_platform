import React from 'react'
import GetRecipe from './GetRecipe'
import Image1 from './images/Image.js'

const Home = () => {
  return (

    <div style={{ margin: "0px" }}>

      <div id="carouselExampleAutoplaying" class="carousel slide pt-2" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ backgroundColor: '#de530d', width: '85%', margin: '0 auto', height: '80vh', borderRadius: '15px' }}>
          <div className="carousel-item active">
            {/* <img src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png" className="d-block w-100" style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="... 1" /> */}
            <Image1></Image1>
          </div>
          <div className="carousel-item">
            <img src="	https://b.zmtcdn.com/data/o2_assets/52c985ee025e442b74fb4c91cbe20ced1743099385.png" className="d-block w-100" style={{ height: '100%', objectFit: 'cover' }} alt="....2" />

          </div>
          <div className="carousel-item">
            <div className='text-fuchsia-200' style={{ textAlign: "center", fontFamily: "fantasy ", fontSize: "150" }}>

              <h1 >Eate Food Serve Love</h1>
            </div>



            <img src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png" className="d-block w-100" style={{ height: '90%', objectFit: 'cover', marginBottom: "200px" }} alt="i..... 3" />
          </div>
        </div>



        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div >
        <GetRecipe></GetRecipe>
      </div>
    </div>
  )
}

export default Home