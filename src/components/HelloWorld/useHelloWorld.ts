export const useHelloWorld = () => {
  const getTimeBasedGreeting = (currentHour: number): string => {
    if (currentHour >= 5 && currentHour < 12) return 'Good morning'
    if (currentHour >= 12 && currentHour < 17) return 'Good afternoon'
    if (currentHour >= 17 && currentHour < 22) return 'Good evening'
    return 'Good night'
  }

  return {
    getTimeBasedGreeting,
  }
}
