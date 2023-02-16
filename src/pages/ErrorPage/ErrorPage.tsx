import { useRouteError } from 'react-router-dom';
import Headline from '../../components/atoms/Headline/Headline';

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Headline title="Oops! 👻" description="Sorry, an unexpected error has occurred." />

      <p className="p-8">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
