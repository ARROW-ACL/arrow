/* =====================================================================
   ARROW site content
   ---------------------------------------------------------------------
   This is the only file you need to edit to update the website.
   - Add a person: copy an entry in `leadership` or `workgroup`.
   - Add a paper: copy an entry in `publications` (newest first is fine;
     the site sorts by year automatically).
   - Add an abstract: same shape as a publication, in `abstracts`.
   Photos go in /assets/people/ and are named after `photo` below.
   If a photo is missing, the site shows the person's initials instead.
   ===================================================================== */

window.ARROW = {

  site: {
    shortName: "ARROW",
    fullName: "ACL Reconstruction Rehabilitation Outcomes Workgroup",
    // TODO: replace with the group's real contact address.
    contactEmail: "arrow-contact@example.org",
    dartUrl: "https://acldashboard.com",
    participants: "4,000+" // shown on the home page; update as the registry grows
  },

  /* Sites that contribute data. Shown on the home page list and map.
     lat/lon place the dot on the map (look up the campus on any map site;
     sites in the same city share a dot). */
  sites: [
    { name: "University of Virginia",                     city: "Charlottesville, VA", lat: 38.0336, lon: -78.5080 },
    { name: "University of North Carolina at Chapel Hill", city: "Chapel Hill, NC",     lat: 35.9049, lon: -79.0469 },
    { name: "Michigan State University",                  city: "East Lansing, MI",    lat: 42.7018, lon: -84.4822 },
    { name: "Florida International University",           city: "Miami, FL",           lat: 25.7562, lon: -80.3755 },
    { name: "Creighton University",                       city: "Omaha, NE",           lat: 41.2655, lon: -95.9480 },
    { name: "Connecticut Children's",                     city: "Hartford, CT",        lat: 41.7550, lon: -72.6800 },
    { name: "Scottish Rite for Children",                 city: "Dallas, TX",          lat: 32.8040, lon: -96.8357 },
    { name: "Nicklaus Children's Hospital",               city: "Miami, FL",           lat: 25.7410, lon: -80.2950 },
    { name: "Inova Health",                               city: "Fairfax, VA",         lat: 38.8590, lon: -77.2280 },
    { name: "Children's Hospital of Philadelphia",        city: "Philadelphia, PA",    lat: 39.9489, lon: -75.1940 },
    { name: "Arkansas Children's",                        city: "Little Rock, AR",     lat: 34.7420, lon: -92.2950 },
    { name: "Children's Nebraska",                        city: "Omaha, NE",           lat: 41.2600, lon: -96.0370 },
    { name: "University of Missouri",                     city: "Columbia, MO",        lat: 38.9404, lon: -92.3277 },
    { name: "Children's Health",                          city: "Dallas, TX",          lat: 32.8080, lon: -96.8380 },
    { name: "Seattle Children's",                         city: "Seattle, WA",         lat: 47.6627, lon: -122.2817 }
  ],

  leadership: [
    { name: "Chris Kuenze", credentials: "PhD, ATC", role: "Director",
      title: "Associate Professor, Department of Kinesiology", institution: "University of Virginia", photo: "kuenze.jpg" },
    { name: "Natalie Kupperman", credentials: "PhD, ATC", role: "Technical Director",
      title: "Assistant Professor, School of Data Science", institution: "University of Virginia", photo: "kupperman.jpg" },
    { name: "Shelby Baez", credentials: "PhD, ATC", role: "Steering Committee",
      title: "Assistant Professor, Motion Science Institute", institution: "University of North Carolina at Chapel Hill", photo: "baez.jpg" },
    { name: "Lauren Butler", credentials: "PT, DPT", role: "Steering Committee",
      title: "Clinical Assistant Professor, Physical Therapy", institution: "Florida International University", photo: "butler.jpg" },
    { name: "Edward Chang", credentials: "MD, FAAOS", role: "Steering Committee",
      title: "Orthopedic Surgeon and Director of Sports Medicine", institution: "Inova Sports Medicine", photo: "chang.jpg" },
    { name: "Sophia Ulman", credentials: "PhD", role: "Steering Committee",
      title: "Division Director, Movement Science Laboratory", institution: "Scottish Rite for Children", photo: "ulman.jpg" },
    { name: "Adam Weaver", credentials: "PT, DPT", role: "Steering Committee",
      title: "Sports Physical Therapist", institution: "Connecticut Children's", photo: "weaver.jpg" }
  ],

  workgroup: [
    { name: "Joseph Hart", credentials: "PhD, ATC", title: "Professor, Department of Orthopedics", institution: "University of North Carolina at Chapel Hill", photo: "hart.jpg" },
    { name: "Jeffrey Spang", credentials: "MD", title: "Associate Professor of Orthopaedic Surgery", institution: "University of North Carolina at Chapel Hill", photo: "spang.jpg" },
    { name: "Katherine Collins", credentials: "PhD", title: "Postdoctoral Researcher, Motion Science Institute", institution: "University of North Carolina at Chapel Hill", photo: "collins.jpg" },
    { name: "Elaine Reiche", credentials: "MS, ATC, CSCS", title: "Doctoral Candidate", institution: "University of North Carolina at Chapel Hill", photo: "reiche.jpg" },
    { name: "Tom Birchmeier", credentials: "PhD, ATC", title: "Postdoctoral Researcher, Motion Science Institute", institution: "University of North Carolina at Chapel Hill", photo: "birchmeier.jpg" },
    { name: "Dylan Roman", credentials: "PT, DPT", title: "Sports Physical Therapist", institution: "Connecticut Children's", photo: "roman.jpg" },
    { name: "Nicholas Giampetruzzi", credentials: "PT, MPT", title: "Lead Sports Physical Therapist", institution: "Connecticut Children's", photo: "giampetruzzi.jpg" },
    { name: "Matt Harkey", credentials: "PhD, ATC", title: "Assistant Professor, Department of Kinesiology", institution: "Michigan State University", photo: "harkey.jpg" },
    { name: "Xavier Thompson", credentials: "PhD, ATC", title: "Assistant Professor, School of Kinesiology", institution: "Louisiana State University", photo: "thompson.jpg" },
    { name: "Michelle Walaszek", credentials: "PT, DPT, MS", title: "Doctoral Student, Department of Kinesiology", institution: "University of Virginia", photo: "walaszek.jpg" },
    { name: "Caroline Lisee", credentials: "PhD, ATC", title: "Assistant Professor, Department of Kinesiology", institution: "University of Georgia", photo: "lisee.jpg" },
    { name: "Cody Walker", credentials: "DAT, ATC, CSCS", title: "Supervisor of Sports Medicine", institution: "Arkansas Children's", photo: "walker.jpg" },
    { name: "Theodore Ganley", credentials: "MD", title: "Pediatric Orthopedic Surgeon and Director of Sports Medicine", institution: "Children's Hospital of Philadelphia", photo: "ganley.jpg" },
    { name: "Elliot Greenberg", credentials: "DPT, PhD", title: "Sports Physical Therapist and Research Scientist", institution: "Children's Hospital of Philadelphia", photo: "greenberg.jpg" },
    { name: "Meredith Link", credentials: "PT, DPT, ATC, CSCS", title: "Sports Physical Therapist", institution: "Children's Hospital of Philadelphia", photo: "link.jpg" },
    { name: "Rachel Cherelstein", credentials: "BS", title: "Medical Student", institution: "University of Miami", photo: "cherelstein.jpg" },
    { name: "Alexa Martinez", credentials: "PT, DPT, SCS, CSCS", title: "Supervisor PT, Sports Health and Wellness", institution: "Nicklaus Children's Hospital", photo: "martinez.jpg" },
    { name: "Henry Ellis", credentials: "MD", title: "Pediatric Orthopedic Surgeon; Medical Director, Clinical Research", institution: "Scottish Rite for Children", photo: "ellis.jpg" },
    { name: "Jacob Landers", credentials: "PT, DPT, OCS, CSCS", title: "Sports Physical Therapist", institution: "Scottish Rite for Children", photo: "landers.jpg" },
    { name: "Justin Blatchford", credentials: "PT", title: "Physical Therapist", institution: "Children's Nebraska", photo: "blatchford.jpg" },
    { name: "Terry Grindstaff", credentials: "PhD, PT, ATC", title: "Professor, School of Pharmacy and Health Professions", institution: "Creighton University", photo: "grindstaff.jpg" },
    { name: "Brooke Farmer", credentials: "MS, ATC", title: "Laboratory Manager, School of Pharmacy and Health Professions", institution: "Creighton University", photo: "farmer.jpg" },
    { name: "Chelsea Harrison", credentials: "PTA", title: "Research Coordinator", institution: "University of Missouri", photo: "harrison.jpg" },
    { name: "Richard Ma", credentials: "MD", title: "Orthopedic Surgeon, Orthopedic Sports Medicine", institution: "University of Missouri", photo: "ma.jpg" },
    { name: "Taylor Douthit", credentials: "PT, DPT, SCS, OCS, CSCS", title: "Physical Therapist", institution: "Children's Health", photo: "douthit.jpg" },
    { name: "Michael Saper", credentials: "DO, FAOAO, FAAOS, ATC, CSCS", title: "Pediatric Orthopedic Surgeon and Associate Professor", institution: "Seattle Children's", photo: "saper.jpg" },
    { name: "Chris Wong", credentials: "PT, DPT", title: "Physical Therapist", institution: "Seattle Children's", photo: "wong.jpg" }
  ],

  /* Peer-reviewed papers. `links` can hold any of: doi, pubmed, pdf, url. */
  publications: [
    {
      year: 2025,
      // TODO: confirm exact title against the published article.
      title: "The relationship between psychological readiness and kinesiophobia in teens and young adults after ACL reconstruction",
      authors: "Butler L, Baez S, Walker C, Roman D, Douthit T, Kuenze C, Ulman S, ARROW",
      journal: "Frontiers in Psychology",
      links: { doi: "10.3389/fpsyg.2025.1623398" }
    },
    {
      year: 2025,
      // TODO: add title, authors, and journal details for this paper.
      title: "Title to be added",
      authors: "ARROW",
      journal: "Orthopaedic Journal of Sports Medicine",
      links: { doi: "10.1177/23259671251334143" }
    },
    {
      year: 2024,
      title: "Greater changes in self-reported activity level are associated with decreased quality of life in patients following an anterior cruciate ligament reconstruction",
      authors: "Cherelstein RE, Ulman S, Kuenze CM, Harkey MS, ARROW, Butler LS",
      journal: "Physical Therapy in Sport",
      details: "67:149–154",
      links: { doi: "10.1016/j.ptsp.2024.04.002", pubmed: "38759381" }
    }
  ],

  /* Conference abstracts and posters. Same shape as publications;
     use `meeting` instead of `journal`. */
  abstracts: [
    // { year: 2026, title: "…", authors: "…", meeting: "NATA Clinical Symposia", links: { pdf: "assets/abstracts/file.pdf" } }
  ]
};
