# Anticheats
Anticheats are an integral part of any public server and help with catching hackers. This page consists of a list of anticheats and some other notes.

Before we begin, since Minecraft's built-in anticheat is practically useless, it's better to turn it off than to endure the constant false positives it spews out. In `server.properties`,
set `allow-flight=true`. In `spigot.yml`, set the following:
```yml
     moved-wrongly-threshold: 100000.0
     moved-too-quickly-multiplier: 100000.0
```
Note that the `spigot.yml` settings are not necessary if `allow-flight` is true.
### Anticheats
---
#### [NoCheatPlus](https://github.com/Updated-NoCheatPlus/NoCheatPlus)

##### Pros
  - Free and Opensource
  - Good movement checks

##### Cons
  - Default configuration will spam false movement positives all over the place, you should buy a good config (eg. [MarkElf's](https://www.mc-market.org/resources/475/)) OR make your own
  - Mediocre combat checks

###### Highly recommended if you're looking for a free anticheat and don't mind configuring it yourself.
---
#### [AdvancedAntiCheat](https://www.spigotmc.org/resources/6442/)

##### Pros
  - Good movement and combat checks
  - Decent default configuration, you can use [this guide](https://www.spigotmc.org/threads/109418/) to learn how to make it better

##### Cons
  - GBP 20.00

###### Solid AntiCheat, but there are better ones at the same price point.
---
#### [Grim](https://github.com/MWHunter/Grim)

##### Pros
  - Opensource
  - Great movement checks
  - Predictive technology

##### Cons
  - Currently WIP, not ready for production servers
  - Mediocre combat checks
  
###### Only use in Development Environments for now.
  ---
#### [Vulcan](https://www.spigotmc.org/resources/83626/)

##### Pros
  - Great movement and combat checks
  - Good default config

##### Cons
  - USD 20.00 (Totally worth it though)

###### Pretty much the best.
---
#### [Spartan](https://www.spigotmc.org/resources/25638/)

##### Pros
  - 14-day money-back guarantee

##### Cons
  - EUR 22.49
  - Bad combat and movement checks
  - Resource hog
  - GUI config

###### Please don't use Spartan. Not worth it.
---
#### [Matrix](https://matrix.rip)

##### Pros
  - Free with premium options.
  - Decent-ish movement and combat checks.

##### Cons
  - Bad default config, but there are some [good ones](https://github.com/QuantumSuite/MatrixChecks) out there
  - Player limit on free plan (75), paid plans are expensive

###### One Word: Vulcan.
---
#### [Themis](https://www.spigotmc.org/resources/themis-anti-cheat-1-17-1-18-bedrock-support-paper-compatibility-free-optimized.90766/)

##### Pros
  - Free.
  - Proper Geyser-Floodgate (Bedrock Players) checks. Only reason to use this anticheat.

##### Cons
  - Bad Combat & Mediocre Movement checks (Bad Elytra, Timer, KillAura Checks)
  - Lack of checks in general.

###### Only use for Bedrock Players.
---
#### [SoaromaSAC (Config 6)](https://www.spigotmc.org/resources/soaromasac-lightweight-cheat-detection-system.87702/)

##### Pros
  - Free.

##### Cons
  - Bad Checks
  - Infinite False Positives
  - Fake Open Source Link. Leads to a Rick Roll... ~~but hey, not like anyone will want to copy these checks.~~

###### Do you want every player to get flagged (falsely) for everything? Use SAC! 
---

#### [Negativity v1](https://www.spigotmc.org/resources/soaromasac-lightweight-cheat-detection-system.87702/)

##### Pros
  - Free & Open Source.
  - Paid Version is Open Source
  - Decent-ish Movement & Combat Checks

##### Cons
  - Lacks some important checks. (No Elytra Checks, NoSlow Checks)

###### Pretty decent temporary anticheat, perhaps good as a replacement for NCP as it has a decent default config.
---
