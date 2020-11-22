const { MongoClient } = require('mongodb')
const assert = require('assert')
 
// Connection URL
const url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}`
const dbName = 'snusdb'
const isoDate = () => new Date().toISOString()

const incrementSnus = () => {
  MongoClient.connect(url, (err, client) => {
    assert.strictEqual(null, err)
    console.log('Connected successfully to server')
    
    const db = client.db(dbName)
    const collection = db.collection('snus')
    const timestamp = isoDate()
    collection.insertOne({snus: 1, timestamp}, (err, result) => {

    })
    client.close()
  })
}

module.exports = { 
  incrementSnus
}
