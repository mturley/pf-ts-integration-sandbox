This verison of @patternfly/react-core has (according to running `npx tsc` at its root) the following type error in the Tooltip component:

```
packages/patternfly-4/react-core/dist/js/components/Tooltip/Tooltip.d.ts:12:18 - error TS2430: Interface 'TooltipProps' incorrectly extends interface 'Pick<HTMLProps<HTMLDivElement>, "max" | "required" | "default" | "media" | "hidden" | "cite" | "d...'.
  Types of property 'content' are incompatible.
    Type 'ReactNode' is not assignable to type 'string'.
      Type 'number' is not assignable to type 'string'.

12 export interface TooltipProps extends Omit<HTMLProps<HTMLDivElement>, 'children' | 'size'> {
                    ~~~~~~~~~~~~
```

However, I'm able to run and build the app using a Tooltip with no issues. Why are type problems like this breaking the build for other consumers?
