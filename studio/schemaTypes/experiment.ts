export default {
  name: 'experiment',
  title: 'Experiment Phase',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Experiment Title',
      type: 'string',
      description: 'e.g., Aggressive Mini-Cut, Peak Strength Build, Hypertrophy Block 1',
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
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Planned', value: 'planned' },
          { title: 'Active', value: 'active' },
          { title: 'Completed', value: 'completed' },
          { title: 'Abandoned', value: 'abandoned' }
        ],
        layout: 'radio'
      },
      initialValue: 'planned',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cut', value: 'cut' },
          { title: 'Bulk', value: 'bulk' },
          { title: 'Recomp', value: 'recomp' },
          { title: 'Strength', value: 'strength' },
          { title: 'Endurance', value: 'endurance' },
          { title: 'Other', value: 'other' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    },
    {
      name: 'targetDays',
      title: 'Target Duration (days)',
      type: 'number',
      description: 'Planned length of the experiment'
    },
    {
      name: 'hypothesis',
      title: 'Hypothesis',
      type: 'string',
      description: 'The one-liner: "I believe X will happen because Y"'
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
      description: 'Short teaser shown on experiment index cards'
    },
    {
      name: 'protocol',
      title: 'Protocol',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full breakdown of exactly what you are doing and why'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    },
    // — filled in once complete —
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Written analysis. Fill this when the experiment ends.'
    },
    {
      name: 'keyTakeaways',
      title: 'Key Takeaways',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'The TL;DR bullets shown at the top of the results section'
    }
  ]
};