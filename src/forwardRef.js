import React, {cloneElement, forwardRef} from 'react';
import {preserveRef} from './utils';

export default (Tippy, defaultProps) =>
  forwardRef(function TippyWrapper({children, ...props}, ref) {
    return (
      <Tippy {...{...defaultProps, ...props}}>
        {children
          ? cloneElement(children, {
              ref: (node) => {
                if (ref) {
                  if (typeof ref === 'function') {
                    ref(node);
                  } else {
                    ref.current = node;
                  }
                }
                // React 19 compatible way to handle refs
                if (children.props && children.props.ref) {
                  preserveRef(children.props.ref, node);
                }
              },
            })
          : null}
      </Tippy>
    );
  });
