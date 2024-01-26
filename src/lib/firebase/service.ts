import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, startAt } from "firebase/firestore";
import app from "./init";
import bcrypt from 'bcrypt'
import toCapital from "@/components/toCapital";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string){
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function retrieveDataById(collectionName: string, id: string){
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();

    return data;
}
export async function retrieveDataByName(data: {name: string}) {
    const dataName = toCapital(data.name);
    console.log(dataName)
    const q = query(
     collection(firestore, "products"), 
     where("name", ">=", dataName),

    );
    const snapshot = await getDocs(q);
    console.log('Snapshot is empty:', snapshot.empty);
    console.log(q)
    console.log(snapshot)
    let products:any = [];
    snapshot.docs.map((doc) => {
        const product = {
            id: doc.id,
            ...doc.data(),
        };
        products.push(product);
    });
    console.log(products)
    if(products.length > 0){
        return products;
    } else{
        return null;
    }
}


  
export async function register(
    data: {
        fullname: string;
        email: string;
        password: string;
        role?: string;
    },
){
    const q = query(
        collection(firestore, "users"), 
        where("email", "==", data.email)
    );
    const snapshot = await getDocs(q);
    const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (users.length > 0){
        return {status: false, statusCode: 400, message: "Email already registered"};
    }else {
        data.role = "member";
        data.password = await bcrypt.hash(data.password, 10);
        try{
            await addDoc(collection(firestore, "users"), data)
            return{status: true, statusCode: 200, message: "Register Success"};
        }catch(error){
            return {status: false, statusCode: 400, message: "Register Failed"};
        }
    }   
}

export async function login(data: {email: string}){
    const q = query(
        collection(firestore, "users"),
        where("email", "==", data.email)
    );

    const snapshot = await getDocs(q);
    const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    console.log(q)
    console.log(snapshot)
    console.log(users)
    
    if(users){
        return users[0];
    } else{
        return null;
    }
}

export async function loginWithGoogle(data: any, callbacks: any){
    const q = query(
        collection(firestore, "users"),
        where("email", "==", data.email)
    );

    const snapshot = await getDocs(q);
    const users: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    
    if(users.length > 0){
        data.role = users[0].role
        await updateDoc(doc(firestore, 'users', users[0].id), data).then(() => {
            callbacks({
                status: true,
                data: data
            });
        });
    } else{
        data.role = 'member';
        await addDoc(collection(firestore, 'users'), data).then(() =>{
            callbacks({
                status: true,
                data: data
            });
        })
    }
}