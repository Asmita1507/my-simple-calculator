pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-simple-calculator:${BUILD_NUMBER}"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
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
                    // Use bat for Windows, sh for Unix-like systems
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
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    if (isUnix()) {
                        sh "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d --build"
                    } else {
                        bat "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d --build"
                    }
                }
            }
        }

        stage('Post Actions') {
            steps {
                echo 'Deployment completed!'
                // Optional: Cleanup (stop containers if needed)
                script {
                    if (isUnix()) {
                        sh 'docker-compose down'
                    } else {
                        bat 'docker-compose down'
                    }
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