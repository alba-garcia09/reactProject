import React from 'react';
import LoginForm from '../../components/LoginForm';
import PageTransition from '../../components/PageTransition';

const LoginPage = () => {
  return (
    <PageTransition>
      <div>
        <LoginForm />
      </div>
    </PageTransition>
  );
};

export default LoginPage;
