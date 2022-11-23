FROM node:18-alpine

ARG FIXER_API_KEY
ENV FIXER_API_KEY=$FIXER_API_KEY
EXPOSE 8081
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]
