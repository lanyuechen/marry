import DB from '@/utils/db';

export async function list(spec) {
  const data = DB.table('story').find(spec);
  return {
    success: true,
    data
  }
}
