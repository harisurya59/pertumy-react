import one from "../assets/images1/img1.jpeg"
import two from "../assets/images1/img2.jpeg"
import three from "../assets/images1/img3.jpeg"

function Body(){
    return(
      <div className="container">
        <div className="img1">
          <img src={one} alt="one"></img>
          <p>Lorem ipsum dolor si  nisi non exercitationem nemo ratione rerum dolores iusto earum vitae, expedita at, aperiam atque.</p>
        </div>
        <div className="img1">
          <img src={two} alt="two"></img>
          <p>Lorem ipsum dolor si  nisi non exercitationem nemo ratione rerum dolores iusto earum vitae, expedita at, aperiam atque.</p>
        </div>
        <div className="img1">
          <img src={three} alt="three"></img>
          <p>Lorem ipsum dolor si  nisi non exercitationem nemo ratione rerum dolores iusto earum vitae, expedita at, aperiam atque.</p>
        </div>
  
      </div>
    )
  }
  
export default Body