import DB from '@/utils/db';

export async function getTemplate(id) {
  const res = DB.table('template').findOne({_id: id});
  return res;
}
