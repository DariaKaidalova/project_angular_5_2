import { CropTextPipe } from './crop-text.pipe';

describe('CropText Pipe:', () => {

  const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  const substr = 'Lorem...';

  let subject: CropTextPipe;

  beforeEach(() => {
    subject = new CropTextPipe();
  });

  it('Should crop text', () => {
    const result = subject.transform(str, '5', '...');

    expect(result).toEqual(substr);
  });
  
  it('Should not crop text', () => {
    const result = subject.transform(str, '100', '...');

    expect(result).toEqual(str);
  });
});
