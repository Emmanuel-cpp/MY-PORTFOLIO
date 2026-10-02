// All site content lives here. Edit this file to update the portfolio.
export const profile = {
  name: 'Emmanuel Siamoonga',
    headline: ['Software Development,', 'Cloud Infrastructure,', 'Cybersecurity and', 'Artificial Intelligence'],
  sub: 'that keeps your business running.',
  email: 'emmanuelsiamoonga@gmail.com',
  phone: '+260 772617651',
  github: 'https://github.com/emmanuel-cpp',
  linkedin: 'https://linkedin.com/in/emmanuel-siamoonga-98b30929b',
}

export const services = [
  { title: 'Software Development & AI', text: 'Custom software built around how your business already works.',
    bullets: ['Mobile apps and web systems', 'Business websites with WhatsApp booking', 'AI assistants and automation for repetitive work'] },
  { title: 'Upgrade Your Existing Systems', text: 'Make what you already have faster, safer and easier to use.',
    bullets: ['Fix slow, buggy or outdated software', 'Add features, mobile access and integrations', 'Move old systems to the cloud safely'] },
  { title: 'Cloud Infrastructure', text: 'Reliable, affordable hosting and automation so your systems stay online.',
    bullets: ['Microsoft Azure and AWS setup', 'Backups and automation', 'Moving your business to the cloud'] },
  { title: 'Cybersecurity & Digital Safety Check', text: 'A one-visit checkup that closes the doors scammers and hackers use most, followed by a plain-language report.',
    bullets: ['Lock down email, social media and mobile money accounts', 'Spot and block phishing and scam messages', 'Secure Wi-Fi, devices and backups', 'Short safety briefing for your staff or family'] },
  { title: 'IT Support & Troubleshooting', text: 'Fast help when something breaks, so you can get back to work.',
    bullets: ['Computers, phones, Wi-Fi and printers', 'Virus and malware cleanup', 'Setup, repairs and data recovery'] },
  { title: 'Training & Tutoring', text: 'Patient, practical teaching for students and beginners.',
    bullets: ['Programming and computer studies', 'Digital skills for beginners', 'One-on-one or small groups'] },
]

export const projects = [
  { title: 'ZamAdmit: Digital Admissions Platform', tag: 'Web Platform', status: 'Completed', color: '#0d47a1', image: '/image/projects/zamadmit.jpg',
    plain: 'One online application for Zambian universities and colleges. Students fill in their details once, get programme suggestions that match their results, and apply to many institutions at the same time.',
    tech: ['Next.js', 'TypeScript', 'Laravel', 'Azure AI'] },
  { title: 'Attendly: Smart Attendance Tracker', tag: 'Mobile App', status: 'Completed', color: '#00897b', image: '/image/projects/attendly.jpg',
    plain: 'Attendance taken in seconds with a QR code that changes constantly, so nobody can fake it. Lecturers get instant reports.',
    tech: ['Kotlin', 'Android', 'Firebase'] },
  { title: 'ICTAZ Student Elections Security', tag: 'Cybersecurity', status: 'Completed', color: '#1a237e', image: '/image/projects/elections-security.jpg',
    plain: 'Tested an online voting system for weak spots, monitored it around the clock during the elections, and explained the findings as an expert witness.',
    tech: ['Wazuh SIEM', 'Django', 'Security testing'] },
  { title: '24/7 Threat Detection & Monitoring', tag: 'Cybersecurity', status: 'Live lab', color: '#4a148c', image: '/image/projects/threat-detection.jpg',
    plain: 'Round-the-clock watch over networks and computers that flags suspicious activity early, so problems are caught before they become breaches.',
    tech: ['Wazuh', 'Suricata', 'AWS', 'MITRE ATT&CK'] },
]
