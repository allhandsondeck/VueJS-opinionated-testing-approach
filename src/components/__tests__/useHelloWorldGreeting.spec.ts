import { describe, it, expect } from 'vitest'
import { useHelloWorldGreeting } from '../useHelloWorldGreeting'

describe('useHelloWorldGreeting', () => {
  const { getTimeBasedGreeting } = useHelloWorldGreeting()

  describe('getTimeBasedGreeting', () => {
    it('returns "Good morning" at the start of morning (5am)', () => {
      expect(getTimeBasedGreeting(5)).toBe('Good morning')
    })

    it('returns "Good afternoon" at the start of afternoon (12pm)', () => {
      expect(getTimeBasedGreeting(12)).toBe('Good afternoon')
    })

    it('returns "Good evening" at the start of evening (17pm)', () => {
      expect(getTimeBasedGreeting(17)).toBe('Good evening')
    })

    it('returns "Good night" at the start of night (22pm)', () => {
      expect(getTimeBasedGreeting(22)).toBe('Good night')
    })

    it('returns "Good night" at midnight', () => {
      expect(getTimeBasedGreeting(0)).toBe('Good night')
    })
  })
})
