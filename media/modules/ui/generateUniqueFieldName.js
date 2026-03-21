export function generateUniqueFieldName(options) {
    const { prefix, fields, IdGenerator } = options;

    const existingNames = fields.map(field => field.name);
    return IdGenerator.generateUniqueName(prefix, existingNames);
}
