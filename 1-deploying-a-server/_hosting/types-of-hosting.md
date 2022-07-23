# Types of Hosting

When you start looking at hosting your server online you'll see many different answers of which none are wrong, but they're not always suited to your needs. This page has a goal of helping you identify when you may need each type of hosting.

### Common Types

The three most common types you'll find in forum responses are:
- Shared Hosting
- Virtual Private Servers (VPS)
- Dedicated Servers (Bare Metal / VDS)

#### Shared Hosting

The most common type you'll find is 'Shared Hosting', this is where a hosting provider will own a physical server and partition the resources out to clients and you will connect to / manage your server via a [web panel](panels.md) and [SFTP](sftp.md). If you select this style of hosting you should be careful and note that some providers will oversell the resources. Overselling allows for them to provide cheaper monthly plans but may come at a performance hit due to this over allocation. Others will provide a dedicated quota that is only allocated to yourself, this will be slightly more expensive but you will have the entire quota to your disposal whenever you need it (plus it will still be cheaper than a VPS / Bare Metal).

Traditionally this space was dominated by the likes of Nitrado, MCProHosting, Shockbyte etc... but in recent years players like [Bloom](https://bloom.host), [DedicatedMC](https://dedicatedmc.io) & [EnviroMC](https://enviromc.host) have dominated in this space offering Ryzen based solutions instead of the old school Xeons used by the legacy giants.

#### Virtual Private Servers

The other common response you'll see people mention is 'grab yourself a VPS from Digital Ocean or Linode'. While you certainly can, it won't be much better than using [oracle cloud](/0-complete-guides/oracle-cloud.md) on ARM (which is free). 

VPS instances have some differences to shared hosting, the core differences are.
- Linux knowledge is required for setup
- Patching becomes your responsibility
- Shell access which allows you to run more than just Minecraft servers
- Slower but higher core count CPUs
- You get a Dedicated IP address rather than a Shared one
- You can install a custom panel such as [Pterodactyl](panels.md#Pterodactyl)

There are times when a VPS can make sense, a prime example is using a VPS provider that uses consumer 'Gaming Grade' CPUs (Intel Core i9 / AMD Ryzen 7 / 9). These would provide the same experience for Minecraft as using a regular 'shared hosting' provider and it would allow you to host say a web / database server, a discord bot or anything else you could imagine.

#### Bare Metal / VDS

The final common type of hosting you'll see people mention is, "go all out and own your hardware". While yes, this has some advantages for a novice the prospect of having no one around for support can be unsettling. Bare metal gives you full, dedicated, system normally in 32 / 64 or 128 GB RAM configurations with 256 / 512 or multi-TB disk configs. Bare metal can either be built yourself and shipped to a datacentre for a monthly fee or you can rent from providers such as Hetzner, OVH or ReliableSite for a monthly fee. This option can set you back multiple hundreds of dollars per month and would only be recommended for larger scale deployments.

Bare metal has a few advantages over the other types of solutions such as.
- Complete ownership of the server data
- Complete ownership of physical and networking resources
- Some providers will offer a managed solution for an additional fee

Bare metal also carries the same differences to shared hosting as a VPS.

> [!info]
> If you don't already know what level of hardware you should be looking at then please consider reading our [hardware guide](hardware.md) first.

---

### Recommendations

While this site aims to remain neutral to any one particular hosting provider, below are some trusted names within the industry for each category that you can explore.

- Bloom Host - Shared Hosting & VPS
- DedicatedMC - Shared Hosting & Managed Bare Metal
- EnviroMC - Shared Hosting & VPS
- Hetnzer - Bare Metal (inc. Managed Bare Metal)
- OVH - Bare Metal
- ReliableSite - Bare Metal
