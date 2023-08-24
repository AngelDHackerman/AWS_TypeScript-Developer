// Exercise Context: Use union types to define different user roles in an application.

type UserRole = 'admin' | 'user' | 'guest';

const handleUserRole = (role: UserRole) => { 
  if (role == 'admin') { 
    console.log('Access to ALL resources')
  } else if (role == 'user') { 
    console.log('Access to USER resources')
  } else if (role == 'guest') { 
    console.log('Access to GUEST resources')
  } else { 
    console.log('Invalid Role')
  }
}


// Example Usage:
handleUserRole('admin'); // Output: Access to all resources.
handleUserRole('user');  // Output: Access to user resources.
handleUserRole('guest'); // Output: Access to guest resources.

