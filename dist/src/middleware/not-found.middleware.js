export function notFoundHandler(_req, res) {
    return res.status(404).json({
        success: false,
        message: "API endpoint not found",
    });
}
//# sourceMappingURL=not-found.middleware.js.map