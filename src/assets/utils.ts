/**
 * 是否为生产环境
 */
export const isProd = process.env.NODE_ENV === "production";

/**
 * 获取资源 URL
 * @param url
 */
export function getAssetsUrl(url: string) {
  return process.env.PUBLIC_URL + url;
}
