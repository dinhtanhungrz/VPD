//data
const users = [
  { id: 1, email: 'a@gmail.com', role: 'admin', isActive: true },
  { id: 2, email: 'b@gmail.com', role: 'user', isActive: true },
  { id: 3, email: 'c@gmail.com', role: 'user', isActive: false }
];

/**
 * @param {Object} query   
 * @param {Object} options 
 */
function find(query = {}, options = {}) {

  
  const result = users.filter(item =>

    
    Object.keys(query).every(key => item[key] === query[key])
  );

  
  if (options.one === true) {
    return result[0] || null; 
  }

  
  return result;
}


const userByEmail = find(
  { email: 'a@gmail.com' },
  { one: true }
);


const activeUsers = find(
  { isActive: true }
);


const activeAdmins = find(
  { role: 'admin', isActive: true }
);

console.log(userByEmail);
console.log(activeUsers);
console.log(activeAdmins);
