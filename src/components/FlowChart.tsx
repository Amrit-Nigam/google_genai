import React, { useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
  NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { CareerNode, CareerEdge } from '../lib/types';

interface FlowChartProps {
  nodes: CareerNode[];
  edges: CareerEdge[];
  className?: string;
}

const nodeTypes: NodeTypes = {
  course: ({ data }) => (
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 min-w-[200px] shadow-lg">
      <div className="font-semibold text-blue-400 text-sm">{data?.title || 'Course'}</div>
      <div className="text-xs text-muted-foreground mt-1">{data?.description || 'Course description'}</div>
      {data?.duration && (
        <div className="text-xs text-blue-300/70 mt-1">⏱️ {data.duration}</div>
      )}
      {data?.difficulty && (
        <div className="text-xs text-blue-300/70 mt-1">
          📚 {data.difficulty}
        </div>
      )}
    </div>
  ),
  internship: ({ data }) => (
    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 min-w-[200px] shadow-lg">
      <div className="font-semibold text-purple-400 text-sm">{data?.title || 'Internship'}</div>
      <div className="text-xs text-muted-foreground mt-1">{data?.description || 'Internship description'}</div>
      {data?.duration && (
        <div className="text-xs text-purple-300/70 mt-1">⏱️ {data.duration}</div>
      )}
    </div>
  ),
  job: ({ data }) => (
    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 min-w-[200px] shadow-lg">
      <div className="font-semibold text-green-400 text-sm">{data?.title || 'Job'}</div>
      <div className="text-xs text-muted-foreground mt-1">{data?.description || 'Job description'}</div>
      {data?.salary && (
        <div className="text-xs text-green-300/70 mt-1">💰 {data.salary}</div>
      )}
    </div>
  ),
  company: ({ data }) => (
    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 min-w-[200px] shadow-lg">
      <div className="font-semibold text-yellow-400 text-sm">{data?.title || 'Company'}</div>
      <div className="text-xs text-muted-foreground mt-1">{data?.description || 'Company description'}</div>
    </div>
  ),
  skill: ({ data }) => (
    <div className="bg-card border border-border rounded-lg p-3 min-w-[150px] shadow-lg">
      <div className="font-semibold text-foreground text-sm">{data?.title || 'Skill'}</div>
      <div className="text-xs text-muted-foreground mt-1">{data?.description || 'Skill description'}</div>
    </div>
  ),
};

export const FlowChart: React.FC<FlowChartProps> = ({ nodes, edges, className }) => {
  // Debug logging
  console.log('FlowChart received nodes:', nodes);
  console.log('FlowChart received edges:', edges);
  
  const [reactFlowNodes, setNodes, onNodesChange] = useNodesState(nodes);
  const [reactFlowEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className={className} style={{ width: '100%', height: '600px' }}>
      <ReactFlow
        nodes={reactFlowNodes}
        edges={reactFlowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-background"
      >
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            switch (node.type) {
              case 'course': return '#3b82f6';
              case 'internship': return '#8b5cf6';
              case 'job': return '#10b981';
              case 'company': return '#f59e0b';
              case 'skill': return '#6b7280';
              default: return '#3b82f6';
            }
          }}
          className="bg-card border border-border rounded-lg"
        />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};
