pipeline{
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/UjjwalCodes-afk/inventory-management.git'
            }
        }
        stage('Install') {
            steps {
                sh 'bun install'
            }
        }
        stage('Build Docker') {
            steps {
                sh 'docker build -t inventory-app .'
            }
        }
    }
    post {
        success {
            echo 'Build completed successfully'
        }
        failure {
            echo 'Build failed. '
        }
    }
}