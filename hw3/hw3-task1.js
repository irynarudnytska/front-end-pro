const dataTypes = [
  null,
  undefined,
  true,
  "this is string",
  10,
  Symbol("symbol description"),
  10n,
  {},
];
dataTypes.forEach((dataType) => console.log(typeof dataType));
