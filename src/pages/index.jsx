import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './video.module.css';
import HomeNavBoxes from '../components/homepage/homeNavBoxes';
import { Redirect } from '@docusaurus/router';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h2 className="hero__title">Minecraft Admin Wiki</h2>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // return <Redirect to="/docs/intro" />;
  return (
    <Layout
      title={`Welcome`}
      description="We are setup.md, a community focused around documenting the important parts of Minecraft server administration and ensuring everything can be found in one single place.">
      <HomepageHeader />
      <main>
        <HomeNavBoxes/>
      </main>
    </Layout>
  );
}
