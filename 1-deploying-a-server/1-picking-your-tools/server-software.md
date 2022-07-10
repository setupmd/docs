# Server Software

Over the years, quite a few teams have developed Minecraft Server software. There are some key factors that go into choosing the one you're going to use.

- Wether you want to use mods
- Hardware Performance
- Server features

### Plugins vs Mods

First off, what on earth is the difference between a plugin and a mod?
While this is not true for all mods, usually mods are also supposed to be used on the client. They add additional functionality to the game that you cannot access without the mod on your client. Take a new type of ore for example. There are also server-side mods, but your options with them, besides performance enhancement mods, is quite low.
Plugins on the other hand are **always** server-side only. This means your players won't need to download anything.

#### What does it mean for me?

For you as a server owner it means that if you are looking to use [Forge](https://minecraftforge.net/) or [Fabric](https://fabricmc.net/) mods, you should be using the respective mod platforms. You cannot combine Forge and Fabric mods.

- [Forge](forge_guide)
- [Fabric](fabric_guide)

[SpongeForge](https://github.com/SpongePowered/SpongeForge) is a project that combines the powerful [Sponge plugin API](https://github.com/SpongePowered/SpongeAPI) and the Forge mod loader together. This means you can use Sponge plugins and Forge mods together. Currently only 1.12 and 1.16 are supported.

- [SpongeForge](sponge_guide)

---

### Performance

There is a sacrifice to be made between features and performance. We'll list a few along with the features you will and won't get.

[Minestom](https://minestom.net/) is a Minecraft server software that doesn't contain any mojang code, and that is extremely fast. The catch is that it REQUIRES you to code in all the Minecraft features yourself.

[Fabric](fabric_guide) with [Optimization mods](mods_guide) is the simplest solution for a very performant server. It doesn't allow you to use any plugins, but for a very simple server like an SMP the mod alternatives may just be "good enough".
[PurpurMC](purpur_guide) is a server software based on the feature rich Paper and the performant Pufferfish.

---

### Server features

When we talk about server features we mostly talk about configurability. In the Paper config for example, you will find a lot of options that will make your life easier. You can take the Anti-Xray as an example. It also has a lot of options that allow you to tweak the server for better performance.
While more options may sound better in every case, there is a tradeoff to be made between more features and performance, not to mention the fact that you have to spend the time actually tweaking the files.
If you care a lot about features, Paper is your go to. Purpur has all the Paper features as it's based on it, but it also has a huge amount of configurability on it's own. It allows you to tweak everything from the way entities behave to how certain enchantments and status effects work. They also have [great docs](https://purpurmc.org/docs/Configuration) on the topic.

- [PaperMC](https://papermc.io/)
- [PurpurMC](https://purpurmc.org/)
