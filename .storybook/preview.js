const customViewports = {
  smallUgly: {
    name: 'smallUgly',
    styles: {
      width: '360px',
      height: '540px',
    },
  },
  mediumUgly: {
    name: 'mediumUgly',
    styles: {
      width: '1024px',
      height: '1200px',
    },
  },
}

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'someDefault',
    }
  },
};

export default preview;
