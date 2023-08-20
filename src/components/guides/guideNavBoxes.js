import React from 'react';
import clsx from 'clsx';
import styles from './guideNavBoxes.module.css';

const FeatureList = [
  {
    title: 'Categories',
    items: [
      {url: "guides/cloud", text: "Cloud Deployments"},
      {url: "guides/panels", text: "Control Panels"},
      {url: "guides/optimisation", text: "Minecraft Optimisation"},
      {url: "guides/plugins", text: "Minecraft Plugins"},
      {url: "guides/self-host", text: "Self Hosting"},
      {url: "guides/service", text: "Additional Services"},
    ]
  },
  {
    title: 'Featured',
    items: [
      {url: "guides/oracle-cloud", text: "Deploy a server in Oracle Cloud"},
      {url: "guides/lab/hardening", text: "Hardening Servers"},
      {url: "guides/ssl/tools", text: "HTTPS Everywhere!"},
      {url: "guides/lab", text: "OVH Lab"},
      {url: "guides/optimisation", text: "Optimisation 101"},
      {url: "guides/pterodactyl/panel", text: "Pterodactyl Deployment"},
      {url: "guides/dynmap/proxy", text: "Proxying Dynmap"},
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
    <article className={clsx('col col--2')}>
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
