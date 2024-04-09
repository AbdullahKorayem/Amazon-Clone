import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateEmail,
  sendEmailVerification,
  verifyBeforeUpdateEmail,
  signOut,
  updateProfile,
} from 'firebase/auth';
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
  updateDoc,
  increment,
  query,
  FieldValue,
  arrayUnion,
  deleteDoc,
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
      // console.log('err creating', err.message);
    }
  }

  return productDocRef;
};

export const getAllProducts = async () => {
  let products = [];
  const snapshot = await getDocs(collection(firestore, 'Products'));
  snapshot.forEach(doc => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export const getAllCategories = async () => {
  let categories = [];
  onSnapshot(collection(firestore, 'Categories'), snapshot => {
    for (const doc of snapshot.docs) {
      categories.push({ id: doc.id, ...doc.data() });
    }
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
export const getProductsBySubCategoryId = async id => {
  let querys1 = query(
    collection(firestore, 'Products'),
    where('subCategoryId', '==', id)
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
    return respose.data();
  } else {
    // console.log('No such document!');
  }
};

export const createUSer = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithE_PW = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const AddUserData = async (Uid, fieldToUpdate, valueToUpdate) => {
  try {
    const userRef = doc(db, 'Users', Uid);

    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      throw new Error('User document does not exist');
    }

    const userData = userDoc.data();

    const updatedData = { ...userData, [fieldToUpdate]: valueToUpdate };

    await setDoc(userRef, updatedData);

    return { success: true };
  } catch (error) {
    console.error('Error updating user data:', error);
    return { success: false, error: error.message };
  }
};

export const toGetUserData = async uid => {
  try {
    const userRef = doc(firestore, 'Users', uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      // console.log('No such document!');
      return null;
    }
  } catch (error) {
    // console.log('Error getting user data:', error);
    throw error;
  }
};
export const addProductToCart = async (
  userId,
  productId,
  productImage,
  productDescription,
  productTitle,
  productPrice,
  quantityInStock,
  quantity,
  SellerUid
) => {
  const cartRef = collection(firestore, 'Cart');
  const queryRef = query(
    cartRef,
    where('userId', '==', userId),
    where('productId', '==', productId)
  );
  const snapshot = await getDocs(queryRef);

  if (snapshot.empty) {
    // If the product is not in the cart, add it
    const newCartItem = {
      userId,
      productId,
      productImage,
      productDescription,
      productTitle,
      productPrice,
      quantityInStock,
      quantity,
      SellerUid,
    };
    await addDoc(cartRef, newCartItem);
    // console.log('Product added to cart successfully');
  } else {
    // If the product is already in the cart, update the quantity
    snapshot.forEach(async cartDoc => {
      const cartItemRef = doc(firestore, 'Cart', cartDoc.id);
      await updateDoc(cartItemRef, {
        quantity: cartDoc.data().quantity + quantity,
      });
      // console.log('Product quantity updated in cart successfully');
    });
  }
};

export const addProductToOrder = async (
  userId,
  productId,
  productImage,
  productDescription,
  productPrice,
  quantityInStock,
  quantity
) => {
  const orderRef = collection(firestore, 'Order');
  const queryRef = query(
    orderRef,
    where('userId', '==', userId),
    where('productId', '==', productId)
  );
  const snapshot = await getDocs(queryRef);

  if (snapshot.empty) {
    // If the product is not in the cart, add it
    const newOrderItem = {
      userId,
      productId,
      productImage,
      productDescription,
      productPrice,
      quantityInStock,
      quantity,
    };
    await addDoc(orderRef, newOrderItem);
    // console.log('Product added to Order successfully');
  } else {
    // If the product is already in the cart, update the quantity
    snapshot.forEach(async orderDoc => {
      const orderItemRef = doc(firestore, 'Order', orderDoc.id);

      await updateDoc(orderItemRef, {
        quantity: quantity,
      });
      // console.log(`Product quantity updated in Order successfully `);
    });
  }
};

export const getCartItems = async userId => {
  let querys1 = query(
    collection(firestore, 'Cart'),
    where('userId', '==', userId)
  );
  let respose = await getDocs(querys1);
  let Items = [];
  respose.docs.forEach(pro => {
    Items.push({ id: pro.id, ...pro.data() });
  });
  return Items;
};

export const deleteItemFromCart = async fieldValue => {
  const queryRef = query(
    collection(firestore, 'Cart'),
    where('productId', '==', fieldValue)
  );
  const snapshot = await getDocs(queryRef);
  if (!snapshot.empty) {
    snapshot.forEach(async doc => {
      await deleteDoc(doc.ref);
      // console.log(
      //   `Document with ID =${fieldValue} successfully deleted from Cart.`
      // );
    });
  } else {
    // console.log(`No document found with ID =${fieldValue} in Cart.`);
  }
};

export const searchForProduct = async (searchChar = '', Ctgid = '') => {
  try {
    let products = [];
    const productsRef = collection(firestore, 'Products');
    const querySnapshot = await getDocs(productsRef);
    querySnapshot.forEach(doc => {
      const data = doc.data();

      if (
        data &&
        data.en &&
        Object.values(data.en).some(value =>
          value.toLowerCase().includes(searchChar.toLowerCase())
        )
      ) {
        if (data.categoryId === Ctgid) {
          products.push({ id: doc.id, ...data });
        } else {
          products.push({ id: doc.id, ...data });
        }
      }
    });

    return products;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const addNewUserRate = async (docId, value) => {
  const docRef = doc(firestore, 'Products', docId);
  try {
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const currentData = docSnapshot.data();
      if (currentData.usersRating) {
        if (
          currentData.usersRating.find(user => user.userUid === value.userUid)
        ) {
          const oldValue = currentData.usersRating.find(
            user => user.userUid === value.userUid
          );
          const newValue = { ...oldValue, rating: value.rating };
          const newArray = currentData.usersRating.filter(
            obj => obj.userUid !== newValue.userUid
          );
          const updatedField = [...newArray, newValue];
          const avgRate = updatedField.reduce((acc, cur) => {
            return acc + cur.rating;
          }, 0);

          await updateDoc(docRef, {
            usersRating: updatedField,
            rating: avgRate / updatedField.length,
          });
        } else {
          const updatedField = [...currentData.usersRating, value];
          const avgRate = updatedField.reduce((acc, cur) => {
            return acc + cur.rating;
          }, 0);
          await updateDoc(docRef, {
            usersRating: updatedField,
            rating: avgRate / updatedField.length,
          });
        }
      } else {
        const updatedField = [value];
        const avgRate = updatedField.reduce((acc, cur) => {
          return acc + cur.rating;
        }, 0);
        await updateDoc(docRef, {
          usersRating: updatedField,
          rating: avgRate / updatedField.length,
        });
      }
      // console.log('New field created and set successfully');
    } else {
      // console.log('Document does not exist');
    }
  } catch (error) {
    console.error('Error creating new field:', error);
  }
};
export const updateCartItemQuantity = async (cartItemId, newQuantity) => {
  const cartItemRef = doc(firestore, 'Cart', cartItemId);
  await updateDoc(cartItemRef, {
    quantity: newQuantity,
  });
  // console.log('Cart item quantity updated successfully');
};

export const addOrder = async order => {
  try {
    const orderRef = collection(firestore, 'Orders');
    const queryRef = query(orderRef, where('orderDate', '==', order.orderDate));
    const snapshot = await getDocs(queryRef);

    if (snapshot.empty) {
      await addDoc(orderRef, order);
      // console.log('Order added with ID: ', order.orderDate);
    } else {
      // console.log('Order already exists with ID: ', order.orderDate);
    }
  } catch (error) {
    console.error('Error adding order: ', order.orderDate);
  }
};
export const getOrderItems = async userId => {
  let querys1 = query(
    collection(firestore, 'Orders'),
    where('userId', '==', userId)
  );
  let respose = await getDocs(querys1);
  let Items = [];
  respose.docs.forEach(pro => {
    Items.push({ id: pro.id, ...pro.data() });
  });
  return Items;
};

export const updateOrderStatus = async orderId => {
  const orderRef = doc(firestore, 'Orders', orderId);
  await updateDoc(orderRef, {
    status: 'cancelled',
  });
  // console.log('Order updated successfully');
};

// // Import necessary functions from Firestore

// // Function to add seller IDs to products based on specified limits
// async function addSellerIdsToProducts() {
//   try {
//     // Get Firestore instance

//     // Reference to the products collection
//     const productsRef = collection(firestore, 'Products');

//     // Query all products
//     const querySnapshot = await getDocs(productsRef);

//     // Initialize a batch write

//     // Counter for seller IDs
//     let count = 0;

//     // Iterate through query snapshot
//     querySnapshot.forEach(docu => {
//       // Determine seller ID based on count
//       let SellerUid;
//       if (count < 30) {
//         SellerUid = 'oAUtsDiTo7Mvpy4JzzMpyDPnXR82';
//       } else if (count < 60) {
//         SellerUid = 'eY2koINt3mg5JxWeivBp2WOfIWI3';
//       } else if (count < 90) {
//         SellerUid = 'SvCaer1sWQR4ZA62SEYmYSjJqEC2';
//       } else {
//         SellerUid = 'xqfhASOPfxXYMGtn5tbVOpiA9O33';
//       }

//       // Add seller ID to product
//       const productRef = doc(firestore, 'Products', docu.id);
//       updateDoc(productRef, { SellerUid: SellerUid });

//       count++;
//     });

//     // Commit the batch

//     console.log('Seller IDs added to products successfully.');
//   } catch (error) {
//     console.error('Error adding seller IDs: ', error);
//   }
// }

// // Call the function to add seller IDs to products
// addSellerIdsToProducts();

export async function resetYourPassword(email) {
  await sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      console.log('Password reset email sent');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}
export function getCurrentUser() {
  const user = auth.currentUser;
  if (user !== null) {
    const email = user.email;
    const uid = user.uid;
    const phoneNumber = user.phoneNumber;
    return { email, uid, phoneNumber };
  }
}
export const updateUserName = async (uId, value) => {
  const userRef = doc(firestore, 'Users', uId);
  await updateDoc(userRef, {
    UserName: value,
  });
  console.log('User Name updated successfully');
};
export const updateUserEmail = async email => {
  await verifyBeforeUpdateEmail(auth.currentUser, email);
  await signOut(auth);
};

export const updateUserPhoneNumber = async (uId, value) => {
  try {
    const UsersRef = doc(firestore, 'Users', uId);
    const userDoc = await getDoc(UsersRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();

      // Assuming 'UserInformation' is an array and we want to update the first element
      if (userData.UserInformation && userData.UserInformation.length > 0) {
        userData.UserInformation[0].phoneNumber = value;
      }

      await updateDoc(UsersRef, userData);
      console.log('Phone number updated successfully');
    } else {
      console.error('User document does not exist');
    }
  } catch (error) {
    console.error('Error updating phoneNumber:', error);
  }
};
// updateUserPhoneNumber('4djnetdQJSc9Begn5PhkpQVjP6G2', '5555');
