import groovy.json.JsonOutput

pipeline { 
    agent any 
    stages { 
        stage('Build') { 
            steps { 
                sh 'npm ci'
             } 
        } 
        stage('Test') { 
            steps { 
                sh 'npm run cy:parallel'
             } 
        } 
    } 
}