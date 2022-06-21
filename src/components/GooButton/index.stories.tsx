import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import Component from ".";

const meta: ComponentMeta<typeof Component> = {
    title: 'Кнопка',
    component: Component,
};
export default meta;

export const Primary: ComponentStoryObj<typeof Component> = {
    args: {
        boolean: true,
        name: 'Текст на кнопке',
        number: 12312312,
    },
};
