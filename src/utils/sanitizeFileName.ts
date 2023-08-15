export function sanitizeFileName(fileName: string) {
  return fileName.replace(/[^\w\d_]/g, '');
}
