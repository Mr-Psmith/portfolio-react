import classes from "./works.module.css";

import oldPortf from "../img/works-oldPortf.jpg";
import tan from "../img/tan.png";

function Works(props) {

    const tanIframe =  <iframe src="https://theorianatura.psancthus.com/" title="111" className="frontdrop frontdrop1"></iframe>;


  return (
    <>
      <div className={classes.main}>
        <h1>Here are some of my works:</h1>
        <h4>You can check them out by clicking the pictures</h4>
        <div className={classes.unvisibleblock}>
          <div className={classes.block1}>
            <div className={classes.work1}>
              <a href={tanIframe} className="subblock subblock1 subblock-left">
                <img src={tan} className={classes.tanC} alt="" onClick={props.tanPrHandler}></img>
              </a>
              <div className="subblock1-descript subblock-descript">
                <p>
                  This site is the prototype copy of my Theoria Natura webmagazine, a
                  small webmagazin which I made in 2022 as part of my resume. It
                  uses pure Javascript, CSS, Html.
                </p>
              </div>
            </div>
            <div className={classes.work2}>
            <a href="..." className="subblock subblock2 subblock-right">
                <img
                  src={oldPortf}
                  className={classes.startAzoresC}
                  alt=""
                ></img>
              </a>
              <div className="subblock2-descript subblock-descript subblock-descript__upper">
                <p>
                  This is my old portfolio written in Javascript, CSS.
                </p>
              </div>
            </div>
          </div>

         {/*  <div class="smiley-box">
            <img className={classes.smiley} src="" alt=""></img>
          </div> */}

          {/* <div className={classes.block2}>
            <div class="block3 block">
              <button class="subblock subblock3 subblock-left">
                <img
                  src={startAzores}
                  className={classes.startAzoresC}
                  alt=""
                ></img>
              </button>
              <div class="subblock3-descript subblock-descript">
                <p>
                  This will be a photogallery side-project on a subdomain of the
                  ("TAN")magazine. I hope I will have the time for building it
                  soon. For the moment <bold>I SHOULD HIDE IT </bold>
                </p>
              </div>
            </div>
            <div class="block4 block">
              <div class="subblock4-descript subblock-descript subblock-descript__upper">
                <p>
                  This is a half part joke, half part marketing style site,
                  where I try to sell myself a little funnier like before, but
                  hell knows, maybe <bold>I SHOULD HIDE THIS AS WELL</bold>
                </p>
              </div>
              <button class="subblock subblock4 subblock-right">
                <img src={tan} className={classes.tanC} alt=""></img>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Works;
