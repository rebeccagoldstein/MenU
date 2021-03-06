import React from "react";
import { Col } from "react-materialize";
import "./DutchBrosCard.css";



const DutchBrosCard = props => {
  console.log(props);
  return (
    <Col m={4} s={12}>
      <div className="card"><style>{'.card { background: #fefe31; width:250%; height:450px;'}</style>

        
        <div className="card-image waves-effect waves-block waves-light"><style>{'.card { height:400px;'}</style><i className="material-icons right"></i>
          <img className="activator" src={props.image} alt={props.name} 
          />

        </div>
        <div className="card-content">
          <span className="card-title activator">
            <span className="dutchbros-names"> {props.name}</span>
          </span>
        </div><i class="far fa-heart"></i>
        <div className="card-reveal">
          <div className="dutchbros-info">
            <div className="card-top">
              <div>
                <span className="card-title"><span><i className="material-icons right">close</i></span>
                  <span className="dutchbros-name">{props.name}</span>
                </span>
              </div>
              <div className="reveal-details">
                <div className="detail-item row">
                  <span>Description:</span> <span>{props.description}</span>
                </div>
                <div className="detail-item row">
                  <span><strong>Recipe:</strong></span>
                  <span>
                    <ul>
                      {props.recipe.map(ing => (
                        <li className="list">{ing}</li>
                      ))}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </Col>
  );
};

export default DutchBrosCard;