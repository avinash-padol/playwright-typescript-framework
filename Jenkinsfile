pipeline {
    agent any
    environment {
        APP_BASE_URL = 'https://opensource-demo.orangehrmlive.com'
        BROWSER = "${params.BROWSER}"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-credentials',
                    url: 'https://github.com/avinash-padol/playwright-typescript-framework.git'
            }
        }

        stage('Verify Project') {
            steps {
                bat 'dir'
                bat 'node --version'
                bat 'npm --version'
            }
        }
        stage('Verify Parameters') {
            steps {
                bat 'echo Selected Browser: %BROWSER%'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
    steps {
        script {

            if (params.BROWSER == 'all') {

                parallel(
                    'Chromium': {
                        withCredentials([
                            usernamePassword(
                                credentialsId: 'playwright-admin',
                                usernameVariable: 'ADMIN_USERNAME',
                                passwordVariable: 'ADMIN_PASSWORD'
                            ),
                            usernamePassword(
                                credentialsId: 'playwright-testuser',
                                usernameVariable: 'TESTUSER_USERNAME1',
                                passwordVariable: 'TESTUSER_PASSWORD1'
                            ),
                            usernamePassword(
                                credentialsId: 'playwright-apiuser',
                                usernameVariable: 'API_USERNAME',
                                passwordVariable: 'API_PASSWORD'
                            )
                        ]) {
                            bat '''
                                set PW_HTML_REPORT=playwright-report\\chromium
                                set PW_JUNIT_REPORT=test-results\\chromium\\results.xml
                                npx playwright test --project=chromium
                            '''
                        }
                    },

                    'Firefox': {
                        withCredentials([
                            usernamePassword(
                                credentialsId: 'playwright-admin',
                                usernameVariable: 'ADMIN_USERNAME',
                                passwordVariable: 'ADMIN_PASSWORD'
                            ),
                            usernamePassword(
                                credentialsId: 'playwright-testuser',
                                usernameVariable: 'TESTUSER_USERNAME1',
                                passwordVariable: 'TESTUSER_PASSWORD1'
                            ),
                            usernamePassword(
                                credentialsId: 'playwright-apiuser',
                                usernameVariable: 'API_USERNAME',
                                passwordVariable: 'API_PASSWORD'
                            )
                        ]) {
                            bat '''
                                set PW_HTML_REPORT=playwright-report\\firefox
                                set PW_JUNIT_REPORT=test-results\\firefox\\results.xml
                                npx playwright test --project=firefox
                            '''
                        }
                    },

                    'WebKit': {
                        withCredentials([
                            usernamePassword(
                                credentialsId: 'playwright-admin',
                                usernameVariable: 'ADMIN_USERNAME',
                                passwordVariable: 'ADMIN_PASSWORD'
                            ),
                            usernamePassword(
                                credentialsId: 'playwright-testuser',
                                usernameVariable: 'TESTUSER_USERNAME1',
                                passwordVariable: 'TESTUSER_PASSWORD1'
                            ),
                            usernamePassword(
                                credentialsId: 'playwright-apiuser',
                                usernameVariable: 'API_USERNAME',
                                passwordVariable: 'API_PASSWORD'
                            )
                        ]) {
                            bat '''
                                set PW_HTML_REPORT=playwright-report\\webkit
                                set PW_JUNIT_REPORT=test-results\\webkit\\results.xml
                                npx playwright test --project=webkit
                            '''
                        }
                    }
                )

            } else {

                withCredentials([
                    usernamePassword(
                        credentialsId: 'playwright-admin',
                        usernameVariable: 'ADMIN_USERNAME',
                        passwordVariable: 'ADMIN_PASSWORD'
                    ),
                    usernamePassword(
                        credentialsId: 'playwright-testuser',
                        usernameVariable: 'TESTUSER_USERNAME1',
                        passwordVariable: 'TESTUSER_PASSWORD1'
                    ),
                    usernamePassword(
                        credentialsId: 'playwright-apiuser',
                        usernameVariable: 'API_USERNAME',
                        passwordVariable: 'API_PASSWORD'
                    )
                ]) {
                    bat 'npx playwright test --project=%BROWSER%'
                }
            }
        }
    }
}
        
        stage('Check Playwright Report') {
            steps {
                bat 'if exist playwright-report (dir playwright-report) else (echo playwright-report NOT FOUND)'
            }
        }
    }
    post {
        always {
            junit 'test-results/results.xml'
            
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            archiveArtifacts artifacts: 'playwright-report/**/*',
                         allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**/*',
                         allowEmptyArchive: true
         }
    }
}