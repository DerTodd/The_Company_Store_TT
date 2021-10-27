// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


const Driver = require('./Driver');
const License = require('./License');

// Define a Driver as having one License to create a foreign key in the `license` table
Driver.hasOne(License, {
  foreignKey: 'driver_id',
  // When we delete a Driver, make sure to also delete the associated License.  Make sure the delete makes sense.  If you delete a driver, the license should go away, but if you delete a license you don't always need the driver deleted.
  onDelete: 'CASCADE',
});

// We can also define the association starting with License.  This should be the inverse of the above, so this needs to be done for each one
License.belongsTo(Driver, {
  foreignKey: 'driver_id',
});

// We package our two models and export them as an object so we can import them together and use their proper names
module.exports = { Driver, License };
