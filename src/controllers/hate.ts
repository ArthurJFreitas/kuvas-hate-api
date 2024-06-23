import { db } from "../database/db";
import * as schema from "../database/schema";


export async function insertHated({name, audio, image}: {name: string, audio: string | null, image: string}) {
    const insert =  await db.insert(schema.hateds).values({name, audio, image})
    return insert
}

export async function getHateds() {
  const hateds = await db.select().from(schema.hateds)
  return hateds
}