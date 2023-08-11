---
slug: /Guides/Performance/Optimization/
description: Optimization Guide
sidebar_position: 3
---

# Optimizing Your Server
Optimizing your server means to improve the performance of the server by implementing tweaks without heavily modifying desired mechanics. Over-optimization is only recommended for large servers suffering from poor performance.

## Spark Profiler
We recommend that you use Spark Profiler for monitoring server performance including vanilla mechanics, plugins, GC pauses and cycles, memory usage etc.

## Server JAR
Pufferfish is currently the fastest, most stable free Paper fork available. Another alternative would be Purpur, which provides additional mechanics for players at the expensive of rather negligible performance loss against Pufferfish.

## Basic Optimizations
A great optimization guide for paper has been linked below. Keep in mind that these optimizations can heavily impact mechanics such as entity behavior, despawn ranges etc. Alongside this, we also recommend that you take a look at our Anti-Lag page.
<div>
<a class="button button--outline button--primary" href="https://paper-chan.moe/paper-optimization/">Guide</a>
</div>

## Advanced Optimization
This section covers plugins that you can modify/replace to improve performance. Only recommended at higher player counts.

### TAB
An optimization guide for TAB is linked below. The `anti-override` options are especially important as TAB's overriding is quite intensive. Alongside that, I recommend disabling `unlimited-nametag-mode` as well.

Regarding anti-override, first make sure that none of your plugins mess with the tablist or scoreboard other than TAB itself. Some common culprits might be BetterTeams, eGlow, Paper's collision rules and CMI. You will have to remove eGlow in order to take full advantage of this optimization. Once you're done modifying/removing such plugins, make sure `enable-player-collisions` in Paper's configuration is true. After you do that, you can disable player collisions in TAB's config by changing `scoreboard-teams.enable-collisions`.

Finally, switch `anti-override` from true to false. If your tablist does not have proper order, an external plugin is probably still modifying the tablist.
<div>
<a class="button button--outline button--primary" href="https://github.com/NEZNAMY/TAB/wiki/Optimizing-the-plugin">Guide</a>
</div>

### ProtocolLib & it's Dependents
It is recommended that you do not install ProtocolLib on larger servers, the reason being that it is not very well optimized. Lots of plugins also abuse ProtocolLib a lot, causing even worse performance. Examples are DeluxeCombat (If ProtocolLib hook is enabled) and InteractiveChat. Consider finding alternatives to plugins that use ProtocolLib, or recode them to use PacketEvents.

### Citizens
Citizens often eats up >5% of ticks on larger servers. It is recommended that you use ZNPCsPlus instead if you don't mind a smaller catalogue of supported plugins. Overall, ZNPCsPlus was using 0.03% of the ticks at 330 players in a spark report.

<div>
<a class="button button--outline button--primary" href="https://github.com/Pyrbu/ZNPCsPlus/tree/2.X">GitHub</a>
</div>

### ajLeaderboards
ajLeaderboards is incredibly unstable and unoptimized. We recommend using LeaderHeadsRevamped instead. Although it has not received an update in a while, it still functions perfectly fine. Support might be limited.

<div>
<a class="button button--outline button--primary" href="https://www.spigotmc.org/resources/leaderheads.2079/">Spigot</a>
</div>

### AntiCheat
Vulcan as an anti-cheat does not scale well at higher player counts, where every last drop of performance matters. >1.6% ticks eaten at 350+ players is supoptimal. I recommend using Astro as it only eats 0.03% of ticks at 330 players while having checks that are around as good as Vulcan's. Polar might also be worth it, but I have yet to test it's performance.

Spartan is an absolute no-go for even medium-sized servers. Performance is extremely poor and checks are subpar.
<div>
<a class="button button--outline button--primary" href="https://astroac.cc/">Astro</a>
</div>

### FastAsyncWorldEdit
Although FAWE performs far better than WE when it's actually being used for building, it's performance is, rather ironically, significantly worse than standard WorldEdit's at idle due to FAWE listening to player interaction events. If you nor any of your plugins are actively using FAWE, consider switching to standard WorldEdit.

### Vanish Plugins
I recommend that you use AdvancedVanish instead of plugins like SuperVanish and Premium vanish as their performance is rather poor in comparison.

<div>
<a class="button button--outline button--primary" href="https://www.spigotmc.org/resources/advancedvanish.86036/">Spigot</a>
</div>
