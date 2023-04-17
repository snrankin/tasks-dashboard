// Request (2) (GET https://riester.teamwork.com/projects/api/v3/tasks.json?orderBy=duedate&searchAssignees=true&groupByTasklist=true&followedByUserIds=380380&useStartDatesForTodaysTasks=true&useAllProjects=true&includeToday=true&includeTasksWithoutDueDates=true&includeOverdueTasks=true&getSubTasks=true)
fetch(
	'https://riester.teamwork.com/projects/api/v3/tasks.json?orderBy=duedate&searchAssignees=true&groupByTasklist=true&followedByUserIds=380380&useStartDatesForTodaysTasks=true&useAllProjects=true&includeToday=true&includeTasksWithoutDueDates=true&includeOverdueTasks=true&getSubTasks=true',
	{
		method: 'GET',
		headers: {
			Authorization: 'Basic c3JhbmtpbkByaWVzdGVyLmNvbToyZ1VyZEFOM3Z2ZWFrRjhqWGJHTQ==',
		},
	}
)
	.then((res) => res.json())
	.then(console.log.bind(console))
	.catch(console.error.bind(console));
