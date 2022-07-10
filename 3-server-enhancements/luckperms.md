# LuckPerms
---
LuckPerms is probably the most feature-rich permissions plugin in existence currently. It supports many different kinds of servers, like Bukkit/Spigot or Sponge, but also all the major proxies like Velocity and Bungeecord.

### The Basics 
LuckPerms embraces many concepts like "Inheritance" or " Contexts" that might be confusing for a beginner. Consider this section a breakdown of those.
> [!INFO]
> For a more indepth explanation of the plugin, one might use the [official wiki](https://luckperms.net/wiki).
#### Permissions
A permission is simply put just a piece of text that plugins use to determine what a player can do. They are usually split by periods (like `minecraft.command.kick` for the vanilla /kick command). A permission can have 3 states: 
* `true`: the player can then use the feature which is associated to the permission
* `false` the player is explicitely revoked access to this command or feature.
* undefined: this permission has not been set for this group and defaults to either `true` or `false`, depending how the plugin which uses the permission has determined.
#### Groups
A group (or a "rank" as some prefer to call it) is a collection of permissions and other kinds of data which can be given to a player. This simplifies management of, lets say, the staff team as you can simply create a group `admin` and grant it `*` (this permission automatically allows access to everything) which can then be given to your admins and they will all have the same permissions. In this example it might seem counterintuitive, but for ranks with 100s of different permissions, it will become useful. 

One Group always exists: `default`. As its name implies, everybody is in this group, and it is used to give out permissions which every player should have.  
#### Inheritance
Inheritance is very useful to minimise repeated work. Let us consider the following example:
You have a group `VIP` and a group `MVP`. The group `VIP` is only used to **add** features on top of the `MVP` group. Yet by setting the users group to `MVP`, they would have the permissions from `VIP` revoked. This is where inheritance comes into play. You can make `MVP` inherit `VIP`, so every permission that is granted to `VIP` is automatically reflected in the permissions of `MVP`.
#### Contexts
Contexts define the cirumstances under which a permission or other data is applied. Still confused? 

Lets take the `gamemode` context as an example. Giving a permission to a player with the context `gamemode=creative` means that they player shall only have that permission if they are in gamemode creative. Quite simple, isn't it? Many plugins add their own contexts, such as EssentialsX' `vanished` pr `god`.  


