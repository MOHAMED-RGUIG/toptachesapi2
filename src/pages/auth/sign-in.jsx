import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from 'axios'; // Import axios for API calls

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // To handle redirection

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        USR: username,
        MotDePasse: password,
      });
      
      if (response.data.success) {
        localStorage.setItem("loggedInUser", response.data.data.USR);
        // Redirect to dashboard
        navigate('/dashboard/home');
      }
    } catch (error) {
      setErrorMessage('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5" style={{ marginTop: '50px' }}>
        <div className="text-center">
          <img 
            src="/img/logo_footer.png" 
            alt="Sign In" 
            className="mx-auto mb-4" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
          <Typography 
            variant="h3" 
            color="blue-gray" 
            className="text-4xl font-bold animate-bounce mb-4">
            Bienvenu chez nous!
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleLogin}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Nom d'utilisateur
            </Typography>
            <Input
              size="lg"
              placeholder="ex: jdoe"
              className="rounded-lg !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Mot de passe
            </Typography>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                size="lg"
                placeholder="********"
                className="rounded-lg !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div 
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </div>
          </div>
          {errorMessage && (
            <Typography variant="small" color="red" className="mb-4">
              {errorMessage}
            </Typography>
          )}
          <Button type="submit" className="mt-6 bg-[#1E3A8A] text-white rounded-lg" fullWidth>
            Se connecter
          </Button>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="w-full object-cover rounded-3xl"
          style={{ height: '570px' }}  // Set custom height in pixels
        />
      </div>
    </section>
  );
}

export default SignIn;
