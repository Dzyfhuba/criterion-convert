const { criterion1 } = require('.');

function level1() {
  const level1Key = criterion1.map(criteria => criteria.element.split('.')[0]).filter((value, index, self) => self.indexOf(value) === index);

  const result = [
    {
      id_element: 0,
      element: '*',
      criteria: '*',
      children: []
    }
  ];
  const level1 = [];
  level1Key.forEach((key, i) => {
    level1.push(
      {
        id_element: key,
        element: key,
        criteria: '',
        children: []
      }
    );
    // console.log(level1);
    criterion1.forEach((criteria, idx) => {
      if (key === criteria.element.split('.')[0]) {
        level1[parseInt(key - 1)].children.push({
          id_element: criteria.id_elemen,
          criteria: criteria.criteria,
          element: criteria.element,
          children: []
        });
      }
    });
    result[0].children.push(level1[i]);
  });
  return result;
}
exports.level1 = level1;
