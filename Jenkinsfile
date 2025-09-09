import groovy.json.JsonOutput

pipeline { 
    agent any 
    stages { 
        stage('Build') { 
            steps { 
                nodejs(nodeJSInstallationName: 'nodejs22'){
                    sh 'npm -v'
                    sh 'npm ci'
                }
            } 
        } 
        stage('Test') { 
            steps {
                nodejs(nodeJSInstallationName: 'nodejs22'){ 
                    sh 'npm run cy:parallel'
                }
             } 
        } 
    } 
}