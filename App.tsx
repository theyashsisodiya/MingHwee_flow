import React, { useState } from 'react';
import { SINGAPORE_WORKFLOW_DATA, ADMIN_WORKFLOW_DATA, PHILIPPINES_WORKFLOW_DATA, CANDIDATE_WORKFLOW_DATA } from './constants';
import WorkflowNode from './components/WorkflowNode';

type View = 'singapore' | 'philippines' | 'admin' | 'candidate';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('singapore');

  const dataToRender =
    activeView === 'singapore'
      ? SINGAPORE_WORKFLOW_DATA
      : activeView === 'philippines'
      ? PHILIPPINES_WORKFLOW_DATA
      : activeView === 'admin'
      ? ADMIN_WORKFLOW_DATA
      : CANDIDATE_WORKFLOW_DATA;
      
  const getSubtitle = () => {
    switch(activeView) {
      case 'singapore':
        return "Visualizing the Mingvi.com Singapore Employer Journey";
      case 'philippines':
        return "Visualizing the MingHwee.com Philippines Employer Journey";
      case 'admin':
        return "Visualizing the Administrator's Management & Approval Process";
      case 'candidate':
        return "Visualizing the Complete Candidate Journey from Application to Hire";
      default:
        return "";
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Business Process Workflow
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          {getSubtitle()}
        </p>
      </header>

      <div className="flex justify-center mb-12">
        <div className="bg-slate-200/60 rounded-full p-1 flex items-center space-x-1 shadow-inner flex-wrap justify-center">
          <button
            onClick={() => setActiveView('singapore')}
            aria-pressed={activeView === 'singapore'}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              activeView === 'singapore'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-transparent text-slate-500 hover:bg-white/50 hover:text-slate-700'
            }`}
          >
            Employer Workflow (SG)
          </button>
          <button
            onClick={() => setActiveView('philippines')}
            aria-pressed={activeView === 'philippines'}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              activeView === 'philippines'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-transparent text-slate-500 hover:bg-white/50 hover:text-slate-700'
            }`}
          >
            Employer Workflow (PH)
          </button>
           <button
            onClick={() => setActiveView('candidate')}
            aria-pressed={activeView === 'candidate'}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              activeView === 'candidate'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-transparent text-slate-500 hover:bg-white/50 hover:text-slate-700'
            }`}
          >
            Candidate Workflow
          </button>
          <button
            onClick={() => setActiveView('admin')}
            aria-pressed={activeView === 'admin'}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              activeView === 'admin'
                ? 'bg-white text-slate-900 shadow-md'
                : 'bg-transparent text-slate-500 hover:bg-white/50 hover:text-slate-700'
            }`}
          >
            Admin Workflow
          </button>
        </div>
      </div>

      <main>
        <div className="flex flex-col items-center space-y-0">
          {dataToRender.map((step, index) => (
            <React.Fragment key={step.id}>
              <WorkflowNode {...step} />
              {!step.isFinal && !step.branches && index < dataToRender.length - 1 && (
                <div className="w-1 h-12 bg-slate-300" />
              )}
               {step.branches && !step.isFinal && (
                 <div className="w-1 h-12 bg-slate-300" />
               )}
            </React.Fragment>
          ))}
        </div>
      </main>

      <footer className="text-center mt-16 text-slate-500 text-sm">
        <p>A visual representation of the hiring flow.</p>
      </footer>
    </div>
  );
};

export default App;
