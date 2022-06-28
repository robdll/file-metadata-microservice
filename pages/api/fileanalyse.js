export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  const data = {
    ipaddress: req.headers["x-forwarded-for"],
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  };
  res.status(200).json(data);
}
