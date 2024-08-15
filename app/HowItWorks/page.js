import React from 'react'

const HowItWorks = () => {
  return (
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Love Calculator Explained</h3>
        <ol class="list-decimal pl-5 space-y-4 text-gray-700">
            <li>
                <strong class="text-lg">Combine Names:</strong>
                <p>You start by taking two names, for example, "Alice" and "Bob". Convert both names to lowercase to make sure the comparison is case-insensitive. So, "Alice" becomes "alice" and "Bob" becomes "bob". Combine these names into one single string: "alicebob".</p>
            </li>
            <li>
                <strong class="text-lg">Count Each Character:</strong>
                <p>Look at each unique letter in this combined string. Count how many times each letter appears. For instance, in "alicebob", the letter 'a' appears once, 'b' appears twice, 'c' appears once, and so on. Create a list of these counts. If our string was "alicebob", the counts might look like: [1, 2, 1, 1, 2] (corresponding to letters 'a', 'b', 'c', 'i', and 'e').</p>
            </li>
            <li>
                <strong class="text-lg">Create a Number from Counts:</strong>
                <p>Turn this list of counts into a single number. For example, if our counts were [1, 2, 1, 1, 2], the number would be "12112".</p>
            </li>
            <li>
                <strong class="text-lg">Reduce the Number:</strong>
                <p>To make the number more manageable, combine its digits in pairs and add them together. If we have "12112", we would combine the first and last digits (1 + 2) and the next pair (2 + 1), and so on. This process is repeated until we get a final two-digit number.</p>
            </li>
            <li>
                <strong class="text-lg">Calculate Love Percentage:</strong>
                <p>The final two-digit number represents the "love percentage" between the two names. For example, if the result after reducing is "73", then the love percentage is 73%.</p>
            </li>
        </ol>

        <h3 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">How It Looks in Action</h3>
        <ol class="list-decimal pl-5 space-y-4 text-gray-700">
            <li><strong class="text-lg">Names Input:</strong> "Alice" and "Bob"</li>
            <li><strong class="text-lg">Combined String:</strong> "alicebob"</li>
            <li><strong class="text-lg">Character Counts:</strong> a: 1, b: 2, c: 1, i: 1, e: 1, o: 2 (example)</li>
            <li><strong class="text-lg">Number from Counts:</strong> "12112"</li>
            <li><strong class="text-lg">Reduction Process:</strong> Combine digits in pairs and add them: (1+2), (2+1), etc. Continue until you get a final two-digit number.</li>
            <li><strong class="text-lg">Result:</strong> For instance, if the final number is "73", then the love percentage is 73%.</li>
        </ol>

        <h3 class="text-xl font-semibold text-gray-800 mt-8">Summary</h3>
        <p class="text-gray-700">In essence, the Love Calculator combines names, counts each letter's occurrences, forms a number from these counts, and then simplifies this number to get a final "love percentage." It’s a fun and playful way to see how names might match based on their letters!</p>
    </div>
  )
}

export default HowItWorks