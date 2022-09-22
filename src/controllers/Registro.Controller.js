function index(req, res) {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM regfame', (err, reg) => {
        if(err) {
          res.json(err);
        }
        res.render('paciente/index', { reg });
      });
    });
  }
  
  function create(req, res) {
  
    res.render('paciente/create');
  }
  
  function store(req, res) {
    const data = req.body;
  
    req.getConnection((err, conn) => {
      conn.query('INSERT INTO regfame SET ?', [data], (err, rows) => {
        res.redirect('/paciente');
      });
    });
  }
  
  function destroy(req, res) {
    const id = req.body.id;
  
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM regfame WHERE id = ?', [id], (err, rows) => {
        res.redirect('/paciente');
      });
    })
  }
  
  function edit(req, res) {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM regfame WHERE id = ?', [id], (err, reg) => {
        if(err) {
          res.json(err);
        }
        res.render('paciente/edit', { reg });
      });
    });
  }
  
  function update(req, res) {
    const id = req.params.id;
    const data = req.body;
  
    req.getConnection((err, conn) => {
      conn.query('UPDATE regfame SET ? WHERE id = ?', [data, id], (err, rows) => {
        res.redirect('/paciente');
      });
    });
  }
  
  
  module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update,
  }