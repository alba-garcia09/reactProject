import React from 'react';
import RegisterForm from '../../components/RegisterFrom';
import PageTransition from '../../components/PageTransition';

const RegisterPage = () => {
  return (
    <PageTransition>
      <div>
        <RegisterForm />
      </div>
    </PageTransition>
  );
};

export default RegisterPage;
