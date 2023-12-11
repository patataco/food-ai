import RecipesCreationForm from '~/app/_components/RecipesCreationForm';
import ServiceHeader from '~/app/_components/ServiceHeader';
import { getServerAuthSession } from '~/server/auth';

const Home = async () => {
  const session = await getServerAuthSession();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col items-center justify-center gap-5 md:gap-12">
        <ServiceHeader />
        <RecipesCreationForm session={session} />
      </div>
    </div>
  );
};
export default Home;
