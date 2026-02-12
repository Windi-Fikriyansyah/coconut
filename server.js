const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');
require('dotenv').config(); // Load env vars immediately for shared hosting

// Default to production if not explicitly 'development'
const dev = process.env.NODE_ENV === 'development';
const hostname = 'localhost';
const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;

            // Handle static file uploads directly to bypass Next.js build-time caching and optimize serving
            if (pathname && (pathname.startsWith('/uploads/') || pathname.startsWith('/produk/') || pathname.startsWith('/storage/'))) {
                try {
                    const decodedPath = decodeURIComponent(pathname);
                    // Standardize path: remove /storage prefix if it exists
                    let normalizedPath = decodedPath.startsWith('/storage/')
                        ? decodedPath.substring(8) // remove /storage
                        : decodedPath;

                    // Remove leading slash to join correctly with __dirname
                    const filePath = path.join(__dirname, 'public', normalizedPath.substring(1));

                    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                        const ext = path.extname(filePath).toLowerCase();
                        const mimeTypes = {
                            '.jpg': 'image/jpeg',
                            '.jpeg': 'image/jpeg',
                            '.png': 'image/png',
                            '.webp': 'image/webp',
                            '.svg': 'image/svg+xml',
                            '.gif': 'image/gif',
                            '.avif': 'image/avif',
                            '.pdf': 'application/pdf'
                        };
                        const contentType = mimeTypes[ext] || 'application/octet-stream';

                        res.setHeader('Content-Type', contentType);
                        // Ensure clients always check for the latest version
                        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');

                        const stream = fs.createReadStream(filePath);
                        stream.pipe(res);
                        return;
                    }
                } catch (err) {
                    console.error('Error serving static file:', err);
                }
            }

            if (pathname === '/a') {
                await app.render(req, res, '/a', query);
            } else if (pathname === '/b') {
                await app.render(req, res, '/b', query);
            } else {
                await handle(req, res, parsedUrl);
            }
        } catch (err) {
            console.error('Error occurred handling', req.url, err);
            res.statusCode = 500;
            res.end('internal server error');
        }
    })
        .once('error', (err) => {
            console.error(err);
            process.exit(1);
        })
        .listen(port, () => {
            console.log(`> Ready on http://${hostname}:${port}`);
        });
});
