import mongoose, { Schema, Document, models } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    image: string;
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
});

export const User = models.User || mongoose.model<IUser>("User", UserSchema);
