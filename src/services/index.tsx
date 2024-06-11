import { db } from '../../firebaseConfig';

import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { ClientType, PlanType, ProfessionalType } from '../types';

export const createUser = async (userId: string) => {
  try {
    const userCollection = collection(db, 'users');

    const userRef = doc(userCollection, userId);

    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      return;
    }

    await setDoc(userRef, {});

    return userId;
  } catch (error) {
    throw new Error('No se pudo crear el usuario');
  }
};

export const getUser = async (userId: string) => {
  try {
    const userDoc = doc(db, 'users', userId);

    const userSnapshot = await getDoc(userDoc);
    let user: ProfessionalType = {
      id: '',
      name: '',
      phone: '',
      email: '',
      image: '',
    };

    if (userSnapshot.exists()) {
      user = {
        name: '',
        phone: '',
        email: '',
        image: '',
        id: userSnapshot.id,
        ...userSnapshot.data(),
      };
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw error;
  }
};

export const getPatientPlans = async (patientId: string, userId: string) => {
  try {
    const patientPlansCollection = collection(
      db,
      'users',
      userId,
      'patients',
      patientId,
      'plan'
    );

    const patientPlansSnapshot = await getDocs(patientPlansCollection);

    const patientPlans: PlanType[] = [];
    patientPlansSnapshot.docs.map((doc) => {
      patientPlans.push({
        name: '',
        day: '',
        image: '',
        duration: 0,
        id: doc.id,
        exercises: [],
        ...doc.data(),
      });
    });

    return patientPlans;
  } catch (error) {
    console.error('Error al obtener los planes del paciente:', error);
    throw error;
  }
};

export const getPatient = async (patientId: string, userId: string) => {
  try {
    const patientDoc = doc(db, 'users', userId, 'patients', patientId);

    const patientSnapshot = await getDoc(patientDoc);

    let patient: ClientType = {
      id: '',
      name: '',
      pathology: '',
    };

    if (patientSnapshot.exists()) {
      patient = {
        name: '',
        pathology: '',
        ...patientSnapshot.data(),
        id: patientSnapshot.id,
      };
      return patient;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el paciente:', error);
    throw error;
  }
};

export const getPlanExercises = async (
  planId: string,
  patientId: string,
  userId: string
) => {
  try {
    const planDoc = doc(
      db,
      'users',
      userId,
      'patients',
      patientId,
      'plan',
      planId
    );

    // Obtener el documento del plan
    const planSnapshot = await getDoc(planDoc);

    if (planSnapshot.exists()) {
      // Inicializar el objeto planData
      const planData: PlanType = {
        id: planSnapshot.id,
        name: '',
        day: '',
        image: '',
        duration: 0,
        exercises: [],
        ...planSnapshot.data(),
      };

      const exercisesCollection = collection(planDoc, 'exercises');
      const exercisesSnapshot = await getDocs(exercisesCollection);

      const exercisePromises = exercisesSnapshot.docs.map(async (doc2) => {
        const { ref } = doc2.data();
        const subCollectionRef = doc(
          db,
          'exercises',
          ref.path.split('/').pop()
        );
        const exerciseSnapshot = await getDoc(subCollectionRef);

        const exerciseData = {
          name: '',
          image: '',
          description: '',
          video_link: '',
          series: 0,
          repetitions: 0,
          ...exerciseSnapshot.data(),
          ...doc2.data(),
          id: doc2.id,
        };

        return exerciseData;
      });

      // Esperar a que todas las promesas se resuelvan
      planData.exercises = await Promise.all(exercisePromises);

      return planData;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el plan:', error);
    throw error;
  }
};
