export const ShimmerList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-2 overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] hide-scrollbar">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="border-1 h-[260px] min-w-[250px] cursor-pointer rounded-md border italic">
      <p className="h-3/5 w-full rounded-t-md bg-slate-200"></p>
      <h2 className="line-clamp-2 h-2 bg-slate-400 p-1 font-bold"></h2>
      <h3 className="my-2 h-2 bg-slate-400 px-1 text-sm font-semibold opacity-80"></h3>
      <div className="flex h-2 gap-2 bg-slate-400 p-1 text-xs opacity-75"></div>
    </div>
  );
};

export default Shimmer;
