export interface UserState {
    uid: string;
    email: string;
    address: string,
    age: number
}

export interface State {
    user: UserState;
}
  