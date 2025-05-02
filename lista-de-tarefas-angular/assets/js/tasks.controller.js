app.controller("TaskController", function ($scope, $filter, TaskService) {
    $scope.modalActive = false;
    $scope.showCompletedOnly = false;
    $scope.showIncompletedOnly = false;
    $scope.showTodayOnly = false;
    $scope.today = new Date().toLocaleDateString();
    $scope.tasks = TaskService.getTasks();

    $scope.taskInput = {
        id: "",
        title: "",
        date: new Date(),
        checked: false,
    }

    $scope.filteredTasks = () => {
        let filtered = $filter("filter")(
            $filter("filter")(
                $scope.tasks,
                $scope.showCompletedOnly ? { checked: true } : {}
            ),
            $scope.showIncompletedOnly ? { checked: false } : {}
        );
        if ($scope.showTodayOnly) {
            const start = new Date();
            start.setHours(0, 0, 0, 0);
            const end = new Date();
            end.setHours(23, 59, 59, 999);
            filtered = filtered.filter((task) => {
                const taskDate = new Date(task.date);
                return (taskDate.getTime() >= start.getTime() && taskDate.getTime() <= end.getTime());
            });
        }
        return filtered;
    }

    $scope.toggleModal = () => {
        $scope.modalActive = !$scope.modalActive;
    }

    $scope.handleSubmitAddTask = () => {
        const title = $scope.taskInput.title
        const date = $scope.taskInput.date
        if (!title || !date) return;

        TaskService.addTask(title, date);
        $scope.tasks = TaskService.getTasks();

        $scope.toggleModal();
        $scope.taskInput.title = "";
        $scope.taskInput.date = "";
    }

    $scope.toggleCheckedTask = () => {
        TaskService.toggleCheck();
        $scope.tasks = TaskService.getTasks();
    };

    $scope.deleteTask = (currentTask) => {
        TaskService.removeTask(currentTask.id);
        $scope.tasks = TaskService.getTasks();
    };
    $scope.validate = (error, touched) => {
        if (!touched) {
            return {};
        }
        const values = Object.values(error);
        if (values.length === 0) {
            return {};
        }
        const isInvalid = values.reduce((acc, curr) => acc && curr, true);

        if (isInvalid) {
            return { "border-color": "red" };
        }
        return {};
    }
});