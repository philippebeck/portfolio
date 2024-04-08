import './link.css'

const Link = ({url, content, design=''}) => {
  const isExternalLink = url.startsWith('https');

  return (
    isExternalLink
    ?
    <a
      href={url}
      className={design}
      rel="noopener noreferrer"
      target="_blank"
    >
      {content}
    </a>
    :
    <a href={url} className={design}>{content}</a>
  )
}

export default Link
