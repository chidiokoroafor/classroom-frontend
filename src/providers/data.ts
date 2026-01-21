// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { Subject } from "../types";

const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    department: "Computer Science",
    name: "Introduction to Computer Science",
    description: "Fundamentals of programming, algorithms, and computational thinking concepts.",
    createdAt: "2024-01-15T08:00:00Z",
  },
  {
    id: 2,
    code: "MATH201",
    department: "Mathematics",
    name: "Calculus II",
    description: "Advanced calculus covering integrals, series, and differential equations.",
    createdAt: "2024-01-15T08:00:00Z",
  },
  {
    id: 3,
    code: "PHYS150",
    department: "Physics",
    name: "General Physics I",
    description: "Introduction to mechanics, motion, forces, and energy with lab work.",
    createdAt: "2024-01-15T08:00:00Z",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return { data: [] as TData[], total: 0 };
    }

    return {
      data: mockSubjects as TData[],
      total: mockSubjects.length,
    }
  },

  getOne: async () => { throw new Error("This function is not present in mock") },
  create: async () => { throw new Error("This function is not present in mock") },
  update: async () => { throw new Error("This function is not present in mock") },
  deleteOne: async () => { throw new Error("This function is not present in mock") },

  getApiUrl: async () => ''
}







