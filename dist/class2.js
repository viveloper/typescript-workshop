class KoreanProgrammer {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(this.name, message);
    }
    writeCode(requirement) {
        console.log(requirement);
        return 'code';
    }
    speakKorean() {
        console.log('안녕하세요');
    }
}
const koreanProgrammer = new KoreanProgrammer('홍길동');
koreanProgrammer.say('blabla~');
koreanProgrammer.writeCode('1234');
koreanProgrammer.speakKorean();
//# sourceMappingURL=class2.js.map