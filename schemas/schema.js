// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'blog',
      type: 'document',
      title: 'Blog Kaizen',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Título'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtítulo'
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug'
        },
        {
          name: 'coverImage',
          title: 'Thumbnail',
          type: 'image',
          options: {
            hotspot: true
            } 
        },
        {
          name: 'date',
          title: 'Data da Publicação',
          type: 'date',
        },
        {
          name: 'content',
          title: 'Conteúdo',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  title: 'Posição',
                  name: 'position',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Center', value: 'center'},
                      {title: 'Left', value: 'left'},
                      {title: 'Right', value: 'right'},
                    ],
                    layout: 'radio',
                    isHighlighted: true
                  }
                },
                {
                  type: 'text', 
                  name: 'alt',
                  title: 'Descrição',
                  options: {
                    isHighlighted: true
                  }
                }
              ],
              options: {
                hotspot: true
                }
            }
          ]
        },
        {
          name: 'tag',  
          type: 'string',
          title: 'Tag'
        }
      ]
    },
  ]),
})
