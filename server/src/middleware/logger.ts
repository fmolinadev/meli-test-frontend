/**
 * @author Francisco Molina <franciscomolina.dev@gmail.com>
 */

import { NextFunction, Request, Response } from "express";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers;
  const userAgent = header["user-agent"];
  console.log("user-Agent: ", userAgent);
  next();
};
