const Employee = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      task: [
        {
          taskTitle: "Update Documentation",
          taskDate: "2025-04-10",
          taskDescription: "Update the README and API docs.",
          category: "Documentation",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Fix Login Bug",
          taskDate: "2025-04-08",
          taskDescription: "Resolve the login failure issue on mobile.",
          category: "Bug Fix",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      task: [
        {
          taskTitle: "Design Landing Page",
          taskDate: "2025-04-09",
          taskDescription: "Create mockups for the new landing page.",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Implement Dark Mode",
          taskDate: "2025-04-06",
          taskDescription: "Add dark mode toggle to user settings.",
          category: "Frontend",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Fix Header Bug",
          taskDate: "2025-04-07",
          taskDescription: "Resolve alignment issues in mobile header.",
          category: "Bug Fix",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      task: [
        {
          taskTitle: "Optimize Queries",
          taskDate: "2025-04-09",
          taskDescription: "Improve DB performance for analytics reports.",
          category: "Database",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Deploy API Server",
          taskDate: "2025-04-08",
          taskDescription: "Push new version to production server.",
          category: "Backend",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Security Patch",
          taskDate: "2025-04-07",
          taskDescription: "Patch known vulnerabilities in auth module.",
          category: "Security",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Fix Session Timeout",
          taskDate: "2025-04-06",
          taskDescription: "Resolve unexpected session timeout bug.",
          category: "Bug Fix",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      task: [
        {
          taskTitle: "Unit Testing",
          taskDate: "2025-04-10",
          taskDescription: "Write tests for the user profile module.",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "CI/CD Setup",
          taskDate: "2025-04-08",
          taskDescription: "Configure GitHub Actions for auto-deploy.",
          category: "DevOps",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Upgrade Node Version",
          taskDate: "2025-04-07",
          taskDescription: "Update project to use Node.js v20.",
          category: "Maintenance",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      task: [
        {
          taskTitle: "Create Database Schema",
          taskDate: "2025-04-09",
          taskDescription: "Design DB schema for user preferences.",
          category: "Database",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Write API Docs",
          taskDate: "2025-04-07",
          taskDescription: "Document all available API endpoints.",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    }
  ];
  
  
  const admin=[
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123"
      }
  ];
  

  export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(Employee))
    localStorage.setItem("admin", JSON.stringify(admin))

  }

  export const getLocalStorage = ()=>{
    
    let employees = JSON.parse(localStorage.getItem('employees'))
    let admin = JSON.parse(localStorage.getItem('admin'))
  }