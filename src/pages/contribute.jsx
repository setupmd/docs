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
              Firstly, thank you for wanting to make the project even better. Before we let you run riot there's a couple of ground rules this page aims to cover. 
            </p>
          </div>
          <div id="">
            <h3>Contribution Guidelines</h3>
            <h4>
              Currently accepted contributions
            </h4>
            <ul>
              <li><strong>New Articles</strong> - Informational pages and / or complete guides are welcome</li>
              <li><strong>New Plugin Documentation</strong> - Premium and Free plugins are both accepted into the repo</li>
              <li><strong>Document Corrections</strong> - Document corrections can be suggested for any reason</li>
            </ul>
            <p><strong>We require all contributions to be be completed via a Github PR and should follow our below styling guide.</strong></p>
          </div>
          <br/>
          <div id="">
            <h3>Why setup.md is a better project to contribute too?</h3>
            <p>
              The project is one of the simplest ways to get involved with the Minecraft community, we're 99.999% sure that the right information exists ✨ somewhere ✨ our goal is to find it and deliver it to you here. We're also one of the only projects out there for the Minecraft community that gives you an insentive to add content - we currently provide free compute to contributors who are currently writting an article.
            </p>
          </div>
          <br/>
          <div id="">
            <h3>Style Guide</h3>
            <p>
              You can find the style guide for the project <a href="https://smd.gg/sg">here</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
