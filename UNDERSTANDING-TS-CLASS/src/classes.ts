// 추상 클래스란 인스턴스화될 수 없고 확장되어야 하는 클래스이다
// abstract(추상적인)로 지정된 추상 클래스는 인스턴스화할 수 없다
abstract class Department {
  // 정적으로 사용할 프로퍼티도 앞에 static을 붙히면 된다
  // 하지만 클래스 밖에서의 정적이지 않은 인스턴스에는 정적인 프로퍼티를 사용하지 못한다(this로 사용하지 않고 직접적으로 클래스 이름으로 사용하면 가능하다)
  // 예) this.fiscalYear은 접근 불가 Department.fiscalYear은 접근 가능
  // 생성자도 정적으로 사용하지 못한다
  static fiscalYear = 2023;
  // 접근제한자: private, public, protected: 상속받은 클래스에서도 사용가능
  // 읽기제한자: readonly
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  //클래스의 속성이란 메소드라 불리기도 한다.
  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = name
  }
  //인스턴스를 생성하지 않고 정적인 메소드를 사용하려면 앞에 static을 붙히면 된다.
  static createEmployee(name: string) {
    return { name: name }
  }
  

  abstract describe(this: Department): void;
    // abstract란 오버라이드를 모든 상속받는 클래스에서 강제하고 싶을때 사용하는 것
    // abstract 메서드는 본문이 구현되면 안된다
    // 한번이라도 abstract를 사용하게 되면 클래스 앞에 abstract을 붙혀야한다 이 코드의 1번째줄처럼
    // void를 붙혀 메소드의 속성은 정의하고 본문은 정의하지 않기
    // abstract 이전 본문: {console.log(`Department (${this.id}): ${this.name}`);}
  

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
 
class ITDepartment extends Department{
  admins: string[]; // 밑의 인수로 작성된 admins로 이 코드가 없어도 실행에 문제가 없으나 super가 this전에 쓰여야한다는 걸 명시하기위해 한번 더 작성한 것 
  constructor(id: string, admins: string[]) {
    super(id,'IT')
    this.admins = admins;
  }

  describe() { // 오버라이드
    console.log('Accounting Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment // AccountingDepartment의 인스턴스를 저장하는 정적인 프로퍼티

  get mostRecentReport() {
    if(this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.')
  }

  set mostRecentReport(value: string) {
    if(!value) {
      throw new  Error('Please pass in a valid value')
    }
    this.addReport(value)
  }

  // 싱글톤 패턴을 적용하여 클래스 안에 하나의 인스턴스만 존재하게 하여 AccountingDepartment의 객체를 하나만 생성할 수 있게 만든다면
  // 그로인해 new AccountingDepartment를 여러번 호출하는것을 방지하려면 
  // constructor 앞에 private을 사용하여 AccountingDepartment의 생성자를 제한하게 하면 된다
  // 이렇게 하면 new 키워드를 사용하여 인스턴스를 생성할 수 없게 된다
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0];
  }
  // 하지만 이렇게 되면 이미 있는 인스턴스에 엑세스할 수도 없게 된다. 이럴땐 정적 메소드를 사용하여 엑세스 하게 만들어야 한다.
  static getInstance() {
    if(AccountingDepartment.instance) {
      //this.instance도 가능 클래스내에서의 정적메소드는 this가 클래스 이름을 참조하기에 참조 가능
      return AccountingDepartment.instance
    }
    // 클래스 안에 있기에 private 생성자 엑세스 및 생성 가능
   this.instance = new AccountingDepartment('d2', []);
   return this.instance
 }

  describe() { // 오버라이드
    console.log('Accounting Department - ID: ' + this.id);
    
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);


const it = new ITDepartment('d1', ['Max'])

it.addEmployee('Max');
it.addEmployee('Mana');

// it.employees[2] = 'Anna' //이렇게 외부에서 직접 엑세스하는 것은 private(접근 제한자)을 이용해 방지해야한다 

it.describe()
it.name = 'NEW NAME'
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []); // 싱글톤 패턴
const accounting = AccountingDepartment.getInstance() 
// Accounting1,2 등 여러개를 만들어도 private 생성자를 이용해 싱글톤 패턴을 적용했기에 단 한번만 실행됨

accounting.mostRecentReport = 'Year End Report'// 세터 (변수의 값을 지정하는 속성 접근자)
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport); // 게터 (변수의 값을 호출하는 속성 접근자)

accounting.addEmployee('Max');
accounting.addEmployee('Mana');

// accounting.printReports()
// accounting.printEmployeeInformation()
accounting.describe()


// console.log(accounting);



// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe()
 