import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log('useLogin user', data.user);
      queryClient.setQueryData(['user_xx'], data.user);
      navigate('/dashboard', { replac: true });
    },
    onError: (err) => {
      console.log('Error', err);
      toast.error('provide email or password are incorrect');
    },
  });

  return { login, isLoading };
};
