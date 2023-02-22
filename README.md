# This ~~Message~~ Stack Will Self Destruct in...

The `./lib/self-destruct.ts` construct, when added to your Stack with a Duration, will self-destruct the stack after that amount of time has passed.  This could be useful for developer stacks or CI/CD stacks so that they clean up after them selves.

Example:

```typescript
new SelfDestruct(this, `SelfDestruct`, {
  duration: Duration.minutes(3),
});
```