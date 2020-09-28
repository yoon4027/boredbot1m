export function removeDup(array: any) {
  return [...new Set(array)];
}
export default {
  removeDup,
};
