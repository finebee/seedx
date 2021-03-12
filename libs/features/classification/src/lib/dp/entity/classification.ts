export interface ClassificationEntity {
  id: string | number; // Primary ID

  Row: number;
  Column: number;
  Status: 'KWS_KERIDOS' | 'KWS_KERIDOS_YG' | 'UNKNOWN' | 'ERROR';
}
