import TimelinePost from './TimelinePost';
import Skeleton from 'react-loading-skeleton';
import useFetchUserTimeline from 'src/hooks/useFetchUserTimeline';

const Timeline = ({ timelinePosts }) => {
  const { timeline, error } = useFetchUserTimeline();

  return (
    <div className="max-w-[580px] flex w-full lg1:mr-8">
      <ul className="w-full">
        {timeline ? (
          <>
            {timeline.map((post, i) => (
              <li key={i} className="mb-7">
                <TimelinePost post={post} />
              </li>
            ))}
          </>
        ) : (
          <Skeleton className="mb-4" count={4} height={550} />
        )}
      </ul>
    </div>
  );
};

export default Timeline;
