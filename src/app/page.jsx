import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      Homepage
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>
          Lorem, ipsum dolor sit amet consecutur adipisicing elit. Vero
          blanditiis, voluptates, quod, quae voluptatum quibusdam quial.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandsImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
