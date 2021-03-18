export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60538d59e5ad4e1b9bc28e84',
                  title: 'Sanity Studio',
                  name: 'my-blog-studio-ww6p5vvt',
                  apiId: '62367bce-0e9f-4e93-b60c-1a66afaedb0f'
                },
                {
                  buildHookId: '60538d591d7b881fbbe71668',
                  title: 'Blog Website',
                  name: 'my-blog-web-fxr4c27y',
                  apiId: '5142d422-170f-4342-bbad-74cf5a7d1c54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KRVaghani/My-Blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-blog-web-fxr4c27y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
