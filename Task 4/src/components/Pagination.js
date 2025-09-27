function Pagination(props) {
  if (!props.canLoadMore) return null
  return React.createElement(
    'div',
    { className: 'mt-8 flex justify-center' },
    React.createElement(
      'button',
      { className: 'px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium shadow-sm', onClick: props.onLoadMore },
      'Load more'
    )
  )
}

window.Pagination = Pagination


