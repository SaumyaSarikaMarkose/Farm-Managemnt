import "dotenv/config";
import app from "./app.js";
import { env } from "./config/env.js";
import { prisma } from "./lib/prisma.js";
async function startServer() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully");
        app.listen(env.PORT, () => {
            console.log(`Server running on http://localhost:${env.PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        await prisma.$disconnect();
        process.exit(1);
    }
}
startServer();
// async function shutdown() {
//     console.log("Shutting down server...");
//     await prisma.$disconnect();
//     process.exit(0);
// }
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
//# sourceMappingURL=server.js.map