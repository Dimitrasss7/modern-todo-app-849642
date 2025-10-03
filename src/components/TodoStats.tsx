interface TodoStatsProps {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

function TodoStats({
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoStatsProps) {
  return (
    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
      <div className="text-sm text-gray-600">
        <span className="font-semibold text-purple-600">{activeCount}</span>{' '}
        {activeCount === 1 ? 'task' : 'tasks'} remaining
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-red-500 hover:text-red-700 font-medium hover:underline transition-colors duration-200"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
}

export default TodoStats;