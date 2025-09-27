function CategoryFilter(props) {
  const { list, active, onChange } = props
  const items = ['All'].concat(list)
  return React.createElement(
    'div',
    { className: 'flex flex-wrap gap-2' },
    items.map(function (c) {
      var classes = ['px-3', 'py-1.5', 'rounded-full', 'border', 'text-sm', 'transition']
      if (active === c) {
        classes.push('bg-brand-600', 'text-white', 'border-brand-600')
      } else {
        classes.push('bg-white', 'hover:bg-gray-100', 'border-gray-300')
      }
      return React.createElement(
        'button',
        { key: c, className: classes.join(' '), onClick: function () { onChange(c) } },
        c
      )
    })
  )
}

window.CategoryFilter = CategoryFilter


