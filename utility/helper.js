/**
 * Divides file into parts
 * @param {File} file which need to be divided
 * @param {number} chunk_size size of each part
 * @returns {Array<Blob>} An array of binary large objects make up of file
 */
const fileIntoChunks = (file, chunk_size) => {
  const chunks = [];
  let position = 0;
  for (let start = 0; start < file.size; start = start + chunk_size) {
    const end = Math.min(start + chunk_size, file.size);
    chunks.push({
      part: file.slice(start, end),
      start: start,
      end: end,
      position: position,
    });
    position++;
  }
  return chunks;
};

/**
 * Upload chunk
 * @param {File} file which need to be divided
 * @param {Blob} chunk file part
 * @param {String} URL endpoint for upload
 * @returns {void} void function
 */
const uploadChunk = async (file, chunk, URL) => {
  const formData = new FormData();
  formData.append("chunk", chunk.part);
  formData.append("fileName", file.name);
  formData.append("fileSize", file.size);
  formData.append("start", chunk.start);
  formData.append("end", chunk.end);
  formData.append("position", chunk.position);

  try {
    const response = await fetch(URL, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Upload failed with status ${response.status}`);
    }
  } catch (err) {
    throw new Error(err);
  }
};

export { fileIntoChunks, uploadChunk };
