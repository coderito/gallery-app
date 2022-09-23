import React from "react";

export default function SearchImage({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mt-3 align-center justify-center">
      <div class=" relative ">
        <input
          type="text"
          id="rounded-email"
          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Image"
        />
      </div>

      <button
        type="submit"
        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Search
      </button>
    </form>
  );
}
