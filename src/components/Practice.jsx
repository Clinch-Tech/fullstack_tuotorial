const Practice = () => {
  return (
    <div>
      {/* Typography
       */}

      <div className="font-serif">Serif</div>
      <div className="font-sans">Sans</div>
      <div className="font-mono">Mono</div>

      {/* text-size */}
      <div className="text-xs">Text</div>
      <div className="text-sm">Text</div>
      <div className="text-md">Text</div>
      <div className="text-lg">Text</div>
      <div className="text-xl">Text</div>
      <div className="text-2xl">Text</div>
      <div className="text-9xl">Text</div>
      <div className="text-[49px]">Custom setting</div>

      {/* font-weight */}
      <div>
        <div className="font-bold">Bold</div>
        <div className="font-[800]">Bold</div>
      </div>

      {/* color */}
      <div>
        <div className="text-red-100">light Red</div>
        <div className="text-red-900">Dark Red</div>
        <div className="text-primary">Dark Red</div>
      </div>

      {/* decoration */}
      <div>
        <div className="underline">Underline</div>
        <div className="line-through">Bic bata kateko</div>
      </div>

      <div>
        <div className="uppercase">Uppercase</div>
        <div className="lowercase">Uppercase</div>
        <div className="capitalize">capitalize me</div>
      </div>

      <br />
      <br />

      <div className="flex  bg-red-100 h-[200px] justify-center ">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>

      <div className="flex items-end h-[200px] bg-blue-100  ">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>

      <div className="flex justify-center items-center h-[100vh] ">
        <div>My name is Rishi.</div>
      </div>

      <div className="flex  flex-wrap ">
        <div className="w-[400px] bg-red-100">Item 1</div>
        <div className="w-[400px] bg-yellow-200">Item 1</div>
        <div className="w-[400px] bg-blue-200">Item 1</div>
      </div>
      <div className="flex  flex-wrap ">
        <div className="basis-1/4 bg-red-100">Item 1</div>
        <div className="basis-1/2 bg-yellow-200">Item 1</div>
        <div className="basis-1/4 bg-blue-200">Item 1</div>
      </div>

      <br />
      <br />
      <br />
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        <div className="hover:text-red-400 bg-red-100">Item 1</div>
        <div className="col-span-2 bg-yellow-200">Item 1</div>
        <div className="bg-blue-200">Item 1</div>
      </div>
    </div>
  );
};

export default Practice;
