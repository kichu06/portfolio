import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!", data: message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to send message" });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to retrieve messages" });
    }
  });

  // Download CV
  app.get("/api/download/cv", (req, res) => {
    const filePath = path.join(__dirname, "..", "client", "public", "nikhil-cv.pdf");
    res.download(filePath, "Nikhil_Nath_P_CV.pdf", (err) => {
      if (err) {
        res.status(404).json({ success: false, message: "CV file not found" });
      }
    });
  });

  // Download Cover Letter
  app.get("/api/download/cover-letter", (req, res) => {
    const filePath = path.join(__dirname, "..", "client", "public", "nikhil-cover-letter.pdf");
    res.download(filePath, "Nikhil_Nath_P_Cover_Letter.pdf", (err) => {
      if (err) {
        res.status(404).json({ success: false, message: "Cover letter file not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
