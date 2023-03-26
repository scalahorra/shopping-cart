import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: Firestore) { }

  addProduct(product: any, email: string) {
    const userRef = collection(this.firestore, email);
    return addDoc(userRef, product);
  }

  getProducts(email: string): Observable<any> {
    const userRef = collection(this.firestore, `/listas/${email}/productos`);
    return collectionData(userRef, { idField: 'id' }) as Observable<any[]>;
  }

  deleteProduct(product: any, email: string) {
    const productDocRef = doc(this.firestore, `${email}/${product.id}`);
    return deleteDoc(productDocRef);
  }

  async getAllUsers() {
    const q = query(collection(this.firestore, 'usuarios'), where('nombre', '==', 'Sergio'));
    const user = await getDocs(q);
    user.forEach(doc => {
      console.log(doc.id, doc.data());
    })
    return user;
  }
}
