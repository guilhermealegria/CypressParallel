import groovy.json.JsonOutput

pipeline { 
    agent any 
    stages { 
        stage('Git') { 
            checkout scm 
        } 
        stage('Build') { 
            steps { echo 'Hello World' } 
        } 
        stage('Test') { 
            steps { echo 'Hello World' } 
        } 
    } 
}