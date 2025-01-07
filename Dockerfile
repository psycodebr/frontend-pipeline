# Use uma imagem oficial do Node.js para construir o app
FROM node:16

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de configuração e dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para dentro do container
COPY . .

# Compila o frontend para produção
RUN npm run build

# Usa uma imagem leve do Nginx para servir o app
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expõe a porta onde o Nginx estará rodando
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
