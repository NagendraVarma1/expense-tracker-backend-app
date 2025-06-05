const Expenses = require("../Models/expenses");

exports.addNewExpense = async (req, res, next) => {
  try {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;

    const data = await Expenses.create({
      amount,
      description,
      category,
      signupTableId : req.user.id
    });
    res.status(200).json({ expenseData: data });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllExpenses = (req, res, next) => {
    Expenses.findAll({where : {signupTableId: req.user.id}})
    .then((data) => {
       res.status(200).json({allExpenses: data})
    })
    .catch((err) => {
      console.log(err)
    })
    
}

exports.deleteExpense = (req, res, next) => {
    const id = req.params.id;
    Expenses.destroy({
        where: {
            id: id
        }
    })
    .then((data) => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
}