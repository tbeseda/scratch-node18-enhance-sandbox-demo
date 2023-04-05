import arc from '@architect/functions'

const { things } = await arc.tables()

export const handler = arc.events.subscribe(async (event) => {
  return things.update({
    Key: { key: event.foo },
    ExpressionAttributeValues: { ':inc': 1 },
    UpdateExpression: 'ADD val :inc'
  })
})
