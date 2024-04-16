export function filterHrsByInterval(data: string[], interval: number) {
  let filteredData: string[] = [];

  for (let i = 0; i < data.length; i += interval) {
    filteredData.push(data[i]);
  }

  return filteredData;
}
