# Microservicio de Órdenes con CQRS y Event Sourcing

Este proyecto es un ejemplo de implementación de un microservicio de órdenes utilizando NestJS, implementando los patrones CQRS (Command Query Responsibility Segregation) y Event Sourcing.

## Tecnologías Utilizadas

- NestJS (TypeScript)
- MongoDB
- Redis
- Docker & Docker Compose
- CQRS Pattern
- Event Sourcing

## Requisitos

- Node.js (v16 o superior)
- Docker y Docker Compose
- MongoDB (proporcionado por Docker)
- Redis (proporcionado por Docker)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Iniciar los servicios con Docker Compose:
```bash
docker-compose up -d
```

4. Iniciar la aplicación:
```bash
npm run start:dev
```

## Estructura del Proyecto

```
src/
├── orders/
│   ├── commands/         # Comandos CQRS
│   ├── events/          # Eventos
│   ├── handlers/        # Manejadores de comandos
│   ├── models/          # Modelos de datos
│   ├── orders.controller.ts
│   └── orders.service.ts
└── app.module.ts
```

## API Endpoints

### Crear Orden
```http
POST /orders
Content-Type: application/json

{
  "userId": "user123",
  "items": [
    {
      "productId": "prod123",
      "quantity": 2,
      "price": 29.99
    }
  ],
  "total": 59.98
}
```

### Obtener Orden
```http
GET /orders/:id
```

## Patrones Implementados

### CQRS (Command Query Responsibility Segregation)
- Separación de operaciones de lectura y escritura
- Comandos para mutaciones (crear orden)
- Queries para consultas (obtener orden)

### Event Sourcing
- Almacenamiento de eventos de dominio
- Reconstrucción del estado a través de eventos
- Eventos publicados para otros servicios

## Guía de Video

1. Introducción al proyecto y tecnologías
2. Explicación de la arquitectura y patrones
3. Configuración del entorno con Docker
4. Implementación del modelo de datos
5. Implementación de CQRS
6. Implementación de Event Sourcing
7. Pruebas y demostración
8. Mejores prácticas y consideraciones 