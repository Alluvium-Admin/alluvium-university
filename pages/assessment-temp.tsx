import Layout from "../components/layout/layout";
import styles from '../styles/assessment.module.scss';
import Image from "next/image";
import Navigation from "../components/nav";
import Footer from "../components/Footer";

const Assessment = () => {
    return (
        <>
            <Layout head pageTitle="Assessment" className={styles.container}>
                <Navigation />
                <div className={styles.header}>
                    <h1>Assessment Page</h1>
                </div>
                <div className={`${styles.body} container`}>
                    <div className={styles.question}>
                        <h1>Lagos to Ekiti</h1>
                        <h2>Requirements</h2>
                        <p>There are two routes between the Ekiti and Lagos.
                            The first route has three bridges with weight limits a, b, c,
                            The second route consisting of two bridges, the first with weight limit d, and the second with weight limit e,
                        </p>
                        <p>please see the illustrated below;</p>
                        <Image
                            src='/images/assessment/map.png'
                            width={673.85}
                            height={411}
                            priority
                            loading='eager'
                            alt='map' />
                        <p>Your truck can take either route.
                            Your truck will crash if you overload any of the five weight limits.
                            Write a program that prints out the maximum weight that can be transported between the two cities.
                            Assume that the variables a, b, c, d, and e contain the bridge weight limits.</p>
                    </div>
                    <div className={styles.question}>
                        <h1>Same, Down, Up</h1>
                        <h2>Requirements</h2>
                        <p>Write a program that takes a series of numbers (ending in 0).
                            If the current number is the same as the previous number, it says "Same";
                            if the current number is greater than the previous one, it says "Up",
                            and if it's less than the previous one, it says "Down".
                            It makes no response at all to the very first number. For example, its output for the list 9, 9, 8, 5, 10, 10, 0, would be Same, Down, Down, Up, Same (comparing, in turn, 9 and 9, 9 and 8, 8 and 5, 5 and 10, 10 and 10).
                        </p>
                        <p>You may assume there are at least two numbers in the input.
                            Print all the "Down", "Same", and "Up" messages together at the end.</p>
                        <h2>Example</h2>

                        <ul>
                            <li>
                                Enter the first number: 3
                            </li>
                            <li>
                                Enter the next number (0 to finish): 5
                            </li>
                            <li>
                                Enter the next number (0 to finish): 4
                            </li>
                            <li>
                                Enter the next number (0 to finish): 4
                            </li>
                            <li>
                                Enter the next number (0 to finish): 6
                            </li>
                            <li>
                                Enter the next number (0 to finish): 8
                            </li>
                            <li>
                                Enter the next number (0 to finish): 2
                            </li>
                            <li>
                                Enter the next number (0 to finish): 6
                            </li>
                            <li>
                                Enter the next number (0 to finish): 7
                            </li>
                            <li>
                                Enter the next number (0 to finish): 5
                            </li>
                            <li>
                                Enter the next number (0 to finish): 6
                            </li>
                            <li>
                                Enter the next number (0 to finish): 6
                            </li>
                            <li>
                                Enter the next number (0 to finish): 7
                            </li>
                            <li>
                                Enter the next number (0 to finish): 0
                            </li>
                            <li>
                                Up Down Same Up Up Down Up Up Down Up Same Up
                            </li>
                        </ul>
                    </div>
                    <div className={styles.question}>
                        <h1>Ekiti Exchange</h1>
                        <h2>Requirements</h2>
                        <p>
                            Write a program which reads a string using input(),
                            and outputs the same string but with the first and last character exchanged.
                            You may assume the input string has length at least 2.
                        </p>
                        <h2>Example</h2>

                        <p>
                            On input Ekiti, a correct program will print ikitE.
                        </p>
                    </div>
                </div>
                <Footer />
            </Layout>
        </>
    )
}

export default Assessment