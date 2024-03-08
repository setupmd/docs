declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"about.mdx": {
	id: "about.mdx";
  slug: "about";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/anticheat.mdx": {
	id: "enhancements/Anti-X Tools/anticheat.mdx";
  slug: "e/anti-x/ac";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/antiexploit.mdx": {
	id: "enhancements/Anti-X Tools/antiexploit.mdx";
  slug: "e/anti-x/ae";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/antilag.mdx": {
	id: "enhancements/Anti-X Tools/antilag.mdx";
  slug: "e/anti-x/al";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/antixray.mdx": {
	id: "enhancements/Anti-X Tools/antixray.mdx";
  slug: "e/anti-x/ax";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/intro.mdx": {
	id: "enhancements/Anti-X Tools/intro.mdx";
  slug: "e/anti-x";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Economy/chest.mdx": {
	id: "enhancements/Economy/chest.mdx";
  slug: "e/eco/chest";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Economy/gui.mdx": {
	id: "enhancements/Economy/gui.mdx";
  slug: "e/eco/gui";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Economy/intro.mdx": {
	id: "enhancements/Economy/intro.mdx";
  slug: "e/eco";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Economy/shop.mdx": {
	id: "enhancements/Economy/shop.mdx";
  slug: "e/eco/shop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Permissions/breakdown.mdx": {
	id: "enhancements/Permissions/breakdown.mdx";
  slug: "e/perms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Permissions/plugins.mdx": {
	id: "enhancements/Permissions/plugins.mdx";
  slug: "e/perms/plugins";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/auctionhouse.mdx": {
	id: "enhancements/Plugins/Free/auctionhouse.mdx";
  slug: "e/pl/auctionhouse";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/chestshop.mdx": {
	id: "enhancements/Plugins/Free/chestshop.mdx";
  slug: "e/pl/chestshop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/discordsrv.mdx": {
	id: "enhancements/Plugins/Free/discordsrv.mdx";
  slug: "e/pl/discordsrv";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/dukesmart.mdx": {
	id: "enhancements/Plugins/Free/dukesmart.mdx";
  slug: "e/pl/dukesmart";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/essentialsx.mdx": {
	id: "enhancements/Plugins/Free/essentialsx.mdx";
  slug: "e/pl/essentialsx";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/luckperms.mdx": {
	id: "enhancements/Plugins/Free/luckperms.mdx";
  slug: "e/pl/luckperms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/minimotd.mdx": {
	id: "enhancements/Plugins/Free/minimotd.mdx";
  slug: "e/pl/minimotd";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/playerauctions.mdx": {
	id: "enhancements/Plugins/Free/playerauctions.mdx";
  slug: "e/pl/playerauctions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/playershops.mdx": {
	id: "enhancements/Plugins/Free/playershops.mdx";
  slug: "e/pl/playershops";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/quickshop.mdx": {
	id: "enhancements/Plugins/Free/quickshop.mdx";
  slug: "e/pl/quickshop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/ultimatetimber.mdx": {
	id: "enhancements/Plugins/Free/ultimatetimber.mdx";
  slug: "e/pl/ultimatetimber";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/vault.mdx": {
	id: "enhancements/Plugins/Free/vault.mdx";
  slug: "e/pl/vault";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/worldedit.mdx": {
	id: "enhancements/Plugins/Free/worldedit.mdx";
  slug: "e/pl/worldedit";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/worldguard.mdx": {
	id: "enhancements/Plugins/Free/worldguard.mdx";
  slug: "e/pl/worldguard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/znpc.mdx": {
	id: "enhancements/Plugins/Free/znpc.mdx";
  slug: "e/pl/znpc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Premium/citizens.mdx": {
	id: "enhancements/Plugins/Premium/citizens.mdx";
  slug: "e/pl/citizens";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Premium/litebans.mdx": {
	id: "enhancements/Plugins/Premium/litebans.mdx";
  slug: "e/pl/litebans";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Premium/zauctionhouse.mdx": {
	id: "enhancements/Plugins/Premium/zauctionhouse.mdx";
  slug: "e/pl/zauctionhouse";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"enhancements/Plugins/intro.mdx": {
	id: "enhancements/Plugins/intro.mdx";
  slug: "e/pl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Optimisation/advanced.mdx": {
	id: "guides/Minecraft/Optimisation/advanced.mdx";
  slug: "guides/optimisation/advanced";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Optimisation/basic.mdx": {
	id: "guides/Minecraft/Optimisation/basic.mdx";
  slug: "guides/optimisation/basic";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Optimisation/intro.mdx": {
	id: "guides/Minecraft/Optimisation/intro.mdx";
  slug: "guides/optimisation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Plugins/Cinema Mod/commands.mdx": {
	id: "guides/Minecraft/Plugins/Cinema Mod/commands.mdx";
  slug: "guides/cinemamod/commands";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Plugins/Cinema Mod/intro.mdx": {
	id: "guides/Minecraft/Plugins/Cinema Mod/intro.mdx";
  slug: "guides/cinemamod";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Plugins/Cinema Mod/setup.mdx": {
	id: "guides/Minecraft/Plugins/Cinema Mod/setup.mdx";
  slug: "guides/cinemanod/setup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Plugins/Dynmap/intro.mdx": {
	id: "guides/Minecraft/Plugins/Dynmap/intro.mdx";
  slug: "guides/dynmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Plugins/Dynmap/proxy.mdx": {
	id: "guides/Minecraft/Plugins/Dynmap/proxy.mdx";
  slug: "guides/dynmap/proxy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Plugins/Dynmap/setup.mdx": {
	id: "guides/Minecraft/Plugins/Dynmap/setup.mdx";
  slug: "guides/dynmap/setup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Plugins/luckperms.mdx": {
	id: "guides/Minecraft/Plugins/luckperms.mdx";
  slug: "guides/luckperms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Plugins/terra.mdx": {
	id: "guides/Minecraft/Plugins/terra.mdx";
  slug: "guides/terra";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Panels/Pterodactyl/intro.mdx": {
	id: "guides/Minecraft/Self-Host/Panels/Pterodactyl/intro.mdx";
  slug: "guides/pterodactyl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Panels/Pterodactyl/node.mdx": {
	id: "guides/Minecraft/Self-Host/Panels/Pterodactyl/node.mdx";
  slug: "guides/pterodactyl/node";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Panels/Pterodactyl/panel.mdx": {
	id: "guides/Minecraft/Self-Host/Panels/Pterodactyl/panel.mdx";
  slug: "guides/pterodactyl/panel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Panels/Pterodactyl/wings.mdx": {
	id: "guides/Minecraft/Self-Host/Panels/Pterodactyl/wings.mdx";
  slug: "guides/pterodactyl/wings";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Panels/Pufferpanel/installation.mdx": {
	id: "guides/Minecraft/Self-Host/Panels/Pufferpanel/installation.mdx";
  slug: "guides/pufferpanel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Panels/Pufferpanel/ssl.mdx": {
	id: "guides/Minecraft/Self-Host/Panels/Pufferpanel/ssl.mdx";
  slug: "guides/pufferpanel/ssl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Standalone (Java)/docker.mdx": {
	id: "guides/Minecraft/Self-Host/Standalone (Java)/docker.mdx";
  slug: "guides/self-host/docker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Standalone (Java)/linux.mdx": {
	id: "guides/Minecraft/Self-Host/Standalone (Java)/linux.mdx";
  slug: "guides/self-host/linux";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Minecraft/Self-Host/Standalone (Java)/win.mdx": {
	id: "guides/Minecraft/Self-Host/Standalone (Java)/win.mdx";
  slug: "guides/self-host/win";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Core/ovh.mdx": {
	id: "guides/OVH/Core/ovh.mdx";
  slug: "guides/lab/ovh";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Core/ports.mdx": {
	id: "guides/OVH/Core/ports.mdx";
  slug: "guides/lab/pforward";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Core/proxmox.mdx": {
	id: "guides/OVH/Core/proxmox.mdx";
  slug: "guides/lab/proxmox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Core/remote.mdx": {
	id: "guides/OVH/Core/remote.mdx";
  slug: "guides/lab/remote";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Core/vms.mdx": {
	id: "guides/OVH/Core/vms.mdx";
  slug: "guides/lab/vms";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Optional/Configuration/aad.mdx": {
	id: "guides/OVH/Optional/Configuration/aad.mdx";
  slug: "guides/lab/aad";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Optional/Configuration/azure.mdx": {
	id: "guides/OVH/Optional/Configuration/azure.mdx";
  slug: "guides/lab/arc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Optional/Configuration/hardening.mdx": {
	id: "guides/OVH/Optional/Configuration/hardening.mdx";
  slug: "guides/lab/hardening";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Optional/Services/Zero Trust/cloudflare.mdx": {
	id: "guides/OVH/Optional/Services/Zero Trust/cloudflare.mdx";
  slug: "guides/lab/cloudflare";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Optional/Services/docker.mdx": {
	id: "guides/OVH/Optional/Services/docker.mdx";
  slug: "guides/lab/docker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Optional/Services/maas.mdx": {
	id: "guides/OVH/Optional/Services/maas.mdx";
  slug: "guides/lab/maas";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Optional/Services/macos.mdx": {
	id: "guides/OVH/Optional/Services/macos.mdx";
  slug: "guides/lab/mac";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/Optional/Services/uptimekuma.mdx": {
	id: "guides/OVH/Optional/Services/uptimekuma.mdx";
  slug: "guides/lab/monitoring";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/OVH/intro.mdx": {
	id: "guides/OVH/intro.mdx";
  slug: "guides/lab";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Services/TLS/intro.mdx": {
	id: "guides/Services/TLS/intro.mdx";
  slug: "guides/ssl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Services/TLS/tools.mdx": {
	id: "guides/Services/TLS/tools.mdx";
  slug: "guides/ssl/tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Services/domainpark.mdx": {
	id: "guides/Services/domainpark.mdx";
  slug: "guides/domain-parking";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Services/folia.mdx": {
	id: "guides/Services/folia.mdx";
  slug: "guides/build-folia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/Services/oracle.mdx": {
	id: "guides/Services/oracle.mdx";
  slug: "guides/oracle-cloud";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hosting/hardware.mdx": {
	id: "hosting/hardware.mdx";
  slug: "h/hardware";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hosting/intro.mdx": {
	id: "hosting/intro.mdx";
  slug: "h";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hosting/os.mdx": {
	id: "hosting/os.mdx";
  slug: "h/os";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hosting/panels.mdx": {
	id: "hosting/panels.mdx";
  slug: "h/ui";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hosting/providers.mdx": {
	id: "hosting/providers.mdx";
  slug: "h/providers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hosting/self.mdx": {
	id: "hosting/self.mdx";
  slug: "h/self";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"hosting/types.mdx": {
	id: "hosting/types.mdx";
  slug: "h/types";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"information/discord.mdx": {
	id: "information/discord.mdx";
  slug: "discord";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"information/docs.mdx": {
	id: "information/docs.mdx";
  slug: "docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"information/eula.mdx": {
	id: "information/eula.mdx";
  slug: "eula";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"information/releases.mdx": {
	id: "information/releases.mdx";
  slug: "release";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"information/services.mdx": {
	id: "information/services.mdx";
  slug: "services";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/database.mdx": {
	id: "tools/database.mdx";
  slug: "t/database";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/offline-mode.mdx": {
	id: "tools/offline-mode.mdx";
  slug: "t/offline";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/server-software.mdx": {
	id: "tools/server-software.mdx";
  slug: "t/server-software";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/signed-chat.mdx": {
	id: "tools/signed-chat.mdx";
  slug: "t/signed-chat";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/startup.mdx": {
	id: "tools/startup.mdx";
  slug: "t/flags";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/textures.mdx": {
	id: "tools/textures.mdx";
  slug: "t/textures";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/tunnels.mdx": {
	id: "tools/tunnels.mdx";
  slug: "t/tunnels";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"troubleshooting/connectivity.mdx": {
	id: "troubleshooting/connectivity.mdx";
  slug: "ts/connection";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"troubleshooting/ip.mdx": {
	id: "troubleshooting/ip.mdx";
  slug: "ts/ip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"troubleshooting/java.mdx": {
	id: "troubleshooting/java.mdx";
  slug: "ts/java";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"troubleshooting/latency.mdx": {
	id: "troubleshooting/latency.mdx";
  slug: "ts/latency";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"i18n": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
