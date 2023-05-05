import React from 'react';
import Image from '../../assets/banner/Vector.png'
import Image2 from '../../assets/banner/Vector-1.png'

const Blog = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '200px',
            }} className=' bg-slate-50'>
                <h2 className='text-2xl text-center font-bold '>Blog</h2>
                <div className=' absolute right-10 top-0'>
                    <img src={Image2} alt="" />
                </div>
            </div>

            <div className='my-10'>

                <h2 className="font-bold text-2xl">1 . When should you use context API?</h2>
                <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                <p className="mt-3 px-7 text-justify">When anyone need to tell a child component about a change in the state notified by the principal and root components, he/she passes state from one component to another until reaches the child component. When end up passing from one to another component and so on.This phenomenon knows as Prop Drilling. </p>

                <p className="mt-3 px-7 text-justify">Here comes the Context API. The Context API in React is used for managing global state that needs to be shared across multiple components in a React application. It provides a way to pass data down the component tree without having to pass it explicitly through props at each level.</p>

            </div>

            <hr />

            <div className='my-10'>

                <h2 className="font-bold text-2xl">2 . What is a custom hook?</h2>
                <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                <p className="mt-3 px-7 text-justify">The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic ,  anyone can put that code inside a custom hook and reuse it.

                </p>

                <p className="mt-3 px-7 text-justify">Custom hooks follow a specific naming convention, where the name starts with "use" followed by a descriptive term such as "useFetch", "useForm", or "useLocalStorage"  to indicate that it is a hook and to provide a hint about its functionality. Custom hooks are simply regular JavaScript functions but they can use built-in React hooks, such as useState, useEffect, and useContext to leverage Reacts features and capabilities.</p>

            </div>

            <hr />

            <div className='my-10'>

                <h2 className="font-bold text-2xl">3 . What is useRef?</h2>
                <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                <p className="mt-3 px-7 text-justify">Ref means just reference, so it can be a reference to anything . The useRef hook returns a mutable object which doesn't re-render the component when it's changed. Think it like useState, but unlike useState, doesn't trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.</p>

            </div>

            <hr />

            <div className='my-10'>

                <h2 className="font-bold text-2xl">4 . What is useMemo?</h2>
                <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                <p className="mt-3 px-7 text-justify">useMemo() is a built-in React hook that accepts two arguments — a function compute that computes a result, and the depedencies array.
                    <br /> <span className='font-bold my-3'>const memoizedResult = useMemo(compute, dependencies);</span> <br />
                    During initial rendering, useMemo(compute, dependencies) invokes compute, memoizes the calculation result and returns it to the component.If the dependencies don't change during the next renderings, then useMemo() doesn't invoke compute, but returns the memoized value.But if the dependencies change during re-rendering, then useMemo() invokes compute, memoizes the new value, and returns it.That's the essence of useMemo() hook.</p>

            </div>
        </div>
    );
};

export default Blog;