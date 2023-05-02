import Subject from '../Subject';
import Observer from '../Observer';

describe('观察者模式测试', () => {
  test('Observer', () => {
    const subject = new Subject();
    const ob1 = new Observer('ob1');
    const ob2 = new Observer('ob2');
    subject.setState(2);
    subject.add(ob1);
    subject.add(ob2);
    
  });

});