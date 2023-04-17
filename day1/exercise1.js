const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  let array = new Array();

  array = [1,2,3,4,5,6,7,8];
  console.log(array.length);
  console.log(array[0])
  console.log(array[array.length / 2 - 1])
  console.log(array[array.length - 1])

  const mixedDataTypes = ['dog', 23, true, 3.14, 'a', 2, 'thirty-two']
  console.log(mixedDataTypes.length)

  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  console.log(itCompanies);
  console.log(itCompanies.length);
  console.log(itCompanies[0]);
  console.log(itCompanies[Math.round(itCompanies.length / 2 - 1)])
  console.log(itCompanies[itCompanies.length - 1]);

  const uppercased = itCompanies.map(company => company.toUpperCase())
  console.log(uppercased)

  console.log(`${itCompanies.join(', ')} are all huge IT companies.`)
  console.log(itCompanies.includes('Google'))
  console.log(itCompanies.includes('Steam'))