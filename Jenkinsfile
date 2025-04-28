pipeline{
    agent any
    stages{
        stage('run frontend'){
            steps{
                echo 'executing yarn...'
                nodejs('Node-23.11.0'){
                    sh 'yarn install'
                }
            }
        }
    }
}