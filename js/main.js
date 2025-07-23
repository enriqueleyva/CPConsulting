gsap.registerPlugin(ScrollTrigger);

// Generic fade-up for every section (except hero)
gsap.utils.toArray("section").forEach((section) => {
	if (section.id === "hero") return;
	gsap.from(section, {
		opacity: 0,
		y: 50,
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: section,
			start: "top 80%",
		},
	});
});

// Parallax effect on hero text
gsap.from("#hero h1", { yPercent: 20, opacity: 0, duration: 1 });
gsap.from("#hero p", {
	yPercent: 40,
	opacity: 0,
	duration: 1,
	delay: 0.2,
});

// Fade-up entrance once, when section scrolls into view
gsap.from(".service-card", {
	opacity: 0,
	y: 20,
	duration: 0.7,
	ease: "power2.out",
	stagger: 0.15,
	scrollTrigger: {
		trigger: "#services",
		start: "top 85%",
		toggleActions: "play none none none",
	},
});
gsap.registerPlugin(ScrollTrigger);

const prefersReduce = window.matchMedia(
	"(prefers-reduced-motion: reduce)"
).matches;
if (!prefersReduce) {
	gsap.from(".hero-logo", {
		opacity: 0,
		scale: 0.6,
		duration: 0.9,
		ease: "back.out(1.7)",
		scrollTrigger: {
			trigger: "#hero",
			start: "top 80%",
			toggleActions: "play none none none",
		},
	});
}
