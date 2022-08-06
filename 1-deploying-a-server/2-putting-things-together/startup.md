
### Adjusting Startup Scripts

This is how your most bare-bones startup script looks like.

```bash
...

java -Xmx<change-me>G -Xms<match-me-to-Xmx-value>G -jar <server-jar-name>.jar -nogui

...
```

`-Xmx` sets the maximum amount of memory the Java Virtual Machine is allowed to use. Don't set this over the amount of memory you have on your machine/given to you by the hosting provider.

`-Xms` sets the minimum amount of memory the JVM is allowed to allocate.

Setting them both to the same value usually imporves perfomance as no calculations need to be done regarding the memory allocation, but know that if you are running other programs on your host machine, they won't be able to use the memory your server does not need at a given moment (as the server will reserve all memory you have given to it for itself). 

You should set your RAM allocation according to your top player count and average server load - allocating more memory than your server needs is likely to cause GC lag spikes. For example, if you are a starting out server with 0-2 players most of the time, you'll be fine with 2 GB, but if you have 5-10 players online at once, you'll need 4-5 GB.

`-nogui` hides the Minecraft server GUI panel, only leaving the console visible. Remove the flag if you choose to use the panel. It has basic features like a player list, perfomance metrics and console output.

`-jar <server-jar-name>.jar` points to the server .jar - it's what you download from Paper/Purpur websites to run the server.

### Advanced JVM options

The JVM also offers a lot of additional options for startup - those are the JVM "flags" or "arguments". For this, see the guide [Java Minecraft Flags](https://github.com/brucethemoose/Minecraft-Java-Performance-Flags) from brucethemoose - it's a constantly updated collection of up-to-date flags for both Minecraft servers and clients. It also contains a small guide on GraalVM - the best perfomance JVM distribution. 

> [!TIP]
> You may have seen advice to use Aikar's flags - while those may have been the best a while ago, they have not been updated since the creation and therefore are massively out of date for modern Java versions. If you are running a 1.17+ Minecraft Java server (and use java 16+), don't use Aikar's flags.
