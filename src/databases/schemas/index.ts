import { appSchema } from "@nozbe/watermelondb";
import { skillsSchema } from "./skillsSchema";

export const schemas = appSchema({
  version: 1,
  tables: [skillsSchema]
});
