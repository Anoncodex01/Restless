import { TrustedPartner } from '../components/TrustedPartner';
import { ServicesSection } from '../components/ServicesSection';
import { FreeZones } from '../components/FreeZones';
import { CompanySetup } from '../components/CompanySetup';

export default function Home() {
  return (
    <main>
      <TrustedPartner />
      <ServicesSection />
      <CompanySetup />
      <FreeZones />
    </main>
  );
} 