import { CompleteChallengs } from "../components/CompleteChallenges";
import { ExperiencieBar } from "../components/ExperiencieBar";
import { Profile } from "../components/Profile";
import {Countdown} from "../components/Countdown";
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperiencieBar />
      <section>
        <div>
          <Profile/>
          <CompleteChallengs/>
          <Countdown />
        </div>
      </section>
    </div>
  );
}
