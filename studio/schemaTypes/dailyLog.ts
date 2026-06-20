import { defineType, defineField, defineArrayMember } from 'sanity'

export const dailyLog = defineType({
  name: 'dailyLog',
  title: 'Daily Log',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'date',
        slugify: (input) => `day-${input}`,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'weight',
      title: 'Body Weight (kg)',
      type: 'number',
    }),
    defineField({
      name: 'calories',
      title: 'Calorie Intake (kcal)',
      type: 'number',
    }),
    defineField({
      name: 'vibe',
      title: 'Vibe / Satisfaction Slider',
      description: 'Rate the day from 1 (rough) to 10 (unstoppable)',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        layout: 'radio', // Renders as a clickable list or buttons in Sanity Studio
      },
      validation: (Rule) => Rule.min(1).max(10),
    }),
    defineField({
      name: 'content',
      title: 'Log Entry Content',
      type: 'array',
      of: [
        // Standard Rich Text paragraph styles
        defineArrayMember({ 
          type: 'block' 
        }),
        // Custom "Knowledge Bomb" object block inside the content stream
        defineArrayMember({
          type: 'object',
          name: 'knowledgeBomb',
          title: 'Knowledge Bomb',
          fields: [
            defineField({
              name: 'text',
              title: 'The Takeaway',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})