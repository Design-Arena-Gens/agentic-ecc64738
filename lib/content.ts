export const features = [
  {
    title: "Ultra-fast Video Generation",
    description:
      "Render 4K ready clips in under 90 seconds using Sora 2’s optimized transformer pipeline with dynamic denoising.",
    highlight: "90s renders"
  },
  {
    title: "Storyboard-to-Scene Control",
    description:
      "Upload mood boards, shot lists, or text prompts and Sora 2 automatically translates them into cinematic sequences.",
    highlight: "Cinematic control"
  },
  {
    title: "Creator Collaboration",
    description:
      "Invite teammates, share assets, annotate frames, and iterate together in real-time — free for up to 5 users.",
    highlight: "Realtime co-create"
  }
];

export const workflowSteps = [
  {
    title: "Describe Your Vision",
    description:
      "Prompt with natural language, reference imagery, or upload scripts to guide pacing, lighting, and tone."
  },
  {
    title: "Refine with Smart Edits",
    description:
      "Trim, re-time, and swap scenes instantly with AI-assisted tools tuned for cinematic storytelling."
  },
  {
    title: "Export & Share Anywhere",
    description:
      "Deliver in MP4, ProRes, or layered PSD exports with one click, ready for any downstream workflow."
  }
];

export const showcaseReels = [
  {
    title: "Cyberpunk City Loop",
    prompt:
      "A sweeping drone shot through neon-lit skyscrapers during a midnight rainstorm, reflective puddles on the ground.",
    duration: "14 sec"
  },
  {
    title: "Ocean Dreamscape",
    prompt:
      "Soft sunrise light across calm waters as bioluminescent dolphins arc from glowing waves in slow motion.",
    duration: "11 sec"
  },
  {
    title: "Analog Film Montage",
    prompt:
      "Handheld 35mm footage of a summer road trip, warm grain, lens flares, friends laughing in a vintage convertible.",
    duration: "21 sec"
  }
];

export const pricingTiers = [
  {
    name: "Creator",
    price: "$0",
    cadence: "forever",
    description: "Get started with limitless prompts and daily render credits.",
    features: [
      "45 seconds of HD generation per day",
      "Storyboard-to-scene control",
      "Team workspace for 2 collaborators",
      "Commercial usage license"
    ],
    cta: "Start for free",
    highlighted: true
  },
  {
    name: "Studio",
    price: "$59",
    cadence: "/month",
    description: "Go beyond with 4K pipelines and priority rendering lanes.",
    features: [
      "10 minutes of 4K output per day",
      "Unlimited collaborator seats",
      "Advanced camera and lighting rig control",
      "Frame-by-frame edit history"
    ],
    cta: "Upgrade now",
    highlighted: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "pricing",
    description: "Tailored security, compliance, and dedicated model fine-tuning.",
    features: [
      "Dedicated training clusters",
      "Private diffusion checkpoints",
      "SOC 2 compliant deployment",
      "24/7 premier support"
    ],
    cta: "Book a demo",
    highlighted: false
  }
];

export const faqs = [
  {
    question: "Is Sora 2 really free to use?",
    answer:
      "Yes! The Creator tier is free forever with daily render credits that replenish every 24 hours. Upgrade anytime if you outgrow the included quota."
  },
  {
    question: "Do I need a GPU to run Sora 2?",
    answer:
      "No hardware required. Sora 2 runs fully in the cloud so you can create cinematic video from any browser, even on low-powered laptops."
  },
  {
    question: "Can I bring my own datasets?",
    answer:
      "Studio and Enterprise plans support fine-tuning on your own reference footage. Enterprise plans include private checkpoints so your data stays yours."
  },
  {
    question: "What formats are supported for export?",
    answer:
      "Export as MP4, MOV (ProRes 422), animated GIF, or layered PSD for compositing. We also support LUT exports for color workflows."
  }
];
