pipeline {
    agent any

    stages {
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    script {
                        // Install dependencies
                        bat 'npm install'
                        // Build the React app
                        bat 'npm run build'
                    }
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    script {
                        // Install dependencies
                        bat 'npm install'
                        // Run Node.js app in background and wait
                        bat 'start /b node index.js'
                        sleep(60) // Sleep for 60 seconds to let the server run
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
