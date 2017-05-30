import Ember from 'ember';

const { get, isEmpty, Mixin } = Ember;

export const PREDEFINED_USER_ROLES = [
  { name: 'Data Entry', roles: ['Data Entry', 'user'], defaultRoute: 'patients.index' },
  { name: 'Doctor', roles: ['Doctor', 'user'], defaultRoute: 'patients.index'  },
  { name: 'Finance', roles: ['Finance', 'user'], defaultRoute: 'invoices.index'  },
  { name: 'Finance Manager', roles: ['Finance Manager', 'user'], defaultRoute: 'invoices.index' },
  { name: 'Hospital Administrator', roles: ['Hospital Administrator', 'user'], defaultRoute: 'invoices.index' },
  { name: 'Inventory Manager', roles: ['Inventory Manager', 'user'], defaultRoute: 'inventory.index' },
  { name: 'Imaging Technician', roles: ['Imaging Technician', 'user'], defaultRoute: 'imaging.index' },
  { name: 'Lab Technician', roles: ['Lab Technician', 'user'], defaultRoute: 'labs.index' },
  { name: 'Medical Records Officer', roles: ['Medical Records Officer', 'user'], defaultRoute: 'patients.index' },
  { name: 'Nurse', roles: ['Nurse', 'user'], defaultRoute: 'patients.index' },
  { name: 'Nurse Manager', roles: ['Nurse Manager', 'user'], defaultRoute: 'patients.index' },
  { name: 'Patient Administration', roles: ['Patient Administration', 'user'], defaultRoute: 'patients.index' },
  { name: 'Pharmacist', roles: ['Pharmacist', 'user'], defaultRoute: 'medication.index' },
  { name: 'Social Worker', roles: ['Social Worker', 'user'], defaultRoute: 'patients.index' },
  { name: 'System Administrator', roles: ['System Administrator', 'admin', 'user'] },
  { name: 'User Administrator', roles: ['User Administrator', 'admin', 'user'], defaultRoute: 'users' },
  { name: 'Cashier', roles: ['Cashier', 'user'], defaultRoute: 'invoices.index' }
];

export default Ember.Mixin.create({
  userRoles: PREDEFINED_USER_ROLES,
  findUserRole(name) {
    return this.userRoles.findBy('name', name);
  },
  loadRoles() {
    // let store = this.get('store');
    // var storeRoles = store.findAll('user-role');
    // storeRoles.then(() => {
    //   delete this.namedRoles;
    //   this.set('namedRoles', Ember.computed.map('userRoles', function(userRole) {
    //     let id = userRole.id !== undefined ? userRole.id : userRole.name.dasherize();
    //     let userRoleModel = storeRoles.findBy('id', id);
    //     if (!userRole.id) {
    //       userRole.id = id;
    //     }
    //     if (userRoleModel) {
    //       Ember.set(userRole, 'name', userRoleModel.get('name'));
    //     }
    //     return userRole;
    //   }));
    // });
    // return storeRoles;
  },
  init() {
    this.loadRoles();
  }
});

