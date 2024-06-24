This project is a React application that displays a data table with editable cells, filtering, sorting, and pagination functionality. The table is implemented using @tanstack/react-table and styled with @chakra-ui/react.
Table of Contents

    Features
    Technologies
    Setup
    Usage
    Components
    Folder Structure
    Contributing
    License

Features

    Editable Cells: Users can edit the content of specific cells.
    Column Filters: Users can filter data by different columns.
    Pagination: Users can navigate through different pages of data.
    Sorting: Users can sort data by clicking on column headers.
    Date and Price Custom Cells: Special cells for date and price formatting.

Technologies

    React: A JavaScript library for building user interfaces.
    @tanstack/react-table: A powerful headless table library for React.
    @chakra-ui/react: A simple, modular, and accessible component library for React.
    Vite: A fast build tool for modern web projects.

Setup

    Clone the repository:

    bash

git clone https://github.com/yourusername/react-table-filters-pagination.git
cd react-table-filters-pagination

Install dependencies:

bash

npm install

Start the development server:

bash

npm run dev

Open your browser and navigate to:

arduino

    http://localhost:5173

Usage

    Search by Name: Use the search bar at the top to filter rows by name.
    Column Filters: Click the filter icon to open the filter panel and apply different filters.
    Edit Cells: Click on the editable cells to update their content.
    Pagination: Use the buttons below the table to navigate through pages.
    Sorting: Click on the column headers to sort the data.

Components

    TaskTable: Main component that renders the table with data.
    Filters: Component for searching and filtering data by name.
    FilterByEverything: Component for applying various filters.
    EditableCell: Component for editable table cells.
    DateCell: Component for date-formatted cells.
    PriceCell: Component for price-formatted cells.



Contributing

Contributions are welcome! Please open an issue or submit a pull request with any changes.
