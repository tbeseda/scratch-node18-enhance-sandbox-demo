import arc from '@architect/functions'

const BAR = 'bar'
const { things } = await arc.tables()

/** @type {import('@enhance/types').EnhanceApiFn} */
export async function get(req) {
  const count = await things.get({ key: BAR })

  await arc.events.publish({
    name: 'happening',
    payload: { foo: BAR },
  })

  return {
    json: { count }
  }
}
