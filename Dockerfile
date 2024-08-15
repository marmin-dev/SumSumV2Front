# 베이스 이미지 선택
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 목록을 복사하고, 의존성 설치
COPY package.json ./
RUN npm install

# 애플리케이션 소스 코드를 복사
COPY . .

# 애플리케이션 빌드
RUN npm run build

# `serve` 패키지 글로벌 설치
RUN npm install -g serve

# 빌드된 애플리케이션을 serve를 통해 서빙
CMD ["serve", "-s", "build"]

# 기본 포트 설정
EXPOSE 3000