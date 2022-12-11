import React from 'react';
import clsx from 'clsx';
import styles from './guideNavBoxes.module.css';

const FeatureList = [
  {
    title: 'Infrastructure Tutorials',
    items: [
      {url: "guides/self-host/docker", text: "Deploy using Docker"},
      {url: "guides/oracle-cloud", text: "Deploy with Oracle Cloud"},
      {url: "guides/self-host/win", text: "Deploy using Windows"},
      {url: "guides/lab/monitoring", text: "Monitoring your server"},
      {url: "guides/lab/hardening", text: "Securing your infrastructure"},
    ]
  },
  {
    title: 'Plugin Tutorials',
    items: [
      {url: "guides/dynmap", text: "Dynmap Configuration"},
    ]
  },
  {
    title: 'Service Tutorials',
    items: [
      {url: "guides/pterodactyl", text: "Pterodactyl Deployment"},
      {url: "guides/pufferpanel", text: "Pufferpanel Deployment"},
      {url: "guides/ssl", text: "SSL Configuration"},
    ]
  },
];

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}


function Feature({title, icon, items }) {


  return (
    <article className={clsx('col col--3')}>
      <div className={styles.homecard}>
        <br/>
        <h2>{title}</h2>
        <div className={styles.listContainer}>
        <ul>
          {items.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </ul>
        </div>
      </div>
      
    </article>
  );
}





export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
        <ul className={styles.grid3col}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
    </section>
  );
}
