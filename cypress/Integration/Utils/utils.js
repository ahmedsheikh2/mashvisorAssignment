  export const randomEmail = () => {
    const uuid = () => Cypress._.random(0, 1e3);
    const id = uuid();
    return `fakeemail${id}@gmail.com`;
  };
 