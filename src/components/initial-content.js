const initialContent = {
  pages: [
    {
      path: '/',
      label: 'Home',
      rows: [
        {
          cols: [
            {
              styleType: 'lightMain',
              items: [
                {
                  itemType: 'header',
                  text: 'Jessica Calderon'
                },
                {
                  itemType: 'leadText',
                  text: 'Jessica really cool yeah.'
                },
                {
                  itemType: 'pdfDownloadButton',
                  source: 'somePath',
                  text: 'Resume'
                }
              ]
            }
          ]
        },
        {
          cols: [
            {
              styleType: 'light',
              items: [
                {
                  itemType: 'header',
                  text: 'Section'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really catchy for you goes here. Something Silly most likely.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            },
            {
              styleType: 'dark',
              items: [
                {
                  itemType: 'header',
                  text: 'Section'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really catchy for you goes here. Something Silly most likely.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            }
          ]
        },
        {
          cols: [
            {
              styleType: 'dark',
              items: [
                {
                  itemType: 'header',
                  text: 'Section'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really catchy for you goes here. Something Silly most likely.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            },
            {
              styleType: 'light',
              items: [
                {
                  itemType: 'header',
                  text: 'Section'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really catchy for you goes here. Something Silly most likely.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/aboutme',
      label: 'About Me',
      rows: [
        {
          cols: [
            {
              styleType: 'light',
              items: [
                {
                  itemType: 'header',
                  text: 'Section'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really catchy for you goes here. Something Silly most likely.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            },
            {
              styleType: 'dark',
              items: [
                {
                  itemType: 'header',
                  text: 'Section'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really catchy for you goes here. Something Silly most likely.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            }
          ]
        },
        {
          cols: [
            {
              styleType: 'dark',
              items: [
                {
                  itemType: 'header',
                  text: 'Section'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really catchy for you goes here. Something Silly most likely.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            },
            {
              styleType: 'light',
              items: [
                {
                  itemType: 'header',
                  text: 'Section'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really catchy for you goes here. Something Silly most likely.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/contact',
      label: 'Contact',
      rows: [
        {
          cols: [
            {
              styleType: 'darkMain',
              items: [
                {
                  itemType: 'header',
                  text: 'Contact'
                },
                {
                  itemType: 'leadText',
                  text: 'Something really interesting with content.'
                },
                {
                  itemType: 'image',
                  source: 'somePath'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default initialContent