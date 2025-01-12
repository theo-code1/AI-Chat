function CancelIcon(props, { className }) {
  return (
    <svg
      className={`${className}`}
      stroke="white"
      fill="white"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1.4em"
      width="1.4em"
      {...props}
    >
      <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" />
      <path d="M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z" />
    </svg>
  );
}

export default CancelIcon;
