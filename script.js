const React = (() => {
  let hooks = [];
  let index = 0;
  function useState(initVal) {
    let state = hooks[index] || initVal;
    // To freeze the index
    let _index = index;
    let setState = (newVal) => {
      hooks[_index] = newVal;
    };
    // To clean the precious state
    index++;

    return [state, setState];
  }
  const render = (Com) => {
    index = 0;
    let C = Com();
    C.render();
    return C;
  };

  return { useState, render };
})();

const Component = () => {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("First Text");
  return {
    render: () => {
      console.log({ count, text });
    },
    click: () => {
      setCount(count + 1);
    },
    type: (text) => {
      setText(text);
    },
  };
};
var app = React.render(Component);
app.type("Second Text");

// Testing
// var app = React.render(Component);
// app.type("Second Text");
// var app = React.render(Component);
// app.click;
// var app = React.render(Component)
