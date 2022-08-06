# Fabric server setup
There are usually two reasons why you would want to use Fabric for your server:

- Getting good perfomance and keeping Vanilla parity.
- Hosting a server with content mods.

If your needs are neither of those, you should not use Fabric as your server software, as Paper/Purpur offers way more customization and choice in plugins.
Though there is a project called [Cardboard](https://github.com/CardboardPowered/cardboard) that allows running plugins on Fabric, it's still heavily in development and does not support the newest Minecraft versions.

### Base server setup
To install Fabric on your server, download a .jar from [fabricmc.net/use/server](fabricmc.net/use/server) and launch it like you would with any other server .jar. It will automaticially downlod the needed libraries and create a mods folder.

> [Startup](Startup)

---

### Server optimization mods
Fabric, unlike Paper and such, does not carry any optimizations in itself, so it's not going to perform any better than vanilla.
Luckily, Fabric offers a choice of mods to optimize your server and/or replicate some of Paper's core features. The following is a list of the most notable server-side optimization mods - those are the ones you should have on your server 100% of the time, they won't change vanilla mechanics or cause any instability at all.

When installing any mods, look out for dependencies - usually it's at least [Fabric API]()

- [Lithium](https://modrinth.com/mod/lithium) - arguably the most important server-side optimization mod, applies overall optimizations to ticking, chunk loading, AI and more.
- [FerriteCore](https://modrinth.com/mod/ferrite-core) - optimizes memory usage, works on both client and server. Can help you save up on RAM.
- [Krypton](https://modrinth.com/mod/krypton) - its main optimizations being on the server side, it optimizes Minecraft's networking stack (aka packet sending and other things related to networking).
- [LazyDFU](https://modrinth.com/mod/lazydfu) - makes DataFixerUpper "lazy", improving load times and decreasing lag spikes shortly after startup. 
- [Starlight](https://modrinth.com/mod/starlight) - a blazing fast rewrite of the lighting engine.

Now, those mods are less tested and more likely to cause issues/break vanilla parity, but are worth noting:

- [ServerCore](https://modrinth.com/mod/servercore) - ports some of Paper/Purpur's optimization options to Fabric, allowing you to set up villager lobotimization, entity activation ranges, mobcaps, and dynamic changing of view distance/tick distance/simulation distance depending on server load. This mod is intended to slightly break parity with vanilla for a perfomance boost.
- [C2ME](https://modrinth.com/mod/c2me-fabric) - applies experimental chunk loading and storage optimizations to the server, notably making more chunk loading and ticking run in parallel threads. It has a configuration file which lets you toggle all its optimizations on and off.
- [VMP](https://modrinth.com/mod/vmp-fabric) - applies experimental networking and ticking optimizations to help servers on high player counts.
- [FastLoad](https://modrinth.com/mod/fastload) - lets the server load less chunks on startup, improving startup times.
- [Memory Leak Fix](https://modrinth.com/mod/memoryleakfix) - fixes memory leaks and applies misc optimizations to the game.

---

### Server utility mods

Other notable mods for server customization/moderating.

#### Chat customization

- [Styled Chat](https://modrinth.com/mod/styled-chat)
- [Regional Chat](https://modrinth.com/mod/regional-chat)

##### Preventing 1.19.1+ chat reporting

- [No Chat Reports](https://modrinth.com/mod/no-chat-reports) - the most publicly approved mod
- [Simply No Report](https://modrinth.com/mod/simply-no-report)
- [No Chat Report](https://modrinth.com/mod/no-chat-report)

##### Discord integration

- [McDiscordChat](https://modrinth.com/mod/mcdiscordchat)
- [Discord Integration](https://modrinth.com/mod/dcintegration)
- [Fabric-Discord-Link](https://modrinth.com/mod/fabric-discord-link)

#### Moderation

- [BanHammer]()

#### Webmap

- [BlueMap](https://modrinth.com/mod/bluemap) - (uses up a lot of resuorces on rendering, don't use unless you have a few CPU cores to spare!)
- [JourneyMap](https://modrinth.com/mod/journeymap)

#### World generation

- [Terra](https://modrinth.com/mod/terra) - ([requires additional setup to take effect](https://terra.polydev.org/install/mod-server-world-creation.html))

##### Structures

- [Mo' Structures](https://modrinth.com/mod/mo-structures)
- [Repurposed Structures](https://modrinth.com/mod/repurposed-structures-fabric)
- [When Dungeons Arise](https://modrinth.com/mod/when-dungeons-arise)
