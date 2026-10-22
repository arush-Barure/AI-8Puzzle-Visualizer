# Demonstration narration

Synthetic narration with actual application captures.

## 01 / INTRODUCTION - Uniform Cost Search

This demonstration presents State Space, an interactive eight puzzle solver prepared for Arush Barure, registration number twenty four B D S zero three three one, for the Artificial Intelligence digital assignment. The allocation table assigns algorithm number five, Uniform Cost Search. The application therefore implements U C S only. The project uses H T M L, C S S, JavaScript, and Bootstrap, with a search algorithm written from scratch. The interface provides an overview, an interactive search laboratory, a comparison section, and a detailed explanation of the algorithm.

## 02 / PUZZLE INPUT - Model the state space

The eight puzzle contains eight numbered tiles and a blank on a three by three board. A state is represented by an array of nine values, with zero representing the blank. A legal move swaps the blank with an adjacent horizontal or vertical tile. Each move costs one. The setup panel accepts both initial and goal states. Each must contain every number from zero through eight exactly once. The random button creates solvable puzzles by taking legal moves from the selected goal. This also supports goal arrangements that differ from the usual ordered board.

## 03 / SEARCH PROCESS - Always expand the cheapest path

Uniform Cost Search ranks states by accumulated path cost, g of n. Its evaluation function is f of n equals g of n. A binary minimum heap removes the cheapest state first, and insertion order breaks equal cost ties. In the current search step, the initial board has cost zero. Expanding it generates its legal successors at cost one. The live telemetry shows generated nodes, expanded nodes, frontier size, explored count, depth, and search computation time. Successor cards indicate whether a state is queued or rejected as a duplicate.

## 04 / INTERACTIVE CONTROLS - Inspect every decision

Run starts automatic search playback. Pause stops it, and Resume continues. Next expands one state or advances through recorded history. Previous returns to an earlier recorded expansion, so the user can inspect the board, parent, collections, and statistics. The speed slider controls the delay; the highest speed processes batches for larger searches. Reset clears the current search. Open and closed list previews show up to twelve entries alongside their full counts. Going backward displays a snapshot without changing the underlying search engine. The solver stores parent pointers to recover the final solution.

## 05 / SOLUTION - The assignment example: five moves

The P D F example starts with tiles two, eight, three in the first row; one, six, four in the second; and seven, blank, five in the third. Its goal has the blank at the center. The implemented solver finds an optimal path of five moves. The blank moves up, up, left, down, and right. With the deterministic tie order, this search generates ninety five candidates and expands thirty five states. The final solution path contains all six boards, including the start. Animate Solution replays the actual tile movements from start to goal.

## 06 / RESULTS AND VALIDATION - Measure honestly

The summary reports whether a solution was found, move count, generated and expanded totals, maximum discovered depth, computation time, path cost, and approximate solver memory. Generated counts include duplicate candidates. Computation time excludes animation delays and rendering. Memory is an estimate rather than a browser heap measurement. Download Result exports the search and path as J S O N. Input checks reject repeated or missing tiles. An inversion parity test rejects unreachable initial and goal pairs before search. Nine automated checks also verify optimal distances for all ninety states within six moves of the standard goal.

## 07 / COMPARISON AND HEURISTICS - Understand the trade-offs

The comparison section explains the differences among breadth first, depth first, depth limited, iterative deepening, Uniform Cost Search, greedy best first, and A star search. Other algorithms are theoretical comparisons, because only U C S is allocated. Their execution statistics are not fabricated. U C S is complete and optimal for this finite positive cost problem. Its main limitation is exploring many states without direction toward the goal. Misplaced Tiles counts incorrectly positioned nonblank tiles. Manhattan Distance sums their row and column displacement. These heuristics guide informed search; U C S uses neither of them.

## 08 / PROJECT HANDOFF - Source, documentation, and deployment

The repository separates the page, styles, search engine, application controls, screenshots, documentation, and tests. Bootstrap is included locally, so the website also runs by opening the index file without a build step. GitHub Pages hosts the public website. The assignment P D F links to the repository, live application, read me, and demonstration. References acknowledge the original brief, Berkeley search notes, Bootstrap, and Codex assistance. This video uses synthetic narration and actual application screenshots. Before presenting the project, the student should review the code and be ready to explain priority queues, path costs, duplicate detection, parity, and optimality.
