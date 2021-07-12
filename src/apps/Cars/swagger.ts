const paths = {
    '/cars': {
      get: {
        tags: ['Cars'],
        summary: 'Cars',
        description: 'Lista todos os carros',
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Cars',
            },
          },
          404: {
            description: 'Not Found',
            schema: {
              $ref: '#/definitions/ErrorResponse',
            },
          },
          500: {
            description: 'Internal Server Error',
            schema: {
              $ref: '#/definitions/ErrorResponse',
            },
          },
        },
      },
    },
  };
  
  const definitions = {
    Cars: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        km: { type: 'string' },
        location: { type: 'string' },
        transmition: { type: 'string' },
        motor: { type: 'string' },
        price: { type: 'number'},
        rate: { type: 'number'},
        brand: { type: 'string' },
        model: { type: 'string' },
        category: { type: 'string' },
        popular: { type: 'string' },
        morePrice: { type: 'number'},
        lowPrice: { type: 'number'},
      },
    },
    // UserPayload: {
    //   type: 'object',
    //   properties: {
    //     name: { type: 'string' },
    //     email: { type: 'string' },
    //   },
    // },
  };
  
  export default {
    paths,
    definitions,
  };
  