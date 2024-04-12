/*
 * @Author: kl
 * @email: qkeliang@163.com
 * @Date: 2024-04-12 15:23:45
 * @Description: 持久化方法
 * @LastEditors: kl
 */
enum StorageType {
  local = "localStorage",
  session = "sessionStorage",
}

interface IStore {
  [key: string]: {
    name: string;
    /** 批量删除时是否删除*/
    clear: boolean;
  };
}

export const storeMap: IStore = {
  TOKEN: { name: "TOKEN", clear: true },
  USERINFO: { name: "USERINFO", clear: true },
  LOGGED: { name: "LOGGED", clear: true },
};

class storage {
  store: Storage;

  constructor(type: StorageType) {
    this.store =
      type === StorageType.local ? window.localStorage : window.sessionStorage;
  }

  get(key: string) {
    const localItem: any = this.store.getItem(key);
    let result: any;
    try {
      result = JSON.parse(localItem);
    } catch (e) {
      result = localItem;
    }
    return result;
  }

  set(key: any, item?: any) {
    if (item === undefined || item === null) {
      return this.store.removeItem(key);
    }
    return this.store.setItem(key, JSON.stringify(item));
  }

  /**
   * 删除除配置的key外的所有存储
   *
   * @memberof storage
   */
  clear() {
    for (const [key, val] of Object.entries(storeMap)) {
      if (val?.clear) this.set(key);
    }
  }
}

export const local = new storage(StorageType.local);
export const session = new storage(StorageType.session);
