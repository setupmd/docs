import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="Our mission with setup.md"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>About setup.md</h2>
          </div>

          <div id="">
            <h3>Why setup.md was formed</h3>
            <p>
              Over the last 10 years countless resources have been formed by server admins of both past and present so we felt it would be most appropriate to collate respected guides and snippets of knowledge. Don't get us wrong, we're not just borrowing others work, we also aim to include multiple original tutorials and informational snippets as possible.
            </p>
            <p>
              This project also forms a personal brain dump for myself, when I first created a Minecraft server it was with a tool called <a href="https://github.com/traitor/Minecraft-Server-Mod" target="_blank">hMod</a> which has since been superseeded by Bukkit and it's various performance forks. 
              So much has changed in such a short space of time as this game expands and even now writting content for this project I'm finding things that have changed from what I first learnt and rediscovering things I have completely forgot.
            </p>
          </div>
          <br/>
          <div id="">
            <h3>Expansion plans</h3>
            <p>
              Eventually (and naturally) the project will expand past just Minecraft and that's totally fine, we won't stunt it's growth. As time goes on we also expect to build out our tutorials to the point where non-minecraft based Windows and Linux resources becomes available - perhaps even game titles will one day call this home too.
            </p>
            <p>
              Coming back to reailty though you should take away the following points:
            </p>
            <ul>
              <li>This project will naturally expand as time goes on</li>
              <li>Expect to see an increase in non-Minecraft material</li>
              <li>Expansion is based entirely on user demand</li>
            </ul>
          </div>
          <br/>

        </div>
      </div>
    </Layout>
  );
}
