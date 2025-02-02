import LodingImg from '../../assets/LodingImg.jpg'
import { FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
export default function LodingDetails() {
  return (
    <section>
      <div className="RecipeDetails">
            <h2>Loading…↻</h2>
            <div className="Box-Details">
              <div className="Box-img">
                <img src={LodingImg} alt="img" />
                <div>
                  <a href="#" className="youtube"><FaYoutube /> youtube</a>
                  <a href="#" className="source"><TbWorld /> source</a>
                </div>
              </div>
              <ul className="step">
                Loading…↻
              </ul>
              <ul className="ingredients">
                <div>Ingredients</div>
                <li>
                  <span>Loading…↻</span>
                  <span>Loading…↻</span>
                </li>
              </ul>
            </div>
          </div>
    </section>
  )
}
