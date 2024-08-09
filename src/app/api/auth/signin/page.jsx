import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <>
      <section className="bg-[#F0F0F0] min-h-screen pt-10">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-4/12 bg-white px-8 py-10 rounded-lg shadow-lg">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
