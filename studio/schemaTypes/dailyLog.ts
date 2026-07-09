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
        source: async (doc, options) => {
          // 1. Ensure the reference exists
          if (!doc.experiment?._ref) return `day-${doc.dayNumber}`;
          
          // 2. Fetch the target experiment title using the client in context
          const { getClient } = options;
          const client = getClient({ apiVersion: '2026-07-08' });
          const experimentTitle = await client.fetch(`*[_id == $id][0].title`, { id: doc.experiment._ref });
          
          if (!experimentTitle) return `day-${doc.dayNumber}`;
          
          // 3. Return your beautifully formatted string rule
          return `${experimentTitle.toLowerCase().replace(/\s+/g, '-')}-day-${doc.dayNumber}`;
      }}},
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
      of: [{ type: 'block' },
         { type: 'image', options: {
          hotspot: true
      }},
       { type: 'knowledgeBomb' }]
    }
  ]
};