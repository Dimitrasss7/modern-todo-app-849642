import { useState, FormEvent } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

function TodoInput({ onAdd }: TodoInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      onAdd(trimmedInput);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-200"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 active:scale-95 transition-all duration-200 shadow-lg"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;