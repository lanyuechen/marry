import DB from '@/utils/db';
import { getTemplate } from '@/utils/utils';
import templates from './templates';

export async function list() {
  return {
    data: templates
  }
}

export async function clone(id) {
  const tpl = await getTemplate(id);
  const newId = DB.table('story').insert(tpl);
  return newId;
}