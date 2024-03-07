/**
 * Upload file chunks in parllel
 * @param {File} file which need to be divided
 * @param {number} chunk_size size of each part
 * @param {number} maxConcurrentUploadRequest maximum number of part to upload in parllel at a time
 * @param {string} URL endpoint for upload
 * @returns {Promise<void>} Returns a promise
 */
const uploadFile = async (
  file,
  chunk_size,
  maxConcurrentUploadRequest,
  URL
) => {
  const chunks = fileIntoChunks(file, chunk_size);
  let que = [];

  for (
    let i = 0;
    i < Math.min(chunks.length, maxConcurrentUploadRequest);
    i++
  ) {
    const chunk = chunks[i];
    que.push(chunk);
  }
};

export { uploadFile };
