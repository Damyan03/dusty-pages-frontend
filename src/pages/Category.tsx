import BigCard from "../components/BigCard";

function Category() {
	return (<>
		<div className="full flex flex-col gap-2">
			<div className="h-10 bg-amber-400"></div>
			<h2 className="text-2xl">Top Articles</h2>
			<BigCard type='wide'/>
			<BigCard type='wide'/>
			<BigCard type='wide'/>
			<h2 className="text-2xl">Random</h2>
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