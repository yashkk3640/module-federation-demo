import sortBy from "lodash.sortby";

const sortByNameCaseInsensitive = (arr) => sortBy(arr, "age");

export default sortByNameCaseInsensitive;
