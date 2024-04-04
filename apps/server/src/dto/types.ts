export type Cat = {
  name: string;
  age: number;
  breed: string;
};

export type CreateCatDto = {
  name: string;
  age: number;
  breed: string;
};

export type ListAllEntities = {
  limit: number;
};

export type UpdateCatDto = Pick<CreateCatDto, 'name' | 'age' | 'breed'>;
