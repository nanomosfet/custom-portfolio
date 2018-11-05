/* eslint no-magic-numbers: ["off"] */

const initialContent = {
  pages: {
    byId: {
      1: {
        id: 1,
        path: '/',
        label: 'Home',
        isHome: true,
        rows: [1]
      },
      2: {
        id: 2,
        path: '/contact',
        label: 'Contact',
        rows: [2]
      }
    },
    allPages: [1, 2]
  },
  rows: {
    byId: {
      1: {
        cols: [2]
      },
      2: {
        cols: [1]
      }
    }
  },
  cols: {
    byId: {
      1: {
        id: 1,
        styleType: 'lightMain',
        items: [5, 4, 3, 2]
      },
      2: {
        id: 2,
        styleType: 'darkMain',
        items: [1]
      }
    }
  },
  items: {
    byId: {
      1: {
        id: 1,
        itemType: 'header',
        text: 'Header'
      },
      2: {
        id: 2,
        itemType: 'image',
        source: 'somePath'
      },
      3: {
        id: 3,
        itemType: 'pdfDownloadButton',
        source: 'somePath',
        text: 'Resume'
      },
      4: {
        id: 4,
        itemType: 'leadText',
        text: 'Really cool lead text that people pay attention too.'
      },
      5: {
        id: 5,
        itemType: 'header',
        text: 'Header'
      }
    }
  }
}

export default initialContent
