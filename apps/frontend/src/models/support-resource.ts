export interface ISupportResource {
  id: string;
  name: string;
  description?: string;
  tags: string[];
  ageRange: {
    min: number;
    max: number;
  };
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  category?: string | null;
}
