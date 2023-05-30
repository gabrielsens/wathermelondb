import { tableSchema } from '@nozbe/watermelondb';

export const skillsSchema = tableSchema({
  name: 'skills',
  columns: [
    {
      name: 'name',
      type: 'string'
    }, {
      name: 'type',
      type: 'string'
    }
  ]
});
