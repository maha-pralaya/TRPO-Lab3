import getResult from './getResult';

const Hamlet = 'To be, or not to be? That is the question. Whether tis nobler in the mind to suffer the slings and arrows of outrageous fortune? Or to take arms against a sea of troubles and by opposing end them? To die! To sleep!';
const resHamlet = [' To die', ' Whether tis nobler in the mind to suffer the slings and arrows of outrageous fortune']
const Comic = 'PEEEW! POOOOooohhhh. AAA! Bang! Ew? Bzzzzzz.';
const resComic = [' Ew', ' POOOOooohhhh']


describe('Проверка результата функции', () => {
  test('Hamlet', () => {
    expect(getResult(Hamlet)).toMatchObject(resHamlet);
  });
  test('Comic', () => {
    expect(getResult(Comic)).toMatchObject(resComic);
  });
});