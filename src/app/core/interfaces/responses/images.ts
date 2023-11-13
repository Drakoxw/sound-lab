import { ResponseBase } from './common';

export interface NewImageResponse extends ResponseBase {
  data: {
    path: string
  }
}
