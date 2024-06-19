function FilterProducts() {
  return (
    <div className="flex h-full justify-between pt-12 items-center flex-wrap xs:flex-nowrap gap-7">
      {/* left side */}
      <div className="gap-7 h-full flex flex-wrap">
        <select className="bg-gray-300 font-medium px-4 text-sm py-1 rounded-xl">
          <option>Type</option>
          <option value="physical">physical</option>
          <option value="Digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="bg-transparent px-4 py-1 w-[100px] text-sm font-medium outline-none ring-2 ring-gray-400 rounded-2xl"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="bg-transparent px-4 py-1 w-[100px] text-sm font-medium outline-none ring-2 ring-gray-400 rounded-2xl"
        />

        <select className="bg-gray-300 font-medium px-4 text-sm py-1 rounded-xl">
          <option>Category</option>
          <option value="">category</option>
        </select>
        <select className="bg-gray-300 font-medium px-4 text-sm py-1 rounded-xl">
          <option>All Filters</option>
        </select>
      </div>
      {/* right side */}
      <div>
        <select className="py-2 px-5 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default FilterProducts;
