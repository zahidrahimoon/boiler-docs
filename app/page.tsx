import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect root to the Introduction page
  redirect('/introduction');
}
