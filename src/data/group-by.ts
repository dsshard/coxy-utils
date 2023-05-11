export const groupBy = <T>(items: T[], getter: (item: T) => string) =>
  items.reduce((groups, item: T) => {
    const dateKey = getter(item)

    if (!groups[dateKey]) {
      return Object.assign(groups, {
        [dateKey]: {
          key: dateKey,
          items: [item],
        },
      })
    }
    groups[dateKey].items.push(item)
    return groups
  }, {})
