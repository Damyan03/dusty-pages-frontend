import BigCard from "../components/BigCard";
import Button from "../components/Button";
import Icon from "../components/Icon";

function Category() {
	return (<>
		<div className="full flex flex-col gap-2">
			<div className="h-10 bg-amber-400"></div>
			<div className="flex items-center gap-2">
				<h2 className="text-2xl">Top Articles</h2>
				<Icon src="down-arrow" className="size-7"/>
			</div>
			<BigCard type='wide'/>
			<BigCard type='wide'/>
			<BigCard type='wide'/>
			<div className="flex justify-between">
				<div className="flex items-center gap-2">
					<h2 className="text-2xl">Random</h2>
					<Icon src="refresh" className="size-7"/>
				</div>
				<Button text="View all Articles"/>
			</div>
			<BigCard type='small'/>
			<BigCard type='small'/>
			<BigCard type='small'/>
			<BigCard type='small'/>
			<BigCard type='small'/>
		</div>
	</>
	)
}

export default Category;