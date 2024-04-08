import ClassComponentsDemo from './../components/demo/ClassComponentsDemo';

// sayfa componenti UI componentlerinin çoklandığı ve birleştirildiği yer.
function ClassComponentSamplePage() {
	return (
		<div style={{ padding: '20px' }}>
			<ClassComponentsDemo title="classComponent1" color="red" />
			<ClassComponentsDemo title="classComponent2" color="blue" />
			<ClassComponentsDemo title="classComponent3" />
			<ClassComponentsDemo />
		</div>
	);
}

export default ClassComponentSamplePage;
