import React from "react";
import "./Hotspot.css";
import ScriptTag from "react-script-tag";

function Hotspot(props) {

    let hotspotItems;
        if (props.hotspots) {
            hotspotItems = props.hotspots.map(hp => {
            return <div class=" tooltip tooltip-1">
            <div className="pin" style={{top: `${hp.y}%`, left: `${hp.x}%`}} ></div>
            <div className="tooltip-content" >
              <div className="arrow"></div>
              <div className="img">
                <img src={hp.src} alt="" />
              </div>
              <div className="content">
                <h1> {hp.title} </h1>
                <p>
                  {hp.description}
                </p>
              </div>
            </div>
          </div>;
            });
        }

  return (
    <section className="hp-section">
      <ScriptTag type="text/javascript" src="/Hotspotjs.js" />
      <div class="hp-container">
        <img src={props.mainImage} alt="" />
        <div class="all-tooltip">

        {hotspotItems}
          {/* { 
            props.hotspots.map(hp => 
            <div class=" tooltip tooltip-1">
              <div class="pin" style={{top: `${hp.y}%`, left: `${hp.x}%`}} ></div>
              <div class="tooltip-content">
                <div class="arrow"></div>
                <div class="img">
                  <img src={hp.src} alt="" />
                </div>
                <div class="content">
                  <h1> {hp.title} </h1>
                  <p>
                    {hp.description}
                  </p>
                </div>
              </div>
            </div>
          )}} */}

          {/* <div class=" tooltip tooltip-1">
            <div class="pin"></div>
            <div class="tooltip-content">
              <div class="arrow"></div>
              <div class="img">
                <img src="/images/rutile-needles-inclusions.jpg" alt="" />
              </div>
              <div class="content">
                <h1>A Rutile Needle inclusion</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, natus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, natus.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div class="tooltip tooltip-2">
            <div class="pin"></div>
            <div class="tooltip-content">
              <div class="arrow"></div>
              <div class="img">
                <img src="/images/feather-crack-inclusions.jpg" alt="" />
              </div>
              <div class="content">
                <h1> Feather Crack Inclusion</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, natus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, natus.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hotspot;
