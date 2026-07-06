export default {
  name: 'knowledgeBomb',
  title: 'Knowledge Bomb',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Headline / Takeaway',
      type: 'string',
      /** @param {import('sanity').StringRule} Rule */
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Detailed Breakdown',
      type: 'text',
      description: 'The core lesson learned, data insight, or tactical adjustment.'
    }
  ]
};