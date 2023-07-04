export function InputField() {
  return (
    <div className="mt-5 flex gap-4">
      <input
        type="text"
        placeholder="add details"
        className="flex-1 rounded-xl border-2 border-zinc-300 bg-transparent p-4 text-xs font-medium focus:outline-none dark:border-zinc-600"
      />
      <button className="rounded-xl bg-blue-500 px-9 text-sm text-white transition-colors hover:bg-blue-600">
        Add
      </button>
    </div>
  )
}
