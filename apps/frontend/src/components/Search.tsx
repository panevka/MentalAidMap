import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="w-full flex justify-around py-4 items-center h-16 border-b border-b-slate-400">
      <input
        type="text"
        placeholder="Szukaj"
        className="h-full w-9/12 rounded-xl border border-solid border-gray-400 p-2"
      />
      <MagnifyingGlassIcon className="h-full text-slate-500 border border-gray-400 bg-white p-1 rounded-full" />
    </div>
  );
};

export default Search;
