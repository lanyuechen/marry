import DB from '@/utils/db';

const COLLECTION = 'story';

export async function list(spec) {
  const data = DB.table(COLLECTION).find(spec);
  return {
    success: true,
    data
  }
}

export async function detail(id) {
  const data = DB.table(COLLECTION).findOne({_id: id});
  return {
    success: true,
    data,
  };
}

export async function insert(data) {
  const newId = DB.table(COLLECTION).insert(data);
  return {
    success: true,
    data: {
      _id: newId
    }
  };
}

export async function update(id, data) {
  DB.table(COLLECTION).update({_id: id}, data);
  return {
    success: true,
  };
}

export async function remove(id) {
  DB.table(COLLECTION).delete({_id: id});
  return {
    success: true,
  };
}