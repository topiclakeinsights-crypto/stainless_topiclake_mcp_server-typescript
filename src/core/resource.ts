// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { StainlessTopiclakeMcpServer } from '../client';

export abstract class APIResource {
  protected _client: StainlessTopiclakeMcpServer;

  constructor(client: StainlessTopiclakeMcpServer) {
    this._client = client;
  }
}
