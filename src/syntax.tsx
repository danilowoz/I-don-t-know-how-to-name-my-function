import React from 'react'

const SyntaxHighlight: React.FC<{ code: string }> = ({ code }) => {
  return (
    <div
      className="absolute bg-white shadow sm:rounded-lg p-10 text-xl font-sans"
      style={{ width: '70%', left: '15%', top: '45%' }}
    >
      <p className="font-light tracking-wide">
        <span className="text-gray-500">function</span>{' '}
        <span className="font-normal text-indigo-600">{code}( )</span>{' '}
        <span className="text-gray-500">{`{ }`}</span>
      </p>
    </div>
  )
}

export default SyntaxHighlight
