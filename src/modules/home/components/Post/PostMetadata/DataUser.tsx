import PostMetadataVerified from "./PostMetadataVerified";

type Props = {
    username: string;
    fullName: string;
    verified?: boolean;
};

const DataUser: React.FC<Props> = ({
    fullName,
    username,
    verified,
}) => {
    return (
        <div className="data-user">
            <div className="full-name">
                <span>{fullName}</span>
                {verified && <PostMetadataVerified />}
            </div>
            <div>
                <span id="user-name">{username}</span>
            </div>
    </div>
  );
};

export default DataUser;