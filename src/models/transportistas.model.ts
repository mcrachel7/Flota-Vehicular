import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Transportistas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Licencias: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transportistas>) {
    super(data);
  }
}

export interface TransportistasRelations {
  // describe navigational properties here
}

export type TransportistasWithRelations = Transportistas & TransportistasRelations;
