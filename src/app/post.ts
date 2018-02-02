export class Post {
  constructor(
    public id: number,
    public author: string,
    public post: string,
    public photo?: string
  ) {  }
}
