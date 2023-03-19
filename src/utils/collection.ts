export const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, current) => {
    const group = getKey(current)

    previous[group] = previous[group] || []
    previous[group].push(current)

    return previous
  }, {} as Record<K, T[]>)
