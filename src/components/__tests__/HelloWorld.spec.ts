import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders message based on time of day', () => {
    vi.useFakeTimers()
    const times = [
      { time: '2023-10-10T05:00:00Z', expected: 'Good morning' },
      { time: '2023-10-10T12:00:00Z', expected: 'Good afternoon' },
      { time: '2023-10-10T18:00:00Z', expected: 'Good evening' },
      { time: '2023-10-10T23:00:00Z', expected: 'Good night' },
    ]

    times.forEach(({ time, expected }) => {
      vi.setSystemTime(new Date(time))
      const wrapper = mount(HelloWorld)
      expect(wrapper.text()).toContain(expected)
    })
    vi.useRealTimers()
  })
})
