



### Adjusting Startup Scripts

We've created our server with 6GB of ram, depending on what type of server you're looking to run this may be too much or too little. You can adjust the RAM allocation by editing our startup command 

```bash
...

java -Xmx<change-me>G -Xms<match-me-to-Xmx-value>G -jar purpur-1.19-1708.jar nogui

...
```

You can swap `6` for any numerical value you like, some advice is don't set more than 12 because you'll start to see negative performance and don't set less than 4. It should be obvious but don't allocate more ram to Minecraft than you provisioned for the VPS Size at the start of this tutorial.


__section ported over from oci setup needs review__
