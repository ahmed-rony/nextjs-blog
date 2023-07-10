import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.banner_text}>
        <h1>Design better with <br /> Digital Products</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, architecto. Illum itaque eos cum nam!</p>
        <button>View more</button>
      </div>
      <div className={styles.banner_img}>
        <Image fill={true} src="https://images.pexels.com/photos/908713/pexels-photo-908713.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </main>
  )
}
