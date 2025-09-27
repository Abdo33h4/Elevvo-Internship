function Header() {
  return React.createElement(
    'header',
    { className: 'border-b bg-white/70 backdrop-blur sticky top-0 z-10' },
    React.createElement(
      'div',
      { className: 'max-w-6xl mx-auto px-4 py-5 flex items-center justify-between' },
      [
        React.createElement(
          'h1',
          { key: 'title', className: 'text-2xl md:text-3xl font-bold' },
          [
            React.createElement('span', { key: 't1', className: 'text-brand-600' }, 'Tech'),
            ' & ',
            React.createElement('span', { key: 't2', className: 'text-brand-600' }, 'Travel'),
            ' Blog'
          ]
        ),
        React.createElement(
          'a',
          { key: 'about', href: '#', className: 'text-sm text-brand-600 hover:underline' },
          'About'
        )
      ]
    )
  )
}

window.Header = Header


