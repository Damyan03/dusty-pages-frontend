import Icon from '../components/Icon';
import UserProfile from '../components/UserProfile';
import BigCard from '../components/BigCard';
import HorizontalScrollableArea from '../components/HorizontalScrollableArea';

function Profile() {
	return (
		<>
			<div className="full flex flex-col gap-2">
				<UserProfile />
				<div className="flex items-center gap-2">
					<h2 className="text-2xl">Statistics</h2>
					<Icon src="down-arrow" className="size-7" />
				</div>
				<BigCard type="tiny" />
				<BigCard type="tiny" />
				<BigCard type="tiny" />
				<BigCard type="tiny" />
				<BigCard type="tiny" />
				<HorizontalScrollableArea title="Recent Articles">
					<div className="size-40 center flex-none bg-sub rounded-2xl" />
					<div className="size-40 center flex-none bg-sub rounded-2xl" />
					<div className="size-40 center flex-none bg-sub rounded-2xl" />
				</HorizontalScrollableArea>
			</div>
		</>
	);
}

export default Profile;
