import './post-avatar-user.css';

type Props = {
  urlImage: string;
  alt?: string;
};

const PostAvatarUser: React.FC<Props> = ({ urlImage, alt }) => {
  return <img src={urlImage} alt={alt && "User Avatar"} className="avatar" />;
};

export default PostAvatarUser;