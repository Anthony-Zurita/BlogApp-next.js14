import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <div>
        <Image src="https://images.pexels.com/photos/27108021/pexels-photo-27108021/free-photo-of-a-building-with-a-red-and-white-clock-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
