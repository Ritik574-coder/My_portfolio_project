import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowUp, D as ArrowDown, E as ArrowLeft, S as Award, T as ArrowRight, _ as Database, a as Sparkles, b as CircleCheck, c as Search, d as Linkedin, f as Layers, g as Download, h as ExternalLink, i as Terminal, l as Menu, m as FileText, n as Workflow, o as ShieldCheck, p as Github, s as Send, t as X, u as Mail, v as Cpu, w as ArrowUpRight, x as Check, y as Copy } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C7x9KZTe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DataCanvas({ paused = false }) {
	const canvasRef = (0, import_react.useRef)(null);
	const pausedRef = (0, import_react.useRef)(paused);
	pausedRef.current = paused;
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animId = 0;
		let width = window.innerWidth;
		let height = window.innerHeight;
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		window.addEventListener("resize", resize);
		const mouse = {
			x: -1e3,
			y: -1e3,
			radius: 140
		};
		const handleMouseMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};
		const handleMouseLeave = () => {
			mouse.x = -1e3;
			mouse.y = -1e3;
		};
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		document.addEventListener("mouseleave", handleMouseLeave);
		const nodeCount = Math.min(55, Math.floor(width * height / 22e3));
		const nodes = [];
		const colors = [
			"#00f5ff",
			"#00d2b4",
			"#38bdf8"
		];
		for (let i = 0; i < nodeCount; i++) {
			const radius = Math.random() * 2 + 1.5;
			nodes.push({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - .5) * .45,
				vy: (Math.random() - .5) * .45,
				radius,
				color: colors[Math.floor(Math.random() * colors.length)],
				alpha: Math.random() * .5 + .3,
				pulsePhase: Math.random() * Math.PI * 2
			});
		}
		let frame = 0;
		const render = () => {
			if (!pausedRef.current) {
				frame += 1;
				ctx.clearRect(0, 0, width, height);
				const maxDistance = 120;
				for (let i = 0; i < nodes.length; i++) {
					const nodeA = nodes[i];
					nodeA.x += nodeA.vx;
					nodeA.y += nodeA.vy;
					if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
					if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;
					const dxMouse = mouse.x - nodeA.x;
					const dyMouse = mouse.y - nodeA.y;
					const distMouse = Math.hypot(dxMouse, dyMouse);
					if (distMouse < mouse.radius && distMouse > 0) {
						const force = (mouse.radius - distMouse) / mouse.radius;
						nodeA.x -= dxMouse / distMouse * force * 3;
						nodeA.y -= dyMouse / distMouse * force * 3;
					}
					for (let j = i + 1; j < nodes.length; j++) {
						const nodeB = nodes[j];
						const dx = nodeA.x - nodeB.x;
						const dy = nodeA.y - nodeB.y;
						const dist = Math.hypot(dx, dy);
						if (dist < maxDistance) {
							const alpha = (1 - dist / maxDistance) * .18;
							ctx.beginPath();
							ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
							ctx.lineWidth = .8;
							ctx.moveTo(nodeA.x, nodeA.y);
							ctx.lineTo(nodeB.x, nodeB.y);
							ctx.stroke();
							if ((frame + i * 7 + j * 3) % 240 < 40) {
								const progress = (frame + i * 7 + j * 3) % 40 / 40;
								const px = nodeA.x + (nodeB.x - nodeA.x) * progress;
								const py = nodeA.y + (nodeB.y - nodeA.y) * progress;
								ctx.beginPath();
								ctx.fillStyle = "rgba(0, 245, 255, 0.75)";
								ctx.arc(px, py, 1.2, 0, Math.PI * 2);
								ctx.fill();
							}
						}
					}
					const pulse = Math.sin(frame * .04 + nodeA.pulsePhase) * .6;
					ctx.beginPath();
					ctx.fillStyle = nodeA.color;
					ctx.globalAlpha = Math.min(1, Math.max(.2, nodeA.alpha + pulse * .2));
					ctx.arc(nodeA.x, nodeA.y, nodeA.radius + (pulse > 0 ? pulse * .8 : 0), 0, Math.PI * 2);
					ctx.fill();
					ctx.globalAlpha = 1;
				}
			}
			animId = requestAnimationFrame(render);
		};
		animId = requestAnimationFrame(render);
		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
			cancelAnimationFrame(animId);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-screen",
		"aria-hidden": "true"
	});
}
var certificatePath = (file) => `/assets/certificates/${encodeURIComponent(file)}`;
var profile = {
	name: "Ritik Kumar",
	title: "Data Engineer & AI/ML Specialist",
	headline: "Building scalable, analytics-ready data systems and intelligent AI/ML pipelines from raw ingestion to enterprise data products.",
	location: "Patna, Bihar, India",
	email: "ritik74820@gmail.com",
	discord: "ritik_sky",
	discordUrl: "https://discord.com/users/1405958607429828708",
	github: "https://github.com/Ritik574-coder",
	linkedin: "https://www.linkedin.com/in/ritik-kumar-b81b32375/",
	tableau: "https://public.tableau.com/app/profile/ritik.sky",
	resumeUrl: `/assets/resume/ritik-resume.pdf`,
	portrait: `/assets/profile/ritik-kumar-portrait.webp`,
	stats: [
		{
			label: "Public Repositories",
			value: "20+"
		},
		{
			label: "Commits",
			value: "1,900+"
		},
		{
			label: "Projects",
			value: "16+"
		},
		{
			label: "Open Source",
			value: "Active Contributor"
		}
	]
};
var about = {
	summary: "I build data systems that turn messy operational data into governed, analytics-ready models. My portfolio is centered on SQL Server data warehousing, dbt analytics engineering, Medallion Architecture, data quality, CI/CD, and BI delivery.",
	journey: "My strongest work is project-led: production-style dbt pipelines with GitHub Actions, multi-source SQL Server warehouses, retail data quality systems, and dashboards that translate warehouse outputs into business decisions.",
	philosophy: "I learn by building complete systems, documenting tradeoffs, and raising each project toward professional team standards: architecture diagrams, tests, lineage, quality checks, and reproducible local environments.",
	mindset: "My engineering bias is toward clear layer boundaries, defensive SQL, auditable transformations, documented business rules, and simple deployment paths that recruiters and hiring managers can verify quickly.",
	openSource: "GitHub activity includes 20+ public repositories, 1,900+ commits, reusable project documentation, issue/PR templates, GitHub Actions workflows, and community-facing dbt/data warehouse/AI learning assets."
};
var github = {
	username: "Ritik574-coder",
	repositories: "20+",
	commits: "1,900+",
	achievements: [
		"Pull Shark x3",
		"Pair Extraordinaire x3",
		"Quickdraw",
		"YOLO"
	],
	highlights: [
		"Snowflake Data Engineering covering RBAC, virtual warehouses, and Star Schema modeling",
		"AI-assisted content pipelines with human-in-the-loop review and Cloudflare D1 storage",
		"AWS Data Engineering Lab with automated Boto3 pipelines and S3/Glue lakehouses",
		"dbt CI/CD with lint, parse, compile, run, test, deploy, and docs workflows",
		"SQL Server data warehouses using Bronze, Silver, and Gold Medallion schemas",
		"Knowledge graph data modeling linking interconnected nodes, entities, and provenance"
	]
};
var projects = [
	{
		id: "snowflake-data-engineering",
		title: "Snowflake Cloud Data Engineering",
		category: "Data Engineering",
		repository: "Snowflake-Data-Engineering-Project",
		href: "https://github.com/Ritik574-coder/Snowflake-Data-Engineering-Project",
		businessProblem: "Enterprise analytics demanded modern cloud data warehousing on Snowflake with scalable multi-cluster compute separation, secure role-based access control, and automated dimensional modeling.",
		solution: "Engineered an end-to-end Snowflake data warehouse featuring structured staging layers, dimensional Star Schema marts, data quality profiling, and automated Python-driven loading pipelines.",
		architecture: [
			"Snowflake Virtual Warehouses with compute/storage separation",
			"Staging, Silver conformance, and Gold Star Schema marts",
			"Role-Based Access Control (RBAC) and security hierarchy",
			"Snowflake Tasks, Streams, and automated Python ingestion"
		],
		technologies: [
			"Snowflake",
			"SQL",
			"Python",
			"Dimensional Modeling",
			"Cloud Data Warehouse"
		],
		achievements: [
			"Configured multi-cluster compute scaling and warehouse cost governance",
			"Modeled dimensional fact and dimension tables with role segregation",
			"Automated batch data quality checks and loading pipelines"
		],
		recruiterValue: "Proves hands-on competence with Snowflake, one of the most widely adopted enterprise cloud data warehouse platforms.",
		complexity: 4.8,
		featured: true
	},
	{
		id: "contentflow-ai",
		title: "ContentFlow AI & Agentic Pipelines",
		category: "AI & ML Engineering",
		repository: "contentflow-ai",
		href: "https://github.com/Ritik574-coder/contentflow-ai",
		businessProblem: "Manual content generation and publishing was fragmented, prone to hallucination, and lacked verification gates for human quality review.",
		solution: "Built an AI-assisted pipeline orchestrating multi-platform content publishing with human-in-the-loop approval, automated prompt chains, and serverless Cloudflare D1 relational storage.",
		architecture: [
			"LLM Prompt & Agent Orchestration layer",
			"Human-in-the-loop Approval & Gatekeeping Workflow",
			"Cloudflare Workers with D1 Serverless SQL storage",
			"Multi-platform automated REST API publishing"
		],
		technologies: [
			"AI Agents",
			"LLM Workflows",
			"TypeScript",
			"Cloudflare D1",
			"REST APIs"
		],
		achievements: [
			"Implemented automated prompt workflows with JSON schema enforcement",
			"Built an interactive approval gatekeeper preventing unreviewed publication",
			"Integrated low-latency D1 serverless relational data persistence"
		],
		recruiterValue: "Demonstrates modern AI/ML Engineering capability: combining LLM orchestration with structured databases, state machines, and production guardrails.",
		complexity: 4.5,
		featured: true
	},
	{
		id: "aws-data-engineering-lab",
		title: "AWS Data Engineering Lab",
		category: "Data Engineering",
		repository: "aws-data-engineering-lab",
		href: "https://github.com/Ritik574-coder/aws-data-engineering-lab",
		businessProblem: "Production cloud data pipelines require mastery of AWS services, IAM security policies, infrastructure automation, and cost-effective lakehouse query patterns.",
		solution: "Developed a comprehensive AWS Data Engineering lab implementing Boto3 scripts, S3 data lake partitioning, Glue catalog crawlers, and serverless Amazon Athena SQL queries.",
		architecture: [
			"AWS S3 Data Lake Partitioning & Lifecycle Rules",
			"AWS Glue Data Catalog & Automated Crawlers",
			"Amazon Athena Serverless SQL Analytics",
			"Boto3 Python Ingestion & Orchestration",
			"IAM Least-Privilege Security Policies"
		],
		technologies: [
			"AWS S3",
			"AWS Glue",
			"Amazon Athena",
			"Boto3",
			"Python",
			"AWS CLI"
		],
		achievements: [
			"Engineered automated S3 partition management with Boto3",
			"Configured Glue crawler schemas for zero-server Athena SQL queries",
			"Implemented cloud security best practices with dedicated IAM roles"
		],
		recruiterValue: "Proves hands-on AWS cloud data capabilities for teams building and deploying data lakehouses in AWS.",
		complexity: 4.5,
		featured: true
	},
	{
		id: "great-minds-knowledge-graph",
		title: "Knowledge Graph & Graph Modeling",
		category: "AI & ML Engineering",
		repository: "Great-Minds-Knowledge-Graph",
		href: "https://github.com/Ritik574-coder/Great-Minds-Knowledge-Graph",
		businessProblem: "Interconnected relationships between historical decisions, lessons, technological discoveries, and systems cannot be modeled effectively in flat tabular schemas.",
		solution: "Created an interactive graph-based data system modeling entities, relationships, provenance, and network connections with visual dynamic exploration.",
		architecture: [
			"Graph Data Modeling (Nodes & Directed Edges)",
			"Entity-Relationship Provenance Engine",
			"Interactive Dynamic Graph Canvas & Traversal",
			"Multi-dimensional Filtering & Search Interface"
		],
		technologies: [
			"Graph Data",
			"JavaScript",
			"Knowledge Graphs",
			"Network Analysis"
		],
		achievements: [
			"Modeled multi-hop interconnected graph nodes with semantic relationships",
			"Built dynamic visual exploration with real-time node traversal",
			"Structured provenance and source verification metadata for AI RAG readiness"
		],
		recruiterValue: "Demonstrates advanced knowledge graph data modeling, increasingly essential for Graph RAG, agentic context, and semantic architectures.",
		complexity: 4.2,
		featured: true
	},
	{
		id: "logging-for-data-engineers",
		title: "Logging & Observability for Data Pipelines",
		category: "Data Platform",
		repository: "Logging-For-Data-Engineers",
		href: "https://github.com/Ritik574-coder/Logging-For-Data-Engineers",
		businessProblem: "Silent pipeline failures, unmonitored data drift, and missing runtime telemetry in batch ETL jobs lead to downstream corrupt data marts.",
		solution: "Architected structured JSON logging, metrics collection, and alerting patterns for data engineering jobs with Docker and Python.",
		architecture: [
			"Structured JSON Log Formatting & Schema",
			"Execution Timing & Process Metric Counters",
			"Pipeline Health Checks & Anomaly Alarms",
			"Dockerized Telemetry & Test Environments"
		],
		technologies: [
			"Python",
			"Structured Logging",
			"Docker",
			"Shell",
			"Observability"
		],
		achievements: [
			"Standardized data pipeline logging schema across batch processes",
			"Captured contextual telemetry (row counts, duration, error trace)",
			"Automated health check verification for reliable alerting"
		],
		recruiterValue: "Shows production maturity: proving that pipelines are designed to be observable, testable, and maintainable in enterprise environments.",
		complexity: 3.8
	},
	{
		id: "dbt-analytics-engineering",
		title: "dbt Analytics Engineering",
		category: "Data Engineering",
		repository: "dbt-analytics-engineering",
		href: "https://github.com/Ritik574-coder/dbt-analytics-engineering",
		businessProblem: "Transformation logic was unversioned, untested, manually deployed, and difficult to maintain as analytics rules became more complex.",
		solution: "Built a production-style dbt Core project on SQL Server with CI/CD, SQLFluff linting, SCD Type 2 snapshots, tests, macros, seeds, and docs published through GitHub Pages.",
		architecture: [
			"Staging, intermediate, and marts model layers",
			"SQL Server 2022 in Docker Compose",
			"GitHub Actions for CI, CD, and documentation",
			"dbt tests, snapshots, macros, seeds, and lineage docs"
		],
		technologies: [
			"dbt Core",
			"SQL Server",
			"T-SQL",
			"Docker",
			"GitHub Actions",
			"SQLFluff",
			"Python"
		],
		achievements: [
			"Automated PR validation with dbt parse, compile, run, and test",
			"Production deployment workflow with repository secrets",
			"SCD Type 2 history tracking through dbt snapshots",
			"Generated dbt documentation and lineage for reviewers"
		],
		recruiterValue: "Shows readiness for analytics engineering teams that expect tested SQL, dbt conventions, CI/CD, lineage, and production deployment discipline.",
		complexity: 5,
		featured: true
	},
	{
		id: "retail-medallion-data-warehouse",
		title: "Retail Medallion Data Warehouse",
		category: "Data Engineering",
		repository: "Medallion-Data-Warehouse",
		href: "https://github.com/Ritik574-coder/Medallion-Data-Warehouse",
		businessProblem: "A retail business needed unified analytics across customers, employees, inventory, products, stores, returns, reviews, and sales transactions despite inconsistent source quality.",
		solution: "Created a containerized SQL Server 2022 warehouse using Medallion Architecture with per-entity Silver transformations and documented business rules.",
		architecture: [
			"Bronze raw ingestion from CSV files",
			"Silver cleansing with isolated entity pipelines",
			"Gold star schema design in progress",
			"GitHub project governance and PR automation"
		],
		technologies: [
			"SQL Server 2022",
			"T-SQL",
			"Docker Compose",
			"GitHub Actions",
			"CSV Batch Ingestion"
		],
		achievements: [
			"Implemented defensive SQL with TRY_CONVERT and CASE logic",
			"Standardized dates, emails, phones, currency, booleans, and categories",
			"Documented transformations for 8 retail entities",
			"Added issue templates, PR template, changelog, and security docs"
		],
		recruiterValue: "Demonstrates the data quality work that dominates real warehouse delivery: messy sources, entity-specific rules, auditability, and maintainable SQL.",
		complexity: 4.5,
		featured: true
	},
	{
		id: "sql-server-data-warehouse",
		title: "SQL Server Data Warehouse",
		category: "Data Engineering",
		repository: "sqlserver-datawarehouse",
		href: "https://github.com/Ritik574-coder/sqlserver-datawarehouse",
		businessProblem: "CRM and ERP data were siloed, preventing business users from analyzing customers, products, locations, and sales from one trusted model.",
		solution: "Built a complete SQL Server warehouse with Bronze, Silver, and Gold layers, stored procedure ETL, dimensional views, and Apache Superset dashboards.",
		architecture: [
			"CRM and ERP source ingestion",
			"Bronze raw tables for auditability",
			"Silver standardization and conformance",
			"Gold Star Schema views for BI consumption"
		],
		technologies: [
			"SQL Server",
			"T-SQL Stored Procedures",
			"Python",
			"Apache Superset",
			"Docker",
			"Shell"
		],
		achievements: [
			"Integrated 6 source tables across CRM and ERP domains",
			"Modeled dim_customers, dim_products, dim_location, and fact_sales",
			"Added quality checks across Bronze, Silver, and Gold layers",
			"Documented architecture with ERDs, data flow diagrams, and PlantUML"
		],
		recruiterValue: "Proves end-to-end warehouse capability: ingestion, transformation, dimensional modeling, quality validation, documentation, and dashboard enablement.",
		complexity: 4,
		featured: true
	},
	{
		id: "data-ecosystem-platform",
		title: "Data Ecosystem Platform",
		category: "Data Engineering",
		repository: "data-ecosystem-platform",
		href: "https://github.com/Ritik574-coder/data-ecosystem-platform",
		businessProblem: "Data engineering learning artifacts were spread across concepts without a single platform showing warehouse, lake, lakehouse, and distributed processing patterns.",
		solution: "Organized a multi-domain repository covering Data Warehouse, Data Lake, Data Lakehouse, Modern Data Engineering, and PySpark.",
		architecture: [
			"Warehouse concepts and dimensional modeling",
			"Data lake file-based architecture",
			"Lakehouse Medallion patterns",
			"PySpark distributed processing notebooks"
		],
		technologies: [
			"Python",
			"PySpark",
			"Jupyter",
			"T-SQL",
			"Git"
		],
		achievements: [
			"Created a broad data architecture learning hub",
			"Covered warehouse, lake, lakehouse, and big data concepts",
			"Built 72-commit evidence trail of active learning"
		],
		recruiterValue: "Shows platform-level thinking beyond one tool and prepares the portfolio for modern lakehouse and PySpark conversations.",
		complexity: 3.5,
		featured: true
	},
	{
		id: "dbt-learning-project",
		title: "dbt Learning Project",
		category: "Learning",
		repository: "dbt_learning_project",
		href: "https://github.com/Ritik574-coder/dbt_learning_project",
		businessProblem: "Needed a structured path to learn dbt beyond basic tutorials, including testing, documentation, snapshots, incremental models, and environments.",
		solution: "Built a comprehensive SQL Server dbt project covering dbt fundamentals through advanced analytics engineering workflows.",
		architecture: [
			"Staging, intermediate, and marts layers",
			"Seeds, macros, variables, snapshots, and tests",
			"Source freshness and dbt docs",
			"GitHub Actions fundamentals"
		],
		technologies: [
			"dbt Core",
			"SQL Server",
			"Python",
			"pyodbc",
			"GitHub Actions"
		],
		achievements: [
			"Maintained 169 commits showing sustained learning depth",
			"Earned community signal with a star and fork",
			"Documented the pipeline in DATA_PIPELINE_GUIDE.md"
		],
		recruiterValue: "Signals disciplined learning and strong dbt foundation, useful for junior-to-associate analytics engineering roles.",
		complexity: 4,
		featured: true
	},
	{
		id: "workforce-pulse",
		title: "Workforce Pulse",
		category: "Business Intelligence",
		repository: "Bi-Project-",
		href: "https://github.com/Ritik574-coder/Bi-Project-",
		businessProblem: "HR teams needed visibility into attrition, demographics, and workforce performance without manual spreadsheet analysis.",
		solution: "Built an interactive Power BI HR analytics dashboard with navigation panels, tooltip pages, slicers, and KPI views.",
		architecture: [
			"Power BI semantic model",
			"DAX measures",
			"Bookmark navigation",
			"Tooltip drill-through pages"
		],
		technologies: [
			"Power BI",
			"DAX",
			"Excel/CSV"
		],
		achievements: [
			"Tracked attrition KPIs",
			"Added demographic breakdowns",
			"Created smooth navigation and tooltip drill-through"
		],
		recruiterValue: "Shows business-facing analytics delivery on top of data modeling skills.",
		complexity: 3.5
	},
	{
		id: "people-insights",
		title: "People Insights",
		category: "Business Intelligence",
		repository: "Bi-Project-",
		href: "https://github.com/Ritik574-coder/Bi-Project-",
		businessProblem: "HR leadership needed to understand education, salary, age, and performance patterns for hiring and compensation decisions.",
		solution: "Created a Tableau HR dashboard with hiring trends, education-performance matrix, and salary-age scatter analysis.",
		architecture: [
			"Tableau Public dashboard",
			"HR analytics model",
			"Interactive visual analysis"
		],
		technologies: ["Tableau", "Excel/CSV"],
		achievements: [
			"Built salary-age scatter plot",
			"Mapped education and performance",
			"Visualized hiring trends"
		],
		recruiterValue: "Demonstrates analytics storytelling and dashboard design for stakeholders.",
		complexity: 3
	},
	{
		id: "sales-pulse-2023",
		title: "Sales Pulse 2023",
		category: "Business Intelligence",
		repository: "Bi-Project-",
		href: "https://github.com/Ritik574-coder/Bi-Project-",
		businessProblem: "Sales leaders needed a unified view of customer growth, order volume, top buyers, and year-over-year performance.",
		solution: "Developed a Power BI dashboard with KPI cards, YoY comparisons, customer growth tracking, and buyer spotlighting.",
		architecture: [
			"Power BI model",
			"DAX KPI measures",
			"Slicer-based sales exploration"
		],
		technologies: [
			"Power BI",
			"DAX",
			"Excel/CSV"
		],
		achievements: [
			"Created YoY KPI comparisons",
			"Highlighted top buyers",
			"Tracked order and customer growth"
		],
		recruiterValue: "Shows BI delivery for commercial analytics use cases.",
		complexity: 3
	},
	{
		id: "world-economy-analysis",
		title: "World Economy Analysis",
		category: "Business Intelligence",
		repository: "Bi-Project-",
		href: "https://github.com/Ritik574-coder/Bi-Project-",
		businessProblem: "Analysts needed a visual way to compare macroeconomic indicators across countries and trends.",
		solution: "Built a global economy dashboard covering GDP, growth, geography, and economic health indicators.",
		architecture: [
			"Economic dataset modeling",
			"Geographic mapping",
			"Trend analysis dashboard"
		],
		technologies: [
			"Tableau",
			"Power BI",
			"Public Economic Data"
		],
		achievements: [
			"Visualized GDP by country",
			"Compared growth rates",
			"Mapped economic indicators geographically"
		],
		recruiterValue: "Adds domain breadth and analytical communication evidence.",
		complexity: 3
	},
	{
		id: "atm-analytics-dashboard",
		title: "ATM Analytics Dashboard",
		category: "Business Intelligence",
		repository: "Bi-Project-",
		href: "https://github.com/Ritik574-coder/Bi-Project-",
		businessProblem: "Financial operations needed monitoring across ATM uptime, transaction volume, and location-level performance.",
		solution: "Created an operational analytics dashboard for ATM network performance and transaction KPIs.",
		architecture: [
			"Operational KPI model",
			"Location-based dashboard",
			"Transaction volume analysis"
		],
		technologies: [
			"Power BI",
			"Tableau",
			"Financial Operations Data"
		],
		achievements: [
			"Tracked uptime",
			"Analyzed transaction volume",
			"Segmented ATM location performance"
		],
		recruiterValue: "Shows ability to model operational analytics use cases.",
		complexity: 2.5
	},
	{
		id: "data-job-dashboard",
		title: "Data Job Dashboard",
		category: "Business Intelligence",
		repository: "Bi-Project-",
		href: "https://github.com/Ritik574-coder/Bi-Project-",
		businessProblem: "Data professionals needed a clear view of salary ranges, required skills, geography, and role demand.",
		solution: "Built a job market analytics dashboard comparing data roles, compensation, and skill demand trends.",
		architecture: [
			"Job market dataset",
			"Role comparison model",
			"Skill demand dashboard"
		],
		technologies: [
			"Power BI",
			"Tableau",
			"Job Market Data"
		],
		achievements: [
			"Analyzed salary ranges",
			"Compared data roles",
			"Tracked skills and geography"
		],
		recruiterValue: "Demonstrates market-aware analytics and dashboarding for decision support.",
		complexity: 2.5
	}
];
var skills = [
	{
		name: "Data Warehousing",
		group: "Data Engineering",
		level: 95,
		evidence: "SQL Server and Retail Medallion warehouses with Bronze, Silver, and Gold layers."
	},
	{
		name: "SQL Server / T-SQL",
		group: "Data Engineering",
		level: 95,
		evidence: "Stored procedures, DDL, defensive transformations, Star Schema views, and quality checks."
	},
	{
		name: "Snowflake Data Cloud",
		group: "Data Platform",
		level: 90,
		evidence: "End-to-end Snowflake data warehouse covering RBAC, compute scaling, and dimensional marts."
	},
	{
		name: "dbt",
		group: "Analytics Engineering",
		level: 92,
		evidence: "CI/CD dbt project, snapshots, tests, macros, seeds, docs, and 169-commit learning repository."
	},
	{
		name: "Data Modeling",
		group: "Analytics Engineering",
		level: 90,
		evidence: "Star Schema marts, facts, dimensions, SCD Type 2, and Gold-layer modeling."
	},
	{
		name: "AWS Cloud (S3, Glue, Athena)",
		group: "Data Platform",
		level: 86,
		evidence: "Hands-on AWS Data Engineering Lab with automated Boto3 pipelines and S3 data lakes."
	},
	{
		name: "AI & LLM Workflows",
		group: "Analytics Engineering",
		level: 84,
		evidence: "ContentFlow AI agentic pipelines with human-in-the-loop review and Cloudflare D1 storage."
	},
	{
		name: "Knowledge Graphs",
		group: "Analytics Engineering",
		level: 80,
		evidence: "Great Minds Knowledge Graph with dynamic graph modeling and provenance verification."
	},
	{
		name: "Data Quality",
		group: "Data Engineering",
		level: 90,
		evidence: "TRY_CONVERT, CASE rules, deduplication, accepted values, and per-entity validation docs."
	},
	{
		name: "ETL / ELT",
		group: "Data Engineering",
		level: 88,
		evidence: "CSV ingestion, T-SQL ETL, dbt ELT, full refresh and incremental patterns."
	},
	{
		name: "GitHub Actions / CI/CD",
		group: "Data Platform",
		level: 84,
		evidence: "dbt CI, deployment, docs workflows, PR automation, and GitHub Pages publication."
	},
	{
		name: "Docker",
		group: "Data Platform",
		level: 82,
		evidence: "SQL Server 2022 Docker Compose environments and reproducible local development."
	},
	{
		name: "Python",
		group: "Data Engineering",
		level: 78,
		evidence: "Data engineering scripts, dbt runtime, notebooks, and SQL Server connectivity."
	},
	{
		name: "Apache Superset",
		group: "BI & Analytics",
		level: 74,
		evidence: "BI consumption layer for SQL Server Data Warehouse project."
	},
	{
		name: "Power BI",
		group: "BI & Analytics",
		level: 82,
		evidence: "Workforce Pulse, Sales Pulse, ATM Analytics, and Data Job dashboards."
	},
	{
		name: "Tableau",
		group: "BI & Analytics",
		level: 76,
		evidence: "People Insights and World Economy dashboards with Tableau Public presence."
	},
	{
		name: "PySpark",
		group: "Data Platform",
		level: 68,
		evidence: "Data Ecosystem Platform includes PySpark and distributed processing learning assets."
	}
];
var certifications = [
	{
		name: "Advanced dbt",
		issuer: "DataCamp",
		category: "dbt",
		issueDate: "2026-06",
		file: "Advanced_dbt_certificate_data_camp.pdf",
		skills: [
			"dbt",
			"Analytics Engineering",
			"SQL"
		]
	},
	{
		name: "DataCamp dbt Certificate",
		issuer: "DataCamp",
		category: "dbt",
		issueDate: "2026-06",
		file: "Data_camp_dbt_certificate.pdf",
		skills: ["dbt", "Data Modeling"]
	},
	{
		name: "dbt Project Certificate",
		issuer: "DataCamp",
		category: "dbt",
		issueDate: "2026-06",
		file: "dbt_project_certificate_data_camp.pdf",
		skills: ["dbt", "Projects"]
	},
	{
		name: "Data Engineering with dbt",
		issuer: "LinkedIn Learning",
		category: "dbt",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Data Engineering with dbt.pdf",
		skills: ["dbt", "Analytics Engineering"]
	},
	{
		name: "Complete Guide to SQL for Data Engineering",
		issuer: "LinkedIn Learning",
		category: "SQL",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Complete Guide to SQL for Data Engineering from Beginner to Advanced.pdf",
		skills: ["SQL", "Data Engineering"]
	},
	{
		name: "Learning SQL Programming",
		issuer: "LinkedIn Learning",
		category: "SQL",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Learning SQL Programming.pdf",
		skills: ["SQL"]
	},
	{
		name: "SQL Advanced",
		issuer: "Certificate Provider",
		category: "SQL",
		issueDate: "2026-06",
		file: "sql_advanced certificate.pdf",
		skills: ["SQL"]
	},
	{
		name: "SQL Intermediate",
		issuer: "Certificate Provider",
		category: "SQL",
		issueDate: "2026-06",
		file: "sql_intermediate certificate.pdf",
		skills: ["SQL"]
	},
	{
		name: "ETL in Python and SQL",
		issuer: "LinkedIn Learning",
		category: "ETL",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_ETL in Python and SQL.pdf",
		skills: [
			"ETL",
			"Python",
			"SQL"
		]
	},
	{
		name: "ETL and ELT Using Python",
		issuer: "DataCamp",
		category: "ETL",
		issueDate: "2026-06",
		file: "etl_and_elt_using_python_datacamp.pdf",
		skills: [
			"ETL",
			"ELT",
			"Python"
		]
	},
	{
		name: "End-to-End Data Engineering Project",
		issuer: "LinkedIn Learning",
		category: "Data Engineering",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_EndtoEnd Data Engineering Project.pdf",
		skills: ["Data Engineering", "Pipelines"]
	},
	{
		name: "Data Engineering Hands-On Practice",
		issuer: "LinkedIn Learning",
		category: "Data Engineering",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Data Engineering HandsOn Practice.pdf",
		skills: ["Data Engineering"]
	},
	{
		name: "Hands-On Introduction Data Engineering",
		issuer: "LinkedIn Learning",
		category: "Data Engineering",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_HandsOn Introduction Data Engineering.pdf",
		skills: ["Data Engineering"]
	},
	{
		name: "Hands-On Advanced Python Data Engineering Basics",
		issuer: "LinkedIn Learning",
		category: "Python",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_HandsOn Advanced Python Data Engineering Basics.pdf",
		skills: ["Python", "Data Engineering"]
	},
	{
		name: "Complete Guide to Python for Data Engineering",
		issuer: "LinkedIn Learning",
		category: "Python",
		issueDate: "2026-03",
		file: "Complete Guide to Python for Data Engineering From Beginner to Advanced.pdf",
		skills: ["Python", "Data Engineering"]
	},
	{
		name: "Intermediate Python for Non-Programmers",
		issuer: "LinkedIn Learning",
		category: "Python",
		issueDate: "2026-04",
		file: "CertificateOfCompletion_Intermediate Python for NonProgrammers.pdf",
		skills: ["Python"]
	},
	{
		name: "Python Basic",
		issuer: "Certificate Provider",
		category: "Python",
		issueDate: "2026-06",
		file: "python_basic certificate.pdf",
		skills: ["Python"]
	},
	{
		name: "Introduction to Data Warehouses",
		issuer: "LinkedIn Learning",
		category: "Data Warehouse",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Introduction to Data Warehouses.pdf",
		skills: ["Data Warehouse", "Modeling"]
	},
	{
		name: "Data Engineering Foundations Professional Certificate by Astronomer",
		issuer: "Astronomer / LinkedIn Learning",
		category: "Data Engineering",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Data Engineering Foundations Professional Certificate by Astronomer.pdf",
		skills: ["Data Engineering", "Airflow"]
	},
	{
		name: "Learning Apache Airflow",
		issuer: "LinkedIn Learning",
		category: "Orchestration",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Learning Apache Airflow.pdf",
		skills: ["Airflow", "Orchestration"]
	},
	{
		name: "Introduction to Spark SQL and DataFrames",
		issuer: "LinkedIn Learning",
		category: "Spark",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Introduction to Spark SQL and DataFrames.pdf",
		skills: ["Spark SQL", "DataFrames"]
	},
	{
		name: "PySpark Certificate",
		issuer: "Certificate Provider",
		category: "Spark",
		issueDate: "2026-06",
		file: "pyspark_certificate.pdf",
		skills: ["PySpark"]
	},
	{
		name: "Learning Docker",
		issuer: "LinkedIn Learning",
		category: "Docker",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Learning Docker.pdf",
		skills: ["Docker"]
	},
	{
		name: "Learning Docker Compose",
		issuer: "LinkedIn Learning",
		category: "Docker",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Learning Docker Compose.pdf",
		skills: ["Docker Compose"]
	},
	{
		name: "Docker Your First Project",
		issuer: "LinkedIn Learning",
		category: "Docker",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Docker Your First Project.pdf",
		skills: ["Docker"]
	},
	{
		name: "Docker Foundations Professional Certificate",
		issuer: "LinkedIn Learning",
		category: "Docker",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Docker Foundations Professional Certificate.pdf",
		skills: ["Docker"]
	},
	{
		name: "Learning Data Governance",
		issuer: "LinkedIn Learning",
		category: "Governance",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Learning Data Governance.pdf",
		skills: ["Governance", "Data Quality"]
	},
	{
		name: "Getting Started with Linux",
		issuer: "LinkedIn Learning",
		category: "Linux",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Getting Started with Linux.pdf",
		skills: ["Linux"]
	},
	{
		name: "Introduction to Linux 2021",
		issuer: "LinkedIn Learning",
		category: "Linux",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Introduction to Linux 2021.pdf",
		skills: ["Linux"]
	},
	{
		name: "Linux Files and Permissions",
		issuer: "LinkedIn Learning",
		category: "Linux",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Linux Files and Permissions.pdf",
		skills: ["Linux"]
	},
	{
		name: "Linux Overview and Installation",
		issuer: "LinkedIn Learning",
		category: "Linux",
		issueDate: "2026-03",
		file: "CertificateOfCompletion_Linux Overview and Installation.pdf",
		skills: ["Linux"]
	},
	{
		name: "Software Engineer Intern",
		issuer: "Certificate Provider",
		category: "Professional",
		issueDate: "2026-06",
		file: "software_engineer_intern certificate.pdf",
		skills: ["Professional Experience"]
	}
].map((certificate) => ({
	...certificate,
	file: certificate.file
}));
var certificateUrl = (file) => certificatePath(file);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Navbar({ onOpenCategory, activeCategory }) {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-40 px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					className: "pointer-events-auto group flex items-center gap-3 rounded-full border border-line bg-surface/80 px-3.5 py-2 backdrop-blur-xl transition-colors hover:border-cyan-400/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-7 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/20 text-cyan-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wider text-fg",
							children: "RITIK KUMAR"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-2xs tracking-tight text-cyan-400",
							children: "DATA PLATFORM"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "pointer-events-auto hidden items-center gap-1 rounded-full border border-line bg-surface/75 p-1.5 shadow-lg backdrop-blur-xl md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavChip, {
							active: activeCategory === "projects",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-3.5 text-cyan-400" }),
							label: "Projects",
							count: String(projects.length),
							onClick: (rect) => onOpenCategory("projects", rect)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavChip, {
							active: activeCategory === "certificates",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-3.5 text-teal-400" }),
							label: "Certifications",
							count: String(certifications.length),
							onClick: (rect) => onOpenCategory("certificates", rect)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavChip, {
							active: activeCategory === "skills",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-3.5 text-sky-400" }),
							label: "Skills Matrix",
							count: `${skills.length}+`,
							onClick: (rect) => onOpenCategory("skills", rect)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-2xs text-soft lg:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-emerald-500" })]
							}), "Open for Data Roles"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.resumeUrl,
							download: "Ritik-Kumar-Data-Engineer-Resume.pdf",
							className: "flex min-h-11 items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3.5 py-2 text-xs font-semibold text-cyan-300 transition-colors hover:border-cyan-400/60 hover:bg-cyan-500/25",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "Resume"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMobileOpen(!mobileOpen),
							className: "flex size-11 items-center justify-center rounded-full border border-line bg-surface/80 text-soft md:hidden",
							"aria-label": "Toggle navigation menu",
							children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
						})
					]
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-auto mx-auto mt-3 flex max-w-sm flex-col gap-2 rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden",
			children: [
				[
					"projects",
					"Projects Gallery",
					String(projects.length),
					Layers
				],
				[
					"certificates",
					`${certifications.length} Certifications`,
					String(certifications.length),
					Award
				],
				[
					"skills",
					"Skills Matrix",
					`${skills.length}+`,
					Cpu
				]
			].map(([id, label, count, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: (e) => {
					onOpenCategory(id, e.currentTarget.getBoundingClientRect());
					setMobileOpen(false);
				},
				className: "flex min-h-11 items-center justify-between rounded-xl bg-fg/5 px-4 py-3 text-sm font-medium text-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-cyan-400" }), label]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-cyan-300",
					children: count
				})]
			}, id))
		})]
	});
}
function NavChip({ active, icon, label, count, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: (e) => onClick(e.currentTarget.getBoundingClientRect()),
		className: cn("flex min-h-11 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors", active ? "border border-cyan-400/40 bg-cyan-500/20 text-cyan-300" : "text-soft hover:bg-fg/5 hover:text-fg"),
		children: [
			icon,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded border border-line bg-fg/5 px-1.5 font-mono text-2xs text-cyan-300",
				children: count
			})
		]
	});
}
var API_URL = "https://api.github.com";
var CACHE_TTL = 36e5;
var CACHE_KEY = "ritik-portfolio:github:v2";
var requestInFlight = null;
var defaultRepositories = [
	{
		name: "dbt-analytics-engineering",
		description: "Production-style dbt Core project on SQL Server with CI/CD, SQLFluff, snapshots, tests, and GitHub Pages docs.",
		htmlUrl: "https://github.com/Ritik574-coder/dbt-analytics-engineering",
		stars: 12,
		forks: 5,
		language: "Python",
		languages: [
			"Python",
			"SQL",
			"Dockerfile",
			"Shell"
		],
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 1728e5)).toISOString(),
		productivityScore: 98,
		commitCount: 185
	},
	{
		name: "Medallion-Data-Warehouse",
		description: "Retail data warehouse with Bronze raw ingestion, Silver cleansing, and defensive T-SQL data quality rules in Docker.",
		htmlUrl: "https://github.com/Ritik574-coder/Medallion-Data-Warehouse",
		stars: 9,
		forks: 3,
		language: "TSQL",
		languages: [
			"TSQL",
			"Docker",
			"Shell"
		],
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 432e6)).toISOString(),
		productivityScore: 92,
		commitCount: 142
	},
	{
		name: "sqlserver-datawarehouse",
		description: "End-to-end SQL Server warehouse integrating CRM and ERP data with Gold star schema views and Superset visuals.",
		htmlUrl: "https://github.com/Ritik574-coder/sqlserver-datawarehouse",
		stars: 8,
		forks: 2,
		language: "TSQL",
		languages: [
			"TSQL",
			"Python",
			"Docker"
		],
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 864e6)).toISOString(),
		productivityScore: 88,
		commitCount: 110
	},
	{
		name: "dbt_learning_project",
		description: "Comprehensive dbt learning repository with seeds, macros, snapshots, testing, and DATA_PIPELINE_GUIDE.",
		htmlUrl: "https://github.com/Ritik574-coder/dbt_learning_project",
		stars: 15,
		forks: 7,
		language: "Python",
		languages: [
			"SQL",
			"Python",
			"YAML"
		],
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 10368e5)).toISOString(),
		productivityScore: 95,
		commitCount: 169
	},
	{
		name: "data-ecosystem-platform",
		description: "Architectural platform covering Data Warehouse, Data Lake, Lakehouse Medallion patterns, and PySpark notebooks.",
		htmlUrl: "https://github.com/Ritik574-coder/data-ecosystem-platform",
		stars: 6,
		forks: 2,
		language: "Jupyter Notebook",
		languages: [
			"Jupyter Notebook",
			"Python",
			"TSQL"
		],
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 1296e6)).toISOString(),
		productivityScore: 84,
		commitCount: 72
	},
	{
		name: "Bi-Project-",
		description: "Business Intelligence dashboard collection covering HR attrition, Sales Pulse 2023, ATM Analytics, and World Economy.",
		htmlUrl: "https://github.com/Ritik574-coder/Bi-Project-",
		stars: 10,
		forks: 4,
		language: "Power BI / DAX",
		languages: [
			"Power BI",
			"DAX",
			"Tableau"
		],
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 1728e6)).toISOString(),
		productivityScore: 80,
		commitCount: 54
	},
	{
		name: "ritik-portfolio",
		description: "Interactive Data Engineer portfolio web app showcasing projects, GitHub integration, skills, and certifications.",
		htmlUrl: "https://github.com/Ritik574-coder/ritik-portfolio",
		stars: 14,
		forks: 3,
		language: "TypeScript",
		languages: [
			"TypeScript",
			"CSS",
			"HTML"
		],
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		productivityScore: 96,
		commitCount: 120
	}
];
var fallbackData = {
	profile: {
		avatarUrl: "",
		bio: "Hello, I’m Ritik — a Data Engineer & AI/ML Specialist focused on building scalable ETL/ELT pipelines and modern cloud data architectures.",
		followers: 184,
		following: 113,
		publicRepos: 20,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		commits: "1,900+"
	},
	repositories: Object.fromEntries(defaultRepositories.map((repo) => [repo.name, repo])),
	recentActivity: [
		{
			type: "Push",
			repository: "ritik-portfolio",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		},
		{
			type: "Push",
			repository: "Snowflake-Data-Engineering-Project",
			createdAt: (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString()
		},
		{
			type: "Push",
			repository: "contentflow-ai",
			createdAt: (/* @__PURE__ */ new Date(Date.now() - 1728e5)).toISOString()
		},
		{
			type: "Push",
			repository: "dbt-analytics-engineering",
			createdAt: (/* @__PURE__ */ new Date(Date.now() - 2592e5)).toISOString()
		},
		{
			type: "PullRequest",
			repository: "Medallion-Data-Warehouse",
			createdAt: (/* @__PURE__ */ new Date(Date.now() - 3456e5)).toISOString()
		}
	],
	isFallback: true
};
var getCached = () => {
	try {
		const raw = window.localStorage.getItem(CACHE_KEY);
		if (!raw) return null;
		const entry = JSON.parse(raw);
		if (entry.expiresAt > Date.now()) return entry.value;
		window.localStorage.removeItem(CACHE_KEY);
	} catch {}
	return null;
};
var setCached = (value) => {
	try {
		const entry = {
			expiresAt: Date.now() + CACHE_TTL,
			value
		};
		window.localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
	} catch {}
};
var request = async (path) => {
	const response = await fetch(`${API_URL}${path}`, { headers: { Accept: "application/vnd.github+json" } });
	if (!response.ok) throw new Error(`GitHub request failed (${response.status})`);
	return response.json();
};
var getGitHubFallback = () => fallbackData;
var fetchGitHubData = async () => {
	const cached = getCached();
	if (cached) return cached;
	if (requestInFlight) return requestInFlight;
	requestInFlight = fetchFreshGitHubData();
	try {
		return await requestInFlight;
	} finally {
		requestInFlight = null;
	}
};
var fetchFreshGitHubData = async () => {
	const username = github.username;
	const [user, repos, events] = await Promise.all([
		request(`/users/${username}`),
		request(`/users/${username}/repos?per_page=100&sort=updated`),
		request(`/users/${username}/events/public?per_page=30`)
	]);
	const repositories = Object.fromEntries(await Promise.all(repos.map(async (repo) => {
		let languages = [];
		try {
			languages = Object.keys(await request(new URL(repo.languages_url).pathname));
		} catch {
			languages = repo.language ? [repo.language] : [];
		}
		return [repo.name, {
			name: repo.name,
			description: repo.description,
			htmlUrl: repo.html_url,
			stars: repo.stargazers_count,
			forks: repo.forks_count,
			language: repo.language,
			languages,
			updatedAt: repo.updated_at
		}];
	})));
	const enrichedRepositories = {};
	for (const [key, repo] of Object.entries(repositories)) {
		const defaultRepo = defaultRepositories.find((item) => item.name.toLowerCase() === repo.name.toLowerCase());
		const commitCount = defaultRepo?.commitCount || 50;
		const productivityScore = defaultRepo?.productivityScore || Math.min(99, Math.max(60, Math.round(repo.stars * 3 + repo.forks * 4 + commitCount * .2 + (repo.languages?.length || 1) * 5)));
		enrichedRepositories[key] = {
			...repo,
			description: repo.description || defaultRepo?.description || null,
			language: repo.language || defaultRepo?.language || null,
			languages: repo.languages.length ? repo.languages : defaultRepo?.languages || [],
			productivityScore,
			commitCount
		};
	}
	for (const defaultRepo of defaultRepositories) if (!enrichedRepositories[defaultRepo.name]) enrichedRepositories[defaultRepo.name] = defaultRepo;
	const value = {
		profile: {
			avatarUrl: user.avatar_url || "",
			bio: user.bio || "Data Engineer & AI/ML Specialist focused on building scalable ETL/ELT pipelines and modern cloud architectures.",
			followers: user.followers || 184,
			following: user.following || 113,
			publicRepos: user.public_repos || 20,
			updatedAt: user.updated_at || (/* @__PURE__ */ new Date()).toISOString(),
			commits: "1,900+"
		},
		repositories: enrichedRepositories,
		recentActivity: events.length ? events.slice(0, 5).map((event) => ({
			type: event.type.replace("Event", ""),
			repository: event.repo.name,
			createdAt: event.created_at
		})) : fallbackData.recentActivity
	};
	setCached(value);
	return value;
};
var useGitHubData = () => {
	const [data, setData] = (0, import_react.useState)(getGitHubFallback);
	const [status, setStatus] = (0, import_react.useState)("loading");
	(0, import_react.useEffect)(() => {
		let active = true;
		fetchGitHubData().then((value) => {
			if (!active) return;
			setData(value);
			setStatus("ready");
		}).catch(() => {
			if (!active) return;
			setStatus("error");
		});
		return () => {
			active = false;
		};
	}, []);
	return {
		data,
		status
	};
};
function Hero({ onScrollToCards }) {
	const { data: githubData } = useGitHubData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-between px-4 pb-8 pt-28 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-xs tracking-wide text-cyan-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5 text-cyan-400" }), "DATA SYSTEMS & AI/ML PLATFORMS"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-xs text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-cyan-400" }), "Snowflake & SQL"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-panel sm:inline",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden items-center gap-1.5 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-teal-400" }), "dbt Core CI/CD"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-panel sm:inline",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden items-center gap-1.5 md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-sky-400" }), "AI & Agentic Pipelines"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-auto grid grid-cols-1 items-center gap-8 py-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl font-bold leading-tight tracking-tight text-fg sm:text-6xl lg:text-7xl",
							children: [
								"Engineering modern data &",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-cyan-300 via-teal-300 to-sky-400 bg-clip-text text-transparent",
									children: "AI pipelines at scale."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "max-w-2xl text-base leading-relaxed text-soft sm:text-lg",
							children: [
								"I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "font-semibold text-fg",
									children: profile.name
								}),
								", a Data Engineer & AI/ML Specialist building Snowflake and SQL Server warehouses, dbt Core CI/CD transformations, Medallion architectures, and intelligent LLM workflows backed by real repository code."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.github,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-fg/5 px-4 py-2 font-mono text-xs text-soft transition-colors hover:border-cyan-400/40 hover:text-fg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4 text-cyan-400" }),
										"GitHub / Ritik574-coder",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 text-muted" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: profile.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-fg/5 px-4 py-2 font-mono text-xs text-soft transition-colors hover:border-sky-400/40 hover:text-fg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4 text-sky-400" }),
										"LinkedIn Profile",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 text-muted" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden items-center gap-2 rounded-xl border border-teal-400/20 bg-teal-500/10 px-3.5 py-2 font-mono text-xs text-teal-300 sm:inline-flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-teal-400" }), "Verified 32 Certifications"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center lg:col-span-4 lg:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-teal-500/20 to-sky-500/30 opacity-60 blur-xl transition-opacity group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.portrait,
								alt: "Ritik Kumar — Data Engineer & AI Specialist",
								width: 320,
								height: 380,
								className: "h-auto w-60 rounded-xl object-cover contrast-105 transition-transform duration-500 group-hover:scale-105 sm:w-72 lg:w-64",
								loading: "eager"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-line bg-surface/85 p-3 backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-2xs uppercase tracking-wider text-cyan-400",
									children: "Specialization"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold text-fg",
									children: "Data & AI/ML Platforms"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 rounded border border-emerald-400/30 bg-emerald-500/20 px-2 py-1 font-mono text-2xs text-emerald-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-pulse rounded-full bg-emerald-400" }), "Active"]
								})]
							})]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-6 text-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: githubData.profile.commits || "1,900+",
							label: "GitHub Commits"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-7 w-px bg-line sm:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: githubData.profile.publicRepos ? `${githubData.profile.publicRepos}+` : "20+",
							label: "Public Repositories"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-7 w-px bg-line sm:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: `${projects.length}+`,
							label: "Engineered Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-7 w-px bg-line sm:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							value: String(githubData.profile.followers || "180+"),
							label: "Followers"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onScrollToCards,
					className: "group inline-flex min-h-11 items-center gap-2 font-mono text-xs text-cyan-400 hover:text-cyan-300",
					children: ["Explore category cards", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4 transition-transform group-hover:translate-y-1" })]
				})]
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg font-bold tabular-nums text-fg",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-2xs uppercase tracking-wider text-muted",
			children: label
		})]
	});
}
function MicroAbout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface/70 p-6 shadow-2xl backdrop-blur-xl sm:p-8 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-cyan-400" }), "Engineering Discipline"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-medium leading-snug text-fg sm:text-xl",
						children: about.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: about.journey
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid w-full shrink-0 grid-cols-2 gap-2.5 font-mono text-xs md:w-auto",
				children: [
					["Medallion Layers", "text-cyan-400"],
					["Defensive T-SQL", "text-teal-400"],
					["dbt Automated CI/CD", "text-sky-400"],
					["Star Schema Marts", "text-amber-400"]
				].map(([label, tone]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-xl border border-line bg-fg/5 px-3 py-2 text-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: `size-3.5 ${tone}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
				}, label))
			})]
		})
	});
}
function CategoryCards({ onSelectCategory }) {
	const [hovered, setHovered] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "category-cards",
		className: "relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-cyan-400" }), "Interactive Categories"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden font-mono text-xs text-muted sm:inline-block",
					children: "Click a card — it drops into the data wormhole"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold tracking-tight text-fg sm:text-3xl",
				children: "Explore Portfolio Dimensions"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, {
					id: "projects",
					setHovered,
					onSelect: onSelectCategory,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5" }),
					iconWrap: "bg-cyan-500/15 border-cyan-400/30 text-cyan-300",
					hoverBorder: "hover:border-cyan-400/50",
					badge: `${projects.length} Systems`,
					badgeTone: "bg-cyan-500/10 border-cyan-400/20 text-cyan-300",
					title: "Engineered Projects",
					titleHover: "group-hover:text-cyan-300",
					copy: "End-to-end data systems: SQL Server warehouses, dbt Core CI/CD pipelines, and Medallion models.",
					footer: "Explore all projects",
					footerHint: "Filter & case studies",
					footerTone: "text-cyan-400 group-hover:text-cyan-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: projects.slice(0, 3).map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-line bg-surface/90 p-2.5 shadow transition-transform",
							style: hovered === "projects" ? { transform: `translateX(${idx * 6}px)` } : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-2xs font-semibold text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "max-w-44 truncate",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-2xs text-cyan-400",
									children: p.technologies[0]
								})]
							})
						}, p.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, {
					id: "certificates",
					setHovered,
					onSelect: onSelectCategory,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5" }),
					iconWrap: "bg-teal-500/15 border-teal-400/30 text-teal-300",
					hoverBorder: "hover:border-teal-400/50",
					badge: `${certifications.length} Credentials`,
					badgeTone: "bg-teal-500/10 border-teal-400/20 text-teal-300",
					title: "Verified Certifications",
					titleHover: "group-hover:text-teal-300",
					copy: "32 backed certificates from DataCamp, Astronomer, and LinkedIn with in-browser PDF previews.",
					footer: "Verify 32 certificates",
					footerHint: "PDF lightbox",
					footerTone: "text-teal-400 group-hover:text-teal-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							[
								"DataCamp",
								"Advanced dbt",
								"bg-teal-400"
							],
							[
								"Astronomer",
								"Airflow Foundations",
								"bg-cyan-400"
							],
							[
								"LinkedIn",
								"SQL Engineering",
								"bg-sky-400"
							],
							[
								"Docker / Linux",
								"Foundations",
								"bg-amber-400"
							]
						].map(([org, item, dot]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-lg border border-line bg-surface/90 p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", dot) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xs font-bold text-fg",
								children: org
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-2xs text-teal-300",
								children: item
							})] })]
						}, org))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, {
					id: "skills",
					setHovered,
					onSelect: onSelectCategory,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-5" }),
					iconWrap: "bg-sky-500/15 border-sky-400/30 text-sky-300",
					hoverBorder: "hover:border-sky-400/50",
					badge: `${skills.length}+ Technologies`,
					badgeTone: "bg-sky-500/10 border-sky-400/20 text-sky-300",
					title: "Skills & Architecture",
					titleHover: "group-hover:text-sky-300",
					copy: "Categorized evidence matrix: Data Engineering, Analytics Engineering, Data Platform, and BI.",
					footer: "Inspect tech matrix",
					footerHint: "Evidence-based",
					footerTone: "text-sky-400 group-hover:text-sky-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center gap-1.5",
						children: [
							"SQL Server",
							"dbt Core",
							"Docker",
							"Python",
							"CI/CD",
							"Medallion",
							"Power BI",
							"Tableau",
							"PySpark"
						].map((name, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-cyan-500/30 bg-surface/80 px-2.5 py-1 font-mono text-2xs font-medium text-cyan-300 transition-transform",
							style: {
								transform: hovered === "skills" ? "scale(1.05)" : void 0,
								transitionDelay: `${idx * 25}ms`
							},
							children: name
						}, name))
					})
				})
			]
		})]
	});
}
function CategoryCard({ id, setHovered, onSelect, icon, iconWrap, hoverBorder, badge, badgeTone, title, titleHover, copy, footer, footerHint, footerTone, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: (e) => onSelect(id, e.currentTarget.getBoundingClientRect()),
		onMouseEnter: () => setHovered(id),
		onMouseLeave: () => setHovered(null),
		className: cn("group relative flex min-h-96 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 text-left shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5", hoverBorder),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex size-11 items-center justify-center rounded-xl border transition-transform group-hover:scale-110", iconWrap),
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("rounded-full border px-2.5 py-1 font-mono text-xs font-semibold", badgeTone),
					children: badge
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("text-xl font-bold text-fg transition-colors", titleHover),
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 line-clamp-2 text-xs text-soft",
				children: copy
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-5 h-36 overflow-hidden rounded-xl border border-line bg-bg/60 p-3",
				children
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mt-4 flex items-center justify-between border-t border-line pt-4 font-mono text-xs", footerTone),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5 font-semibold uppercase",
				children: [footer, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform duration-200 group-hover:translate-x-1.5" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xs text-muted",
				children: footerHint
			})]
		})]
	});
}
function ContactStrip() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
	const [formStatus, setFormStatus] = (0, import_react.useState)("idle");
	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(profile.email);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2500);
		} catch {
			window.location.href = `mailto:${profile.email}`;
		}
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") || "");
		const email = String(data.get("email") || "");
		const message = String(data.get("message") || "");
		const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
		const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
		setFormStatus("success");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative z-10 mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-surface/80 p-4 shadow-2xl backdrop-blur-xl sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/15 text-cyan-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-2xs uppercase tracking-wider text-muted",
						children: "Direct channel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: copyEmail,
						className: "flex min-h-11 items-center gap-2 font-mono text-xs font-medium text-soft hover:text-cyan-300 sm:text-sm",
						title: "Copy email address",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.email }), copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 font-mono text-2xs text-teal-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), " Copied"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3 text-muted" })]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.github,
							target: "_blank",
							rel: "noreferrer",
							className: "flex size-11 items-center justify-center rounded-xl border border-line bg-fg/5 text-soft hover:border-cyan-400/40 hover:text-fg",
							"aria-label": "GitHub Profile",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.linkedin,
							target: "_blank",
							rel: "noreferrer",
							className: "flex size-11 items-center justify-center rounded-xl border border-line bg-fg/5 text-soft hover:border-sky-400/40 hover:text-fg",
							"aria-label": "LinkedIn Profile",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setFormStatus("idle");
								setModalOpen(true);
							},
							className: "flex min-h-11 items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/25",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" }), "Send Message"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 font-mono text-xs text-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" RITIK KUMAR"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DATA SYSTEMS PORTFOLIO" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					className: "flex min-h-11 items-center gap-1.5 text-soft hover:text-cyan-400",
					children: ["Back to top", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3.5" })]
				})]
			}),
			modalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-lg rounded-2xl border border-line bg-surface p-6 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setModalOpen(false),
							className: "absolute right-4 top-4 flex size-11 items-center justify-center rounded-lg bg-fg/5 text-muted hover:text-fg",
							"aria-label": "Close modal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), "Direct Inquiry"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 text-xl font-bold text-fg",
							children: "Get in Touch with Ritik"
						}),
						formStatus === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 p-6 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto flex size-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-lg font-semibold text-fg",
									children: "Message ready"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: "Your mail client should open with the inquiry. Close this window when done."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setModalOpen(false),
									className: "mt-4 rounded-xl bg-fg/10 px-4 py-2 font-mono text-xs text-fg",
									children: "Close window"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleFormSubmit,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									name: "name",
									label: "Your Name",
									placeholder: "Recruiter or Hiring Manager",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									name: "email",
									type: "email",
									label: "Email Address",
									placeholder: "name@company.com",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-1 block font-mono text-xs text-muted",
									children: "Role / Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									required: true,
									rows: 4,
									placeholder: "We have an opening for a Data Engineer / dbt / SQL Server specialist...",
									className: "w-full rounded-xl border border-line bg-fg/5 px-3 py-2 text-xs text-fg placeholder:text-muted focus:border-cyan-400 focus:outline-none"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 py-2.5 text-xs font-semibold text-bg",
									children: "Compose inquiry"
								})
							]
						})
					]
				})
			})
		]
	});
}
function Field({ name, label, placeholder, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1 block font-mono text-xs text-muted",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		placeholder,
		className: "w-full rounded-xl border border-line bg-fg/5 px-3 py-2 text-xs text-fg placeholder:text-muted focus:border-cyan-400 focus:outline-none"
	})] });
}
var accentMap = {
	cyan: {
		chip: "text-cyan-300 border-cyan-400/40 hover:border-cyan-300/70",
		count: "text-cyan-300"
	},
	teal: {
		chip: "text-teal-300 border-teal-400/40 hover:border-teal-300/70",
		count: "text-teal-300"
	},
	sky: {
		chip: "text-sky-300 border-sky-400/40 hover:border-sky-300/70",
		count: "text-sky-300"
	}
};
function OverlayShell({ title, countLabel, accent, icon, onBack, children }) {
	const scrollRef = (0, import_react.useRef)(null);
	const tones = accentMap[accent];
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.add("overlay-open");
		const el = scrollRef.current;
		el?.focus({ preventScroll: true });
		if (el) el.scrollTop = 0;
		return () => {
			document.documentElement.classList.remove("overlay-open");
		};
	}, []);
	const handleWheel = (event) => {
		if (event.target?.closest("[data-nested-scroll]")) return;
		const el = scrollRef.current;
		if (!el) return;
		if (event.target?.closest("[data-overlay-scroll]") === el) return;
		el.scrollTop += event.deltaY;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex flex-col bg-bg/95 text-fg",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": title,
		onWheel: handleWheel,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex shrink-0 items-center justify-between gap-3 border-b border-line bg-surface/90 px-4 py-4 backdrop-blur-xl sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onBack,
				className: cn("group flex min-h-11 items-center gap-2.5 rounded-xl border bg-fg/5 px-4 py-2 font-mono text-xs transition-colors", tones.chip),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 transition-transform group-hover:-translate-x-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to hub" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 font-mono text-xs text-muted",
				children: [
					icon,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-semibold", tones.count),
						children: countLabel
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollRef,
			tabIndex: -1,
			"data-overlay-scroll": true,
			className: "overlay-scroll min-h-0 flex-1 outline-none",
			children
		})]
	});
}
function ProjectCaseStudyModal({ project, onClose }) {
	if (!project) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-bg/85 p-4 backdrop-blur-xl sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-nested-scroll": true,
			className: "overlay-scroll relative max-h-[90vh] w-full max-w-3xl rounded-2xl border border-line bg-surface p-6 shadow-2xl sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "absolute right-5 top-5 flex size-11 items-center justify-center rounded-xl bg-fg/5 text-muted hover:text-fg",
					"aria-label": "Close case study",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }),
						project.category,
						" · Case Study"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-2xl font-bold text-fg sm:text-3xl",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-xs text-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Engineering Complexity:" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-amber-400",
								children: ["★".repeat(Math.floor(project.complexity)), project.complexity % 1 !== 0 ? "½" : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									"(",
									project.complexity,
									" / 5)"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: project.href,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex min-h-11 items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-3.5 py-1.5 font-mono text-xs font-medium text-cyan-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-3.5" }),
							"Inspect Repository",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 text-cyan-400" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							tone: "text-amber-400",
							title: "The Problem Statement",
							children: project.businessProblem
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							tone: "text-cyan-400",
							title: "The Engineered Solution",
							children: project.solution
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-teal-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-3.5" }), "Architecture Highlights & Flow"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 gap-2.5 sm:grid-cols-2",
							children: project.architecture.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2.5 rounded-xl border border-line bg-fg/5 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-teal-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-soft",
									children: layer
								})]
							}, layer))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-sky-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), "Verification & Achievements"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: project.achievements.map((ach) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 rounded-xl border border-line bg-fg/5 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-soft",
									children: ach
								})]
							}, ach))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1 font-mono text-xs uppercase tracking-wider text-cyan-300",
								children: "Recruiter & Hiring Team Takeaway"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium leading-relaxed text-soft sm:text-sm",
								children: project.recruiterValue
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 font-mono text-2xs uppercase tracking-wider text-muted",
							children: "Technologies Used"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: project.technologies.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-lg border border-line bg-bg px-2.5 py-1 font-mono text-xs text-soft",
								children: t
							}, t))
						})] })
					]
				})
			]
		})
	});
}
function Block({ tone, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-fg/[0.03] p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mb-1 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider ${tone}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-current" }), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-relaxed text-soft",
			children
		})]
	});
}
var categories$1 = [
	"All",
	"Data Engineering",
	"AI & ML Engineering",
	"Data Platform",
	"Business Intelligence",
	"Learning"
];
function ProjectsDetailView({ onBack }) {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeCaseStudy, setActiveCaseStudy] = (0, import_react.useState)(null);
	const filteredProjects = (0, import_react.useMemo)(() => {
		return projects.filter((p) => {
			const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
			const query = searchQuery.toLowerCase();
			const matchesSearch = !query || p.title.toLowerCase().includes(query) || p.technologies.some((t) => t.toLowerCase().includes(query)) || p.solution.toLowerCase().includes(query);
			return matchesCategory && matchesSearch;
		});
	}, [selectedCategory, searchQuery]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OverlayShell, {
		title: "Projects Gallery",
		countLabel: `(${filteredProjects.length})`,
		accent: "cyan",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4 text-cyan-400" }),
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-cyan-400" }), "Production Architecture & Engineering"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-bold tracking-tight text-fg sm:text-4xl",
							children: "Engineered Systems & BI Products"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-sm text-muted",
							children: "Wheel, trackpad, or touch anywhere in this view to scroll. Detailed breakdown of warehouses, dbt Core transformations, Medallion pipelines, and decision-ready dashboards."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: categories$1.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelectedCategory(cat),
							className: cn("min-h-11 rounded-xl border px-3.5 py-1.5 font-mono text-xs transition-colors", selectedCategory === cat ? "border-cyan-400/50 bg-cyan-500/20 text-cyan-300" : "border-line bg-fg/5 text-muted hover:text-fg"),
							children: cat
						}, cat))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Search tech or keyword...",
							className: "w-full rounded-xl border border-line bg-fg/5 py-2 pl-9 pr-4 font-mono text-xs text-fg placeholder:text-muted focus:border-cyan-400 focus:outline-none"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: filteredProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col justify-between rounded-2xl border border-line bg-surface/80 p-5 shadow-xl transition-transform hover:-translate-y-1 hover:border-cyan-400/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-2xs text-cyan-300",
									children: p.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-amber-400",
									children: ["★".repeat(Math.floor(p.complexity)), p.complexity % 1 !== 0 ? "½" : ""]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-fg",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-xs leading-relaxed text-muted",
								children: p.solution
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: [p.technologies.slice(0, 4).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-line bg-fg/5 px-2 py-0.5 font-mono text-2xs text-soft",
									children: tech
								}, tech)), p.technologies.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "px-1.5 py-0.5 font-mono text-2xs text-muted",
									children: ["+", p.technologies.length - 4]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between gap-2 border-t border-line pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveCaseStudy(p),
								className: "flex min-h-11 items-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-3 py-1.5 font-mono text-xs font-medium text-cyan-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), "Case Study"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: p.href,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-1 font-mono text-xs text-muted hover:text-fg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-3.5" }),
									"Repo",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 text-muted" })
								]
							})]
						})]
					}, p.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCaseStudyModal, {
			project: activeCaseStudy,
			onClose: () => setActiveCaseStudy(null)
		})]
	});
}
function PdfLightboxModal({ cert, onClose }) {
	if (!cert) return null;
	const pdfUrl = certificateUrl(cert.file);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 p-3 backdrop-blur-xl sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 border-b border-line px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-8 items-center justify-center rounded-lg border border-teal-400/30 bg-teal-500/20 text-teal-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "max-w-md truncate text-sm font-semibold text-fg sm:text-base",
							children: cert.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-teal-400",
									children: cert.issuer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cert.issueDate }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cert.category })
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: pdfUrl,
								download: cert.file,
								className: "hidden min-h-11 items-center gap-1.5 rounded-xl border border-line bg-fg/5 px-3 py-1.5 font-mono text-xs text-soft sm:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "Download"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: pdfUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-teal-400/30 bg-teal-500/20 px-3 py-1.5 font-mono text-xs text-teal-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Fullscreen"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "ml-2 flex size-11 items-center justify-center rounded-xl bg-fg/5 text-muted hover:text-fg",
								"aria-label": "Close certificate",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-0 flex-1 bg-bg/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: pdfUrl,
						title: cert.name,
						className: "size-full border-0",
						loading: "lazy"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 border-t border-line px-5 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-teal-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted",
								children: "Verified competencies:"
							}),
							cert.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded border border-line bg-fg/5 px-2 py-0.5 font-mono text-2xs text-soft",
								children: skill
							}, skill))
						]
					})
				})
			]
		})
	});
}
var categories = [
	"All",
	"dbt",
	"SQL",
	"Python",
	"ETL",
	"Data Engineering",
	"Docker",
	"Spark",
	"Linux"
];
function CertificationsDetailView({ onBack }) {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeCert, setActiveCert] = (0, import_react.useState)(null);
	const filteredCerts = (0, import_react.useMemo)(() => {
		return certifications.filter((c) => {
			const matchesCategory = selectedCategory === "All" || c.category.toLowerCase() === selectedCategory.toLowerCase() || c.skills.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase()));
			const query = searchQuery.toLowerCase();
			const matchesSearch = !query || c.name.toLowerCase().includes(query) || c.issuer.toLowerCase().includes(query) || c.skills.some((s) => s.toLowerCase().includes(query));
			return matchesCategory && matchesSearch;
		});
	}, [selectedCategory, searchQuery]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OverlayShell, {
		title: "Credentials Registry",
		countLabel: `(${filteredCerts.length})`,
		accent: "teal",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-teal-400" }),
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-teal-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-teal-400" }), "Auditable Qualifications"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-bold tracking-tight text-fg sm:text-4xl",
							children: "32 Verified Certifications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-sm text-muted",
							children: "Wheel or trackpad to scroll this registry. Click any certificate to inspect the verified PDF."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelectedCategory(cat),
							className: cn("min-h-11 rounded-xl border px-3 py-1.5 font-mono text-xs transition-colors", selectedCategory === cat ? "border-teal-400/50 bg-teal-500/20 text-teal-300" : "border-line bg-fg/5 text-muted hover:text-fg"),
							children: cat
						}, cat))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Search credentials...",
							className: "w-full rounded-xl border border-line bg-fg/5 py-2 pl-9 pr-4 font-mono text-xs text-fg placeholder:text-muted focus:border-teal-400 focus:outline-none"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: filteredCerts.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveCert(cert),
						className: "flex flex-col justify-between rounded-2xl border border-line bg-surface/80 p-5 text-left shadow-xl transition-transform hover:-translate-y-1 hover:border-teal-400/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-teal-400/20 bg-teal-500/10 px-2.5 py-0.5 font-mono text-2xs text-teal-300",
									children: cert.issuer
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-2xs text-muted",
									children: cert.issueDate
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "line-clamp-2 text-base font-semibold text-fg",
								children: cert.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: cert.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-line bg-fg/5 px-2 py-0.5 font-mono text-2xs text-soft",
									children: skill
								}, skill))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-teal-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }), "View PDF Certificate"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 opacity-60" })]
						})]
					}, cert.name))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfLightboxModal, {
			cert: activeCert,
			onClose: () => setActiveCert(null)
		})]
	});
}
var groups = [
	"All",
	"Data Engineering",
	"Analytics Engineering",
	"Data Platform",
	"BI & Analytics"
];
function SkillsDetailView({ onBack }) {
	const [selectedGroup, setSelectedGroup] = (0, import_react.useState)("All");
	const filteredSkills = skills.filter((s) => selectedGroup === "All" || s.group === selectedGroup);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverlayShell, {
		title: "Skills Matrix",
		countLabel: `(${skills.length}+)`,
		accent: "sky",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4 text-sky-400" }),
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-sky-400" }), "Evidence-Based Core Competencies"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-bold tracking-tight text-fg sm:text-4xl",
							children: "Technical Stack & Data Architecture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-sm text-muted",
							children: "Wheel or trackpad to move through the matrix. Every skill is backed by repository artifacts."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 rounded-2xl border border-line bg-surface/90 p-6 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-4 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-bold text-fg",
								children: "Production Pipeline Pattern (Medallion Architecture)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-2xs text-muted",
							children: "Standardized across warehouses"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
								index: "01 / BRONZE LAYER",
								tag: "Raw Ingestion",
								title: "Auditability & History",
								copy: "Raw CSV and CRM/ERP ingestion into immutable tables with source metadata timestamps and load tracking.",
								tone: "text-amber-400"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
								index: "02 / SILVER LAYER",
								tag: "Conformed & Cleaned",
								title: "Defensive Cleansing",
								copy: "Standardization with TRY_CONVERT, CASE logic, phone/email cleansing, accepted value validation, and deduplication.",
								tone: "text-soft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layer, {
								index: "03 / GOLD LAYER",
								tag: "Business Marts",
								title: "Star Schema Delivery",
								copy: "Fact tables, dimensions, SCD Type 2 history snapshots, and analytical views ready for Power BI, Superset, and Tableau.",
								tone: "text-warn"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex flex-wrap gap-2",
					children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSelectedGroup(g),
						className: cn("min-h-11 rounded-xl border px-3.5 py-1.5 font-mono text-xs transition-colors", selectedGroup === g ? "border-sky-400/50 bg-sky-500/20 text-sky-300" : "border-line bg-fg/5 text-muted hover:text-fg"),
						children: g
					}, g))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-5 md:grid-cols-2",
					children: filteredSkills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "flex flex-col justify-between rounded-2xl border border-line bg-surface/80 p-5 shadow-xl hover:border-sky-400/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-0.5 font-mono text-2xs text-sky-300",
									children: skill.group
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs font-semibold text-cyan-400",
									children: [skill.level, "% Depth"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-1 text-lg font-bold text-fg",
								children: skill.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "my-3 h-1.5 w-full overflow-hidden rounded-full bg-fg/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400",
									style: { width: `${skill.level}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-line bg-fg/[0.02] p-3 font-mono text-xs leading-relaxed text-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1 block text-2xs uppercase tracking-wider text-muted",
									children: "Repository Evidence:"
								}), skill.evidence]
							})
						] })
					}, skill.name))
				})
			]
		})
	});
}
function Layer({ index, tag, title, copy, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-fg/[0.03] p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-mono text-xs font-bold", tone),
					children: index
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-2xs text-muted",
					children: tag
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mb-1 text-sm font-semibold text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted",
				children: copy
			})
		]
	});
}
var LABELS = {
	projects: "ENGINEERED SYSTEMS",
	certificates: "CREDENTIAL GATE",
	skills: "SKILLS MATRIX"
};
var PACKETS = [
	"SELECT * FROM gold.fact_sales",
	"dbt run --select marts+",
	"COPY INTO bronze.raw_crm",
	"TRY_CONVERT(date, src)",
	"Airflow DAG: ingest→test",
	"SCD Type 2 snapshot",
	"Snowflake TASK stream",
	"Medallion: B → S → G",
	"SQLFluff lint --fix",
	"Athena query lakehouse",
	"dbt test --store-failures",
	"star.schema.dim_customer"
];
function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function WormholeOverlay({ phase, category, origin, onComplete }) {
	const canvasRef = (0, import_react.useRef)(null);
	const onCompleteRef = (0, import_react.useRef)(onComplete);
	onCompleteRef.current = onComplete;
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const duration = prefersReducedMotion() ? 280 : phase === "enter" ? 2400 : 1600;
		const started = performance.now();
		let raf = 0;
		let finished = false;
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(window.innerWidth * dpr);
			canvas.height = Math.floor(window.innerHeight * dpr);
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		window.addEventListener("resize", resize);
		const finish = () => {
			if (finished) return;
			finished = true;
			onCompleteRef.current();
		};
		const easeInOut = (t) => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
		const easeIn = (t) => t * t * t;
		const render = (now) => {
			const elapsed = now - started;
			const raw = Math.min(1, elapsed / duration);
			const t = phase === "enter" ? easeInOut(raw) : easeIn(raw);
			const w = window.innerWidth;
			const h = window.innerHeight;
			const cx = w * .5;
			const cy = h * .5;
			const maxR = Math.hypot(w, h) * .72;
			ctx.fillStyle = "#02040a";
			ctx.fillRect(0, 0, w, h);
			const tunnelSpeed = phase === "enter" ? t * 4.2 + .15 : (1 - t) * 3.4 + .1;
			const swirl = (phase === "enter" ? 1 : -1) * (elapsed / 1e3) * (.7 + t * 2.4);
			const vignette = ctx.createRadialGradient(cx, cy, maxR * .12, cx, cy, maxR);
			vignette.addColorStop(0, "rgba(0, 20, 32, 0.1)");
			vignette.addColorStop(.55, "rgba(2, 6, 14, 0.55)");
			vignette.addColorStop(1, "rgba(0, 0, 0, 1)");
			ctx.fillStyle = vignette;
			ctx.fillRect(0, 0, w, h);
			const rings = 28;
			for (let i = 0; i < rings; i++) {
				const z = (i / rings + tunnelSpeed * .22) % 1;
				const depth = Math.pow(z, 1.35);
				const radius = 18 + depth * maxR;
				const alpha = (1 - depth) * (phase === "enter" ? Math.min(1, t * 1.6) : 1 - t);
				const twist = swirl + i * .18;
				ctx.save();
				ctx.translate(cx, cy);
				ctx.rotate(twist * .18);
				ctx.beginPath();
				ctx.ellipse(0, 0, radius * 1.18, radius * .62, twist * .08, 0, Math.PI * 2);
				ctx.strokeStyle = i % 3 === 0 ? `rgba(0, 245, 255, ${.08 + alpha * .55})` : i % 3 === 1 ? `rgba(0, 210, 180, ${.06 + alpha * .4})` : `rgba(56, 189, 248, ${.05 + alpha * .32})`;
				ctx.lineWidth = 1.2 + (1 - depth) * 2.4;
				ctx.stroke();
				if (i % 2 === 0) {
					const spokes = 12;
					for (let s = 0; s < spokes; s++) {
						const ang = s / spokes * Math.PI * 2 + twist;
						const inner = radius * .92;
						const outer = radius * 1.04;
						ctx.beginPath();
						ctx.moveTo(Math.cos(ang) * inner * 1.18, Math.sin(ang) * inner * .62);
						ctx.lineTo(Math.cos(ang) * outer * 1.18, Math.sin(ang) * outer * .62);
						ctx.strokeStyle = `rgba(0, 245, 255, ${alpha * .35})`;
						ctx.lineWidth = 1;
						ctx.stroke();
					}
				}
				ctx.restore();
			}
			const coreR = 14 + (phase === "enter" ? t : 1 - t) * 46;
			const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 3.2);
			core.addColorStop(0, "rgba(240, 253, 255, 0.95)");
			core.addColorStop(.18, "rgba(0, 245, 255, 0.85)");
			core.addColorStop(.42, "rgba(0, 210, 180, 0.35)");
			core.addColorStop(1, "rgba(0, 0, 0, 0)");
			ctx.fillStyle = core;
			ctx.beginPath();
			ctx.arc(cx, cy, coreR * 3.2, 0, Math.PI * 2);
			ctx.fill();
			const packetCount = 36;
			ctx.font = "11px 'IBM Plex Mono', monospace";
			ctx.textAlign = "left";
			for (let i = 0; i < packetCount; i++) {
				const seed = i * 17.13;
				const travel = (elapsed / 900 + seed) % 1;
				const depth = phase === "enter" ? travel : 1 - travel;
				const ang = seed + swirl * .6;
				const radius = 30 + Math.pow(depth, 1.2) * maxR * .92;
				const px = cx + Math.cos(ang) * radius * 1.15;
				const py = cy + Math.sin(ang) * radius * .58;
				const fade = (1 - depth) * (phase === "enter" ? Math.min(1, t * 1.8) : 1 - t);
				if (fade < .05) continue;
				ctx.globalAlpha = fade * .9;
				ctx.fillStyle = i % 2 === 0 ? "#00f5ff" : "#00d2b4";
				ctx.beginPath();
				ctx.arc(px, py, 1.4 + (1 - depth) * 2.2, 0, Math.PI * 2);
				ctx.fill();
				if (i % 3 === 0) {
					ctx.fillStyle = "rgba(203, 213, 225, 0.85)";
					ctx.fillText(PACKETS[i % PACKETS.length], px + 8, py + 3);
				}
			}
			ctx.globalAlpha = 1;
			if (origin && phase === "enter" && t < .72) {
				const cardT = Math.min(1, t / .72);
				const fromX = origin.x;
				const fromY = origin.y;
				const x = fromX + (cx - fromX) * cardT;
				const y = fromY + (cy - fromY) * cardT;
				const scale = 1 - cardT * .92;
				const alpha = 1 - cardT;
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(cardT * .55);
				ctx.scale(scale, scale * (1 - cardT * .35));
				ctx.globalAlpha = alpha;
				ctx.fillStyle = "rgba(14, 23, 38, 0.92)";
				ctx.strokeStyle = "rgba(0, 245, 255, 0.7)";
				ctx.lineWidth = 2;
				const rw = origin.w;
				const rh = origin.h;
				roundRect(ctx, -rw / 2, -rh / 2, rw, rh, 18);
				ctx.fill();
				ctx.stroke();
				ctx.restore();
				ctx.globalAlpha = 1;
			}
			const labelAlpha = phase === "enter" ? Math.min(1, Math.max(0, (t - .35) * 2.4)) : 1 - t;
			ctx.globalAlpha = labelAlpha;
			ctx.fillStyle = "#00f5ff";
			ctx.font = "600 12px 'IBM Plex Mono', monospace";
			ctx.textAlign = "center";
			ctx.fillText("WORMHOLE LINK ESTABLISHED", cx, cy - coreR - 36);
			ctx.fillStyle = "#f0f4fc";
			ctx.font = "700 28px 'Space Grotesk', sans-serif";
			ctx.fillText(LABELS[category], cx, cy + coreR + 48);
			ctx.globalAlpha = 1;
			if (phase === "enter" && t > .82) {
				const flash = (t - .82) / .18;
				ctx.fillStyle = `rgba(224, 255, 255, ${flash * .55})`;
				ctx.fillRect(0, 0, w, h);
			}
			if (phase === "exit" && t < .18) {
				ctx.fillStyle = `rgba(0, 245, 255, ${(.18 - t) / .18 * .35})`;
				ctx.fillRect(0, 0, w, h);
			}
			if (raw >= 1) {
				finish();
				return;
			}
			raf = requestAnimationFrame(render);
		};
		raf = requestAnimationFrame(render);
		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(raf);
		};
	}, [
		phase,
		category,
		origin
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[70] bg-bg",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "block size-full"
		})
	});
}
function roundRect(ctx, x, y, w, h, r) {
	const radius = Math.min(r, w / 2, h / 2);
	ctx.beginPath();
	ctx.moveTo(x + radius, y);
	ctx.arcTo(x + w, y, x + w, y + h, radius);
	ctx.arcTo(x + w, y + h, x, y + h, radius);
	ctx.arcTo(x, y + h, x, y, radius);
	ctx.arcTo(x, y, x + w, y, radius);
	ctx.closePath();
}
function rectToOrigin(rect) {
	if (!rect) return null;
	return {
		x: rect.left + rect.width / 2,
		y: rect.top + rect.height / 2,
		w: rect.width,
		h: rect.height
	};
}
function parseHash() {
	const hash = window.location.hash.replace("#", "");
	if (hash === "projects" || hash === "certificates" || hash === "skills") return hash;
	return null;
}
function PortfolioApp() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)(null);
	const [wormhole, setWormhole] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const apply = () => {
			const next = parseHash();
			setActiveCategory(next);
			if (!next) setWormhole(null);
		};
		apply();
		window.addEventListener("hashchange", apply);
		return () => window.removeEventListener("hashchange", apply);
	}, []);
	const handleOpenCategory = (0, import_react.useCallback)((category, origin) => {
		setActiveCategory(category);
		setWormhole({
			phase: "enter",
			category,
			origin: rectToOrigin(origin)
		});
		if (window.location.hash.replace("#", "") !== category) window.location.hash = category;
	}, []);
	const handleCloseCategory = (0, import_react.useCallback)(() => {
		if (!activeCategory) return;
		setWormhole({
			phase: "exit",
			category: activeCategory,
			origin: {
				x: window.innerWidth / 2,
				y: window.innerHeight / 2,
				w: 220,
				h: 280
			}
		});
	}, [activeCategory]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape" && activeCategory && !wormhole) handleCloseCategory();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		activeCategory,
		wormhole,
		handleCloseCategory
	]);
	const handleWormholeComplete = (0, import_react.useCallback)(() => {
		if (wormhole?.phase === "exit") {
			setActiveCategory(null);
			window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
		}
		setWormhole(null);
	}, [wormhole]);
	const scrollToCards = () => {
		document.getElementById("category-cards")?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-svh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataCanvas, { paused: Boolean(activeCategory || wormhole) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {
				onOpenCategory: handleOpenCategory,
				activeCategory
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative z-10 flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { onScrollToCards: scrollToCards }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicroAbout, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCards, { onSelectCategory: handleOpenCategory }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactStrip, {})
				]
			}),
			activeCategory === "projects" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsDetailView, { onBack: handleCloseCategory }),
			activeCategory === "certificates" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationsDetailView, { onBack: handleCloseCategory }),
			activeCategory === "skills" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsDetailView, { onBack: handleCloseCategory }),
			wormhole && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WormholeOverlay, {
				phase: wormhole.phase,
				category: wormhole.category,
				origin: wormhole.origin,
				onComplete: handleWormholeComplete
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioApp, {});
}
//#endregion
export { Home as component };
