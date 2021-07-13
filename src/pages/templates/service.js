import DB from '@/utils/db';
import { getTemplate } from '@/utils/utils';

export async function list(spec) {
  return {
    data: [{
      id: 'demo',
      title: '模板1',
      desc: '模板1',
      cover: './images/animals/1.jpg',
    }, {
      id: 'test',
      title: '模板2',
      desc: '模板1',
      cover: './images/animals/1.jpg',
    }, {
      id: 'demo2',
      title: '模板3',
      desc: '模板1',
      cover: './images/animals/1.jpg',
    }]
  }
}

export async function clone(id) {
  const tpl = await getTemplate(id);
  const newId = DB.table('template').insert(tpl);
  return newId;
}