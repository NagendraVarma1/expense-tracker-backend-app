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
    });
    res.status(200).json({ expenseData: data });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllExpenses = (req, res, next) => {
    Expenses.findAll()
    .then((data) => {
       res.status(200).json({allExpenses: data})
    })
    
}
