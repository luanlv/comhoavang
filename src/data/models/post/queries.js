import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

import type from './type'
import model from './schema'

export default {
  getNews: {
    type: new GraphQLObjectType({
        name: 'getNews',
        description: 'getNews object',
        fields: () => ({
          page: {
            type: GraphQLInt
          },
          totalPage: {
            type: GraphQLInt
          },
          data: {
            type: new GraphQLList(type)
          }
        })
      }),
      args: {
        page: {
          type: GraphQLInt
        }
      },
      resolve: model.getNews
  },
  getFoodNews: {
    type: new GraphQLList(type),
    args: {
      page: {
        type: GraphQLInt
      }
    },
    resolve: model.getFoodNews
  },
  getOneNews: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOnePost
  },
  getOnePost: {
    type: type,
    args: {
      slug: {
        type: GraphQLString
      }
    },
    resolve: model.getOnePost
  },
};
