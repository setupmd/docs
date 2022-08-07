import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="Help build out our documentation to ensure it's even better for the next person."
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>Contribute to the project</h2>
            <p>
              This section is for the Minecraft server admin with knowledge, the plugin developer wanting centralise their wiki or perhaps you just want to give us some feedback.
            </p>
          </div>

          <div id="">
            <h3>🔊 Feedback</h3>
            <p>
              If you're looking to submit user feedback on our repo you can do so in the following ways:
            </p>
            <ul>
              <li>Let us know via Discord - We have a #feedback channel for everything related to our documentation.</li>
              <li>Let us know via Github Issues - We have Issue and Pull templates with fields relating to your feedback.</li>
              <li>Let us know via Email - We have a single address oss@setup.md for legal / dmca bound requests.</li>
            </ul>
          </div>
          <br/>
          <div id="">
            <h3>🛠 Contributing</h3>
            <p>
              Currently at this time we accept the following contributions:
            </p>
            <ul>
              <li><h4>New Articles</h4></li>
              <p>If you're looking to write a new document for a topic not yet covered such as a tutorial, informational piece e.g. <a href="https://smd.gg/anticheat" target="_blank">https://smd.gg/anticheat</a> you should raise an issue with this template selected.</p>
              <li><h4>New Plugin Documentation</h4></li>
              <p>This section is split into two areas, free and premium plugins - both are accepted and for any premium plugin we ask you to list the sale price within the H1 tag e.g. # [5$] Plugin Name. You are also <strong>NOT</strong> required to be the plugin author to add information to our repository, for any plugin authors using setup.md as their new documentation home let us know on Discord and we'll highlight your work.</p>
              <li><h4>Corrections</h4></li>
              <p>No single document will remain good-for-life and changes will need to be made, normally this will be something like a typo or small versioning change but there maybe times when entire sections need to be re-written as the project matures and some legacy information turns to misinformation.</p>
            </ul>
            <p><strong>All contributions should be submitted via Github, any contributions submitted via other channels will be ignored. The Github repo also contains a styling guide for continuity across pages.</strong></p>
          </div>
          <br/>

        </div>
      </div>
    </Layout>
  );
}
