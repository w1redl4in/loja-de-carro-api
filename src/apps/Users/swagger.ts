const paths = {
  '/users': {
    get: {
      tags: ['User'],
      summary: 'User',
      description: 'Lista todos os usuários',
      security: [
        {
          Bearer: [],
        },
      ],
      // parameters: [
      //   {
      //     in: 'body',
      //     name: 'update',
      //     required: true,
      //     schema: {
      //       $ref: '#/definitions/UserPayload',
      //     },
      //   },
      // ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/User',
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
  User: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      email: { type: 'string' },
    },
  },
  UserPayload: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
    },
  },
};

export default {
  paths,
  definitions,
};
