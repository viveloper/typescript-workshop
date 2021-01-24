interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

class KoreanProgrammer implements Person, Programmer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  say(message: string): void {
    console.log(this.name, message);
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return 'code';
  }

  speakKorean(): void {
    console.log('안녕하세요');
  }
}

const koreanProgrammer = new KoreanProgrammer('홍길동');
koreanProgrammer.say('blabla~');
koreanProgrammer.writeCode('1234');
koreanProgrammer.speakKorean();
