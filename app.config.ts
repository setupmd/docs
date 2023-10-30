export default defineAppConfig({
  docus: {
    title: 'setup.md',
    description: 'Your open source Minecraft administration wiki.',
    image: '',
    socials: {
      github: 'setupmd/docs',
      discord: {
        label: 'Discord',
        icon: 'simple-icons:discord',
        href: 'https://link.setup.md/discord'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'v3-nuxt',
      repo: 'docs',
      owner: 'setupmd',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
