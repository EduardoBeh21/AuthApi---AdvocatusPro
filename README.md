# AuthAPI - Sistema de Autenticação e Autorização

## 📋 Descrição
Sistema modular de autenticação e autorização desenvolvido para gerenciar usuários, permissões e níveis de acesso, com suporte a múltiplos perfis e configurações personalizadas.

## 🏗️ Estrutura do Banco de Dados

### Models Principais

#### 1. User
- Gerenciamento base de usuários
- Campos principais:
  - `id`: Identificador único
  - `email`: Email para login
  - `password`: Senha (hash)
  - `status`: Estado do usuário (active/inactive/blocked)
  - `lastLogin`: Último acesso

#### 2. UserProfile
- Informações pessoais e profissionais
- Campos principais:
  - Dados pessoais (nome, CPF, RG)
  - Dados profissionais (OAB, estado OAB)
  - Contatos (telefone, celular)

#### 3. Address
- Gerenciamento de endereços
- Suporte a múltiplos endereços por usuário
- Tipos: residencial, comercial, outro
- Campos completos de endereçamento brasileiro

#### 4. Role
- Gerenciamento de papéis/funções
- Níveis de acesso (0-3)
- Descrição e configurações de cada papel

#### 5. Permission
- Controle granular de permissões
- Organizado por módulos e ações
- Vinculado aos papéis (roles)

#### 6. UserSettings
- Configurações personalizadas
- Preferências de interface
- Notificações
- Idioma e fuso horário

### Tabelas de Relacionamento

#### 1. UserRole
- Vincula usuários a papéis
- Suporte a múltiplos papéis por usuário
- Marcação de papel padrão

#### 2. RolePermission
- Associa permissões a papéis
- Permite controle granular de acessos

## 🔧 Configuração Técnica

### Requisitos
- Node.js
- MySQL
- Sequelize ORM

### Estrutura de Arquivos 
```
project/
├── config/
│   └── db.js
├── models/
│   ├── user.js
│   ├── userProfile.js
│   ├── address.js
│   ├── role.js
│   ├── permission.js
│   ├── userRole.js
│   ├── rolePermission.js
│   ├── userSettings.js
│   └── index.js
├── scripts/
│   └── syncDatabase.js
└── app.js
```

### Configuração do Banco de Dados
```
const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  database: 'auth_api',
  username: 'root',
  password: '****',
  port: 3080
});
```
## 🚀 Inicialização
1. Instalar dependências:
```
npm install
```
2. Configurar variáveis de ambiente:
```
DB_HOST=localhost
DB_USER=***
DB_PASSWORD=****
DB_NAME=***
DB_PORT=***
```
3. Sincronizar banco de dados:
```
node scripts/syncDatabase.js
```

## 📚 Documentação dos Models
Relacionamentos Principais
User -> UserProfile (1:1)
User -> Address (1:N)
User -> UserSettings (1:1)
User <-> Role (N:N)
Role <-> Permission (N:N)
Níveis de Acesso
0: Plataforma
1: Escritório
2: Usuário
3: Cliente

## 🔐 Sistema de Permissões

### Estrutura de Permissões
- Módulo.Ação (exemplo: user.create)
- Níveis hierárquicos de acesso
- Permissões granulares por papel

### Exemplos de Uso
```
// Verificar permissão
const hasPermission = await user.can('user.create');

// Atribuir papel
await user.assignRole('admin');

// Verificar nível de acesso
const isAdmin = await user.hasAccessLevel(2); 
```
## 🛠️ Funcionalidades Implementadas
- [x] Estrutura base de models
- [x] Relacionamentos entre entidades
- [x] Sistema de roles e permissões
- [x] Documentação dos campos (comments)
- [x] Configurações personalizadas por usuário
- [ ] Autenticação JWT
- [ ] Middleware de autorização
- [ ] API REST
- [ ] Testes automatizados

## 📝 Observações
1. Segurança
- Senhas são armazenadas com hash
- Validações em todos os campos críticos
- Controle de acesso granular
2. Escalabilidade
- Estrutura modular
- Fácil adição de novos módulos
- Suporte a múltiplos perfis
3. Manutenção
- Código documentado
- Comentários no banco de dados
- Estrutura organizada

## 🔜 Próximos Passos
- Implementar sistema de autenticação JWT
- Criar rotas da API
- Adicionar validações de campos
- Implementar testes unitários
- Documentar API com Swagger

## 📄 Licença
Este projeto está sob a licença MIT.