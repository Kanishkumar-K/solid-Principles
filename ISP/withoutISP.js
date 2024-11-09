class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      console.log(`Task added: ${task}`);
    }
  
    updateTask(taskId, newTask) {
      if (this.tasks[taskId] !== undefined) {
        this.tasks[taskId] = newTask;
        console.log(`Task ${taskId} updated to: ${newTask}`);
      } else {
        console.log(`Task ${taskId} not found.`);
      }
    }
  
    deleteTask(taskId) {
      if (this.tasks[taskId] !== undefined) {
        console.log(`Task ${taskId} deleted: ${this.tasks[taskId]}`);
        this.tasks.splice(taskId, 1);
      } else {
        console.log(`Task ${taskId} not found.`);
      }
    }
  
  }
  
  class SupportAgent extends TaskManager {
    addTask(task) {
      super.addTask(task); 
      console.log(`Added by SupportAgent: ${task}`);
    }
  
    updateTask(taskId, newTask) {
      super.updateTask(taskId, newTask); 
      console.log(`Updated by SupportAgent ${taskId} to: ${newTask}`);
    }
  }
  
  
  class Administrator extends TaskManager {
    addTask(task) {
      super.addTask(task); 
      console.log(`Added by Administrator: ${task}`);
    }
  
    updateTask(taskId, newTask) {
      super.updateTask(taskId, newTask); 
      console.log(`Updated by Administrator ${taskId} to: ${newTask}`);
    }
  
    deleteTask(taskId) {
      super.deleteTask(taskId); 
      console.log(`Deleted by Administrator ${taskId}`);
    }
  }
  
  const supportAgent = new SupportAgent();
  supportAgent.addTask('Fix server issue');
  supportAgent.updateTask(0, 'Fix server issue urgently');
  supportAgent.deleteTask(0)

  