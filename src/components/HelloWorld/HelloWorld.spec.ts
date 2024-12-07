import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

vi.mock('../useHelloWorld', () => ({
  useHelloWorld: () => ({
    getTimeBasedGreeting: vi.fn().mockReturnValue('Good morning'),
  }),
}))

describe('HelloWorld', () => {
  it('renders proper greeting with provided message', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'World',
      },
    })

    expect(wrapper.text()).toContain('World')
  })

  it('contains links to Vite and Vue', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'World',
      },
    })

    const links = wrapper.findAll('a')
    expect(links[0].attributes('href')).toBe('https://vite.dev/')
    expect(links[1].attributes('href')).toBe('https://vuejs.org/')
  })

  it('applies correct CSS classes', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'World',
      },
    })

    expect(wrapper.find('h1').classes()).toContain('green')
    expect(wrapper.find('.greetings')).toBeTruthy()
  })
})
