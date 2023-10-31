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
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

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
"enhancements/Anti-X Tools/anticheat.mdx": {
	id: "enhancements/Anti-X Tools/anticheat.mdx";
  slug: "e/anti-x/ac";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/antiexploit.mdx": {
	id: "enhancements/Anti-X Tools/antiexploit.mdx";
  slug: "e/anti-x/ae";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/antilag.mdx": {
	id: "enhancements/Anti-X Tools/antilag.mdx";
  slug: "e/anti-x/al";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/antixray.mdx": {
	id: "enhancements/Anti-X Tools/antixray.mdx";
  slug: "e/anti-x/ax";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Anti-X Tools/intro.mdx": {
	id: "enhancements/Anti-X Tools/intro.mdx";
  slug: "e/anti-x";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Economy/chest.mdx": {
	id: "enhancements/Economy/chest.mdx";
  slug: "e/eco/chest";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Economy/gui.mdx": {
	id: "enhancements/Economy/gui.mdx";
  slug: "e/eco/gui";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Economy/intro.mdx": {
	id: "enhancements/Economy/intro.mdx";
  slug: "e/eco";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Economy/shop.mdx": {
	id: "enhancements/Economy/shop.mdx";
  slug: "e/eco/shop";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Permissions/breakdown.mdx": {
	id: "enhancements/Permissions/breakdown.mdx";
  slug: "e/perms";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Permissions/luckperms.mdx": {
	id: "enhancements/Permissions/luckperms.mdx";
  slug: "e/perms/luckperms";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/essentialsx.mdx": {
	id: "enhancements/Plugins/Free/essentialsx.mdx";
  slug: "e/pl/essentialsx";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/npcs.mdx": {
	id: "enhancements/Plugins/Free/npcs.mdx";
  slug: "e/pl/npcplugins";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/timber.mdx": {
	id: "enhancements/Plugins/Free/timber.mdx";
  slug: "e/pl/ultimatetimber";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/vault.mdx": {
	id: "enhancements/Plugins/Free/vault.mdx";
  slug: "e/pl/vault";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/worldedit.mdx": {
	id: "enhancements/Plugins/Free/worldedit.mdx";
  slug: "e/pl/worldedit";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Free/worldguard.mdx": {
	id: "enhancements/Plugins/Free/worldguard.mdx";
  slug: "e/pl/worldguard";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Plugins/Premium/litebans.mdx": {
	id: "enhancements/Plugins/Premium/litebans.mdx";
  slug: "e/pl/litebans";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"enhancements/Plugins/intro.mdx": {
	id: "enhancements/Plugins/intro.mdx";
  slug: "e/pl";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/oracle.mdx": {
	id: "guides/cloud/oracle.mdx";
  slug: "guides/oracle-cloud";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/core/ovh.mdx": {
	id: "guides/cloud/ovh/core/ovh.mdx";
  slug: "guides/lab/ovh";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/core/ports.mdx": {
	id: "guides/cloud/ovh/core/ports.mdx";
  slug: "guides/lab/pforward";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/core/proxmox.mdx": {
	id: "guides/cloud/ovh/core/proxmox.mdx";
  slug: "guides/lab/proxmox";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/core/remote.mdx": {
	id: "guides/cloud/ovh/core/remote.mdx";
  slug: "guides/lab/remote";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/core/vms.mdx": {
	id: "guides/cloud/ovh/core/vms.mdx";
  slug: "guides/lab/vms";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/intro.mdx": {
	id: "guides/cloud/ovh/intro.mdx";
  slug: "guides/lab";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/optional/configurations/aad.mdx": {
	id: "guides/cloud/ovh/optional/configurations/aad.mdx";
  slug: "guides/lab/aad";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/optional/configurations/azure.mdx": {
	id: "guides/cloud/ovh/optional/configurations/azure.mdx";
  slug: "guides/lab/arc";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/optional/configurations/hardening.mdx": {
	id: "guides/cloud/ovh/optional/configurations/hardening.mdx";
  slug: "guides/lab/hardening";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/optional/services/Zero Trust/cloudflare.mdx": {
	id: "guides/cloud/ovh/optional/services/Zero Trust/cloudflare.mdx";
  slug: "guides/lab/cloudflare";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/optional/services/docker.mdx": {
	id: "guides/cloud/ovh/optional/services/docker.mdx";
  slug: "guides/lab/docker";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/optional/services/maas.mdx": {
	id: "guides/cloud/ovh/optional/services/maas.mdx";
  slug: "guides/lab/maas";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/optional/services/macos.mdx": {
	id: "guides/cloud/ovh/optional/services/macos.mdx";
  slug: "guides/lab/mac";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/ovh/optional/services/uptimekuma.mdx": {
	id: "guides/cloud/ovh/optional/services/uptimekuma.mdx";
  slug: "guides/lab/monitoring";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/cloud/topics.mdx": {
	id: "guides/cloud/topics.mdx";
  slug: "guides/cloud";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/optimisation/advanced.mdx": {
	id: "guides/minecraft/optimisation/advanced.mdx";
  slug: "/optimisation/advanced";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/optimisation/basic.mdx": {
	id: "guides/minecraft/optimisation/basic.mdx";
  slug: "/optimisation/basic";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/optimisation/intro.mdx": {
	id: "guides/minecraft/optimisation/intro.mdx";
  slug: "/optimisation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/CinemaMod/commands.mdx": {
	id: "guides/minecraft/plugins/CinemaMod/commands.mdx";
  slug: "guides/cinemamod/commands/";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/CinemaMod/intro.mdx": {
	id: "guides/minecraft/plugins/CinemaMod/intro.mdx";
  slug: "guides/cinemamod";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/CinemaMod/setup.mdx": {
	id: "guides/minecraft/plugins/CinemaMod/setup.mdx";
  slug: "guides/cinemanod/setup";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/cinemamod/commands.mdx": {
	id: "guides/minecraft/plugins/cinemamod/commands.mdx";
  slug: "guides/cinemamod/commands/";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/cinemamod/intro.mdx": {
	id: "guides/minecraft/plugins/cinemamod/intro.mdx";
  slug: "guides/cinemamod";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/cinemamod/setup.mdx": {
	id: "guides/minecraft/plugins/cinemamod/setup.mdx";
  slug: "guides/cinemanod/setup";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/dynmap/intro.mdx": {
	id: "guides/minecraft/plugins/dynmap/intro.mdx";
  slug: "guides/dynmap";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/dynmap/proxy.mdx": {
	id: "guides/minecraft/plugins/dynmap/proxy.mdx";
  slug: "guides/dynmap/proxy";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/dynmap/setup.mdx": {
	id: "guides/minecraft/plugins/dynmap/setup.mdx";
  slug: "guides/dynmap/setup";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/plugins/intro.mdx": {
	id: "guides/minecraft/plugins/intro.mdx";
  slug: "/plugins";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/java/docker.mdx": {
	id: "guides/minecraft/self-host/java/docker.mdx";
  slug: "guides/self-host/docker";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/java/linux.mdx": {
	id: "guides/minecraft/self-host/java/linux.mdx";
  slug: "guides/self-host/linux";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/java/win.mdx": {
	id: "guides/minecraft/self-host/java/win.mdx";
  slug: "guides/self-host/win";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/panels/pterodactyl/intro.mdx": {
	id: "guides/minecraft/self-host/panels/pterodactyl/intro.mdx";
  slug: "guides/pterodactyl";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/panels/pterodactyl/node.mdx": {
	id: "guides/minecraft/self-host/panels/pterodactyl/node.mdx";
  slug: "guides/pterodactyl/node";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/panels/pterodactyl/panel.mdx": {
	id: "guides/minecraft/self-host/panels/pterodactyl/panel.mdx";
  slug: "guides/pterodactyl/panel";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/panels/pterodactyl/wings.mdx": {
	id: "guides/minecraft/self-host/panels/pterodactyl/wings.mdx";
  slug: "guides/pterodactyl/wings";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/panels/pufferpanel/installation.mdx": {
	id: "guides/minecraft/self-host/panels/pufferpanel/installation.mdx";
  slug: "guides/pufferpanel";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/panels/pufferpanel/ssl.mdx": {
	id: "guides/minecraft/self-host/panels/pufferpanel/ssl.mdx";
  slug: "guides/pufferpanel/ssl";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/self-host/topics.mdx": {
	id: "guides/minecraft/self-host/topics.mdx";
  slug: "/self-host";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/minecraft/topics.mdx": {
	id: "guides/minecraft/topics.mdx";
  slug: "/minecraft";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/services/folia.mdx": {
	id: "guides/services/folia.mdx";
  slug: "/build-folia";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/services/intro.mdx": {
	id: "guides/services/intro.mdx";
  slug: "/service";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/services/ssl/intro.mdx": {
	id: "guides/services/ssl/intro.mdx";
  slug: "/ssl";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"guides/services/ssl/tools.mdx": {
	id: "guides/services/ssl/tools.mdx";
  slug: "/ssl/tools";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hosting/hardware.mdx": {
	id: "hosting/hardware.mdx";
  slug: "h/hardware";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hosting/intro.mdx": {
	id: "hosting/intro.mdx";
  slug: "h";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hosting/os.mdx": {
	id: "hosting/os.mdx";
  slug: "h/os";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hosting/panels.mdx": {
	id: "hosting/panels.mdx";
  slug: "h/ui";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hosting/providers.mdx": {
	id: "hosting/providers.mdx";
  slug: "h/providers";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hosting/self.mdx": {
	id: "hosting/self.mdx";
  slug: "h/self";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"hosting/types.mdx": {
	id: "hosting/types.mdx";
  slug: "h/types";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"information/discord.mdx": {
	id: "information/discord.mdx";
  slug: "discord";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"information/docs.mdx": {
	id: "information/docs.mdx";
  slug: "docs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"information/eula.mdx": {
	id: "information/eula.mdx";
  slug: "eula";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"information/releases.mdx": {
	id: "information/releases.mdx";
  slug: "release";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/database.mdx": {
	id: "tools/database.mdx";
  slug: "t/database";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/offline-mode.mdx": {
	id: "tools/offline-mode.mdx";
  slug: "t/offline";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/server-software.mdx": {
	id: "tools/server-software.mdx";
  slug: "t/server-software";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/signed-chat.mdx": {
	id: "tools/signed-chat.mdx";
  slug: "t/signed-chat";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/startup.mdx": {
	id: "tools/startup.mdx";
  slug: "t/flags";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"tools/textures.mdx": {
	id: "tools/textures.mdx";
  slug: "t/textures";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"troubleshooting/connectivity.mdx": {
	id: "troubleshooting/connectivity.mdx";
  slug: "ts/connection";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"troubleshooting/ip.mdx": {
	id: "troubleshooting/ip.mdx";
  slug: "ts/ip";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"troubleshooting/java.mdx": {
	id: "troubleshooting/java.mdx";
  slug: "ts/java";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"troubleshooting/latency.mdx": {
	id: "troubleshooting/latency.mdx";
  slug: "ts/latency";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = never;
}
