const expectedTypes = ['fix', 'feat'];

module.exports = {
  plugins: [
    {
      rules: {
        /**
         * Custom rule to check the commit type.
         * @param {{ type: string }} param - The commit type.
         * @returns {[boolean, (string | undefined)]} - The validation result and message.
         */
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        'custom-type-enum': function ({ type }) {
          /** @type {[boolean, (string | undefined)]} */
          let result;
          if (!expectedTypes.includes(type)) {
            result = [
              false,
              `Type must be one of: ${expectedTypes.join(', ')} \nExample: feat: add new feature`,
            ];
          } else {
            result = [true];
          }
          return result;
        },
      },
    },
  ],
  rules: {
    'custom-type-enum': [2, 'always'],
  },
};
