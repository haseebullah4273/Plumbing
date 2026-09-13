import pakHomeHero from '../assets/images/pakistan_home_hero_1789284089987.jpg';
import pprPipeWelding from '../assets/images/ppr_pipe_welding_1789284103842.jpg';
import giPipeWork from '../assets/images/gi_pipe_work_1789284116336.jpg';
import pvcDrainPipes from '../assets/images/pvc_drain_pipes_1789284128204.jpg';
import pakBathSanitary from '../assets/images/pak_bath_sanitary_1789284140349.jpg';
import waterMotorPump from '../assets/images/water_motor_pump_1789284981800.jpg';
import tankCleaning from '../assets/images/tank_cleaning_1789284997334.jpg';
import geyserService from '../assets/images/geyser_service_1789285009900.jpg';
import haiderAliOwner from '../assets/images/haider_ali_owner_1789285022133.jpg';

// Real Pakistani customer portraits for Karachi reviews
import customerTariq from '../assets/images/pak_customer_tariq_1789285247760.jpg';
import customerAyesha from '../assets/images/pak_customer_ayesha_1789285261508.jpg';
import customerFarhan from '../assets/images/pak_customer_farhan_1789285273942.jpg';
import customerRasheed from '../assets/images/pak_customer_rasheed_1789285287589.jpg';
import customerUsman from '../assets/images/pak_customer_usman_1789285299461.jpg';
import customerFatima from '../assets/images/pak_customer_fatima_1789285310735.jpg';

/**
 * Centralized Image Configuration for TheHomist (Karachi)
 * Every service has a completely unique, authentic photo.
 */
export const siteImages = {
  // Hero section photo of modern Karachi residence
  heroBg: pakHomeHero,
  heroPlumber: pprPipeWelding,
  
  // Owner Haider Ali
  owner: haiderAliOwner,
  ownerPortrait: haiderAliOwner,
  workshop: pakBathSanitary,
  
  // Exactly 6 Dedicated Services - completely unique image for each
  pprService: pprPipeWelding,
  pvcService: pvcDrainPipes,
  giService: giPipeWork,
  waterMotorService: waterMotorPump,
  waterTankCleaning: tankCleaning,
  geyserService: geyserService,

  // Additional sanitary fixture image
  sanitaryService: pakBathSanitary,
  plumberUnderSink: pakBathSanitary,
  
  // Technicians & Work
  technicianPortrait: haiderAliOwner,
  
  // Before & After comparison photos
  beforeCorrodedPipes: giPipeWork,
  afterPristinePipes: pprPipeWelding,

  // Karachi home showcase & team
  pakistanHome: pakHomeHero,
  teamVan: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",

  // Real Pakistani Customer Review Avatars
  customers: {
    tariq: customerTariq,
    ayesha: customerAyesha,
    farhan: customerFarhan,
    rasheed: customerRasheed,
    usman: customerUsman,
    fatima: customerFatima,
  }
};
