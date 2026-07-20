export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],  // prevents creating multiple or deleting
  fields: [

    // ── Identity ──────────────────────────────────────────
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'siteTagline',
      title: 'Tagline',
      type: 'string',
      description: 'Shows under the site title on the homepage hero.'
    },
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'Production URL. Used for OG tags and canonical links.',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    },

    // ── Navigation ─────────────────────────────────────────
    {
      name: 'nav',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
            { name: 'href', title: 'URL', type: 'string', validation: Rule => Rule.required() },
            { name: 'isExternal', title: 'Opens in new tab', type: 'boolean', initialValue: false }
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' }
          }
        }
      ]
    },

    // ── Global CTA (newsletter) ────────────────────────────
    {
      name: 'globalCta',
      title: 'Global Newsletter CTA',
      description: 'Shown at the bottom of every post and log unless overridden.',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Headline', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 2 },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        { name: 'buttonUrl', title: 'Button URL', type: 'url', description: 'Your Kit form URL.' }
      ]
    },

    // ── SEO defaults ───────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO Defaults',
      type: 'object',
      description: 'Fallbacks when a page has no SEO fields set.',
      fields: [
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2, validation: Rule => Rule.max(155) },
        { name: 'ogImage', title: 'Default OG Image', type: 'image' }
      ]
    },

    // ── Footer ─────────────────────────────────────────────
    {
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
      description: 'e.g. "Documenting the experiments. Sharing what works."'
    },
    {
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: ['Twitter/X', 'Instagram', 'YouTube', 'Substack', 'LinkedIn', 'TikTok']
              }
            },
            { name: 'url', title: 'URL', type: 'url' }
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' }
          }
        }
      ]
    }
  ],

  preview: {
    select: { title: 'siteTitle' }
  }
}