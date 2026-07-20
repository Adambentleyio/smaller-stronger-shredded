export default {
  name: 'dailyLog',
  title: 'Daily Log',
  type: 'document',
  fields: [
    {
      name: 'experiment',
      title: 'Experiment Phase',
      type: 'reference',
      to: [{ type: 'experiment' }],
      // Make optional if you want standalone posts
      validation: Rule => Rule.required()
    },
    {
      name: 'dayNumber',
      title: 'Day Number',
      type: 'number',
      description: 'Day within this experiment — must be unique per experiment',
      validation: Rule => Rule.required().integer().positive()
    },
    {
      name: 'title',
      title: 'Log Title',
      type: 'string',
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
          if (!doc.experiment?._ref) return `day-${doc.dayNumber}`;
          const { getClient } = options;
          const client = getClient({ apiVersion: '2026-07-08' });
          const experimentTitle = await client.fetch(`*[_id == $id][0].title`, { id: doc.experiment._ref });
          if (!experimentTitle) return `day-${doc.dayNumber}`;
          return `${experimentTitle.toLowerCase().replace(/\s+/g, '-')}-day-${doc.dayNumber}`;
        }
      }
    },
    // — metrics —
    { name: 'weight', title: 'Weight (kg)', type: 'number' },
    { name: 'calories', title: 'Calories (kcal)', type: 'number' },
    {
      name: 'vibe',
      title: 'Vibe Score (1–10)',
      type: 'number',
      validation: Rule => Rule.min(1).max(10).integer()
    },
    {
      name: 'sleep',
      title: 'Sleep (hours)',
      type: 'number',
      validation: Rule => Rule.min(0).max(24)
    },
    // — training (optional, structured) —
    {
      name: 'training',
      title: 'Training Session',
      type: 'object',
      fields: [
        {
          name: 'sessionType',
          title: 'Session Type',
          type: 'string',
          options: {
            list: ['Upper', 'Lower', 'Full Body', 'Push', 'Pull', 'Legs', 'Cardio', 'Rest', 'Other']
          }
        },
        {
          name: 'notes',
          title: 'Training Notes',
          type: 'text',
          description: 'Key lifts, weights, reps, how it felt'
        }
      ]
    },
    // — body —
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'One or two sentences shown on the log index. Auto-generates from content if left blank.'
    },
    {
      name: 'content',
      title: 'Journal & Entry Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        { type: 'knowledgeBomb' }
      ]
    }
  ]
};