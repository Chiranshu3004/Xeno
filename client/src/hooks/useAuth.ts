import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification,getIdToken } from 'firebase/auth';
import { auth } from '../config/firebase';
import { setUser } from '../services/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../api/auth/authApi';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();

  const user = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.user.token);

  const handleRegister = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      await register({ email, password }).unwrap();
      const token = await user.getIdToken();
      dispatch(setUser({ user, token }));
      navigate('/verify-email');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await getIdToken(user);
        if (user.emailVerified) {
          dispatch(setUser({ user, token }));
          navigate('/dashboard');
        } else {
          navigate('/verify-email');
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const isAuthenticated = !!user && !!token;

  return { handleRegister, isLoading, error, isAuthenticated };
};
