pipeline {

    agent any

    options {
        skipDefaultCheckout(true)
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Maven Test') {
            steps {
                dir('maven-tests') {
                    bat 'mvn -version'
                    bat 'mvn clean test'
                }
            }
        }
    }
}