pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-simple-calculator:${BUILD_NUMBER}"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
        HOST_IP = "localhost" // Replace with your Jenkins server's IP or hostname
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Asmita1507/my-simple-calculator.git', branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using docker-compose build
                    if (isUnix()) {
                        sh "docker-compose -f ${DOCKER_COMPOSE_FILE} build"
                    } else {
                        bat "docker-compose -f ${DOCKER_COMPOSE_FILE} build"
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Stop any existing containers to avoid conflicts
                    if (isUnix()) {
                        sh "docker-compose -f ${DOCKER_COMPOSE_FILE} down || true"
                        sh "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d --build"
                    } else {
                        bat "docker-compose -f ${DOCKER_COMPOSE_FILE} down || true"
                        bat "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d --build"
                    }
                }
            }
        }

        stage('Generate Access Link') {
            steps {
                script {
                    echo "Application deployed successfully!"
                    echo "Access your project at: http://${HOST_IP}:4000"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
