import Loki from 'lokijs';
import { uuid } from '@/utils/utils';

const DB_NAME = 'marry.db';
const DB_INSTANCE = Symbol.for('db-instance-key');

class LocalStorageAdapter {
  loadDatabase(dbname, callback) {
    try {
      const serializedDb = localStorage.getItem(dbname);
      callback(serializedDb);
    } catch (err) {
      callback(err);
    }
  }

  saveDatabase(dbname, dbstring, callback) {
    try {
      localStorage.setItem(dbname, dbstring);
      callback(null);
    } catch (err) {
      callback(err);
    }
  }
}

const adapter = new LocalStorageAdapter();

class DB {
  static getInstance() {
    if (!window[DB_INSTANCE]) {
      window[DB_INSTANCE] = new DB();
    }
    return window[DB_INSTANCE];
  }

  constructor() {
    this.db = new Loki(DB_NAME, {
      env: 'BROWSER',
      autosave: true,
      autoload: true,
      adapter: adapter,
    });
  }

  table(name) {
    this.collection = this.db.getCollection(name) || this.db.addCollection(name);
    return this;
  }

  find(spec = {}) {
    return this.collection.find(spec);
  }

  findOne(spec = {}) {
    return this.collection.findOne(spec);
  }

  insert(data) {
    const _id = uuid();
    this.collection.insert({...data, _id});
    return _id;
  }

  update(spec = {}, data) {
    this.collection.findAndUpdate(spec, (d) => {
      data = typeof data === 'function' ? data(d) : data;
      Object.assign(d, data);
    });
  }

  delete(spec = {}) {
    this.collection.findAndRemove(spec);
  }
}

export default DB.getInstance();