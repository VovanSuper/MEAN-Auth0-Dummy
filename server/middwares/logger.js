module.exports = (req, resp, next) => {
  console.log(req.method, req.originalUrl);
  if(req.body)
    console.log('Body ', req.body);

  next();
}