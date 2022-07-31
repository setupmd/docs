# Anticheat

> [!Info]
> Throughout this guide 'Anticheat(s)' may be referred to as 'AC' or 'ACs'

ACs are an integral part of any public server and help with catching hackers. Since Minecraft's built-in anticheat is practically useless, it's better to turn it off than to endure the constant false positives it spews out. 

You should change the following settings within the  `server.properties` file.

```yml
...

allow-flight=true

...

```

Within the `spigot.yml` file you should also set the following values.

```yml
...

     moved-wrongly-threshold: 100000.0
     moved-too-quickly-multiplier: 100000.0
     
...
```

> [!NOTE]
> The above settings within the `spigot.yml` file are not necessary if `allow-flight` is set to true.

[Click here to visit the Anti-Xray Page](antixray.md)

### Common Anticheats

This list consists common ACs and some pros and cons of each AC.

#### NoCheatPlus

##### Pros
  - Free and Opensource
  - Good movement checks

##### Cons
  - Default configuration will spam false movement positives all over the place, you should buy a good config (eg. [MarkElf's](https://www.mc-market.org/resources/475/)) OR make your own
  - Mediocre combat checks

##### Links 
[Github](https://github.com/Updated-NoCheatPlus/NoCheatPlus)
  
#### AdvancedAntiCheat

##### Pros
  - Good movement and combat checks
  - Decent default configuration, you can use [this guide](https://www.spigotmc.org/threads/109418/) to learn how to make it better

##### Cons
  - GBP 20.00

##### Links 
[Spigot](https://www.spigotmc.org/resources/6442/)

#### Grim

##### Pros
  - Opensource
  - Great movement checks
  - Predictive technology

##### Cons
  - Currently WIP, not ready for production servers
  - Mediocre combat checks

##### Links 
[Github](https://github.com/MWHunter/Grim)

#### Vulcan

##### Pros
  - Great movement and combat checks
  - Good default config

##### Cons
  - USD 20.00 (Totally worth it though)

##### Links 
[Spigot](https://www.spigotmc.org/resources/83626/)

#### Spartan

##### Pros
  - 14-day money-back guarantee

##### Cons
  - EUR 22.49
  - Bad combat and movement checks
  - Resource hog
  - GUI config

##### Links 
[Spigot](https://www.spigotmc.org/resources/25638/)

#### Matrix

##### Pros
  - Free with premium options.
  - Decent-ish movement and combat checks.

##### Cons
  - Bad default config, but there are some [good ones](https://github.com/QuantumSuite/MatrixChecks) out there
  - Player limit on free plan (75), paid plans are expensive

##### Links 
[Website](https://matrix.rip)

#### Themis

##### Pros
  - Free.
  - Proper Geyser-Floodgate (Bedrock Players) checks. Only reason to use this anticheat.

##### Cons
  - Bad Combat & Mediocre Movement checks (Bad Elytra, Timer, KillAura Checks)
  - Lack of checks in general.

##### Links 
[Spigot](https://www.spigotmc.org/resources/themis-anti-cheat-1-17-1-18-bedrock-support-paper-compatibility-free-optimized.90766/)

> [!warning]
> This anticheat is only for bedrock players, java players will not be affected.

#### SoaromaSAC (Config 6)

##### Pros
  - Free.

##### Cons
  - Bad Checks
  - Infinite False Positives
  - Fake Open Source Link. Leads to a Rick Roll.

##### Links 
[Spigot](https://www.spigotmc.org/resources/soaromasac-lightweight-cheat-detection-system.87702/)

#### Negativity v1

##### Pros
  - Free & Open Source.
  - Paid Version is Open Source
  - Decent-ish Movement & Combat Checks

##### Cons
  - Lacks some important checks. (No Elytra Checks, NoSlow Checks)

##### Links 
[Spigot](https://www.spigotmc.org/resources/soaromasac-lightweight-cheat-detection-system.87702/)

