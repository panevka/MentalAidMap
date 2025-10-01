import { Request, Response, NextFunction } from "express";

const requestCounts: Record<string, { count: number; lastRequest: number }> =
  {};

export const rateLimitMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const ip = req.ip;
  const now = Date.now();

  if (!ip) {
    res
      .status(422)
      .json({ message: "Unable to determine client IP for rate limiting" });
    return;
  }

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, lastRequest: now };
  } else {
    const timeSinceLastRequest = now - requestCounts[ip].lastRequest;
    const timeLimit = 15 * 60 * 1000; // 15 minutes

    if (timeSinceLastRequest < timeLimit) {
      requestCounts[ip].count += 1;
    } else {
      requestCounts[ip] = { count: 1, lastRequest: now }; // Reset after time window
    }
  }

  const maxRequests = 100;

  if (requestCounts[ip].count > maxRequests) {
    res
      .status(429)
      .json({ message: "Too many requests, please try again later." });
    return;
  }

  requestCounts[ip].lastRequest = now;
  next();
};
