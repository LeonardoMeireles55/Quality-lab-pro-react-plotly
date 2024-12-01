import Link from 'next/link';
import React from 'react';
import MeanAndDeviationDisplay from './MeanAndDeviationDisplay';
import UpdateResults from './UpdateResults';
import AclUpdateResults from './AclUpdateResult';

interface TestSelectorProps {
  testName: string;
  testLevel: number;
  setTestName: (testName: string) => void;
  setTestLevel: (testLevel: number) => void;
  mean: number;
  sd: number;
  ownMean: number;
  ownSd: number;
  unitValue: string;
}

const TestSelector: React.FC<TestSelectorProps> = ({ testName, testLevel, setTestName, setTestLevel, sd, mean, ownMean, ownSd, unitValue }) => {
  return (
    <div className="flex items-center gap-2 text-textSecondary">
      <div className="flex items-center gap-2">
        <span className="text-xs md:text-sm font-medium">Analíto:</span>
        <select 
          className="bg-muted text-textSecondary rounded p-0 md:px-2 md:py-1 text-xs md:text-sm"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
        >
          {[
            "ALB2", "ALP2S", "ALTL", "AMYL2", "ASTL", "BILD2",
            "BILT3", "CA2", "CHOL2", "CK2", "CKMB2", "CL-I",
            "CREJ2", "CRP4", "GGTI2", "GLUC3", "HDLC4", "K-I",
            "LDHI2", "LIP", "MG-2", "NA-I", "PHOS2", "TRIGL",
            "UA2", "UREL"
          ].map((test) => (
            <option key={test} value={test}>{test}</option>
          ))}
        </select>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xs md:text-sm font-medium">Nível:</span>
        <select 
          className="bg-muted text-textSecondary rounded p-0 text-xs md:px-2 md:py-1 md:text-sm"
          value={testLevel}
          onChange={(e) => setTestLevel(+e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
        </select>
      </div>
      <Link 
        className="bg-muted hover:scale-105 text-textSecondary rounded py-0 px-1 md:px-2 md:py-1 text-xs md:text-sm"
            target="_blank" href="https://docs.google.com/spreadsheets/d/1afb6XMe-CAg1yKednEugp3W8v6AMy5QJMzHzeoHRRRg/edit?userstoinvite=andersongomesbio@gmail.com&sharingaction=manageaccess&role=writer&pli=1#gid=1397277322"
            >&#10003;
        </Link>
        <div className='hidden md:flex gap-0 w-full text-xs'>
        <UpdateResults />
        <MeanAndDeviationDisplay mean={mean} sd={sd} ownMean={ownMean} ownSd={ownSd} unitValue={unitValue} />
        </div>

    </div>
  );
};

export default TestSelector;
