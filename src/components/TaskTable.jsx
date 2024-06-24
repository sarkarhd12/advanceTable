
// import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
// import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
// import React, { useState, useEffect } from "react";
// import sampleData from '../data/sample-data.json';
// import EditableCell from "./EditableCell";
// import DateCell from "./DateCell";
// import PriceCell from "./PriceCell";
// import Filters from "./Filter";
// import SortIcon from "./icons/SortIcon";
// import FilterByEverything from "./FilterByEverything";

// const columns = [
//   {
//     accessorKey: 'name',
//     header: 'Name',
//     size: 220,
//     cell: EditableCell,
//   },
//   {
//     accessorKey: 'category',
//     header: 'Category',
//     cell: EditableCell,
//   },
//   {
//     accessorKey: 'subcategory',
//     header: 'Subcategory',
//     cell: EditableCell,
//   },
//   {
//     accessorKey: 'price',
//     header: 'Price',
//     cell: PriceCell,
//   },
//   {
//     accessorKey: 'createdAt',
//     header: 'Created At',
//     cell: DateCell,
//   },
//   {
//     accessorKey: 'updatedAt',
//     header: 'Updated At',
//     cell: DateCell,
//   },
//   {
//     accessorKey: 'sale_price',
//     header: 'Sale price',
//     cell: PriceCell,
//   },
// ];

// const TaskTable = () => {
//   const [data, setData] = useState(sampleData);
//   const [columnFilters, setColumnFilters] = useState([]);
//   const [filteredData, setFilteredData] = useState(sampleData);

//   useEffect(() => {
//     setData(filteredData);
//   }, [filteredData]);

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       columnFilters,
//     },
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getCoreRowModel(),
//     columnResizeMode: "onChange",
//     meta: {
//       updateData: (rowIndex, columnId, value) =>
//         setData((prev) =>
//           prev.map((row, index) =>
//             index === rowIndex
//               ? {
//                   ...prev[rowIndex],
//                   [columnId]: value,
//                 }
//               : row
//           )
//         ),
//     },
//   });

//   return (
//     <Box>
//       <Filters 
//         columnFilters={columnFilters}
//         setColumnFilters={setColumnFilters}
//       />
//       <FilterByEverything data={sampleData} setFilteredData={setFilteredData} />

//       <Box className="table" w={table.getTotalSize()}>
//         {table.getHeaderGroups().map((headerGroup) => (
//           <Box className="tr" key={headerGroup.id}>
//             {headerGroup.headers.map((header) => (
//               <Box className="th" key={header.id} w={header.getSize()}>
//                 {header.column.columnDef.header}
//                 {header.column.getCanSort() && (
//                   <Icon 
//                     as={SortIcon}
//                     mx={3}
//                     fontSize={14}
//                     onClick={header.column.getToggleSortingHandler()}
//                   />
//                 )}
//                 <Box 
//                   onMouseDown={header.getResizeHandler()}
//                   onTouchStart={header.getResizeHandler()}
//                   className={`resizer ${header.column.getIsResizing() ? "isResizing" : ""}`}
//                 ></Box>
//               </Box>
//             ))}
//           </Box>
//         ))}
//         {table.getRowModel().rows.map(row => (
//           <Box className="tr" key={row.id}>
//             {row.getVisibleCells().map(cell => (
//               <Box className="td" w={cell.column.getSize()} key={cell.id}>
//                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
//               </Box>
//             ))}
//           </Box>
//         ))}
//       </Box>
//       <br />
//       <Text mb={2}>
//         Page {table.getState().pagination.pageIndex + 1} of{" "}
//         {table.getPageCount()}
//       </Text>
//       <ButtonGroup size="sm" isAttached variant="outline">
//         <Button
//           onClick={() => table.previousPage()}
//           isDisabled={!table.getCanPreviousPage()}
//         >
//           {"<"}
//         </Button>
//         <Button
//           onClick={() => table.nextPage()}
//           isDisabled={!table.getCanNextPage()}
//         >
//           {">"}
//         </Button>
//       </ButtonGroup>
//     </Box>
//   );
// };

// export default TaskTable;



// import React, { useState, useEffect } from "react";
// import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
// import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
// import sampleData from '../data/sample-data.json';
// import EditableCell from "./EditableCell";
// import DateCell from "./DateCell";
// import PriceCell from "./PriceCell";
// import Filter from "./Filter";
// import SortIcon from "./icons/SortIcon";
// import FilterByEverything from "./FilterByEverything";

// const columns = [
//   { accessorKey: 'name', header: 'Name', size: 220, cell: EditableCell },
//   { accessorKey: 'category', header: 'Category', cell: EditableCell },
//   { accessorKey: 'subcategory', header: 'Subcategory', cell: EditableCell },
//   { accessorKey: 'price', header: 'Price', cell: PriceCell },
//   { accessorKey: 'createdAt', header: 'Created At', cell: DateCell },
//   { accessorKey: 'updatedAt', header: 'Updated At', cell: DateCell },
//   { accessorKey: 'sale_price', header: 'Sale price', cell: PriceCell },
// ];

