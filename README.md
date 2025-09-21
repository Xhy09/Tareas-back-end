# Task Manager API - Backend

API RESTful para gestión de tareas construida con NestJS, TypeORM y PostgreSQL. Incluye autenticación JWT y operaciones CRUD completas.

## 🚀 Características

- **Framework:** NestJS 10+
- **Base de datos:** PostgreSQL con TypeORM
- **Autenticación:** JWT (JSON Web Tokens)
- **Validación:** Class-validator y class-transformer
- **Seguridad:** CORS habilitado, hashing de contraseñas con bcrypt
- **Arquitectura:** Modular y escalable

## 📦 Dependencias Principales

```json
"dependencies": {
  "@nestjs/common": "^10.0.0",
  "@nestjs/core": "^10.0.0",
  "@nestjs/typeorm": "^10.0.0",
  "@nestjs/jwt": "^10.1.0",
  "@nestjs/passport": "^10.0.2",
  "typeorm": "^0.3.0",
  "pg": "^8.11.0",
  "bcrypt": "^5.1.0",
  "class-validator": "^0.14.0",
  "class-transformer": "^0.5.0"
}
