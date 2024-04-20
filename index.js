import { uploadChunk } from "./utility/helper";

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
  const chunks = fileIntoChunks(file, (chunk_size = 256 * 1024));
  let que = [];

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    que.push(uploadChunk(file, chunk, URL));
    if (que.length === maxConcurrentUploadRequest) {
      await Promise.all(que);
      que = [];
    }
  }
};

export { uploadFile };
