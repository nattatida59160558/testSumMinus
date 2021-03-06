const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=>{
  expect(sum(20,1)).toBe(21);
})

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ ?', ()=>{
  expect(sum(2,5)).toBe(7);
})

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

// -10 + -5 เท่ากับ -15
test('-10 + -5 เท่ากับ -15', ()=>{
  expect(sum(-10,-5)).toBe(-15);
})

// -10 + 10 เท่ากับ 0
test('-10 + 10 เท่ากับ 0', ()=>{
  expect(sum(-10,10)).toBe(0);
})

// 5 + -10 เท่ากับ -5
test('5 + -10 เท่ากับ -5', ()=>{
  expect(sum(5,-10)).toBe(-5);
})
