// Base Repository
module.exports = class {
  constructor() {
    this.model = this.getModel();
  }
  create(data) {
    // Gọi hàm create của model
    return this.model.create(data);
  }
  update(data, condition = {}) {
    // Gọi hàm update của model
    return this.model.update(data, condition);
  }
  updateByPk(id, data) {
    // Gọi hàm update của model
    return this.model.update(data, { where: { id } });
  }
  detele(condition = {}) {
    // Gọi hàm detele của model
    return this.model.destroy(condition);
  }
  deteleByPk(id) {
    // Gọi hàm model
    return this.model.destroy({ where: { id } });
  }
  find(condition = {}) {
    // Gọi hàm model
    return this.model.findOne(condition);
  }
  findbyPk(id) {
    return this.model.findbyPk(id);
  }
  findAll(condition = {}) {
    // Gọi hàm model
    return this.model.findAll(condition);
  }
  findAndCountAll(options = {}) {
    // Gọi hàm model
    return this.model.findAndCountAll(options);
  }
};
