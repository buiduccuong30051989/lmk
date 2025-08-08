interface HighlightTextProps {
  text: string
  searchQuery: string
  className?: string
}

const HighlightText: React.FC<HighlightTextProps> = ({ 
  text, 
  searchQuery, 
  className = '' 
}) => {
  if (!searchQuery) {
    return <span className={className}>{text}</span>
  }

  const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'))
  
  return (
    <span className={className}>
      {parts.map((part, index) => 
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200 text-yellow-800 px-1 rounded">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  )
}

export default HighlightText
