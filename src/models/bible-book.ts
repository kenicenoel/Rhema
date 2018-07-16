export interface BibleBook {
  verses?: (VersesEntity)[] | null;
  id: string;
  title: string;
}
export interface VersesEntity {
  chapter: number;
  text: string;
  verse: number;
}
