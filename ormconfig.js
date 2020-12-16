console.log('🚀 DataBase 🛢 :>>',process.env.DATABASE_URL);
console.log('📄 Migrations 🖨 :>>',process.env.MIGRATIONS);
console.log('💡 Entities 🗿 :>>', process.env.ENTITIES);

module.exports={
   "type": "postgres",
   "url":process.env.DATABASE_URL,
 
  "entities": [
     process.env.ENTITIES
  ],
  "migrations": [
     process.env.MIGRATIONS
  ],
  "cli": {
   "migrationsDir": "src/database/migrations"
}
}