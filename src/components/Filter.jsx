// import {
//     HStack,
//     Icon,
//     Input,
//     InputGroup,
//     InputLeftElement,
//   } from "@chakra-ui/react";
//   import SearchIcon from "./icons/SearchIcon";
 
//   const Filters = ({ columnFilters, setColumnFilters }) => {
//     const taskName = columnFilters.find((f) => f.id === "name")?.value || "";
  
//     const onFilterChange = (id, value) =>
//       setColumnFilters((prev) =>
//         prev
//           .filter((f) => f.id !== id)
//           .concat({
//             id,
//             value,
//           })
//       );
  
//     return (
//       <HStack mb={6} spacing={3}>
//         <InputGroup size="sm" maxW="12rem">
//           <InputLeftElement pointerEvents="none">
//             <Icon as={SearchIcon} />
//           </InputLeftElement>
//           <Input
//             type="text"
//             variant="filled"
//             placeholder="search by name"
//             borderRadius={5}
//             value={taskName}
//             onChange={(e) => onFilterChange("name", e.target.value)}
//           />
//         </InputGroup>
//       </HStack>
//     );
//   };
//   export default Filters;

import {
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import SearchIcon from "./icons/SearchIcon";
  
  const Filters = ({ columnFilters, setColumnFilters }) => {
    const taskName = columnFilters.find((f) => f.id === "name")?.value || "";
  
    const onFilterChange = (id, value) =>
      setColumnFilters((prev) =>
        prev
          .filter((f) => f.id !== id)
          .concat({
            id,
            value,
          })
      );
  
    return (
      <HStack mb={6} spacing={3}>
        <InputGroup size="sm" maxW="12rem">
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} />
          </InputLeftElement>
          <Input
            type="text"
            variant="filled"
            placeholder="search by name"
            borderRadius={5}
            value={taskName}
            onChange={(e) => onFilterChange("name", e.target.value)}
          />
        </InputGroup>
      </HStack>
    );
  };
  
  export default Filters;
  