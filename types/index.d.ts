/**
 * Upload file chunks in parllel
 * @param {File} file which need to be divided
 * @param {number} chunk_size size of each part
 * @param {number} maxConcurrentUploadRequest maximum number of part to upload in parllel at a time
 * @param {string} URL endpoint for upload
 * @returns {Promise<void>} Returns a promise
 */
export function uploadFile(file: File, chunk_size: number, maxConcurrentUploadRequest: number, URL: string): Promise<void>;
