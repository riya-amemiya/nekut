const { execSync } = require('child_process');
test('3.hello_world', () => {
    const stdout = execSync(
        'node ./public/data/javascript/3.hello_world/src/index.js',
    );
    expect(stdout.toString()).toBe('Hello World!\n');
});
