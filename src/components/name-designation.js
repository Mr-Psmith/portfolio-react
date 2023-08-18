import { useState } from "react";
import classes from "./name-designation.module.css";

function NameDesignation() {
  const [nameSwitch, setNameSwitch] = useState("");

  function hoverHandler() {
    if (!nameSwitch) {
      setNameSwitch(true);
    } else {
      setNameSwitch(false);
    }
  }

  return (
    <>
      <div className={classes.main} onMouseEnter={hoverHandler}>
        {!nameSwitch ? (
          <div>
            <h4 className={classes.nameTransitionH4}>P. Sancthus</h4>
            <h5>Web-developer, designer, writer, thinker</h5>
          </div>
        ) : (
          <div>
            <h4 className={classes.nameTransitionH4}>Pal Mihaly Szenthe</h4>
            <h5>Web-developer, designer, writer, thinker</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default NameDesignation;
