interface ILogin {
  email: string;
  password: string;
}

// kenapa pakai I belakangnya? agar tidak bingung membaca bahwa ini interface bukan component

// kenapa exportnya type? karena dia tipe
export type { ILogin };
