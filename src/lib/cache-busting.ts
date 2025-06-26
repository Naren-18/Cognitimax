/**
 * Cache busting utility functions
 * 
 * Use these functions to ensure assets are not loaded from the browser's cache
 * when they should be refreshed.
 */

/**
 * Appends a timestamp query parameter to a URL to prevent caching
 * 
 * @param url The URL to append the timestamp to
 * @returns The URL with a timestamp query parameter
 */
export const appendCacheBuster = (url: string): string => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${window.BUILD_TIMESTAMP || new Date().getTime()}`;
};

/**
 * Gets the current build timestamp
 * 
 * @returns The build timestamp
 */
export const getBuildTimestamp = (): string => {
  return window.BUILD_TIMESTAMP || String(new Date().getTime());
};

/**
 * Extend the Window interface to include our BUILD_TIMESTAMP property
 */
declare global {
  interface Window {
    BUILD_TIMESTAMP: string;
  }
}
