/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Disposition = "required" | "optional" | "disallowed"

export interface GithublintSchemaJson {
  $schema?: string
  additionalProperties?: any
  github?: Source
  owners?: Owner[]
}
export interface Source {
  enabled?: boolean
  filter?: string
}
export interface Owner {
  name?: string
  enabled?: boolean
  repositories?: Repository[]
}
export interface Repository {
  name?: string
  enabled?: boolean
  /**
   * Settings for pulling in raw data from github
   */
  raw?: {
    enabled?: boolean
    [k: string]: any
  }
  branches?: Branch[]
  integrations?: Integration[]
  badges?: Badge[]
  content?: Content[]
  public?: boolean
}
export interface Branch {
  name?: string
  enabled?: boolean
  disposition?: Disposition
  protected?: boolean
  default?: {
    [k: string]: any
  }
  [k: string]: any
}
export interface Integration {
  name?: string
  enabled?: boolean
  disposition?: Disposition
  [k: string]: any
}
export interface Badge {
  name?: string
  enabled?: boolean
  disposition?: Disposition
  [k: string]: any
}
export interface Content {
  name?: string
  enabled?: boolean
  disposition?: Disposition
  filter?: string
  [k: string]: any
}
