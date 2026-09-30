import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Experience { company: string; role: string; location: string; period: string; bullets: string[]; }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Paul David Panthagani';
  title = 'Senior Full Stack Software Engineer';
  email = 'pauldavid003@gmail.com';
  phone = '+1 415 758 2763';
  linkedin = 'https://www.linkedin.com/in/paul-david-746545254/';

  skills = [
    'Java', 'Spring Boot', 'Angular', 'React', 'TypeScript', 'Golang', 'Python', 'Kafka', 'REST APIs', 'GraphQL',
    'Microservices', 'AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Oracle', 'PostgreSQL', 'MongoDB',
    'OAuth2', 'OIDC', 'JWT', 'Cognito', 'Jenkins', 'Splunk', 'Grafana', 'LLMs', 'Agentic AI', 'MCP Servers'
  ];

  stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '4', label: 'Enterprise Domains' },
    { value: '40%', label: 'Manual Effort Reduced' },
    { value: '50%', label: 'Latency Improved' }
  ];

  experiences: Experience[] = [
    {
      company: 'US Department of Agriculture – Financial Services', role: 'Full Stack Engineer', location: 'Dallas, TX', period: 'Jan 2023 – Present',
      bullets: [
        'Built Spring Boot microservices and REST APIs for receivables, remittances, receipts, and payment processing workflows.',
        'Delivered event-driven payment processing using Java, Spring Boot, and Kafka for real-time receipt generation and reconciliation.',
        'Implemented secure access using JWT, OAuth2, OIDC, Cognito, and IAM for enterprise financial applications.',
        'Modernized CI/CD and cloud deployments using Jenkins, AWS, Kubernetes, Docker, and Terraform.',
        'Created Agentic AI, MCP server, and LLM-powered automation for contextual search across financial reports and operational workflows.'
      ]
    },
    {
      company: 'Accenture Pvt Ltd - Markel Insurance', role: 'Software Application Developer', location: 'Hyderabad, India', period: 'May 2018 – Aug 2021',
      bullets: [
        'Programmed Java web applications for Markel Insurance Management and Developer API Portal, integrating Data Structures, Stream APIs, and Lambda Expressions in alignment with sound system design principless.',
        'Collaborated with cross-functional teams to architect and implement RESTful APIs with Spring Boot framework; introduced RabbitMQ for microservices communication, leading to a 30% increase in system robustness and scalability',
        'Simplified software development efficiency by creating reusable forms with validations in React with Redux, partnering with UI/UX designers to implement static content using HTML5, CSS3, JavaScript, React and defined advanced features, reducing form submission',
        'Optimized React application performance through lazy loading, code splitting, memoization, and virtualized rendering techniques, reducing UI latency and improving Lighthouse performance scores significantlyk.',
        'Optimized database query performance within Microsoft SQL Server through the strategic restructuring of complex SQL, effectively leveraging indexing and stored procedures'
      ]
    }
  ];

  projects = [
    { title: 'NRRS Financial Services Platform', tag: 'Java • Spring Boot • Kafka • AWS', description: 'Enterprise receivables, remittances, receipts, and payment processing platform with secure APIs and event-driven workflows.' },
    { title: 'Agentic AI Financial Search', tag: 'LLMs • MCP • Python • RAG', description: 'AI-assisted workflow for financial reports, receivables data, payment records, and operational knowledge retrieval.' },
    { title: 'Insurance Claims Automation', tag: 'Golang • AKS • PostgreSQL • Kafka', description: 'Cloud-native claims and policy management services with monitoring, automation, and asynchronous processing.' },
    { title: 'Healthcare API Modernization', tag: 'Java • Angular • Redis • GraphQL', description: 'Responsive healthcare modules with secured REST APIs, Redis caching, GraphQL integration, and containerized deployment.' }
  ];
}
