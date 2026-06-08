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
  phone = '+1 573 382 8757';
  linkedin = 'https://www.linkedin.com/in/paul-david-a93265128/';

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
      company: 'US Department of Agriculture – Financial Services', role: 'Full Stack Engineer', location: 'Dallas, TX', period: 'Dec 2023 – Present',
      bullets: [
        'Built Spring Boot microservices and REST APIs for receivables, remittances, receipts, and payment processing workflows.',
        'Delivered event-driven payment processing using Java, Spring Boot, and Kafka for real-time receipt generation and reconciliation.',
        'Implemented secure access using JWT, OAuth2, OIDC, Cognito, and IAM for enterprise financial applications.',
        'Modernized CI/CD and cloud deployments using Jenkins, AWS, Kubernetes, Docker, and Terraform.',
        'Created Agentic AI, MCP server, and LLM-powered automation for contextual search across financial reports and operational workflows.'
      ]
    },
    {
      company: 'GEICO', role: 'Software Engineer', location: 'Austin, TX', period: 'Dec 2022 – Nov 2023',
      bullets: [
        'Led Golang microservices for insurance policy management and claims automation platforms.',
        'Migrated legacy Java services to cloud-native microservices on Azure Kubernetes Service with PostgreSQL and Kafka.',
        'Built Python automation scripts for policy and claims reconciliation, reducing manual processing effort by 40%.',
        'Implemented Grafana dashboards with Prometheus and Loki for latency, throughput, health, and failure metrics.'
      ]
    },
    {
      company: 'Accenture Pvt Ltd – Charles Schwab', role: 'Software Application Developer', location: 'Hyderabad, India', period: 'Jul 2019 – Aug 2021',
      bullets: [
        'Developed Java applications and Spring Boot REST APIs for portfolio management and developer API portals.',
        'Introduced RabbitMQ for microservices communication, increasing system scalability and robustness by 30%.',
        'Built reusable React and Redux forms with validation and optimized SQL Server queries using indexes and stored procedures.',
        'Managed AWS deployments using EC2, S3, RDS, Jenkins, JUnit, Mockito, and Splunk.'
      ]
    },
    {
      company: 'Accenture Pvt Ltd – CMS', role: 'Full Stack Engineer', location: 'Hyderabad, India', period: 'May 2018 – Jun 2019',
      bullets: [
        'Designed REST APIs in Java with strong OOP, data structures, algorithms, and system design patterns.',
        'Built Redis caching and OAuth2 token security with Spring Security, reducing data retrieval latency by 50%.',
        'Developed responsive AngularJS UI with lazy loading, routing, validation, and GraphQL-backed data access.',
        'Deployed containerized healthcare modules using Docker and Azure Kubernetes Service for high availability.'
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
