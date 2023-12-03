import { createButton } from './button';
/* import ButtonDocumentation from './button.md'; */

export default {
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      }
    },
    style: {
      name: 'Style',
      options: ['filled', 'outlined'],
      control: {
        type: 'radio',
      }
    },
    size: {
      name: 'Size',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      }
    },
  },
  /* Permiten modificar la UI de Storybook: */
  decorators: [(story) => {
    const decorator = document.createElement('div');
    decorator.style.margin = '24px';
    decorator.appendChild(story());

    return decorator;
  }],
  parameters: {
    /* Parameters nos permite crear una documentación: */
    docs: {
      page: null,
      description: {
        /* Indica que va a ser un archivo de markdown el que vamos
        a usar para la documentación. En el valor usamos nombre
        del archivo que debe leer Storybook donde tenemos la documentación: */
        /* component: ButtonDocumentation, */
      },
    }
  },
  tags: ['autodocs'],
  title: 'Design System/Atoms/Button',
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});

Default.args = {
  label: 'Button',
  style: 'filled',
};
