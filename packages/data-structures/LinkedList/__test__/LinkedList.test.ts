import LinkedList from '../LinkedList';
describe('test LinkedList methods', () => {
  test('test linkedList push insert size isEmpty getElementAt getHead getTail indexOf method', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.isEmpty()).toBeTruthy();
    expect(linkedList.size()).toBe(0);
    linkedList.push(10);
    expect(linkedList.getElementAt(0)?.next).toBeUndefined();
    expect(linkedList.getElementAt(0)?.element).toBe(10);
    expect(linkedList.getHead()?.element).toBe(10);
    expect(linkedList.getTail()?.element).toBe(10);
    expect(linkedList.indexOf(10)).toBe(0);
    expect(linkedList.size()).toBe(1);
    linkedList.push(20);
    expect(linkedList.getElementAt(0)?.element).toBe(10);
    expect(linkedList.getElementAt(0)?.next?.element).toBe(20);
    expect(linkedList.getElementAt(1)?.element).toBe(20);
    expect(linkedList.getHead()?.element).toBe(10);
    expect(linkedList.getTail()?.element).toBe(20);
    expect(linkedList.indexOf(10)).toBe(0);
    expect(linkedList.indexOf(20)).toBe(1);
    expect(linkedList.size()).toBe(2);
    linkedList.insert(30, 1);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.indexOf(20)).toBe(2);
    expect(linkedList.getElementAt(0)?.element).toBe(10);
    expect(linkedList.getElementAt(1)?.element).toBe(30);
    expect(linkedList.getElementAt(1)?.next?.element).toBe(20);
    expect(linkedList.getHead()?.element).toBe(10);
    expect(linkedList.getTail()?.element).toBe(20);
  });
  test('test linkedList compare with custom comparator function', () => {
    const linkedList = new LinkedList<string>((a, b) => {
      if (a.length === b.length) {
        return 0;
      }
      return a.length < b.length ? -1 : 1;
    });
    linkedList.push('a');
    linkedList.push('aa');
    linkedList.push('aaa');
    linkedList.push('aaaa');
    linkedList.push('aaaa');
    expect(linkedList.indexOf('aa')).toBe(1);
    expect(linkedList.indexOf('aaa')).toBe(2);
    expect(linkedList.remove('aaaa')).toEqual('aaaa');
  });
  test('test linkedList push remove removeAt size isEmpty getElementAt getHead getTail indexOf method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(10);
    linkedList.push(20);
    linkedList.push(30);
    linkedList.push(40);
    linkedList.push(50);
    expect(linkedList.size()).toBe(5);
    expect(linkedList.getHead()?.element).toBe(10);
    expect(linkedList.getTail()?.element).toBe(50);
    expect(linkedList.remove(30)).toBe(30);
    expect(linkedList.size()).toBe(4);
    expect(linkedList.removeAt(3)).toBe(50);
    expect(linkedList.size()).toBe(3);
    linkedList.clear();
    expect(linkedList.isEmpty()).toBeTruthy();
  });
  test('test linkedList reverse method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(10);
    linkedList.push(20);
    linkedList.push(30);
    linkedList.push(40);
    linkedList.push(50);
    expect(linkedList.getHead()?.element).toBe(10);
    expect(linkedList.getTail()?.element).toBe(50);
    expect(linkedList.getElementAt(0)?.next?.element).toBe(20);
    expect(linkedList.indexOf(20)).toBe(1);
    expect(linkedList.indexOf(30)).toBe(2);
    expect(linkedList.indexOf(40)).toBe(3);
    expect(linkedList.toString()).toEqual('10,20,30,40,50');
    linkedList.reverse();
    expect(linkedList.getHead()?.element).toBe(50);
    expect(linkedList.getTail()?.element).toBe(10);
    expect(linkedList.getElementAt(0)?.next?.element).toBe(40);
    expect(linkedList.indexOf(20)).toBe(3);
    expect(linkedList.indexOf(30)).toBe(2);
    expect(linkedList.indexOf(40)).toBe(1);
    expect(linkedList.toString()).toEqual('50,40,30,20,10');
    expect(linkedList.toArray().length).toBe(5);
  });
  test('test linkedList toString toArray method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(10);
    linkedList.push(20);
    linkedList.push(30);
    linkedList.push(40);
    expect(linkedList.toString()).toEqual('10,20,30,40');
    expect(linkedList.toArray().length).toBe(4);
  });
});
