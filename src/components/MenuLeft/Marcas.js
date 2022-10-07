import React from "react";

const Marcas = () => {
  return (
    <div className="Container mt-6">
      <div>
        <p className="text-lg font-bold">Marcas</p>
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Marca 1
        </label>
      </div>
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="default-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Marca 2
      </label>
    </div>
  );
};

export default Marcas;
