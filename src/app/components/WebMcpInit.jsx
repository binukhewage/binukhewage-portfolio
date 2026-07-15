"use client";

import { useEffect } from "react";

export default function WebMcpInit() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const initWebMcp = () => {
        const mc = navigator.modelContext || document.modelContext;
        if (!mc) return;

        const tools = [
          {
            name: "get-portfolio-projects",
            description: "Retrieve a list of all portfolio projects and details.",
            inputSchema: {
              type: "object",
              properties: {},
            },
            execute: async () => {
              try {
                const res = await fetch("/api/projects");
                return await res.json();
              } catch (e) {
                return { error: "Failed to retrieve projects" };
              }
            },
          },
          {
            name: "submit-contact-form",
            description: "Submit a contact message to Binuk Hewage.",
            inputSchema: {
              type: "object",
              properties: {
                name: { type: "string" },
                email: { type: "string" },
                message: { type: "string" },
              },
              required: ["name", "email", "message"],
            },
            execute: async (args) => {
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(args),
                });
                return await res.json();
              } catch (e) {
                return { error: "Failed to submit message" };
              }
            },
          },
        ];

        // Register using registerTool
        if (typeof mc.registerTool === "function") {
          tools.forEach((tool) => {
            try {
              mc.registerTool(tool);
            } catch (err) {
              console.error("Error registering tool via registerTool:", err);
            }
          });
        }

        // Register using provideContext
        if (typeof mc.provideContext === "function") {
          try {
            mc.provideContext({ tools });
          } catch (err) {
            console.error("Error providing context via provideContext:", err);
          }
        }
      };

      initWebMcp();
    }
  }, []);

  return null;
}
