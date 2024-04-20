/**
 * Divides file into parts
 * @param {File} file which need to be divided
 * @param {number} chunk_size size of each part
 * @returns {Array<Blob>} An array of binary large objects make up of file
 */
export function fileIntoChunks(file: File, chunk_size: number): Array<Blob>;
/**
 * Upload chunk
 * @param {File} file which need to be divided
 * @param {Blob} chunk file part
 * @param {String} URL endpoint for upload
 * @returns {void} void function
 */
export function uploadChunk(file: File, chunk: Blob, URL: string): void;
