import multer from "multer";

// disable next.js' default body parser
export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  await new Promise((resolve) => {
    const mw = multer().any();
    mw(req, res, resolve);
  });

  res.status(200).json({
    name: req.files[0].originalname,
    type: req.files[0].mimetype,
    size: req.files[0].size,
  });
}
