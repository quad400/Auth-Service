export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || "development";
export const MONGODB_URI = process.env.MONGODB_URI as string;
export const JWT_ACCESS_KEY = process.env.JWT_ACCESS_KEY as string;
export const JWT_ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY as string;
export const JWT_REFRESH_KEY = process.env.JWT_REFRESH_KEY as string;
export const JWT_REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY as string;
export const EMAIL_NAME = process.env.EMAIL_NAME as string;
export const EMAIL_PASS = process.env.EMAIL_PASS as string;
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME as string;
export const CLOUDINARY_APIKEY = process.env.CLOUDINARY_APIKEY as string;
export const CLOUDINARY_SECRETKEY = process.env.CLOUDINARY_SECRETKEY as string;
export const UPLOAD_DIR = process.env.UPLOAD_DIR || "/tmp/uploads";
