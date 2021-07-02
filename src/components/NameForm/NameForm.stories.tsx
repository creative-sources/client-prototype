// YourComponent.stories.tsx

import React, { ComponentProps } from 'react'

import { Story } from '@storybook/react'

import { Form } from './NameForm'

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Form',
    component: Form,
    argTypes: {
        backgroundColor: { control: 'color' },
        variant: {
            width: {
                control: { type: 'range', min: 400, max: 1200, step: 50 },
            },
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
        },
    },
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Form>> = (args) => (
    <Form {...args} />
)

export const FirstStory = Template.bind({})
FirstStory.args = {
    variant: 'primary',
    label: 'subscribe',
    children: 'Form',
}

export const SecondStory = Template.bind({})
SecondStory.args = {
    variant: 'secondary',
    children: 'Arepa',
    label: 'subscribe',
}
