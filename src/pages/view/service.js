import DB from '@/utils/db';

export async function getTemplate(id) {
  const res = DB.table('story').findOne({_id: id});
  return res;
}
