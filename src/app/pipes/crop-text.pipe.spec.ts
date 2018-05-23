import { CropTextPipe } from './crop-text.pipe';

describe('CropText Pipe:', () => {

  const str1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  const substr1 = 'Lorem...';

  const str2 = 'Lorem ipsum dolor';
  const substr2 = 'Lorem ipsum dolor';

  let subject: CropTextPipe;

  beforeEach(() => {
    subject = new CropTextPipe();
  });

  it('Should crop text', () => {
    const result = subject.transform(str1, '5', '...');

    expect(result).toEqual(substr1);
  });

  it('Should not crop text', () => {
    const result = subject.transform(str2, '30', '');

    expect(result).toEqual(substr2);
  });

});
