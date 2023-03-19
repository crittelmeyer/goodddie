export const get = (obj: any, path: string, defValue: any) => {
  if (!path) return undefined
  const pathArray: string[] = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
  const result = pathArray?.reduce((prevObj: any, key) => prevObj && prevObj[key], obj)

  return result === undefined ? defValue : result
}
