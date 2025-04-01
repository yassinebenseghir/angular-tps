import { CountCharacterPipe } from './count-character.pipe';

describe('CountCharacterPipe', () => {
  it('create an instance', () => {
    const pipe = new CountCharacterPipe();
    expect(pipe).toBeTruthy();
  });
});
