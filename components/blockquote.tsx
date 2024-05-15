import React from 'react';

const Blockquote = ({ quote, footer }: { quote: React.ReactNode, footer: React.ReactNode }) => {
  return (
    <blockquote className='border-l-2 pl-4 py-2 my-4'>
      <p>{quote}</p>
      <footer className='text-right'>{footer}</footer>
    </blockquote>
  );
}

export default Blockquote;