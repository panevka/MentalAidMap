import dotenv from "dotenv";

dotenv.config();

export class EnvManager {
  private constructor() {
    throw new Error("A static class cannot be instantiated.");
  }

  static readonly PORT: number = EnvManager.getNumber("PORT", 3001);
  static readonly MONGODB_URI: string = EnvManager.getString("MONGODB_URI");
  static readonly GEOAPIFY_KEY: string = EnvManager.getString("GEOAPIFY_KEY");

  private static getString(key: string, defaultValue?: string): string {
    const value = process.env[key];
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`Missing required environment variable: ${key}`);
  }

  private static getNumber(key: string, defaultValue?: number): number {
    const value = process.env[key];
    if (value !== undefined && !isNaN(Number(value))) return Number(value);
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(
      `Missing or invalid number for environment variable: ${key}`,
    );
  }
}
