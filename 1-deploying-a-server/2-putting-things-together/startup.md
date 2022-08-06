
# Adjusting Startup Scripts

### Basics

This is how your most bare-bones startup script looks like.

```bash
...

java -Xmx<change-me>G -Xms<match-me-to-Xmx-value>G -jar <server-jar-name>.jar nogui

...
```

`-Xmx` sets the maximum amount of memory the Java Virtual Machine is allowed to use. Don't set this over the amount of memory you have on your machine/given to you by the hosting provider.

`-Xms` sets the minimum amount of memory the JVM is allowed to use.

Setting them both to the same value usually imporves perfomance as no calculations need to be done regarding the memory allocation, but know that if you are running other programs on your host machine, they won't be able to use the memory your server has allocated, but does not need at a given moment (as the server will reserve all memory you have given to it for itself at all times). 

You should set your RAM allocation according to your top player count and average server load - allocating more memory than your server needs is likely to cause GC lag spikes. For example, if you are a starting out server with 0-2 players most of the time, you'll be fine with 2 GB, but if you have 5-10 players online at once, you'll need 4-5 GB.

`nogui` hides the Minecraft server GUI panel, only leaving the console visible. Remove the flag if you choose to use the panel. It has basic features like a player list, perfomance metrics and console output.

`-jar <server-jar-name>.jar` points to the server .jar - it's what you download from Paper/Purpur websites to run the server.

---

### Advanced JVM options

The JVM also offers a lot of additional options for startup - those are the JVM "flags" or "arguments". You might want to set those up for the best perfomance. For this, see the guide [Java Minecraft Flags](https://github.com/brucethemoose/Minecraft-Java-Performance-Flags) - it's a constantly updated collection of up-to-date flags for both Minecraft servers and clients. It also contains a small guide on GraalVM (an optimized JVM distribution). 

JVM flags go _before_ the `-jar` flag.

> [!TIP]
> You may have seen advice to use Aikar's flags - while those may have been the best a while ago, they have not been updated since the creation and therefore are massively out of date for modern Java versions. If you are running a 1.17+ Minecraft Java server (and use java 16+), don't use Aikar's flags.

All JVM flags (with an option to sort for each distribution) can be found [here.](https://chriswhocodes.com/)

---

### Advanced Minecraft server options

Minecraft also has quite a few startup options that affect the server in some way. Those go _after_ `-jar` in the startup script.
The following infomation is from [the wiki](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_server#Minecraft_options)

#### Minecraft options

- `--bonusChest`

If a bonus chest should be generated, when the world is first generated.

- `--demo`

If the server is in demo mode. (Shows the players a demo pop-up, and players cannot break or place blocks or eat if the demo time has expired)
Equivalent to playing minecraft without a account, you have about 5 in-game days before your trial ends.

- `--eraseCache`

Erases the lighting caches, etc. Same option as when optimizing single player worlds.

- `--forceUpgrade`

Forces upgrade on all the chunks, such that the data version of all chunks matches the current server version (same as with sp worlds).
This option significantly increases the time needed to start the server.

- `--initSettings`

Loads the settings from 'server.properties' and 'eula.txt', then quits.

- `--jfrprofile`

Initializes the Java Flight Recorder on the server. Only available on 1.18+.

- `--port <Integer>`
  
Which port to listen on, overrides the server.properties value. (default: -1, read from server.properties)
  
See Server.properties for restrictions on this value.
  
- `--safeMode`
  
Loads level with vanilla datapack only.
  
- `--serverId <String>`
  
Gives an ID to the server. (??)
Seemingly no effect ??
  
- `--singleplayer <String>`
  
Runs the server in offline mode (unknown where <String> is used for, probably used internally by mojang?)
  
- `--universe <String>`
  
The folder in which to look for world folders. (default: .)
  
- `--world <String>`
  
The name of the world folder in which the level.dat resides.
