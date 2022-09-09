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
              <li><h4>New Articles</h4> - Informational pages and / or complete guides are welcome</li>
              <li><h4>New Plugin Documentation</h4> - Premium and Free plugins are both accepted into the repo</li>
              <li><h4>Document Corrections</h4> - While we aim to review documents atleast once a year if you notice something isn't right we encourage you to submit a change</li>
            </ul>
            <p><strong>We require all contributions to be be completed via a Github PR and should follow our below styling guide.</strong></p>
          </div>
          <br/>
          <div id="">
            <h3>Documentation Formatting</h3>
            <p>
              Currently we request all documents follow our below styling format, you can find an example file <a href="https://github.com/setupmd/templates/blob/main/Docs/blank.md">here</a> which can be downloaded from our templates repository.
            </p>
            <ul>
              <li><strong>Title Tags</strong> - For unification, all titles should use the below when it comes to marking up headers</li>
              <ul>
                <li><strong>Headings</strong> - Headings should use a single `#`. No more than one per page</li>
                <li><strong>Sub-Headings</strong> - Subheadings should use either 3 `###`, 4 `####` or 5 `#####` depending on how nested they are. No sub-heading limit per page</li>
              </ul>
              <p>Example formatting below</p>
              <code>
              
              # Title
              ### Sub-Heading
              #### Sub-Sub-Heading
              #### Sub-Sub-Heading Two
              ##### Sub-Sub-Sub-Heading

              </code>
              <li><strong>Separator Lines</strong> - When using multiple 'three-hash' sub-headings you must use a single line break to signify there is a change within the pages contents</li>
              <code>
              ... 

              ....this is the final sentence of the previous section.

              ---

              ### New Sub-Heading

              New topic continued here...

              ...

              </code>
              <li><strong>Code Blocks</strong> - Code blocks must be used when breaking down config files or displaying single lines of code that users are expected to put into a command line</li>
              <code>

                ...

                ############################################################
                # +------------------------------------------------------+ #
                # |                   EssentialsHelp                     | #
                # +------------------------------------------------------+ #
                ############################################################
                 
                # Show other plugins commands in help.
                non-ess-in-help: true
                 
                # Hide plugins which do not give a permission.
                # You can override a true value here for a single plugin by adding a permission to a user/group.
                # The individual permission is: essentials.help.(plugin), anyone with essentials.* or '*' will see all help regardless.
                # You can use negative permissions to remove access to just a single plugins help if the following is enabled.
                hide-permissionless-help: true

                ...

              </code>
              <li><strong>Strikethrough</strong> - Strikethrough can be used to signify redundant information that no longer holds true in the latest release but may still be relevant in previous releases</li>
              <li><strong>Info Blocks</strong> - Info blocks should be used when audience needs their attention drawn to a specific point within the document.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
