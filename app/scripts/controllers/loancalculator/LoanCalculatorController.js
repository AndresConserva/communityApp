(function (module) {
    mifosX.controllers = _.extend(module, {
        LoanCalculatorController: function (scope, resourceFactory) {
            scope.formData = {};
            
            scope.viewSchedule = function () {
                console.log('ViewSchedule');
            };

            scope.viewSummaryRepayment = function () {
                console.log('View summary repayment');

                // it gets all users
                resourceFactory.loanCalulatorResouerce.getSummaryRepayment(function(data) {
                    console.log(data);
                });
            };

            scope.downloadSchedule = function() {
                console.log('Download Schedule');
            };

        }
    });

    mifosX.ng.application.controller('LoanCalculatorController', ['$scope', 'ResourceFactory', mifosX.controllers.LoanCalculatorController]).run(function ($log) {
        $log.info("LoanCalculatorController initialized");
    });
}(mifosX.controllers || {}));
