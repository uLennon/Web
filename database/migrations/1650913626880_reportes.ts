import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reportes extends BaseSchema {
  protected tableName = 'reportes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('titulo')
      table.string('descricao')
      table.boolean('resolvido').defaultTo(false)
      table.integer('voto').defaultTo(0)

    

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
