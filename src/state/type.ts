export interface MainResponse<T> {
  status: boolean;
  code: string;
  desc: string;
  data: T;
}

export interface Loading {
  loading: boolean;
}
