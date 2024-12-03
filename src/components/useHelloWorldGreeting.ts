export const useHelloWorldGreeting = () => {
  const getTimeBasedGreeting = (hour: number): string => {
    if (hour >= 5 && hour < 12) return 'Good morning'
    if (hour >= 12 && hour < 17) return 'Good afternoon'
    if (hour >= 17 && hour < 22) return 'Good evening'
    return 'Good night'
  }

  return {
    getTimeBasedGreeting,
  }
}
