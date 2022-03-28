import TimelinePost from './TimelinePost';

const Timeline = ({ timelinePosts }) => {
  return (
    <div className="max-w-[580px] flex w-full lg1:mr-8">
      <ul className="w-full">
        {timelinePosts.map((post, i) => (
          <li key={i} className="mb-7">
            <TimelinePost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
