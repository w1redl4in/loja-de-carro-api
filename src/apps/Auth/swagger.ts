const paths = {
  '/auth': {
    post: {
      tags: ['Auth'],
      summary: 'Auth',
      description: 'Realiza login na aplicação',
      parameters: [
        {
          in: 'body',
          name: 'AuthInfo',
          schema: {
            $ref: '#/definitions/AuthPayload',
          },
        },
      ],
      responses: {
        200: {
          description: 'OK',
          schema: {
            $ref: '#/definitions/Auth',
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
  AuthPayload: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
  },
  Auth: {
    type: 'object',
    properties: {
      token: { type: 'string' },
    },
  },
};

export default {
  paths,
  definitions,
};
