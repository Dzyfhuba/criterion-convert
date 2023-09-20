// load file criterion.json
const criterion1 = require('./criterion.json').criterion;
exports.criterion1 = criterion1;
const fs = require('fs');

const { level1 } = require('./level1');

const result = level1();

let criterionLevel1 = require('./level1.json')
criterionLevel1 = criterionLevel1[0].children

const level2Result = []

const level2 = criterionLevel1.map((item, index) => {
  // console.log(item.element.)
  const childrenKey = item.children.map(i => i.element.split('.').slice(0, 2).join('.'))
  // get unique value
  const unique = [...new Set(childrenKey)]

  const children = unique.map((i, idx) => {
    const element = i.split('.')[1]
    const children = item.children.filter(child => child.element.split('.')[1] === element)
    return {
      id_element: `${item.element}.${element}`,
      element: `${item.element}.${element}`,
      criteria: `${item.element}.${element}`,
      children
    }
  })
  console.log(children)
  
  return {
    id_element: item.element,
    element: item.element,
    criteria: item.element,
    children
  }
})


// write to result.json with pretty format
fs.writeFile('level1.json', JSON.stringify(result, null, 2), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})


// write level2
fs.writeFile('level2.json', JSON.stringify(level2, null, 2), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
})