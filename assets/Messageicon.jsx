function BiMessage(props) {
  return (
    <svg
      stroke="white"
      fill="white"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1.4em"
      width="1.4em"
      {...props}
    >
      <path d="M20,2H4C2.897,2,2,2.897,2,4v12c0,1.103,0.897,2,2,2h3v3.767L13.277,18H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16h-7.277L9,18.233V16H4V4h16V16z" />
    </svg>
  );
}

export default BiMessage;
