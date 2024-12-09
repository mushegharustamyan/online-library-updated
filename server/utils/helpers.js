export const setPermission = (...args) => {
    const defaultKeys = ['create', 'read', 'delete', 'update'];
    const result = {};
  
    defaultKeys.forEach(key => {
      result[key] = args.includes(key);
    });
  
    return result;
};
