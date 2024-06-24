


// import React, { useState } from 'react';
// import { Box, Flex, Checkbox, Input, Select, Button, Text } from '@chakra-ui/react';

// const FilterByEverything = ({ data, setFilteredData }) => {
//   const [categoryFilter, setCategoryFilter] = useState([]);
//   const [subcategoryFilter, setSubcategoryFilter] = useState([]);
//   const [priceFilter, setPriceFilter] = useState({ min: '', max: '' });
//   const [salePriceFilter, setSalePriceFilter] = useState({ min: '', max: '' });
//   const [dateFilter, setDateFilter] = useState({ from: '', to: '' });

//   const categories = [...new Set(data.map(item => item.category))];
//   const subcategories = [...new Set(data.map(item => item.subcategory))];

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setCategoryFilter(category);
//   };

//   const handleSubcategoryChange = (e) => {
//     const subcategory = e.target.value;
//     setSubcategoryFilter(subcategory);
//   };

//   const handlePriceChange = (e) => {
//     const price = e.target.value;
//     setPriceFilter({ ...priceFilter, [e.target.name]: price });
//   };

//   const handleSalePriceChange = (e) => {
//     const salePrice = e.target.value;
//     setSalePriceFilter({ ...salePriceFilter, [e.target.name]: salePrice });
//   };

//   const handleDateChange = (e) => {
//     const date = e.target.value;
//     setDateFilter({ ...dateFilter, [e.target.name]: date });
//   };

//   const applyFilters = () => {
//     let filteredData = data;

//     if (categoryFilter.length > 0) {
//       filteredData = filteredData.filter(item => categoryFilter.includes(item.category));
//     }

//     if (subcategoryFilter.length > 0) {
//       filteredData = filteredData.filter(item => subcategoryFilter.includes(item.subcategory));
//     }

//     if (priceFilter.min || priceFilter.max) {
//       filteredData = filteredData.filter(item => {
//         const price = parseFloat(item.price);
//         return (priceFilter.min ? price >= parseFloat(priceFilter.min) : true) &&
//           (priceFilter.max ? price <= parseFloat(priceFilter.max) : true);
//       });
//     }

//     if (salePriceFilter.min || salePriceFilter.max) {
//       filteredData = filteredData.filter(item => {
//         const salePrice = parseFloat(item.sale_price);
//         return (salePriceFilter.min ? salePrice >= parseFloat(salePriceFilter.min) : true) &&
//           (salePriceFilter.max ? salePrice <= parseFloat(salePriceFilter.max) : true);
//       });
//     }

//     if (dateFilter.from || dateFilter.to) {
//       filteredData = filteredData.filter(item => {
//         const date = new Date(item.createdAt);
//         return (dateFilter.from ? date >= new Date(dateFilter.from) : true) &&
//           (dateFilter.to ? date <= new Date(dateFilter.to) : true);
//       });
//     }

//     setFilteredData(filteredData);
//   };

//   return (
//     <Box>
//       <Flex flexDirection="column" alignItems="center">
//         <Box mb={4}>
//           <Select placeholder="Select category" onChange={handleCategoryChange}>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>{category}</option>
//             ))}
//           </Select>
//         </Box>
//         <Box mb={4}>
//           <Select placeholder="Select subcategory" onChange={handleSubcategoryChange}>
//             {subcategories.map((subcategory, index) => (
//               <option key={index} value={subcategory}>{subcategory}</option>
//             ))}
//           </Select>
//         </Box>
//         <Box mb={4}>
//           <Input
//             type="number"
//             placeholder="Min price"
//             name="min"
//             value={priceFilter.min}
//             onChange={handlePriceChange}
//           />
//           <Input
//             type="number"
//             placeholder="Max price"
//             name="max"
//             value={priceFilter.max}
//             onChange={handlePriceChange}
//           />
//         </Box>
//         <Box mb={4}>
//           <Input
//             type="number"
//             placeholder="Min sale price"
//             name="min"
//             value={salePriceFilter.min}
//             onChange={handleSalePriceChange}
//           />
//           <Input
//             type="number"
//             placeholder="Max sale price"
//             name="max"
//             value={salePriceFilter.max}
//             onChange={handleSalePriceChange}
//           />
//         </Box>
//         <Box mb={4}>
//           <Input
//             type="date"
//             placeholder="From date"
//             name="from"
//             value={dateFilter.from}
//             onChange={handleDateChange}
//          />
//           <Input
//             type="date"
//             placeholder="To date"
//             name="to"
//             value={dateFilter.to}
//             onChange={handleDateChange}
//           />
//         </Box>
//         <Button onClick={applyFilters}>Apply Filters</Button>
//       </Flex>
//     </Box>
//   );
// };

