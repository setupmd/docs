import React from 'react';
import clsx from 'clsx';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'Project Information',
    icon: 'img/icons/getting-started.svg',
    items: [
      {url: "docs", text: "Project Information"},
      {url: "release", text: "Java Releases"},
      {url: "discord", text: "Discord Server"}
    ]
  },
  {
    title: 'Server Enhancements',
    icon: 'img/icons/setting-up-feed.svg',
    items: [
      {url: "enhancements/anti-x", text: "Preventative Tools"},
      {url: "enhancements/economy", text: "In-Game Economy"},
      {url: "enhancements/permissions", text: "In-Game Permissions"},
      {url: "enhancements/plugins", text: "Essential Plugins"}
    ]
  },
  {
    title: 'Hosting Tips',
    icon: 'img/icons/key-features.svg',
    items: [
      {url: "hosting", text: "Hosting Introduction"},
      {url: "hosting/advice", text: "Chosing a Provider"},
      {url: "hosting/hardware", text: "Hardware"},
      {url: "hosting/os", text: "Operating Systems"},
      {url: "hosting/panels", text: "Panels"},
      {url: "hosting/types", text: "Types of Hosting"},
    ]
  },
  {
    title: 'Tools & Troubleshooting',
    icon: 'img/icons/integration.svg',
    items: [
      {url: "tools/databases", text: "Databases"},
      {url: "tools/server-software", text: "Server Jars"},
      {url: "troubleshoot/connection", text: "Connection Troubleshooting"},
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
    <article className={clsx('col col--4')}>
      <div className={styles.homecard}>
        <img src={icon} className={styles.homeIcon}></img>
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
