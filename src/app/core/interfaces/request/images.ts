import { ImageMimeType } from '../common';

export interface NewImageRequest {
  nameFile: string;
  mimeType: ImageMimeType;
  base64: string;
}
