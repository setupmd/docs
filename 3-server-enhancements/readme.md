# Server enhancements

### Plugins and mods
Great! You've made your choice of server software. (If you havent, check out [the page on server software](server-software))
Now it's time to look at the plugins/mods you're going to want to use. We'll list a few topics and explain them, then list the plugins and mods that fall in that category with a small explanation.

---

**TOC**

- [Essential](#essential)
- [Permissions](#permissions)
- [Anticheat](#anticheats)

>[!TODO]

---

### Essential

> [!TODO]
> - Vault
> - Essentials 
> - Chat plugins 
> - PAPI

### Permissions
A very important part of setting up your server is managing permissions. Permissions are little pieces of text that indicate an action. When you grant a certain group of players this permission, the plugin will know that they are allowed to perform this action. They are usually laid out like `pluginname.permission`.  An example is the `essentials.afk` permission. If you give this permission to a player, they will be able to perform the `/afk` command.
> [!TIP]
> You can use the wildcard (`*`) operator to indicate everything when supplying a permission.
> Ex: `essentials.*` will give you every permission that starts with `essentials.`.

> [!CAUTION]
> It is a very bad idea to give someone (even yourself!) either the `*` or `*.*` permissions. Since permissions have niche uses that aren't commands, doing this has a likely chance to cause problems.
 
So how does one grant permissions to their players? For this exact purpose people have created permission plugins. They allow you to create groups, usually associated with the term Rank. You can then give certain permissions to these groups, and assign players to these groups.

Plugin name | KB Article | Versions | Best choice™️ | Summary
------------ | ------- | -------- | -------- | -------
LuckPerms |[LuckPerms](./articles/luckperms.md) | 1.8.8 - 1.19.x | ✅ | LuckPerms is by far the most advanced solution for your permissions out there.
PowerRanks | N/A | 1.13.x - 1.19.x |  | PowerRanks is easier to use than LuckPerms, but offers a lot less functionality.


### Anticheat
> [!TODO] 
> Very small summary of some AC's

For a more in-depth article about anticheats, check out [this article](./articles/anticheat.md).

### Other server enhancements
Some server software come bundled with enhancements. Here you will find some information about configuring those.
- [Paper Anti-Xray](./articles/antixray.md)