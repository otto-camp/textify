export function fileExtension(path: string) {
  return path.slice(((path.lastIndexOf('.') - 1) >>> 0) + 2);
}
