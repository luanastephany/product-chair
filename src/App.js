import { BiArrowBack, BiShoppingBag, BiStar } from 'react-icons/bi'
import { useState } from 'react'

const description = 'Some 60 years later we brought it back into the range with the same craftsmanship, comfort and appearance. Enjoy!'

const colors = [
  { color: "#838486", image: "https://www.ikea.com/ca/en/images/products/strandmon-armchair-nordvalla-dark-gray__0325432_pe517964_s5.jpg?f=s" },
  { color: "#EFBF50", image: "https://www.ikea.com/ca/en/images/products/strandmon-armchair-skiftebo-yellow__0325450_pe517970_s5.jpg?f=s" },
  { color: "#364A3F", image: "https://www.ikea.com/ca/en/images/products/strandmon-armchair-djuparp-dark-green__0531313_pe647261_s5.jpg?f=s" },
  { color: "#C8BBAB", image: "https://www.ikea.com/ca/en/images/products/strandmon-armchair-kelinge-beige__0950941_pe800821_s5.jpg?f=s" },
  { color: "#3E5171", image: "https://www.ikea.com/ca/en/images/products/strandmon-armchair-kvillsfors-dark-blue-blue__0961698_pe807715_s5.jpg?f=s" },
  { color: "#B9B6B3", image: "https://www.ikea.com/ca/en/images/products/strandmon-armchair-vibberbo-black-beige__0761768_pe751434_s5.jpg?f=s" },
];

function App() {
  const [selected, setSelected] = useState(0)

  const itemSelecionado = colors[selected]

  return (
    <div id="screen">
      <header>
        <BiArrowBack size={28} color="#35323F" cursor="pointer" />
        <span className="title">Product {selected}</span>
        <BiShoppingBag size={24} color="#35323F" cursor="pointer" />
      </header>

      <main>
        <img src={itemSelecionado.image} alt="" />

        <div className="box">
          <div className="info">
            <h2>Strandmon Armchair</h2>
            <span className="price">$299</span>
          </div>
          <div className="rate">
            <BiStar color="#FDC510" />
            <span>4.5</span>
          </div>
        </div>

        {/*Para cada item, ele irá associar a cor com a imagem da const colors*/}

        <div className="colors">
          {colors.map((item, index) => (
            <div
              onClick={() => setSelected(index)}
              style={{ backgroundColor: item.color }}
              className={`color ${selected === index && 'selected'}`}
            >
            </div>
          ))}
        </div>

        <div className="description">{description}</div>

        <button>Add to Cart</button>

      </main>
    </div>
  );
}

export default App;
