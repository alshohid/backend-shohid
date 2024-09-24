export interface NewsCommentRoot {
  status: string;
  data: NewsCommentData[];
}

export interface NewsCommentData {
  id: number;
  userID: number;
  postID: number;
  descriptions: string;
  createdAt: string;
  updatedAt: string;
  users: Users;
}

export interface Users {
  firstName: string;
  lastName: string;
}
