import React, { useEffect, useState } from "react";
import { AdjustBioContainer, PotButton } from "./AboutMeElements";
import { BioData } from "./BioData";

const Collapsible = () => {
  const defaultText: string = "╰─ ⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ─╯";
  const [key, setKey] = useState(-1);
  const [text, setText] = useState(defaultText);

  const handleOpening = (i: number) => {
    if (key === i) {
      setKey(-1);
      setText(defaultText);
    } else {
      setKey(i);
    }
  };

  useEffect(() => {
    if (key !== -1) {
      setText(BioData[key].bio);
    }
  }, [key]);

  return (
    <AdjustBioContainer>
      <h4
        style={{
          fontFamily: "Lato",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Short on Time?<br></br>Choose Biography Length
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {BioData.map((props, i) => {
          return (
            <div key={i}>
              <PotButton
                style={{
                  backgroundImage: props.src,
                }}
                onClick={() => handleOpening(i)}
              >
                {props.title}
              </PotButton>
            </div>
          );
        })}
      </div>
      <p
        style={{
          color: "#44624a",
          fontFamily: "Lato",
          fontSize: "15px",
          maxWidth: '400px',
          letterSpacing: '1px',
          padding: '15px'
        }}
      >
        {text}
      </p>
      <div></div>
    </AdjustBioContainer>
  );
};

export default Collapsible;
