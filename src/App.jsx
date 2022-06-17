import { useState } from "react";
import styles from "./App.module.css";
import html2canvas from "html2canvas";

function App() {
  const [image, setImage] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const handleScreenshot = () => {
    html2canvas(document.getElementById("meme"), {
      width: 506,
      height: 506,
    }).then(function (canvas) {
      const div = document.createElement("div");
      div.setAttribute("id", "meme-img");
      document.body.innerHTML = "";
      document.body.appendChild(div);
      document.getElementById("meme-img").appendChild(canvas);
    });
  };

  return (
    <>
      <h1>Meme Generator 2022</h1>
      <button onClick={handleScreenshot}>Gerar</button>
      <input
        type={"file"}
        onChange={(event) =>
          setImage(URL.createObjectURL(event.target.files[0]))
        }
      />
      <div>
        <input
          type={"text"}
          placeholder="legenda"
          onChange={(event) => setSubtitle(event.target.value)}
        />
      </div>

      <div className={styles.flex}>
        <div id="meme" className={styles.m10}>
          <img className={styles.container} src={image} />
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div id="meme-img" className={styles.m2}></div>
      </div>
    </>
  );
}

export default App;
