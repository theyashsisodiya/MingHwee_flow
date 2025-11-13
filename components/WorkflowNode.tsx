import React from 'react';
import { Actor, WorkflowStep } from '../types';
import { AdminIcon, SystemIcon, UserIcon } from './Icons';

const actorConfig = {
  [Actor.USER]: {
    Icon: UserIcon,
    bg: 'bg-blue-50',
    text: 'text-blue-800',
    ring: 'ring-blue-200',
    iconBg: 'bg-blue-100',
  },
  [Actor.ADMIN]: {
    Icon: AdminIcon,
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    ring: 'ring-amber-200',
    iconBg: 'bg-amber-100',
  },
  [Actor.SYSTEM]: {
    Icon: SystemIcon,
    bg: 'bg-emerald-50',
    text: 'text-emerald-800',
    ring: 'ring-emerald-200',
    iconBg: 'bg-emerald-100',
  },
};

const WorkflowNode: React.FC<WorkflowStep> = ({ title, actor, description, branches }) => {
  const { Icon, bg, text, ring, iconBg } = actorConfig[actor];

  const NodeCard = (
     <div className={`relative w-full max-w-sm md:max-w-md p-5 rounded-xl shadow-md border border-slate-200/80 ${bg} ring-1 ${ring}`}>
        <div className="flex items-start space-x-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconBg} ${text}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wider ${text}`}>{actor}</p>
            <h3 className="text-lg font-bold text-slate-800 mt-1">{title}</h3>
            <p className="text-slate-600 text-sm mt-2">{description}</p>
          </div>
        </div>
      </div>
  );

  return (
    <div className="flex flex-col items-center">
      {NodeCard}

      {branches && branches.length > 0 && (
        <div className="flex flex-col items-center">
          {/* Vertical line from parent to branching point */}
          <div className="w-1 h-6 bg-slate-300" />
          
          <div className="relative inline-flex flex-col md:flex-row items-start justify-center gap-8 mt-6">

            {/* Horizontal Line - Spans from center of first to center of last branch */}
            {branches.length > 1 && (
              <div className="absolute top-0 h-1 bg-slate-300 left-[120px] right-[120px]" />
            )}
            
            {branches.map((branch) => (
              <div key={branch.id} className="relative flex flex-col items-center min-w-[240px]">
                {/* Vertical line from horizontal line to branch node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-6 bg-slate-300" />
                <div className="mt-6">
                  <WorkflowNode {...branch} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowNode;
