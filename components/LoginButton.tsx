import { Button } from "flowbite-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(session.user)} <br />
        <Button color="failure" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button color="success" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}
