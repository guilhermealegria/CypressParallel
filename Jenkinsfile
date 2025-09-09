import groovy.json.JsonOutput

pipeline { 
    agent {
        docker {
            image 'cypress/browsers:latest'
            args '--network jenkinsdocker_skynet'
        }
    }

    stages { 
        stage('Build') { 
            steps { 
                sh 'npm -v'
                sh 'npm ci'
            } 
        } 
        stage('Test parellel') { 
            environment {
                CYPRESS_trashAssetsBeforeRuns = 'false'
            }
            parallel{
                stage('Run One'){
                    steps {
                        echo "Running build ${env.BUILD_ID}"
                        sh 'npm run cy:parallel'
                    }
                } 
                stage('Run Two'){
                    steps {
                        echo "Running build ${env.BUILD_ID}"
                        sh 'npm run cy:parallel:two'
                    }
                } 
            }
            
        } 
    } 
}