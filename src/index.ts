import { Elysia, t } from "elysia";
import { insertHated, getHateds } from "./controllers/hate";
import { cors } from '@elysiajs/cors'

const app = new Elysia().get("/hateds", async ({set}) => {
const hateds = await getHateds()
  if(hateds) {
    set.status= 200
  }
  return hateds
}) .post('/hated', async ({body}) => {

  await insertHated(body)

  return JSON.stringify({message: 'success'})
}, {
  body: t.Object({
      name: t.String(),
      audio: t.Nullable(t.String()),
      image: t.String()
  })
})
.use(cors())
.listen(3000)


