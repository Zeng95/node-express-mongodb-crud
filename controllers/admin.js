const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

exports.getEmployees = (req, res, next) => {
  res.render('admin/employees')
}

exports.getAddEmployee = (req, res, next) => {
  res.render('admin/add-employee')
}

exports.postAddEmployee = (req, res, next) => {
  const { fullName, email, phone, city } = req.body
  // Instantiate the model
  const employee = new Employee()

  employee.fullName = fullName
  employee.email = email
  employee.phone = phone
  employee.city = city

  employee.save((error) => {
    if (!error) {
      res.redirect('/admin/employees')
    }
  })
}
