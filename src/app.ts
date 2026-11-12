import express from "express";

import authRoutes from "./modules/auth/auth.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { notFoundHandler } from "./middleware/not-found.middleware.js";

import adminRoutes from "./modules/admin/admin.routes.js";
import cowRoutes from "./modules/cows/cow.routes.js";
import farmRoutes from "./modules/admin/farm-member.routes.js"
import farmRoute from "./modules/farm/farm.routes.js";
import milkProductionRoutes from "./modules/milkProduction/milk.production.routes.js";
import feedRoutes from "./modules/feeds/feed.routes.js";
import financialRoutes from "./modules/financial/financial.routes.js";
import reportsRoutes from "./modules/reports/reports.routes.js";
import cors from 'cors';
const app = express();


app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Cow Farm API is running",
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/api/cows", cowRoutes);
app.use("/admin",farmRoutes);
app.use("/api/farms",farmRoute);
app.use("/api/milk-production", milkProductionRoutes);
app.use("/api/feed", feedRoutes);
app.use("/api/financial", financialRoutes);
app.use("/api/reports", reportsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;


