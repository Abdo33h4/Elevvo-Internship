function formatDate(iso) {
  var d = new Date(iso)
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })
}

function PostCard(props) {
  var post = props.post
  return React.createElement(
    'article',
    { className: 'group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-card transition hover:-translate-y-0.5' },
    [
      React.createElement(
        'div',
        { key: 'imgwrap', className: 'overflow-hidden' },
        React.createElement('img', {
          src: post.image,
          alt: post.title,
          className: 'h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105',
          loading: 'lazy'
        })
      ),
      React.createElement(
        'div',
        { key: 'body', className: 'p-4' },
        [
          React.createElement(
            'div',
            { key: 'meta', className: 'flex items-center justify-between mb-2' },
            [
              React.createElement('span', { key: 'cat', className: 'text-xs uppercase tracking-wide text-brand-600 font-medium' }, post.category),
              React.createElement('time', { key: 'date', className: 'text-xs text-gray-500' }, formatDate(post.date))
            ]
          ),
          React.createElement('h3', { key: 'title', className: 'font-semibold text-lg mb-1 line-clamp-2' }, post.title),
          React.createElement('p', { key: 'desc', className: 'text-sm text-gray-600 line-clamp-3' }, post.description)
        ]
      )
    ]
  )
}

window.PostCard = PostCard


