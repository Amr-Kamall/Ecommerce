function SkeltonText() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5  border-gray-200 pb-5">
        <div className="text-2xl bg-slate-200 rounded-md animate-pulse w-[120px] h-[20px] font-semibold"></div>
        <p className="text-gray-500 my-1 bg-slate-200 animate-pulse rounded-md h-[120px] leading-5 "></p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xl font-bold bg-slate-200 animate-pulse rounded-md w-[130px] h-[20px] "></div>
      </div>
      <div>
        <h3 className="my-7 font-semibold bg-slate-200 animate-pulse h-[100px] rounded-md"></h3>
        <p className="text-gray-500 leading-5 mt-10  bg-slate-200 animate-pulse h-[100px] rounded-md"></p>
      </div>
    </div>
  );
}

export default SkeltonText;
