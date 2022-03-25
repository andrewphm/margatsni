import TimelinePost from './TimelinePost';

const Timeline = ({ timelinePosts }) => {
  return (
    <div className="max-w-[580px] min-w-[580px] flex w-full mr-8">
      <ul className="w-full">
        {timelinePosts.map((post, i) => (
          <li key={i} className="my-7">
            <TimelinePost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
