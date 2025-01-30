import Link from "next/link";

export default function Login() {
  return (
    <main className="flex-center flex-col h-screen">
      <section className="flex-center flex-col gap-3">
        <h2>Login</h2>
        <form className="flex flex-col">
          <div className="form-group">
            <label htmlFor="user">Usuário:</label>
            <input type="user" id="user" name="user" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
          </div>
          <Link href="/Dashboard">
            <button className="self-center" type="submit">
              Login
            </button>
          </Link>
        </form>
      </section>
    </main>
  );
}
