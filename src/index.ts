import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.use(express.json());
app.post('/card_hook', (req, res) => {
  console.error(req.body);
  res.json({ status: "success" });
})

export default app
