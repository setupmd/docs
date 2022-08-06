# Fabric server setup
There are usually two reasons why you would want to use Fabric for your server:
- Getting good perfomance and keeping Vanilla parity.
- Hosting a server with content mods.
If your needs are neither of those, you should not use Fabric as your server software, as Paper/Purpur offers way more customization and choice in plugins.
Though there is a project called [Cardboard](https://github.com/CardboardPowered/cardboard) that allows running plugins on Fabric, it's still heavily in development and does not support the newest Minecraft versions.

## Base server setup
To install Fabric on your server, download a .jar from fabricmc.net/use/server and launch it like you would with any other server .jar. It will automaticially downlod the needed libraries and create a mods folder.

## Server optimization mods
Fabric, unlike Paper and such, does not carry any optimizations in itself, so it's not going to perform any better than vanilla.
Luckily, Fabric offers a choice of mods to optimize your server and/or replicate some of Paper's core features. The following is a list of the most notable server-side optimization mods - those are the ones you should have on your server 100% of the time, they won't change vanilla mechanics or cause any instability at all.

- [Lithium]() - arguably the most important server-side optimization mod, applies overall optimizations to ticking, chunk loading, AI and more.
- [FerriteCore]() - optimizes memory usage, works on both client and server. Can help you save up on RAM.
- [Krypton]() - its main optimizations being on the server side, it optimizes Minecraft's networking stack (aka packet sending and other things related to networking).
- [LazyDFU]() - makes DataFixerUpper "lazy", improving load times and decreasing lag spikes shortly after startup. 
- [Starlight]() - a blazing fast rewrite of the lighting engine.

Now, those mods are less tested and more likely to cause issues/break vanilla parity, but are worth noting:

- [ServerCore]() - ports some of Paper/Purpur's optimization options to Fabric, allowing you to set up villager lobotimization, entity activation ranges, mobcaps, and dynamic changing of view distance/tick distance/simulation distance depending on server load. This mod is intended to slightly break parity with vanilla for a perfomance boost.
- [C2ME]() - applies experimental chunk loading and storage optimizations to the server, notably making more chunk loading and ticking run in parallel threads. It has a configuration file which lets you toggle all its optimizations on and off.
- [VMP]() - applies experimental networking and ticking optimizations to help servers on high player counts.
- [FastLoad]() - lets the server load less chunks on startup, improving startup times.

## Server utility mods

Other notable mods for server customization/moderating.

## Chat customization

- [Styled Chat]()
- [Regional Chat]()

### Preventing 1.19.1+ chat reporting

- [No Chat Reports]() - the most publicly approved mod
- [No Chat Report]()
- [Simply No Report]()

### Discord integration

- [McDiscordChat]()
- [Discord Integration]()
- [Fabric-Discord-Link]()

## Moderation

- [BanHammer]()

## Webmap

- [BlueMap]() - (uses up a lot of resuorces on rendering, don't use unless you have a few CPU cores to spare!)
- [JourneyMap]()

## World generation

- [Terra]() - ([requires additional setup to take effect](https://terra.polydev.org/install/mod-server-world-creation.html))

### Structures

- [Mo' Structures]()
- [Repurposed Structures]()
- [When Dungeons Arise]()
