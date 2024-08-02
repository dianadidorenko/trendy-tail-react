// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { items } from "@/items";

// const categoryTranslation = {
//   одяг: "cloth",
//   ліжаки: "beds",
//   "сумки-переноски": "carrying-bags",
//   аксесуари: "accessories",
// };

// // Функция для капитализации первой буквы строки
// const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// const SearchInput = ({ closeSearch }) => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const searchContainerRef = useRef(null);
//   const router = useRouter();

//   const getCategoryMapping = () => {
//     const categories = new Set();
//     items.forEach((item) => categories.add(item.categoryShow.toLowerCase()));

//     const categoryMapping = {};
//     categories.forEach((category) => {
//       const categoryPath = categoryTranslation[category] || category;
//       categoryMapping[category] = `/category/${categoryPath}`;
//     });

//     return categoryMapping;
//   };

//   const categoryMapping = getCategoryMapping();

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setQuery(value);

//     if (value.length > 0) {
//       const filteredResults = items.filter(
//         (item) =>
//           item.name?.toLowerCase().includes(value) ||
//           item.categoryShow?.toLowerCase().includes(value) ||
//           item.type?.toLowerCase().includes(value)
//       );
//       setResults(filteredResults);
//     } else {
//       setResults([]);
//     }
//   };

//   const handleResultClick = (urlName) => {
//     router.push(`/products/${urlName}`);
//     closeSearch();
//   };

//   const handleIconClick = () => {
//     if (query.length > 0) {
//       const lowerCaseQuery = query.toLowerCase();
//       const translatedCategory = categoryTranslation[lowerCaseQuery];
//       if (translatedCategory) {
//         // Находим оригинальное значение категории из данных
//         const originalCategory = items.find(
//           (item) => item.categoryShow.toLowerCase() === lowerCaseQuery
//         )?.categoryShow;

//         if (originalCategory) {
//           router.push(
//             `/${translatedCategory}?category=${encodeURIComponent(
//               originalCategory
//             )}`
//           );
//           closeSearch();
//         } else {
//           console.warn("Категория не найдена");
//         }
//       } else {
//         console.warn("Перевод категории не найден");
//       }
//     } else {
//       console.warn("Пустой запрос");
//     }
//   };

//   // Обработчик кликов вне компонента
//   const handleClickOutside = (event) => {
//     if (
//       searchContainerRef.current &&
//       !searchContainerRef.current.contains(event.target)
//     ) {
//       closeSearch();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="search-container p-1 rounded-[10px]">
//       <input
//         type="text"
//         value={query}
//         onChange={handleSearch}
//         placeholder="Поиск товара..."
//         className="search-input max-w-[120px]"
//       />
//       <button onClick={handleIconClick} className="search-icon">
//         🔍
//       </button>
//       <ul className="search-results">
//         {results.map((item) => (
//           <li key={item.id} onClick={() => handleResultClick(item.urlName)}>
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchInput;

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { items } from "@/items";

const categoryTranslation = {
  одяг: "cloth",
  ліжаки: "beds",
  "сумки-переноски": "carrying-bags",
  аксесуари: "accessories",
};

// Функция для капитализации первой буквы строки
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const SearchInput = ({ closeSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchContainerRef = useRef(null);
  const router = useRouter();

  // Функция для получения категории и пути
  const getCategoryMapping = () => {
    const categories = new Set();
    items.forEach((item) => categories.add(item.categoryShow.toLowerCase()));

    const categoryMapping = {};
    categories.forEach((category) => {
      const categoryPath = categoryTranslation[category] || category;
      categoryMapping[category] = `/category/${categoryPath}`;
    });

    return categoryMapping;
  };

  const categoryMapping = getCategoryMapping();

  // Функция для обработки изменений в инпуте
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.length > 0) {
      const filteredResults = items.filter(
        (item) =>
          item.name?.toLowerCase().includes(value) ||
          item.categoryShow?.toLowerCase().includes(value) ||
          item.type?.toLowerCase().includes(value)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  // Функция для обработки клика на результат
  const handleResultClick = (urlName) => {
    router.push(`/products/${urlName}`);
    closeSearch();
  };

  // Функция для обработки клика на иконку поиска
  const handleIconClick = () => {
    if (query.length > 0) {
      const lowerCaseQuery = query.toLowerCase();
      const translatedCategory = categoryTranslation[lowerCaseQuery];
      if (translatedCategory) {
        const originalCategory = items.find(
          (item) => item.categoryShow.toLowerCase() === lowerCaseQuery
        )?.categoryShow;

        if (originalCategory) {
          router.push(
            `/${translatedCategory}?category=${encodeURIComponent(
              originalCategory
            )}`
          );
          closeSearch();
        } else {
          console.warn("Категория не найдена");
        }
      } else {
        console.warn("Перевод категории не найден");
      }
    } else {
      console.warn("Пустой запрос");
    }
  };

  // Обработчик кликов вне компонента
  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      closeSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="search-container p-1 rounded-[10px]"
      ref={searchContainerRef}
    >
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Поиск товара..."
        className="search-input max-w-[120px]"
      />
      <button onClick={handleIconClick} className="search-icon">
        🔍
      </button>
      <ul className="search-results">
        {results.map((item) => (
          <li key={item.id} onClick={() => handleResultClick(item.urlName)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
