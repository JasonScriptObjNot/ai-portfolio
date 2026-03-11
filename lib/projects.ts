export type Project = {
  title: string
  problem: string
  risk?: string
  intervention: string
  impact: string
}

export const projects: Project[] = [
{
title:"Hierarchical Multi-Agent Deterministic Architecture",
problem:"Black-box AI decision pipelines obscure how errors emerge across complex task decompositions.",
risk:"Without structured oversight pathways, failures propagate silently across agent layers, preventing targeted correction or accountability.",
intervention:"Architected hierarchical multi-agent system representing tasks as additive canonical computational graphs with deterministic human-in-the-loop (HITL) correction propagation.",
impact:"Enabled granular failure attribution and cross-level alignment between automated decision processes and human oversight."
},
{
title:"Parallelizable DAG Ingestion",
problem:"Long-context AI systems struggle to preserve structured meaning when processing large text streams.",
risk:"Flattened embeddings distort hierarchical relationships within documents, degrading retrieval precision and increasing hallucination risk.",
intervention:"Invented structure-preserving ingestion pipeline that reconstructs documents into parallelizable DAG representations of hierarchical semantic relationships.",
impact:"Improved long-context reasoning reliability and enabled more precise retrieval architectures for scalable AI systems."
},
{
title:"AI + Film Generative Pipeline",
problem:"Public understanding of AI systems is often shaped by inaccurate or oversimplified media representations.",
risk:"Misaligned narratives can distort societal expectations and policy discussions around emerging AI technologies.",
intervention:"Directed interdisciplinary research-production pipeline combining generative AI experimentation with narrative filmmaking to accurately translate technical system behaviors into media.",
impact:"Bridged technical and cultural perspectives on AI, improving public-facing narratives around real-world system dynamics."
},
{
title:"Multi-Agent RL Infrastructure",
problem:"Scaling reinforcement learning systems across multiple agents introduces coordination instability and training inefficiencies.",
risk:"Poorly structured distributed training environments obscure failure modes and limit real-world applicability of multi-agent research.",
intervention:"Directed development of scalable multi-agent RL infrastructure using CUDA/ROCm optimized distributed training pipelines and coordinated research workflows.",
impact:"Improved experimental reliability and enabled coordinated exploration of scalable multi-agent learning architectures."
},
{
title:"Bayesian Changepoint Modeling",
problem:"Adaptive systems must detect structural shifts in data streams to maintain reliable decision-making.",
risk:"Undetected regime changes can silently degrade model performance in real-world environments.",
intervention:"Conducted research on Bayesian online changepoint detection for irregularly spaced positional data, modeling structural uncertainty within evolving systems.",
impact:"Improved robustness of adaptive AI systems operating under dynamic real-world conditions."
}
]