// const TaskTable = () => {
//   const [data, setData] = useState(sampleData);
//   const [columnFilters, setColumnFilters] = useState([]);
//   const [filteredData, setFilteredData] = useState(sampleData);

//   useEffect(() => {
//     setData(filteredData);
//   }, [filteredData]);

//   const table = useReactTable({
//     data,
//     columns,
//     state: { columnFilters },
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getCoreRowModel(),
//     columnResizeMode: "onChange",
//     meta: {
//       updateData: (rowIndex, columnId, value) =>
//         setData((prev) =>
//           prev.map((row, index) =>
//             index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row
//           )
//         ),
//     },
//   });

//   return (
//     <Box>
//       <Filter columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
//       <FilterByEverything data={sampleData} setFilteredData={setFilteredData} />
//       <Box className="table" w={table.getTotalSize()}>
//         {table.getHeaderGroups().map((headerGroup) => (
//           <Box className="tr" key={headerGroup.id}>
//             {headerGroup.headers.map((header) => (
//               <Box className="th" key={header.id} w={header.getSize()}>
//                 {header.column.columnDef.header}
//                 {header.column.getCanSort() && (
//                   <Icon as={SortIcon} mx={3} fontSize={14} onClick={header.column.getToggleSortingHandler()} />
//                 )}
//                 <Box
//                   onMouseDown={header.getResizeHandler()}
//                   onTouchStart={header.getResizeHandler()}
//                   className={`resizer ${header.column.getIsResizing() ? "isResizing" : ""}`}
//                 ></Box>
//               </Box>
//             ))}
//           </Box>
//         ))}
//         {table.getRowModel().rows.map((row) => (
//           <Box className="tr" key={row.id}>
//             {row.getVisibleCells().map((cell) => (
//               <Box className="td" w={cell.column.getSize()} key={cell.id}>
//                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
//               </Box>
//             ))}
//           </Box>
//         ))}
//       </Box>
//       <ButtonGroup>
//         <Button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
//           {'<<'}
//         </Button>
//         <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
//           {'<'}
//         </Button>
//         <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
//           {'>'}
//         </Button>
//         <Button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
//           {'>>'}
//         </Button>
//       </ButtonGroup>
//       <Text>
//         Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
//       </Text>
//     </Box>
//   );
// };

// export default TaskTable;


import React, { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import sampleData from "../data/sample-data.json";
import EditableCell from "./EditableCell";
import DateCell from "./DateCell";
import PriceCell from "./PriceCell";
import Filter from "./Filter";
import SortIcon from "./icons/SortIcon";
import FilterByEverything from "./FilterByEverything";

const columns = [
  { accessorKey: "name", header: "Name", size: 220, cell: EditableCell },
  { accessorKey: "category", header: "Category", cell: EditableCell },
  { accessorKey: "subcategory", header: "Subcategory", cell: EditableCell },
  { accessorKey: "price", header: "Price", cell: PriceCell },
  { accessorKey: "createdAt", header: "Created At", cell: DateCell },
  { accessorKey: "updatedAt", header: "Updated At", cell: DateCell },
  { accessorKey: "sale_price", header: "Sale price", cell: PriceCell },
];

const TaskTable = () => {
  const [data, setData] = useState(sampleData);
  const [columnFilters, setColumnFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(sampleData);

  useEffect(() => {
    setFilteredData(data);  // Set filteredData whenever data changes
  }, [data]);

  useEffect(() => {
    applyFilters();
  }, [columnFilters]);

  const applyFilters = () => {
    let filtered = sampleData;

    columnFilters.forEach(filter => {
      if (filter.id === "name" && filter.value) {
        filtered = filtered.filter(item =>
          item.name.toLowerCase().includes(filter.value.toLowerCase())
        );
      }
    });

    setFilteredData(filtered);
  };

  const table = useReactTable({
    data: filteredData,
    columns,
    state: { columnFilters },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row
          )
        ),
    },
  });

  return (
    <Box>
      <Filter columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
      <FilterByEverything data={sampleData} setFilteredData={setFilteredData} />
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" key={header.id} w={header.getSize()}>
                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <Icon
                    as={SortIcon}
                    mx={3}
                    fontSize={14}
                    onClick={header.column.getToggleSortingHandler()}
                  />
                )}
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${header.column.getIsResizing() ? "isResizing" : ""}`}
                ></Box>
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="td" w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <ButtonGroup>
        <Button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
          {"<<"}
        </Button>
        <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          {"<"}
        </Button>
        <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {">"}
        </Button>
        <Button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
          {">>"}
        </Button>
      </ButtonGroup>
      <Text>
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </Text>
    </Box>
  );
};

export default TaskTable;
