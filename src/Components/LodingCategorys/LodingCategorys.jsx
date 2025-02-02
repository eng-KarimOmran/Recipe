import LodingImg from '../../assets/LodingImg.jpg'
export default function LodingCategorys() {
  return (
    <div className="CardRecipe">
      <div className="img-CardRecipe">
        <img src={LodingImg} alt="Bubble & Squeak" />
      </div>
      <h3>Loading…↻</h3>
      <button>Loading…↻</button>
    </div>
  )
}
