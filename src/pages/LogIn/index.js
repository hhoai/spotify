import './login.css';

import { FcGoogle } from 'react-icons/fc';
import { AiFillApple, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

function LogIn() {
  return (
    <div>
      <div className="header flex items-center px-[51px] h-[100px] bg-[var(--background-color)]">
        <img className="w-[117px]" src="./logo1.png" alt="logo" />
      </div>
      <div className="content flex justify-center items-center p-8 bg-gradient-to-b from-[#2a2a2a] to-[#010101]">
        <div className="login py-8 bg-[var(--background-color)] rounded-2xl">
          <p className="mt-12 mb-6 text-center text-[var(--white)] text-3xl font-bold">Log in to Spotify</p>
          {/* social */}
          <div className="social flex flex-col justify-center items-center gap-3 mx-[120px] p-[48px] text-[var(--white)] font-semibold border-b border-zinc-700">
            <div className="w-[360px] px-8 py-2 flex justify-center items-center gap-2 border rounded-[24px] border-gray-500 hover:border-gray-50 cursor-pointer">
              <FcGoogle />
              <p>Continue with Google</p>
            </div>
            <div className="w-[360px] px-8 py-2 flex justify-center items-center border gap-2 rounded-[24px] border-gray-500 hover:border-gray-50 cursor-pointer">
              <AiFillApple />
              <p>Continue with Apple</p>
            </div>
            <div className="w-[360px] px-8 py-2 flex justify-center border gap-2 rounded-[24px] border-gray-500 hover:border-gray-50 cursor-pointer">
              <p>Continue with phone number</p>
            </div>
          </div>
          {/* email */}
          <div className="email flex flex-col items-center mx-[120px] p-[48px] text-[var(--white)] font-semibold text-base border-b border-zinc-700">
            <div className="w-[360px] py-4 font-medium">
              <p className="text-sm my-2">Email or username</p>
              <input
                type="email"
                placeholder="Email or username"
                className="p-2.5 w-full placeholder:text-[#a7a7a7] placeholder:text-base bg-[var(--background-color)] rounded-[6px] border border-gray-500 focus:outline-gray-50"
              />
            </div>
            <div className="w-[360px] font-medium">
              <p className="text-sm my-2">Password</p>
              <input
                type="password"
                placeholder="Password"
                className="p-2.5 w-full placeholder:text-[#a7a7a7] placeholder:text-base bg-[var(--background-color)] rounded-[6px] border border-gray-500 focus:outline-gray-50"
              />
              <div className="relative">
                <AiOutlineEye className="hidden absolute right-[15px] top-[-35.5px] text-lg text-[#a7a7a7] cursor-pointer" />
                <AiOutlineEyeInvisible className="absolute right-[15px] top-[-35.5px] text-lg text-[#a7a7a7] cursor-pointer" />
              </div>
            </div>
            <div className="switch-btn flex gap-3 items-center mt-4">
              {/* <!-- Rounded switch --> */}
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <span className="text-sm font-normal">Remember me</span>
            </div>
            <button className="w-[360px] mt-8 mb-3.5 p-2.5 bg-[#1ed760] text-[var(--background-color)] rounded-[36px] hover:scale-105 hover:brightness-110">
              Log In
            </button>
            <div>
              <a href="/forgot" className="font-medium text-sm text-[var(--white)] hover:text-[#1ed760] underline">
                Forgot your password?
              </a>
            </div>
          </div>
          {/* sign up */}
          <div className="signup flex flex-col justify-center items-center gap-5 mx-[120px] p-[48px]">
            <div className="py-4 flex justify-center items-center gap-2 font-medium">
              <p className="text-[#a7a7a7]">
                Don't have an account?{' '}
                <a href="/signup" className="text-[var(--white)] hover:text-[#1ed760] underline">
                  Sign up for Spotify
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 bg-[var(--background-color)]">
        <p className="text-[#a7a7a7] text-xs text-center">
          This site is protected by reCAPTCHA and the Google{' '}
          <a className="text-[#a7a7a7] underline" href="https://policies.google.com/privacy">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a className="text-[#a7a7a7] underline" href="https://policies.google.com/terms">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </div>
  );
}

export default LogIn;
