/*eslint-env node*/
function proxy(app) {
  app.get(/^\/$/, (req, res) => res.redirect("/kalendarz"));
}

module.exports = proxy;
