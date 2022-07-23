# SFTP

When running a Minecraft server remotely the chances are at some stage you'll want to adjust some files, upload a plugin or download / export your world for migration. This page will cover how to use SFTP for 'Multicraft' and 'Pterodactyl' panels, while the base steps will be very fundamentally similar the web interfaces where to find the information is different.

### Multicraft Specific
These steps are Multicraft specific in order to configure access for FTP.

- Go to your providers control panel, normally https://panel.provider.com
- Select the server you want to give FTP access to
- Go to the 'Users' tab
- Find the user you wish to grant FTP access to and in the middle column use the dropdown to grant one of the following options.

	- No Access
	- Read Only
	- Full Access
	
> [!Note]
> Beside the dropdown you will see a username, make a note of this as you'll need it for later.

---

### Pterodactyl Specific

These steps are Pterodactyl specific in order to configure access for FTP.

- Go to your providers control panel, normally https://panel.provider.com
- Select the server you want to give FTP access to
- Go to the 'Users' tab
- Select 'New User' button
- Enter in the users email address
- Scroll down and find the 'Files' section
- Ensure the 'SFTP' box is ticked
- Select the 'Invite User' button to save and invite

> [!Note]
> For Pterodactyl users the 'SFTP Username' and 'Hostname' can be found under the 'Settings' tab and these are unique to each server.

---

### Panel Neutral 

If you're not using one of the above panels you're going to want to ensure the following types of things are enabled within your user management settings.

- File management is enabled
- Check for any 'Remote File Management' settings (depending on the panel this may be referred to as one of the following) 
	- FTP
	- FTPS
	- SFTP
- Remote connection details (server address / port)

---

### Connecting via Filezilla

Providing you have the hostname, port, username and password we can connect remotely via Filezilla in order to manage files easier. This document uses filezilla as it's platform universal, if you're using an alternative file transfer client you may need to adjust this accordingly.

- Download Filezilla from [here](https://filezilla-project.org/download.php?type=client)
		- The rest of the guide will assume you have also gone through the installation and will continue when you launch the app seeing a blank white screen.
- The section we're focusing on will be the 4 input fields right at the top of the window, you will need to input the info gathered from the above steps into their respective box.

 ![[Pasted image 20220716210334.png]]

- Once the fields have been populated you'll need to press 'quick connect', you may get a prompt about an unknown / insecure host. You can ignore this as it's only relating to an SSL certificate.

![[Pasted image 20220716210902.png]]

- Below the 4 input fields you'll see a log output generating, if you're not successfully connected any errors will be displayed here.

> [!Note]
> If all has been successful you'll see the below output, if you see anything other than the below output then something was inputted incorrectly.
> 
> ```
>...
>
>Listing directory /
>Status:	Directory listing of "/" successful
>
>...
>```
- Below the log section you have the file directories, on the left hand side you have your local PC and on the right you have your server with a hosting provider. Depending on the server you may have more or less files that what is displayed 

![[Pasted image 20220716215750.png]]

- When navigating the server file directory you may need to return to a higher folder. This can be done by pressing the 'three dots folder' at the top of any directory. (This will work the same for the local and remote directories)

![[Pasted image 20220716215943.png]]

