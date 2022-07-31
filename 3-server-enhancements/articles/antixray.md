# Anti-Xray
As the name suggests, Anti-Xray will prevent players from finding ores using Xray clients/resource packs. This is done by sending packets to the player where all of the ores are replaced by stone. The ores only appear if the player establishes direct visual contact with them/updates them. Two of the most common Anti-Xray plugins are shown below:


#### [PaperMC](https://www.papermc.io)
PaperMC (A fork of Spigot) comes with a built-in Anti-Xray. This Anti-Xray usually does the trick just fine. It is simple to setup and causes no lag for both the server and the client (unless you hide caves (air), which will be much laggier for the client). A great guide is shown [here](https://docs.papermc.io/paper/anti-xray). Again, make sure that you do NOT add `air` to `hidden-blocks`

---

#### [Orebfuscator](https://www.spigotmc.org/resources/orebfuscator-anti-x-ray.82710/)
If you're stuck using Spigot for whatever reason, you should probably use Orebfuscator. It may also work well in junction with Paper's Anti-Xray, as it can also hide containers better.
