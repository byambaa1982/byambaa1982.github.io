# Multi-Agent Architecture Diagrams

This folder contains interactive HTML/CSS diagrams for the blog post "Building Multi-Agent Systems on Google Cloud: A Complete Architecture Guide".

## Diagrams

### 1. Hierarchical Agent Architecture
**File:** `hierarchical-diagram.html`

Interactive diagram showing a supervisor agent coordinating multiple worker agents. Demonstrates the most common multi-agent pattern with Cloud Run services, Cloud Tasks orchestration, and Firestore state management.

**Features:**
- Hover effects on agent nodes
- Color-coded supervisor vs worker agents
- Visual connection lines showing task distribution
- Supporting services layer

### 2. Peer-to-Peer Agent Architecture
**File:** `peer-to-peer-diagram.html`

Interactive diagram illustrating agents communicating directly via Pub/Sub without central coordination. Shows dynamic workflow patterns with autonomous agents.

**Features:**
- Circular agent layout
- Animated message flow indicators
- Central Pub/Sub message bus
- Pulsing animations showing real-time communication

### 3. Pipeline Agent Architecture
**File:** `pipeline-diagram.html`

Interactive diagram demonstrating sequential processing where each agent's output becomes the next agent's input. Shows ETL-style workflows.

**Features:**
- Linear pipeline flow with numbered stages
- Animated arrows showing data movement
- Orchestration layer showing supporting services
- Input/output data flow visualization

### 4. Production Architecture
**File:** `production-architecture.html`

Complete production system architecture showing all layers of a multi-agent content generation platform.

**Features:**
- 4-layer architecture (API, Orchestration, Agents, AI & Data)
- Cost estimates per service
- Performance metrics dashboard
- Request processing flow diagram
- Hover effects on service cards

## Google Cloud Icons

Icons are sourced from the `google-cloud-icons` folder and include:
- `cloud_run.svg` - Cloud Run service
- `vertexai.svg` - Vertex AI
- `cloud_tasks.svg` - Cloud Tasks
- `firestore.svg` - Firestore
- `pubsub.svg` - Pub/Sub
- `cloud_storage.svg` - Cloud Storage

## Usage in Blog Post

These diagrams are embedded in the blog post using iframes:

```html
<div style="text-align: center; margin: 30px 0;">
  <iframe src="/images/blog/multi-agent-gcp/hierarchical-diagram.html" 
          width="100%" 
          height="600px" 
          frameborder="0" 
          style="border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
  </iframe>
  <p style="font-size: 13px; color: #5f6368; margin-top: 10px;">
    <em>Interactive Diagram: Hierarchical Multi-Agent Architecture</em>
  </p>
</div>
```

## Styling

All diagrams use:
- Google Sans / Roboto font family
- Google Cloud brand colors (#4285f4, #34a853, #fbbc04, #ea4335)
- Responsive design with flexbox
- Smooth hover transitions
- Mobile-friendly layouts

## Browser Compatibility

Tested and working in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

These diagrams are part of the byambaa1982.github.io blog and follow the same license as the repository.
