class TaskAdder {
    addTask(task) {
      throw new Error("Method 'addTask()' must be implemented.");
    }
  }
  
  class TaskUpdater {
    updateTask(taskId, newTask) {
      throw new Error("Method 'updateTask()' must be implemented.");
    }
  }
  
  class TaskDeleter {
    deleteTask(taskId) {
      throw new Error("Method 'deleteTask()' must be implemented.");
    }
  }
  

class SupportAgent extends TaskAdder {
    constructor() {
      super();
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      console.log(`Task added by SupportAgent: ${task}`);
    }
  
    updateTask(taskId, newTask) {
      if (this.tasks[taskId] !== undefined) {
        this.tasks[taskId] = newTask;
        console.log(`Task ${taskId} updated by SupportAgent to: ${newTask}`);
      } else {
        console.log(`Task ${taskId} not found.`);
      }
    }
  }
  
  class Administrator extends TaskAdder {
    constructor() {
      super();
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      console.log(`Task added by Administrator: ${task}`);
    }
  
    updateTask(taskId, newTask) {
      if (this.tasks[taskId] !== undefined) {
        this.tasks[taskId] = newTask;
        console.log(`Task ${taskId} updated by Administrator to: ${newTask}`);
      } else {
        console.log(`Task ${taskId} not found.`);
      }
    }
  
    deleteTask(taskId) {
      if (this.tasks[taskId] !== undefined) {
        console.log(`Task ${taskId} deleted by Administrator: ${this.tasks[taskId]}`);
        this.tasks.splice(taskId, 1);
      } else {
        console.log(`Task ${taskId} not found.`);
      }
    }
  
  }
  
const supportAgent = new SupportAgent();
supportAgent.addTask('Fix server issue');
supportAgent.updateTask(0, 'Fix server issue urgently');
// supportAgent.deleteTask(0); // Error: Method 'deleteTask()' must be implemented


