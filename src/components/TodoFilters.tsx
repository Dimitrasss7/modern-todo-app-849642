import { FilterType } from '../types/todo';

interface TodoFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
}

function TodoFilters({
  currentFilter,
  onFilterChange,
  activeCount,
  completedCount,
}: TodoFiltersProps) {
  const filters: { value: FilterType; label: string; count?: number }[] = [
    { value: 'all', label: 'All', count: activeCount + completedCount },
    { value: 'active', label: 'Active', count: activeCount },
    { value: 'completed', label: 'Completed', count: completedCount },
  ];

  return (
    <div className="flex gap-2 justify-center mb-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentFilter === filter.value
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {filter.label}
          <span className="ml-2 text-sm opacity-75">({filter.count})</span>
        </button>
      ))}
    </div>
  );
}

export default TodoFilters;