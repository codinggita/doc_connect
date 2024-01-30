import logo from "./assets/bg.jpg";

const posts = [
  {
    _id: {
      $oid: "65b15ec3e8ecf7485f965833",
    },
    user: "john_doe",
    content: "Performed a successful craniotomy yesterday",
    image: logo,
    likes: ["jane_smith"],
    comments: [
      {
        user: "jane_smith",
        text: "Good luck with the project!",
      },
    ],
    createdAt: "2024-01-24T13:00:00Z",
  },
  {
    _id: {
      $oid: "65b15ec3e8ecf7485f965834",
    },
    user: "jane_smith",
    content: "Experimenting in the lab today.",
    image: "https://plus.unsplash.com/premium_photo-1676325101999-78e1993704e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: ["john_doe"],
    comments: [
      {
        user: "john_doe",
        text: "Amazing view!",
      },
    ],
    createdAt: "2024-01-24T13:30:00Z",
  },
  {
    _id: {
      $oid: "65b15ec3e8ecf7485f965834",
    },
    user: "jane_smith",
    content: "Venturing into unexplored realms of health and wellness. Every discovery is a step towards a healthier world..",
    image: "https://plus.unsplash.com/premium_photo-1676325101995-cdfc26d820bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: ["john_doe"],
    comments: [
      {
        user: "john_doe",
        text: "Amazing view!",
      },
    ],
    createdAt: "2024-01-24T13:30:00Z",
  },
  // Post 1
  {
    user: "med_student123",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
    likes: ["user1", "user2", "user3"],
    content: "Learning about the wonders of modern medicine. #MedSchoolLife",
  },

  // Post 2
  {
    user: "doctorwellness",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
    likes: ["user4", "user5"],
    content:
      "Taking a moment to appreciate the healing power of kindness. #DoctorLife",
  },

  // Post 3
  {
    user: "health_enthusiast",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    likes: ["user6", "user7", "user8"],
    content:
      "Embracing a healthy lifestyle for a brighter future. #WellnessJourney",
  },

  // Post 4
  {
    user: "med_researcher",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    likes: ["user9", "user10", "user11"],
    content:
      "Diving into groundbreaking medical research. #InnovationInMedicine",
  },

  // Post 5
  {
    user: "dr_expert",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
    likes: ["user12", "user13"],
    content:
      "Sharing knowledge to empower patients and fellow healthcare professionals. #MedicalExpertise",
  },
];

export default posts;
