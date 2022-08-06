# Fabric server setup
There are usually two reasons why you would want to use Fabric for your server:
- Getting good perfomance and keeping Vanilla parity.
- Hosting a server with content mods.
If your needs are neither of those, you should not use Fabric as your server software, as Paper/Purpur offers way more customization and choice in plugins.
Though there is a project called [Cardboard](https://github.com/CardboardPowered/cardboard) that allows running plugins on Fabric, it's still heavily in development and does not support the newest Minecraft versions.

## Server optimization mods
Fabric, unlike Paper and such, does not carry any optimizations in itself, so it's not going to perform any better than vanilla.
Luckily, Fabric offers a choice of mods to optimize your server and/or replicate some of Paper's core features. The following is a list of the most notable server-side optimization mods - those are the ones you should have on your server 100% of the time, they won't change vanilla mechanics or cause any instability at all.

- [Lithium]() - arguably the most important server-side optimization mod, applies overall optimizations to ticking, chunk loading, AI and more.
- [FerriteCore]() - optimizes memory usage, works on both client and server. Can help you save up on RAM.
- [Krypton]() - its main optimizations being on the server side, it optimizes Minecraft's networking stack (aka packet sending and other things related to networking).
- [LazyDFU]() - makes DataFixerUpper "lazy", improving load times and decreasing lag spikes shortly after startup. 

Now, those mods are less tested and more likely to cause issues, but are worth noting:

- [ServerCore]() - ports some of Paper/Purpur's optimization options to Fabric, allowing you to set up villager lobotimization, entity activation ranges, mobcaps, and dynamic changing of view distance/tick distance/simulation distance depending on server load. Very useful.
