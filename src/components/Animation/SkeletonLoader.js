export default function SkeletonTable() {
  return (
    <td className="px-6 py-4 text-sm font-medium text-gray-200">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-400 rounded col-span-5"></div>
            </div>
          </div>
        </div>
      </div>
    </td>
  );
}
