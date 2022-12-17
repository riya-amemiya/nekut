import { execSync } from 'child_process';
test('3.hello_world', () => {
    const stdout = execSync(
        'python ./public/data/python/3.hello_world/src/index.py',
    );
    expect(stdout.toString()).toBe('Hello World!\n');
});
test('4.variable', () => {
    const stdout = execSync(
        'python ./public/data/python/4.variable/src/index.py',
    );
    expect(stdout.toString()).toBe('18\n');
});
