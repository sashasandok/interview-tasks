type Listener<T = any> = (data: T) => void;

class EventEmmiter<T extends Record<string, any>> {
  private events: { [K in keyof T]?: Listener<T[K]>[] } = {};

  on<K extends keyof T>(event: K, listener: Listener<T[K]>): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event]?.push(listener);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    if (this.events[event]) {
      this.events[event]?.forEach((listener: Listener) => listener(data));
    }
  }
}

interface MyEvents {
  data: string;
  error: { message: string; code: number };
}

const emitter = new EventEmmiter<MyEvents>();

emitter.on("data", (data) => console.log("Received:", data));
