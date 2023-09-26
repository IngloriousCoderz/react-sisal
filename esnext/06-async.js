setTimeout(() => {
  console.log("One second has passed.");
}, 1000);

/*
t0
|-->setTimeout(fn, delay)
|              |
|              |
|-->sum(2, 3)  |
          |    |
|<-------+     |
|              |
|              |
|<-------------+
|
tn
*/

button.onclick = (event) => console.log(event);
button.addEventListener("click", (event) => console.log(event));

// serial

$.getJSON(
  url1,
  (response1) => {
    console.log(response1.body);

    $.getJSON(
      url2,
      (response2) => {
        console.log(response2.body);

        $.getJSON(
          url3,
          (response3) => {
            console.log(response3.body);
          },
          (error3) => {
            console.error(error3.message);
          }
        );
      },
      (error2) => {
        console.error(error2.message);
      }
    );
  },
  (error1) => {
    console.error(error1.message);
  }
);

sum(2, 3);

// solving the callback hell

$.getJSON(url1, handleResponse1, handleError1);

const handleResponse3 = (response3) => {
  console.log(response3.body);
};

const handleError3 = (error3) => {
  console.error(error3.message);
};

const handleResponse2 = (response2) => {
  console.log(response2.body);

  $.getJSON(url3, handleResponse3, handleError3);
};

const handleError2 = (error2) => {
  console.error(error2.message);
};

const handleResponse1 = (response1) => {
  console.log(response1.body);

  $.getJSON(url2, handleResponse2, handleError2);
};

const handleError1 = (error1) => {
  console.error(error1.message);
};

// parallel

const bodies = [];

$.getJSON(url1, (response1) => {
  bodies.push(response1.body);
});

$.getJSON(url2, (response2) => {
  bodies.push(response2.body);
});

setTimeout(() => {
  console.log(bodies);
}, 3000);

const promise = $.getJSON(url);

promise.then(() => {}); // resolved, fulfilled
promise.catch(() => {}); // rejected, failed
promise.finally(() => {}); // settled

promise
  .then(() => {
    return 42;
  })
  .then((fortyTwo) => {})
  .catch(() => {})
  .finally(() => {});

/*
try {

} catch (error) {

} finally {

}
*/

$.getJSON(url1).then((response1) => {
  $.getJSON(url2).then((response2) => {
    $.getJSON(url3).then((response3) => {});
  });
});

$.getJSON(url1)
  .then((response1) => $.getJSON(url2))
  .then((response2) => $.getJSON(url3))
  .then((response3) => {})
  .catch(() => {})
  .finally(() => {});

Promise.all([$.getJSON(url1), $.getJSON(url2)])
  .then(([response1, response2]) => {})
  .catch((error) => {});

Promise.allSettled([$.getJSON(url1), $.getJSON(url2)]).then(
  ([responseOrError1, responseOrError2]) => {}
);

async function doAsyncStuff() {
  try {
    const response1 = await $.getJSON(url1);
    const response2 = await $.getJSON(url2);
    const response3 = await $.getJSON(url3);
    return response3;
  } catch (error) {
  } finally {
  }
}

const response3 = doAsyncStuff().then(console.log);

async function doParallelStuff() {
  try {
    const [response1, response2] = await Promise.all([
      $.getJSON(url1),
      $.getJSON(url2),
    ]);
    return response3;
  } catch (error) {
  } finally {
  }
}
