"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BarangSchema extends Schema {
  up() {
    this.create("barangs", (table) => {
      table.increments();
      table.string("nama").notNullable();
      table.integer("harga").notNullable();
      table.integer("stok").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("barangs");
  }
}

module.exports = BarangSchema;
