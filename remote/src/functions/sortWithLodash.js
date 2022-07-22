import sortBy from "lodash.sortby";

const sortByNameCaseInsensitive = (arr) => sortBy(arr, "name");

export default sortByNameCaseInsensitive;
