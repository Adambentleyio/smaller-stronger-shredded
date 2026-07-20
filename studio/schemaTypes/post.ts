export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [

    // ── Identity ──────────────────────────────────────────
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio'
      },
      initialValue: 'draft',
      validation: Rule => Rule.required()
    },

    // ── Discovery & Categorisation ─────────────────────────
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Mindset', value: 'mindset' },
          { title: 'Productivity', value: 'productivity' },
          { title: 'Business', value: 'business' },
          { title: 'Lifestyle', value: 'lifestyle' },
          { title: 'Nutrition', value: 'nutrition' },
          { title: 'Training', value: 'training' },
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Optional. Used for related posts and filtering.'
    },
    {
      name: 'featured',
      title: 'Feature on homepage',
      type: 'boolean',
      initialValue: false,
      description: 'Pins this post to the homepage featured slot.'
    },

    // ── Copy ──────────────────────────────────────────────
    {
      name: 'hook',
      title: 'Hook',
      type: 'string',
      description: 'One punchy sentence. Shows on index cards. Write this last.',
      validation: Rule => Rule.required().max(160)
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Used for SEO meta description and Open Graph. 2–3 sentences.',
      validation: Rule => Rule.max(300)
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        { type: 'knowledgeBomb' }
      ],
      validation: Rule => Rule.required()
    },

    // ── Cross-links ────────────────────────────────────────
    {
      name: 'relatedExperiment',
      title: 'Related Experiment',
      type: 'reference',
      to: [{ type: 'experiment' }],
      description: 'Optional. Surfaces a "Read the experiment →" card at the bottom of the post.'
    },
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{ type: 'series' }],
      description: 'Optional. Groups this post under a multi-part series hub.'
    },

    // ── Per-post CTA override ──────────────────────────────
    {
      name: 'cta',
      title: 'CTA Override',
      type: 'object',
      description: 'Leave blank to use the global newsletter CTA from Site Settings.',
      fields: [
        {
          name: 'type',
          title: 'CTA Type',
          type: 'string',
          options: {
            list: [
              { title: 'Newsletter', value: 'newsletter' },
              { title: 'Product / Cohort', value: 'product' },
              { title: 'None (suppress CTA)', value: 'none' }
            ],
            layout: 'radio'
          }
        },
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          description: 'e.g. "The cohort opens in 3 days."'
        },
        {
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 2
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'e.g. "Get on the list" or "Join the cohort"'
        },
        {
          name: 'buttonUrl',
          title: 'Button URL',
          type: 'url',
          description: 'Link to Kit form, Lemon Squeezy checkout, or sales page.'
        }
      ]
    },

    // ── SEO ───────────────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      description: 'Leave blank to inherit from title and excerpt.',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          validation: Rule => Rule.max(155)
        },
        {
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          description: 'Falls back to cover image if blank.'
        }
      ]
    }
  ],

  // ── Studio preview ────────────────────────────────────
  preview: {
    select: {
      title: 'title',
      subtitle: 'hook',
      media: 'coverImage'
    }
  },

  // ── Ordering in Studio list view ──────────────────────
  orderings: [
    {
      title: 'Publish date, newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    }
  ]
};