import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export const Home = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Функция для закрытия меню сортировки
  const closeSortMenu = (event) => {
    if (!event.target.closest('.sort-menu')) {
      setIsSortOpen(false);
    }
  };

  // Подключение и отключение обработчика события
  useEffect(() => {
    document.addEventListener('click', closeSortMenu);
    return () => {
      document.removeEventListener('click', closeSortMenu);
    };
  }, []);

  return (
    <div className='mb-10'>
      <div className="flex justify-between items-center py-2">
        <div className="flex justify-center bg-cover  space-x-4">
          <div> <a href="#">Electronics</a></div>
          <div ><a href="#">Books</a></div>
          <div ><a href="#">Accessories</a></div>
          <div ><a href="#">Notes</a></div>
			 <div ><a href="#">Other</a></div>
			 
        </div>
        <button
          className="flex items-center space-x-1 sort-menu"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          <span>Sort by</span>
          <ChevronDownIcon className="w-5 h-5" />
        </button>

        {isSortOpen && (
          <div className="absolute mt-12 right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 sort-menu">
            <div className="py-1 bg-cyan-500">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Price</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ABC</a>
            </div>
          </div>
        )}
      </div>
		<div>
		<div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-5">
        <div className="bg-black h-48 w-full"></div> {/* Черный фон вместо изображения */}
        <div className="p-6">
          <div className="font-bold text-xl mb-2">Название продукта</div>
          <p className="text-gray-700 text-base">
            Цена: 999 ₽
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Добавить
          </button>
        </div>
      </div>
    </div>
	 <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-5">
        <div className="bg-black h-48 w-full"></div> {/* Черный фон вместо изображения */}
        <div className="p-6">
          <div className="font-bold text-xl mb-2">Название продукта</div>
          <p className="text-gray-700 text-base">
            Цена: 999 ₽
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Добавить
          </button>
        </div>
      </div>
    </div>
	 <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-5">
        <div className="bg-black h-48 w-full"></div> {/* Черный фон вместо изображения */}
        <div className="p-6">
          <div className="font-bold text-xl mb-2">Название продукта</div>
          <p className="text-gray-700 text-base">
            Цена: 999 ₽
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Добавить
          </button>
        </div>
      </div>
    </div>
	 <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-5">
        <div className="bg-black h-48 w-full"></div> {/* Черный фон вместо изображения */}
        <div className="p-6">
          <div className="font-bold text-xl mb-2">Название продукта</div>
          <p className="text-gray-700 text-base">
            Цена: 999 ₽
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Добавить
          </button>
        </div>
      </div>
    </div>
		</div>
    </div>
  );
}
