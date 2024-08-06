'use client';
export default function Home() {

  const getUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <h1>Home Test</h1>
      <button onClick={getUsers}>Get Users</button>
    </>
  );
}
