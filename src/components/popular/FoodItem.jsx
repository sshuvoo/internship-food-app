export default function FoodItem({ item = {} }) {
  const { ImageUrl, Name } = item;
  return (
    <div className="w-56">
      <div className="h-80 w-full overflow-hidden rounded-xl shadow-[rgba(0,0,0,0.25)_0px_14px_28px,rgba(0,0,0,0.22)_0px_10px_10px]">
        <img className="h-full w-full object-cover" src={ImageUrl} />
      </div>
      <p className="py-2 text-center text-lg font-medium text-[#465567]">
        {Name}
      </p>
    </div>
  );
}
