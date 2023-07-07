import React from "react";
import "./Tabs3.css";

const Tabs3 = () => {
	return (
		<>
			<div class="wrapper">
				<br />
				<h2 class="mb-4">Skill set in percentage</h2>
				<br />
				<div class="skill">
					<p>Web Design</p>
					<div class="skill-bar skill1 wow slideInLeft animated">
						<span class="skill-count1">80%</span>
					</div>
				</div>
				<div class="skill">
					<p>Web Development</p>
					<div class="skill-bar skill2 wow slideInLeft animated">
						<span class="skill-count2">85%</span>
					</div>
				</div>
				<div class="skill">
					<p>Blockchain</p>
					<div class="skill-bar skill3 wow slideInLeft animated">
						<span class="skill-count3">65%</span>
					</div>
				</div>
				<div class="skill">
					<p>VueJS</p>
					<div class="skill-bar skill4 wow slideInLeft animated">
						<span class="skill-count4">70%</span>
					</div>
				</div>
				<div class="skill">
					<p>Laravel</p>
					<div class="skill-bar skill5 wow slideInLeft animated">
						<span class="skill-count5">90%</span>
					</div>
				</div>
				<div class="skill">
					<p>Cyber Security</p>
					<div class="skill-bar skill6 wow slideInLeft animated">
						<span class="skill-count6">50%</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Tabs3;
