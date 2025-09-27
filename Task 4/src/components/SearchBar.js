function SearchBar(props) {
  return React.createElement(
    'div',
    { className: 'relative' },
    [
      React.createElement('input', {
        key: 'input',
        type: 'text',
        value: props.value,
        onChange: function (e) { props.onChange(e.target.value) },
        className: 'w-full md:w-80 rounded-full border border-gray-300 pl-10 pr-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500',
        placeholder: 'Search posts by title...'
      }),
      React.createElement('span', { key: 'icon', className: 'absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' }, '🔍')
    ]
  )
}

window.SearchBar = SearchBar


