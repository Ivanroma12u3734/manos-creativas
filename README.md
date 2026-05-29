 Manos Creativas — Control de Versiones

**Sitio web para venta de productos artesanales**  
Universidad Tecnológica de Aguascalientes · Desarrollo Web Integral · IDGS 9°C

---

 Descripción del Proyecto

Manos Creativas es una pequeña empresa local que vende productos artesanales. Este repositorio contiene el código fuente del sitio web que permite a los clientes explorar el catálogo, agregar productos al carrito y realizar pagos en línea de forma segura.

Stack tecnológico: **HTML5 · CSS3 · JavaScript · Node.js + Express · SQL Server · Stripe**

---

##  Flujo de Trabajo: Git Flow

Se adoptó el modelo **Git Flow** por su estructura clara y su adecuación a proyectos con fases definidas de desarrollo, pruebas y producción.

### ¿Por qué Git Flow?

| Razón | Detalle |
|---|---|
| Separación de entornos | `main` solo tiene código estable y probado |
| Desarrollo paralelo | Cada módulo se desarrolla en su propia rama `feature/` |
| Control de versiones | Las ramas `release/` permiten preparar y revisar antes de publicar |
| Correcciones urgentes | Las ramas `hotfix/` permiten parchear producción sin afectar el desarrollo activo |

---

##  Estructura de Ramas

```
main                  → Código en producción (estable)
│
├── develop           → Integración de todas las features
│   ├── feature/catalogo      → Módulo de catálogo y filtros
│   ├── feature/carrito       → Módulo de carrito de compras
│   ├── feature/pago          → Módulo de pago con Stripe
│   └── feature/contacto      → Formulario de contacto
│
└── release/1.0       → Preparación de la primera versión
```

---

## Diagrama del Flujo Git Flow

```
main:      ●─────────────────────────────────────────────● (v1.0)
            \                                            /
release/1.0: ●──────────────────────────────────────────●
              \                                        /
develop:       ●────●────────●────────●───────────────●
                     \      / \      / \              /
feature/catalogo:     ●────●   |     |   |            |
feature/carrito:           |   ●────●   |            |
feature/pago:              |           ●────────────●
```

### Pasos del flujo

1. Todo el desarrollo parte de la rama `develop`
2. Cada módulo nuevo se crea en una rama `feature/<nombre>`
3. Al terminar un feature, se hace **merge a `develop`** con Pull Request
4. Cuando el conjunto de features está listo, se abre una rama `release/x.x`
5. En `release` solo se hacen ajustes menores y documentación
6. La `release` se fusiona a `main` (etiquetada con versión) y de regreso a `develop`

---

##  Estructura del Proyecto

```
manos-creativas/
├── public/
│   ├── index.html          # Página de inicio
│   ├── catalogo.html       # Catálogo de productos
│   ├── carrito.html        # Carrito de compras
│   └── contacto.html       # Formulario de contacto
├── src/
│   ├── controllers/        # Controladores MVC
│   ├── models/             # Modelos de datos
│   ├── views/              # Vistas
│   └── routes/             # Rutas Express
├── config/
│   └── db.js               # Configuración SQL Server
├── package.json
└── README.md
```

---

##  Configuración del Repositorio

### Ramas protegidas
- `main` → Solo acepta merges desde `release/` mediante Pull Request aprobado
- `develop` → Solo acepta merges desde `feature/` mediante Pull Request

### Convención de commits

```
feat: descripción     → Nueva funcionalidad
fix: descripción      → Corrección de error
docs: descripción     → Cambios en documentación
style: descripción    → Formato, sin cambio de lógica
refactor: descripción → Refactorización de código
```

---

 · 

