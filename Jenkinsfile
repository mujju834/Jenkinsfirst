pipeline {
    agent any

    stages {
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    script {
                        // Install dependencies
                        sh 'npm install'
                        // Build the React app
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    script {
                        // Install dependencies
                        sh 'npm install'
                        // Test the Node.js app
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Here you can add steps to deploy your application
                    // For simplicity, we will just echo a message
                    echo 'Deploying application...'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
