# Server Software

Over the years, quite a few teams have developed Minecraft Server software. There are some key factors that go into choosing the one you're going to use.

- Wether you want to use mods
- Hardware Performance
- Server features
- Plugin extendability

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
[PurpurMC](purpur_guide) is a server software based on Paper, which is based on Spigot, which is based on Bukkit.
