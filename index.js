app.get('/calc', (req, res) => {
const expr = req.query.expr || '2+2';
// Insecure eval
const result = eval(expr);
res.json({ result });
 });
