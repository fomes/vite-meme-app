import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [image, setImage] = useState("");
  const [subtitle, setSubtitle] = useState("");

  return (
    <>
      <h1>Meme Generator 2022</h1>
      <input
        type={"file"}
        onChange={(event) =>
          setImage(URL.createObjectURL(event.target.files[0]))
        }
      />
      <div>
        <img className={styles.container} src={image} />
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div>
        <input
          type={"text"}
          placeholder="legenda"
          onChange={(event) => setSubtitle(event.target.value)}
        />
      </div>
    </>
  );
}

export default App;
