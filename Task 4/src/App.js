function App() {
  var useState = React.useState
  var useMemo = React.useMemo

  var _a = useState('All'), category = _a[0], setCategory = _a[1]
  var _b = useState(''), search = _b[0], setSearch = _b[1]
  var _c = useState(6), visible = _c[0], setVisible = _c[1]

  var categories = useMemo(function () {
    return Array.from(new Set(window.POSTS.map(function (p) { return p.category })))
  }, [])

  var filtered = useMemo(function () {
    var byCat = category === 'All' ? window.POSTS : window.POSTS.filter(function (p) { return p.category === category })
    var q = search.trim().toLowerCase()
    return q ? byCat.filter(function (p) { return p.title.toLowerCase().includes(q) }) : byCat
  }, [category, search])

  var shown = filtered.slice(0, visible)
  var canMore = visible < filtered.length

  return React.createElement(
    'div',
    null,
    [
      React.createElement(window.Header, { key: 'header' }),
      React.createElement(
        'main',
        { key: 'main', className: 'max-w-6xl mx-auto px-4 py-8' },
        [
          React.createElement(
            'div',
            { key: 'controls', className: 'flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6' },
            [
              React.createElement(window.CategoryFilter, { key: 'filter', list: categories, active: category, onChange: function (c) { setCategory(c); setVisible(6) } }),
              React.createElement(window.SearchBar, { key: 'search', value: search, onChange: function (v) { setSearch(v); setVisible(6) } })
            ]
          ),
          React.createElement(
            'section',
            { key: 'grid', className: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' },
            shown.length === 0
              ? [React.createElement('p', { key: 'empty', className: 'text-gray-600' }, 'No posts match your filters.')]
              : shown.map(function (p) { return React.createElement(window.PostCard, { key: p.id, post: p }) })
          ),
          React.createElement(window.Pagination, { key: 'pager', canLoadMore: canMore, onLoadMore: function () { setVisible(function (v) { return v + 6 }) } })
        ]
      ),
      React.createElement('footer', { key: 'footer', className: 'py-8 text-center text-sm text-gray-500' }, '© ' + new Date().getFullYear() + ' Tech & Travel Blog')
    ]
  )
}

window.App = App


