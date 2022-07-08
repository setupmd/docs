# SETUP.MD

Welcome to 'the brain', this is a community knowledge repository with a single goal of unifying knowledge allowing novice Minecraft server owners to make informed decisions along with how-to style tutorials.

The initial phase of this project is data consolidation and defining frameworks / standards that will be used throughout this knowledgebase. For those looking to contribute the below will have information on the formatting, PR process and more.


### Finding Content

Things are going to get hectic here which is why this table of contents will host links to the primary index file of each folder.


Section Name | Link to ReadMe |
------------ | ------------ | 
Deploying a Server | [Start Here](1-deploying-a-server/readme.md) |
Understanding Config Files | [Start Here](2-understanding-config-files/readme.md) |
Server Enhancements | [Start Here](3-server-enhancements/readme.md) |

---

### Contributions

Ensuring a unified standard for all KB articles is essential, without standardisation formatting will break on https://brain.setup.md. (The web interface for this repository.) 

As we're using [obsidian](https://help.obsidian.md/How+to/Format+your+notes) for our front end there is a requirement to use their styling guides. All pages should subsequently be utilising the above formatting.

---

### Style Guide

This section outlines the core required styling when it comes to writing documenation.

#### Titles
For unification, all titles should use the below when it comes to marking up headers.

<ul>
	<li>Headings - Headings should use a single `#`. No more than one per page.</li>
	<li>Sub-Headings - Subheadings should use either 3 `###`, 4 `####` or 5 `#####` depending on how nested they are. No sub-heading limit per page.</li>
</ul>

Example formatting below :

```md
# Title
### Sub-Heading
#### Sub Sub-Heading
#### Sub Sub-Heading Two
##### Sub Sub Sub-Heading Two
```


#### Separator Lines

When using multiple 'three-hash' sub-headings you should use a single line break to signifiy there is a change within the pages contents.

Example formatting below :

```md
...

....this is the final sentence of the previous section.

---

### New Sub-Heading

New topic continued here...

...
```

#### Code Blocks

Code blocks must be used when breaking down config files or displaying single lines of code that users are expected to put into a command line. Supported code languages can be found [here](https://prismjs.com/#supported-languages) and should be added to all code blocks where applicable.

Example formatting below :

```yml

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
# The individual permission is: essentials.help.<plugin>, anyone with essentials.* or '*' will see all help regardless.
# You can use negative permissions to remove access to just a single plugins help if the following is enabled.
hide-permissionless-help: true

...

```


#### Strikethrough

When a section of the knowledgebase becomes redudnant with newer releases of a plugin, standard or technical accuracy but still holds relevance in legacy versions of the previously mentioned - strikethrough can be used to signify this is no longer used.

Example formatting below : 

In order to play the latest ~~1.16 update you need Java 11 or above~~ 1.19 update you should be using Java 17 LTS.


#### Info Blocks

To highlight something of significance to the end user you can use info blocks for small snippets of information. The types of blocks you can add to a document can be found [here](https://help.obsidian.md/How+to/Use+callouts).

Example formatting below :

> [!TIP]
> You can bring attention to certain notes within a step here.