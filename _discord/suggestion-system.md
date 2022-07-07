# Suggestion System

We have a custom bot implemented by a community member that allows for us to have everything from user tickets and suggestions to everyday moderation in one place. The bot is super simple to use and has a prefix of `-`.

To prevent clutter and spam within our server these commands can only be used within our `#feedback` channel.

### Server Commands

We have two categories of commands, one set is for users and the other is for our contributors. 


#### User Commands
The below commands are available for all users and can be used for voicing feedback within our discord server to better the repo.

Create a suggestion you should use the following command + syntax :
`-suggest <free text goes here>`

Edit your suggestion using the following command + syntax : 
`-editsuggestion <message-id> <new body of text here>`

Withdraw your suggestion using the following command + syntax : 
`-deletesuggestion <message-id>`


#### Contributor Commands
The below commands are available for our contributors and can be used to assist in filtering quality ideas to bring into the repo.

Suggestions can be denied for two reasons, reason one is duplicate submission and reason two is low quality / doesn't fit the scope of this project.

Duplicate tickets can be denied with the following command.
`-sa dupe <message-id> <master-message-id>`

Other tickets can be denied with the following command.
`-sa deny <message-id> <reason-for-deny>`

Tickets can be approved with the following command.
`-sa approve <message-id> <reason-for-approval>`

Tickets can be marked as implemented with the following command.
`-sa implement <message-id> <mod-comment-here>`

Comments can be added to tickets at any time with the following command.
`-sa comment <message-id> <mod-comment-here>`
	- This can be used when an idea is pending a future roadmap.




