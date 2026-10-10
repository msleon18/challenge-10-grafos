import { useMemo, useRef, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

export default function GraphComponent({ graphData }) {
  const fgRef = useRef();
  const data = useMemo(() => graphData.getD3Data(), [graphData]);

  useEffect(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.d3Force('charge').strength(-400); // repulsión entre nodos
    fg.d3Force('link').distance(120);    // largo de los links
    fg.d3ReheatSimulation();
  }, [data]);

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        width={750}
        height={500}
        nodeLabel="id"
        nodeColor={(n) => n.color}
        nodeRelSize={1}
        nodeVal={(n) => (n.size > 500 ? 90 : 50)} // radio: ~9px ciudades, ~7px personas
        linkColor={() => '#94a3b8'}
        linkWidth={2}
        cooldownTicks={100}
        onEngineStop={() => fgRef.current.zoomToFit(400, 40)}
        nodeCanvasObjectMode={() => 'after'}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const fontSize = 12 / globalScale;
          ctx.font = `bold ${fontSize}px sans-serif`;
          ctx.fillStyle = '#0f172a';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(node.id, node.x, node.y + 12);
        }}
      />
    </div>
  );
}