let { Model, snakeCaseMappers } = require('objection');

class Opportunities extends Model {
  static get columnNameMappers() {
    /*
      In JavaScript we want camel case (e.g., createdAt), but
      in SQL we want snake case (e.g., created_at).
      snakeCaseMappers tells Objection to translate between
      the two.
    */
    return snakeCaseMappers();
  }

  static get tableName() {
    return 'opportunities';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'name', 'category', 'mission'
      ],
      properties: {
        id: { type: 'integer' },
        organization_id: {type: 'string', minLength: 1},
        description: {type: 'string', minLength: 1},
      },
    }
  }
}

module.exports = Opportunities;