// export default FilterByEverything;



import React, { useState } from 'react';
import { Box, Flex, Input, Select, Button, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverFooter } from '@chakra-ui/react';
import FilterIcon from './icons/FilterIcon';  // Corrected import statement

const FilterByEverything = ({ data, setFilteredData }) => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [subcategoryFilter, setSubcategoryFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState({ min: '', max: '' });
  const [salePriceFilter, setSalePriceFilter] = useState({ min: '', max: '' });
  const [dateFilter, setDateFilter] = useState({ from: '', to: '' });

  const categories = [...new Set(data.map(item => item.category))];
  const subcategories = [...new Set(data.map(item => item.subcategory))];

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategoryFilter(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceFilter({ ...priceFilter, [e.target.name]: e.target.value });
  };

  const handleSalePriceChange = (e) => {
    setSalePriceFilter({ ...salePriceFilter, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setDateFilter({ ...dateFilter, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    let filteredData = data;

    if (categoryFilter.length > 0) {
      filteredData = filteredData.filter(item => categoryFilter.includes(item.category));
    }

    if (subcategoryFilter.length > 0) {
      filteredData = filteredData.filter(item => subcategoryFilter.includes(item.subcategory));
    }

    if (priceFilter.min || priceFilter.max) {
      filteredData = filteredData.filter(item => {
        const price = parseFloat(item.price);
        return (!priceFilter.min || price >= parseFloat(priceFilter.min)) &&
               (!priceFilter.max || price <= parseFloat(priceFilter.max));
      });
    }

    if (salePriceFilter.min || salePriceFilter.max) {
      filteredData = filteredData.filter(item => {
        const salePrice = parseFloat(item.sale_price);
        return (!salePriceFilter.min || salePrice >= parseFloat(salePriceFilter.min)) &&
               (!salePriceFilter.max || salePrice <= parseFloat(salePriceFilter.max));
      });
    }

    if (dateFilter.from || dateFilter.to) {
      filteredData = filteredData.filter(item => {
        const date = new Date(item.createdAt);
        return (!dateFilter.from || date >= new Date(dateFilter.from)) &&
               (!dateFilter.to || date <= new Date(dateFilter.to));
      });
    }

    setFilteredData(filteredData);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton icon={<FilterIcon />} aria-label="Filter" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader>Filter Options</PopoverHeader>
        <PopoverBody>
          <Flex flexDirection="column" alignItems="center">
            <Box mb={4}>
              <Select placeholder="Select category" onChange={handleCategoryChange}>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </Select>
            </Box>
            <Box mb={4}>
              <Select placeholder="Select subcategory" onChange={handleSubcategoryChange}>
                {subcategories.map((subcategory, index) => (
                  <option key={index} value={subcategory}>{subcategory}</option>
                ))}
              </Select>
            </Box>
            <Box mb={4}>
              <Input type="number" placeholder="Min price" name="min" value={priceFilter.min} onChange={handlePriceChange} />
              <Input type="number" placeholder="Max price" name="max" value={priceFilter.max} onChange={handlePriceChange} />
            </Box>
            <Box mb={4}>
              <Input type="number" placeholder="Min sale price" name="min" value={salePriceFilter.min} onChange={handleSalePriceChange} />
              <Input type="number" placeholder="Max sale price" name="max" value={salePriceFilter.max} onChange={handleSalePriceChange} />
            </Box>
            <Box mb={4}>
              <Input type="date" placeholder="From date" name="from" value={dateFilter.from} onChange={handleDateChange} />
              <Input type="date" placeholder="To date" name="to" value={dateFilter.to} onChange={handleDateChange} />
            </Box>
          </Flex>
        </PopoverBody>
        <PopoverFooter>
          <Button onClick={applyFilters}>Apply Filters</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default FilterByEverything;
