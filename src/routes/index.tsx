// routes.ts
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// Define routes and route handlers
router.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is the homepage!");
});

router.get("/about", (req: Request, res: Response) => {
  res.send("Welcome to the about page!");
});

export default router;
