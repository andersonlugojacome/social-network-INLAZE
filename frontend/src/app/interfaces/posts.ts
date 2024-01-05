export interface Posts {
    _id?: number;
    title: string;
    content: string;
    likes: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    userID?: number;
}