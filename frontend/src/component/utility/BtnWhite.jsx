import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BtnWhite({ text, type, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type === undefined ? 'button' : type}
      onClick={handleClick}
      className="inline-block px-4 py-2 border border-zinc-500 hover:bg-white hover:text-zinc-700 rounded-md w-fit"
    >
      {text}
    </button>
  );
}
