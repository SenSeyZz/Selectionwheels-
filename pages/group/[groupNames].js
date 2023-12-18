import { useRouter } from 'next/router';

const GroupPage = () => {
  const router = useRouter();

  const { groupNames } = router.query;

  return (
    <div>
      <h1>Group Page: {groupNames}</h1>
      {/* Add content related to the specific group */}
    </div>
  );
};

export default GroupPage;
