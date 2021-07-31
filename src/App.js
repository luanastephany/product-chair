import { BiArrowBack, BiShoppingBag, BiStar } from 'react-icons/bi'

const image = "https://www.ikea.com/ca/en/images/products/strandmon-armchair-nordvalla-dark-gray__0325432_pe517964_s5.jpg?f=xl"
const description = 'Some 60 years later we brought it back into the range with the same craftsmanship, comfort and appearance.Enjoy!'

function App() {
  return (
    <div id="screen">

      <header>
        <BiArrowBack size={28} color="#35323F" />
        <span className="title">Product</span>
        <BiShoppingBag size={24} color="#35323F" />
      </header>

      <main>
        <img src={image} alt="" />

        <div className="box">
          <div className="info">
            <h2>Strandmon</h2>
            <span className="price">$299</span>
          </div>
          <div className="rate">
            <BiStar color="#FDC510" />
            <span>4.5</span>
          </div>
        </div>

        <div className="colors">
          <div className="color selected" />
          <div className="color" />
          <div className="color" />
          <div className="color" />
        </div>

        <div className="description">{description}</div>

        <button>Add to Cart</button>

      </main>
    </div>
  );
}

export default App;
