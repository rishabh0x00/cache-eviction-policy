import LRUPolicy from './LRUPolicy';
import PolicyInterface from '../Interfaces/PolicyInterface';

export default class MRUpolicy extends LRUPolicy implements PolicyInterface  {
  constructor(limit: any) {
    super(limit);
  }

  // Ovverride checkLimit which is the only change in MRU
  protected CheckLimit() {
    if (this.size === this.limit) {
      this.Remove(this.head.key)
    }
  } 
}
