import { react, useEffect } from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import MobileAuditingInfo from '../components/MobileAuditingInfo';


export default function Home() {

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-5B9YRLQL0R";
    script1.async = true;

    const script2 = document.createElement('script');
  
    document.body.appendChild(script1);
  
    return () => {
      document.body.removeChild(script1);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>BitsOrBytes</title>
        <meta
          name="description"
          content="Created by love with Startertemp and LearnWeb3DAO"
        />
        <link rel="icon" href="/twitterpfp.png" />
      </Head>
      <Navbar />
      <main className={styles.main} id="home">
        <div className={styles.landingPage}>
          <h1 className={styles.title}>Hello, I'm</h1>
          <button className={styles.flipname} type="button" data-hover="Cade"><span>BitsOrBytes</span></button>
        </div>

        <div className={styles.readmeContainer}>
          <div className={styles.readmeHeader}>
            {/* ICON */}
            <span>README.md</span>
          </div>

          <div className={styles.readmeContent}>
            <div id="aboutme">
              <h2 className={styles.readmeSectionHeader}>Summary:</h2>
              <div className={styles.summaryContainer}>
                <img className={styles.summaryImage} src="./twitterpfp.png" alt="bitsorbytes twitter pfp" />
                <ul>
                  <li className={styles.listItem}>I have been a full stack developer for over 2 years now, working with .NET at my local police department.</li>
                  <li className={styles.listItem}>Started my career in crypto development a little over a year ago, building various DAPPs.</li>
                  <li className={styles.listItem}>Started auditing smart contracts in late early March, 2023 and strive to be an employed smart contract auditor by the end of 2023.</li>
                </ul>
              </div>
            </div>

            <h2 className={styles.readmeSectionHeader1}>Code4rena Competitions:</h2>
            <table className={styles.table} id="auditchallenges">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Protocol Name</th>
                  <th>High</th>
                  <th>Medium</th>
                  <th>Low</th>
                  <th>Non-Critical</th>
                  <th>Gas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-03</td>
                  <td>Asymmetry</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>6</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>2023-04</td>
                  <td>Frankencoin</td>
                  <td>0</td>
                  <td>3</td>
                  <td>0</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>

            
            <h2 className={styles.readmeSectionHeader1}>Table of knowledge:</h2>
            <table className={styles.table} id="auditchallenges">
              <thead>
                <tr>
                  <th>Last Edit Date</th>
                  <th>Resource Name</th>
                  <th>Resource Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-03-25</td>
                  <td><a target="_blank" className={styles.competitionLink} href="https://www.notion.so/bitsorbytesdev/82af86c128ba4743a06e10d5394e498f?v=70cd793088f74c57a220558ecb21fa5a">Audit Findings Database</a></td>
                  <td>Smart Contract Vulnerabilities</td>
                </tr>
                <tr>
                  <td>2023-03-25</td>
                  <td><a target="_blank" className={styles.competitionLink} href="https://bitsorbytesdev.notion.site/424a7db928524fa9b45ffe24e2fe937e?v=bf358f31e0c9445fa773d23b170b8391">My Ethernaut Solutions</a></td>
                  <td>Challenge/CTF</td>
                </tr>
              </tbody>
            </table>
            <MobileAuditingInfo />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <h2>Created by, BitsOrBytes</h2>
        <div>
          <a className={styles.social} href="https://twitter.com/bitsorbytes"><img className={styles.social} src="../../twitter.svg" alt="twitter icon" /></a>
          <a className={styles.social} href="https://github.com/CadeDev17?tab=overview&from=2023-03-01&to=2023-03-19"><img className={styles.social} src="../../github.svg" alt="github icon" /></a>
        </div>
      </footer>
    </div>
  );
}
