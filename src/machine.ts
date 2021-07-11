import { useState } from 'react'
import { Machine } from 'xstate'


interface MachineSchema {
  states: {
    inactive: {};
    active: {};
  };
}

type SwitchEvent = { type: 'TOGGLE' };

export const machineEngine = Machine<any, MachineSchema, SwitchEvent>({
    id: 'lightSwitch',
    initial: 'inactive',
    states: {
        active: {
            on: {
                TOGGLE: 'inactive',
            },
        },
        inactive: {
            on: {
                TOGGLE: 'active',
            },
        },
    },
})

export const useSwitch = () => {
    const [active, setActive] = useState(false)
    const toggle = () => void setActive(!active)
    return [active, toggle]
}
