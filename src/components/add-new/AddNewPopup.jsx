import { useForm } from "react-hook-form";
import { useId } from "react";
import { useDispatch } from "react-redux";
import api from "../../app/features/api";
import toast from "react-hot-toast";

export default function AddNewItem({ setOpen }) {
  const dispatch = useDispatch();
  const Id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      IsPopular: true,
      IsRecommended: true,
    },
  });

  const onSubmit = (data) => {
    dispatch(
      api.util.updateQueryData("getFoodItems", undefined, (draft) => {
        draft.Items.push({ Id, ...data });
      }),
    );
    setOpen((pre) => !pre);
    toast.success("Item Successfully Added!");
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-slate-400/60 backdrop-blur-md">
      <div className="relative mx-auto max-w-2xl rounded-lg bg-[#EEEFF0] p-10 shadow-md">
        <h1 className="mb-10 text-center text-3xl font-semibold">
          Add New Item
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium">Name</label>
            <input
              {...register("Name", { required: "Name property is required*" })}
              className="rounded-xl px-4 py-3 focus:outline-none"
              placeholder="i.e Icecream"
              type="text"
            />
            <p className="text-sm font-medium text-rose-500">
              {errors?.Name?.message && errors?.Name?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium">Price</label>
            <input
              {...register("Price", {
                required: "Price property is required*",
                pattern: {
                  value: /^(?!0\d)(\d+(\.\d+)?)?$/,
                  message: "Please enter a valid price*",
                },
              })}
              className="rounded-xl px-4 py-3 focus:outline-none"
              placeholder="i.e 11.25"
              type="text"
            />
            <p className="text-sm font-medium text-rose-500">
              {errors?.Price?.message && errors?.Price?.message}
            </p>
          </div>
          <div className="col-span-full flex flex-col">
            <label className="mb-2 text-lg font-medium">Image URL</label>
            <input
              {...register("ImageUrl", {
                required: "Image URL property is required*",
                pattern: {
                  value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                  message: "Invalid Image Url*",
                },
              })}
              className="rounded-xl px-4 py-3 focus:outline-none"
              placeholder="i.e http://app.com/icecream.jpg"
              type="text"
            />
            <p className="text-sm font-medium text-rose-500">
              {errors?.ImageUrl?.message && errors?.ImageUrl?.message}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              {...register("IsPopular")}
              type="checkbox"
              id="popular-input"
              className="h-4 w-4 rounded-lg border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="popular-input" className="text-lg font-medium select-none">
              Popular
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              {...register("IsRecommended")}
              type="checkbox"
              id="recomended-input"
              className="h-4 w-4 rounded-lg border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="recomended-input"
              className="text-lg font-medium select-none"
            >
              Recomended
            </label>
          </div>
          <div className="col-span-full">
            <button
              className="mt-2 w-full rounded-xl bg-green-400 px-4 py-2 text-lg font-medium focus:outline-none"
              type="submit"
            >
              Save Item
            </button>
          </div>
        </form>
        <button
          onClick={() => setOpen((pre) => !pre)}
          className="absolute right-4 top-4"
        >
          <svg
            className="w-4 fill-gray-400 hover:fill-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
