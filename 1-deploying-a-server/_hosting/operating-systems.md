# Operating Systems

When running a Minecraft server on [bare metal](types-of-hosting.md####Bare%20Metal%20/%20VDS), or a [VPS](types-of-hosting.md####Virtual%20Private%20Servers) you'll need to install a base operating system before you can get started. Unless you're running an apple device your options are Windows / Windows Server or Linux and the abundance of distros that come along with it.

This page will explain the common choices available.

### OSes Discussed
- Windows (10 / 11)
- Windows Server 2019 / 2022
- Debian 11 Bullseye
- Ubuntu 22.04 LTS Jammy Jellyfish

#### Windows (10/11)

The first OS and probably the one you interact with the most on a day to day basis is the desktop version of Windows. For complete novices who are just looking to get something working for a couple of friends, this can be more than sufficient and you'll probably already have this installed on either your personal desktop or a secondary pc if you have an old machine you want to put to use.

There's a lot of support around the internet for Windows based devices and fundamentally every install is exactly the same meaning every Windows based tutorial will work for you. For those with multiple servers or even a Minecraft network it would be advisable to look into a Linux based deployment to avoid leaving performance on the table.

---

#### Windows Server 2019 / 2022

Windows Server is more of an additional note rather than a full blown recommendation, if you have brought a cloud server from a provider such as Hetzner or OVH and requested a 'Windows based install' at checkout due to licensing constraints you'll be provided either Windows Server Standard or Datacentre depending on their agreements.

From a Minecraft perspective these operating systems will perform near identical to desktop releases such as '10' and '11' but a fresh install of Windows server contains zero additional bloatware and contains only the core files required to get it up and running. Some noticeable differences will be 'Server Manager' where you'll have access to the core tools and utilities to help you manage the device and secondly the lack of a Windows Store, if you need WUP applications they can be sideloaded with Powershell and the msixbundle file.

---

#### Debian 11

The lightest OS on the list is Debian, most commonly used in Minecraft production hosting environments it makes a perfect candidate for those who need a mainstream OS with minimal performance hits due to OS bloat.  A Debian based distribution has a wealth of support forums on the internet should you face any issues you will normally receive a better response than if you used another Linux distribution e.g. Arch, Fedora, RHEL or Oracle Linux.

Debain boasts two install types, desktop and server (the latter being entirely command line based). Being a minimal OS sometimes you'll find that it doesn't come with all of the packages ubuntu comes with and some tutorials don't mention this,  thankfully as Ubuntu is a Debian based distro everything that runs on Ubuntu will also run on Debian (once any additional packages / alternative directories are accounted for).

---

#### Ubuntu
