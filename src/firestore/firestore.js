import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  collection,
  onSnapshot,
  where,
  query,
  FieldValue,
  arrayUnion,

} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCfFoS46NFqfG7i1fDIPhVcqBWrU92CbIs',
  authDomain: 'clone-7bd55.firebaseapp.com',
  projectId: 'clone-7bd55',
  storageBucket: 'clone-7bd55.appspot.com',
  messagingSenderId: '1015754634145',
  appId: '1:1015754634145:web:4319844916d1b64beb51e0',
  measurementId: 'G-GPG1Z8WNL0',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export const db = getFirestore();
export const auth = getAuth(app);

export const addNewProduct = async product => {
  const productDocRef = doc(db, 'Products', product.proId);
  const productSnapshot = await getDoc(productDocRef);
  if (!productSnapshot.exists()) {
    const {
      en,
      ar,
      thumbnail,
      images,
      categoryId,
      subCategoryId,
      sku,
      quantityInStock,
      price,
      discountPercentage,
      rating,
      ratingQuantity,
      sold,
    } = product;
    try {
      await setDoc(productDocRef, {
        en,
        ar,
        thumbnail,
        images,
        categoryId,
        subCategoryId,
        sku,
        quantityInStock,
        price,
        discountPercentage,
        rating,
        ratingQuantity,
        sold,
      });
    } catch (err) {
      console.log('err creating', err.message);
    }
  }

  return productDocRef;
};

export const getAllProducts = async () => {
  let products = [];
  onSnapshot(collection(firestore, 'Products'), snapshot => {
    for (const doc of snapshot.docs) {
      products.push({ id: doc.id, ...doc.data() });
    }
    console.log(products);
  });
  return products;
};
export const getAllCategories = async () => {
  let categories = [];
  onSnapshot(collection(firestore, 'Categories'), snapshot => {
    for (const doc of snapshot.docs) {
      categories.push({ id: doc.id, ...doc.data() });
      console.log(doc.id);
    }
    console.log(categories);
  });
  return categories;
};

export const getCategoryByName = async name => {
  let querys1 = query(
    collection(firestore, 'Categories'),
    where('name', '==', name)
  );
  let respose = await getDocs(querys1);
  let category = {};
  respose.docs.forEach(cat => {
    category = { id: cat.id, ...cat.data() };
  });

  return category;
};

export const getProductsByCategoryId = async id => {
  let querys1 = query(
    collection(firestore, 'Products'),
    where('categoryId', '==', id)
  );
  let respose = await getDocs(querys1);
  let products = [];
  respose.docs.forEach(cat => {
    products.push({ id: cat.id, ...cat.data() });
  });
  return products;
};

export const getProductById = async id => {
  let productRef = doc(firestore, 'Products', id);
  let respose = await getDoc(productRef);
  if (respose.exists()) {
    console.log(respose.data());
    return respose.data();
  } else {
    console.log('No such document!');
  }
};


export const createUSer = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}


export const signInWithE_PW = async (email, password) => {

  return signInWithEmailAndPassword(auth, email, password);

};


export const AddUserData = async (Uid, fieldToUpdate, valueToUpdate) => {
  try {
    const userRef = doc(db, 'Users', Uid);

    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      throw new Error("User document does not exist");
    }

    const userData = userDoc.data();

    
    const updatedData = { ...userData, [fieldToUpdate]: valueToUpdate };

    await setDoc(userRef, updatedData);

    return { success: true };
  } catch (error) {
    console.error("Error updating user data:", error);
    return { success: false, error: error.message };
  }
}

export const toGetUserData = async (uid) => {
  try {
    const userRef = doc(firestore,'Users', uid); 
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("No such document!");
      return null; 
    }
  } catch (error) {
    console.log("Error getting user data:", error);
    throw error; 
  }
};