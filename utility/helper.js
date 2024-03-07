/**
 * Divides file into parts
 * @param {File} file which need to be divided
 * @param {number} chunk_size size of each part
 * @returns {Array<Blob>} An array of binary large objects make up of file
 */
const fileIntoChunks = (file, chunk_size) => {
  const chunks = [];
  for (let start = 0; start < file.size; start = start + chunk_size) {
    const end = Math.min(start + chunk_size, file.size);
    chunks.push(file.slice(start, end));
  }
  return chunks;
};

export { fileIntoChunks };
