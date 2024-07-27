import { Firestore } from '@firebase/firestore'
export class Fuego {
  public db: Firestore
  constructor(db: Firestore) {
    this.db = db;
  }
}
