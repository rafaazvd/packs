import React, {
  useState,
} from 'react';
import { GoEyeClosed, GoEye } from 'react-icons/go';

import logoLogin from '../../assets/logo.png';
import background from '../../assets/login-background.png';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Img,
  Button,
  Button1,
  Input,
} from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeClosed, setEyeClosed] = useState(true);

  const { login } = useAuth();

  const handleSubmitLogin = () => {
    login(email, password);
  };
  const handleVisiblePass = () => {
    setEyeClosed(!eyeClosed);
  };
  return (
    <Container img={background}>
      <Img src={logoLogin} />
      <div>
        <Input>
        <input
          style={{border: 'none', width: '100%', height: '100%'}}
          name="email"
          placeholder="E-mail:"
          autoCapitalize="off"
          onChange={(event: any) => setEmail(event.target.value)}
          value={email}
        />
        </Input>
        <Input>
        {
            eyeClosed && (
              <>
              <input
                style={{border: 'none', width: '100%', height: '100%'}}
                name="password"
                type="password"
                placeholder="Senha :"
                autoCapitalize="off"
                onChange={(event: any) => setPassword(event.target.value)}
                value={password}
              />
              <Button1 type="button" onClick={() => handleVisiblePass()}>
                  <GoEye size={17} color="#000" />
              </Button1>
              </>
            )
        }
        {
            !eyeClosed && (
            <>
            <input
            style={{border: 'none', width: '100%', height: '100%'}}
              name="password"
              type="text"
              placeholder="Senha :"
              autoCapitalize="off"
              onChange={(event: any) => setPassword(event.target.value)}
              value={password}
            />
            <Button1 type="button" onClick={() => handleVisiblePass()}>
              <GoEyeClosed size={17} color="#000" />
            </Button1>
            </>
            )
        }
        </Input>

      </div>

      <Button onClick={handleSubmitLogin}>Entrar</Button>

    </Container>

  );
};

export default Login;
