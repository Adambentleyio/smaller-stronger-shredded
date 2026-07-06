export default {
  name: 'dailyLog',
  title: 'Daily Log',
  type: 'document',
  fields: [
    {
      name: 'dayNumber',
      title: 'Day Number',
      type: 'number',
      description: 'e.g., 1, 14, 45',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Log Title',
      type: 'string',
      description: 'The main headline for today\'s entry',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        // Generates clean slugs like 'day-45-squat-pr'
        source: (doc) => `day-${doc.dayNumber}-${doc.title.toLowerCase().replace(/\s+/g, '-')}` 
      }
    },
    {
      name: 'experiment',
      title: 'Relates to Experiment Phase',
      type: 'reference',
      to: [{ type: 'experiment' }],
      validation: Rule => Rule.required()
    },
    { name: 'weight', title: 'Weight (kg)', type: 'number' },
    { name: 'calories', title: 'Calories (kcal)', type: 'number' },
    { name: 'vibe', title: 'Vibe Score (1-10)', type: 'number' },
    {
      name: 'content',
      title: 'Journal & Entry Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'knowledgeBomb' }]
    }
  ]
};