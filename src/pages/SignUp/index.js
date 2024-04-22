import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

function SignUp() {
  return (
    <div className="signup bg-[var(--background-color)]">
      <div className="header flex items-center px-[51px] h-[100px]">
        <img className="w-[117px]" src="./logo1.png" alt="logo" />
      </div>
      <div className="login flex flex-col items-center py-8">
        <div className="email flex flex-col items-center">
          <p className="mt-12 mb-6 px-3 w-[400px] text-[var(--white)] text-[50px] font-bold">
            Sign up to start listening
          </p>
        </div>
        {/* email */}
        <div className="email flex flex-col items-center mx-[120px] py-[48px] text-[var(--white)] font-semibold text-base border-b border-zinc-700">
          <div className="w-[360px] font-medium">
            <p className="text-sm my-2">Email address</p>
            <input
              type="email"
              placeholder="name@domain.com"
              className="py-2.5 px-4 w-full placeholder:text-[var(--text-color)] placeholder:text-base bg-[var(--background-color)] rounded-[6px] border border-gray-500 focus:outline-gray-50"
            />
          </div>
          <div className="mt-5 w-[360px] font-medium">
            <p className="text-[#1ed760] text-sm cursor-pointer hover:underline">Use phone number instead.</p>
          </div>
          <button className="w-[360px] mt-8 mb-3.5 p-2.5 bg-[#1ed760] text-[var(--background-color)] rounded-[36px] hover:brightness-110">
            Next
          </button>
          <div className="relative">
            <p className="absolute top-[35px] left-[-20px] px-3 bg-[var(--background-color)] text-[var(--white)]">or</p>
          </div>
        </div>
        {/* social */}
        <div className="social flex flex-col justify-center items-center gap-3 mx-[120px] py-[48px] text-[var(--white)] font-semibold border-b border-zinc-700">
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
        {/* sign up */}
        <div className="signup flex flex-col justify-center items-center gap-5 mx-[120px] py-[48px]">
          <div className="py-4 flex justify-center items-center gap-2 font-medium">
            <p className="text-[var(--text-color)]">
              Already have an account?{' '}
              <a href="/login" className="text-[var(--white)] hover:text-[#1ed760] underline">
                Log in here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="p-8 bg-[var(--background-color)]">
        <p className="text-[var(--text-color)] text-xs text-center">
          This site is protected by reCAPTCHA and the Google{' '}
          <a className="text-[var(--text-color)] underline" href="https://policies.google.com/privacy">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a className="text-[var(--text-color)] underline" href="https://policies.google.com/terms">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
