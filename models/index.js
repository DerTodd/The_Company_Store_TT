// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Product.hasOne(ProductTag, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE',
// });

// Tag.hasOne(ProductTag, {
//   foreignKey: 'tag_id',
//   onDelete: 'CASCADE',
// });

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  // When we delete a Category, all the products will be deleted as well.
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'Who needs this product?'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'Who needs this?'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


