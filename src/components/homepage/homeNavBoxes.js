import React from 'react';
import clsx from 'clsx';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    icon: 'img/icons/getting-started.svg',
    items: [
      {url: "discord", text: "Community Support"},
      {url: "tools/server-software", text: "Server Jars"},
      {url: "hosting/hardware", text: "Hosting Hardware"},
      {url: "hosting/types", text: "Types of Hosting"},
      {url: "hosting/advice", text: "Chosing a Provider"},
      {url: "hosting/self", text: "Self Hosting Guide"},
    ]
  },
  {
    title: 'Setup Troubleshooting',
    icon: 'img/icons/setting-up-feed.svg',
    items: [
      {url: "troubleshoot/java", text: "Common Java Errors"},
      {url: "troubleshoot/connection", text: "Connection Troubleshooting"},
      {url: "https://www.anyjson.in/yaml-formatter", text: "YAML Formatter"},
      {url: "troubleshoot/performance", text: "Performance Issues"}
    ]
  },
  {
    title: 'Server Enhancements',
    icon: 'img/icons/key-features.svg',
    items: [

    ]
  },
  {
    title: 'Useful External Links',
    icon: 'img/icons/integration.svg',
    items: [
      {url: "https://discord.gg/WYYxXBRUwE", text: "Admincraft Discord"},
      {url: "https://gist.github.com/kennytv/ed783dd244ca0321bbd882c347892874#file-readme-md", text: "KennyTV's Signed Chat Gist"},
      {url: "https://github.com/YouHaveTrouble/minecraft-optimization", text: "Config Optimisation Guide"},
      {url: "https://spark.lucko.me/docs/guides/Finding-lag-spikes", text: "Understanding Spark"},
      {url: "https://help.minecraft.net/hc/en-us/articles/4416199399693-Security-Vulnerability-in-Minecraft-Java-Edition", text: "Apache Log4J RCEs"},
      {url: "https://madelinemiller.dev/blog/root-minecraft-server/", text: "Never run as Root"},
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
