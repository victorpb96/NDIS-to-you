import { useRouter } from 'next/router';
import type { FormEvent } from 'react';

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push('/profile');
    } else {
      // Handle errors
    }
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
      </div>
      <form
        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <input
            type="email"
            className="block text-sm font-medium leading-6 text-gray-900"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex items-center justify-between text-sm font-medium leading-6 text-gray-900">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
