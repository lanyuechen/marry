import DB from '@/utils/db';

export async function list(spec) {
  return DB.table('story').find(spec);
}
