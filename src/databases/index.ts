import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schemas } from "./schemas";
import { SkillModel } from "./model/skillModel";

import { setGenerator } from '@nozbe/watermelondb/utils/common/randomId';
import { v4 as uuidv4 } from 'uuid';

setGenerator(uuidv4);

const adapter = new SQLiteAdapter({
  schema: schemas
})

export const database = new Database({
  adapter,
  modelClasses: [SkillModel]
})
