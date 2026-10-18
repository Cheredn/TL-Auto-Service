export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detail: string;
  iconName: string;
  category: string;
}

export const BUSINESS_INFO = {
  name: 'T & L Auto Service Inc.',
  legalName: 'T & L Auto Service Inc.',
  tagline: 'Reliable Auto Care. Built Around You.',
  subheadline: 'Your local destination for automotive repair and maintenance in Greater Moncton.',
  
  // Contact details
  phone: '(506) 854-9708',
  phoneRaw: '+15068549708',
  email: 'tlautoservice@outlook.com',
  
  // Location
  address: {
    street: '57 Frontenac Drive',
    city: 'Moncton',
    province: 'New Brunswick',
    provinceShort: 'NB',
    country: 'Canada',
    postalCode: 'E1A 4N5',
    fullFormatted: '57 Frontenac Drive, Moncton, New Brunswick, Canada',
  },

  // Navigation Links
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=57+Frontenac+Drive,+Moncton,+NB+E1A+4N5,+Canada',
  googleMapsViewUrl: 'https://www.google.com/maps/search/?api=1&query=57+Frontenac+Drive,+Moncton,+NB+E1A+4N5',

  // Business hours note (Honest representation per guidelines)
  hoursNote: 'Please call to confirm our current business hours.',
  hoursNoteSub: 'Reach us directly at (506) 854-9708 to verify technician availability and book your vehicle.',

  // Social link placeholder
  socialMediaNote: 'Official social profiles will be linked here once verified with the shop owner.',
  
  // 8 Core Service Categories
  services: [
    {
      id: 'general-auto-repair',
      title: 'General Auto Repair',
      shortDesc: 'Comprehensive mechanical servicing and automotive repairs for domestic and import vehicles.',
      detail: 'From belt replacements to fluid leaks and mechanical troubleshooting, our focus is keeping your vehicle safe, reliable, and road-ready.',
      iconName: 'Wrench',
      category: 'Mechanical',
    },
    {
      id: 'oil-changes',
      title: 'Oil Changes & Routine Maintenance',
      shortDesc: 'Scheduled oil and filter changes, fluid top-ups, and multi-point vehicle health checks.',
      detail: 'Protect your engine against premature wear with premium synthetic and conventional lubricants suited for Canadian weather extremes.',
      iconName: 'Droplet',
      category: 'Preventative',
    },
    {
      id: 'brake-service',
      title: 'Brake Service',
      shortDesc: 'Complete brake inspections, pad and rotor replacements, caliper servicing, and brake fluid flushes.',
      detail: 'Ensuring maximum stopping power and responsive pedal feel across wet, icy, and challenging Maritime road conditions.',
      iconName: 'ShieldAlert',
      category: 'Safety',
    },
    {
      id: 'tire-services',
      title: 'Tire Services',
      shortDesc: 'Seasonal tire changeovers, mounting, balancing, and tire condition assessments.',
      detail: 'Get your vehicle ready for seasonal shifts with reliable tire changeovers and rotation to promote even tread wear and optimal traction.',
      iconName: 'Disc',
      category: 'Safety',
    },
    {
      id: 'engine-diagnostics',
      title: 'Engine Diagnostics',
      shortDesc: 'Advanced OBD-II computer scanning to identify check engine lights and performance anomalies.',
      detail: 'Pinpointing sensor faults, ignition misfires, and electronic glitches before minor issues escalate into costly roadside repairs.',
      iconName: 'Cpu',
      category: 'Diagnostic',
    },
    {
      id: 'heating-ac',
      title: 'Heating & Air Conditioning',
      shortDesc: 'Climate control system diagnostics, heater core checks, blower motor repairs, and AC servicing.',
      detail: 'Stay comfortable year-round in Moncton—reliable cabin heating during freezing winters and crisp cooling during humid summers.',
      iconName: 'ThermometerSnowflake',
      category: 'Comfort',
    },
    {
      id: 'steering-suspension',
      title: 'Steering & Suspension',
      shortDesc: 'Struts, shocks, ball joints, control arms, and tie rod inspections and replacements.',
      detail: 'Restore smooth handling, responsive steering control, and passenger ride comfort compromised by pothole-laden local roadways.',
      iconName: 'Activity',
      category: 'Performance',
    },
    {
      id: 'inspection-inquiries',
      title: 'Vehicle Inspection Inquiries',
      shortDesc: 'Pre-purchase vehicle condition checks, safety system reviews, and maintenance assessments.',
      detail: 'Consult with our team regarding vehicle health before buying a used vehicle or embarking on extensive road trips.',
      iconName: 'CheckCircle2',
      category: 'Inspection',
    },
  ] as ServiceItem[],
};
