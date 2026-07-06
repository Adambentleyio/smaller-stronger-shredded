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
      options: { source: 'title' }
    },
    {
      name: 'description',
      title: 'Objective / Description',
      type: 'text'
    }
  ]
};