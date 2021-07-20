const router = require('express').Router();

const employeeRoutes = require('./employeeRoutes'); 
const roleRoutes = require('./roleRoutes');
const deptRoutes = require('./departmentRoutes');

router.use('/employees', employeeRoutes);
router.use('/roles', roleRoutes);
router.use('/departments', deptRoutes);

module.exports = router; 