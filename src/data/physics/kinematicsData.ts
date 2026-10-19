export interface KinematicsQuestion {
  id: string;
  source: string;
  topic: string;
  question: string;
  options: string[];
  correct: number;
  aamZindagi: string;
  bhaiyaTrick: string;
  chapter?: '1D' | '2D';
  moduleTitle?: string;
  cardId?: string;
  cardTitle?: string;
}

export interface KinematicsCard {
  id: string;
  title: string;
  formulaHtml: string;
  svgDiagram?: string;
  trigger: string;
  hinglishNote: string;
  trap: string;
  questions: KinematicsQuestion[];
}

export interface KinematicsModule {
  id: string;
  chapter: '1D' | '2D';
  badge: string;
  title: string;
  subtitle: string;
  color: string;
  cards: KinematicsCard[];
}

export const MODULES_1D: KinematicsModule[] = [
  {
    id: "mod-1d-basics",
    chapter: "1D",
    badge: "MODULE 01 • 1D BASICS",
    title: "Distance vs Displacement & Average Speed Hacks",
    subtitle: "KPP-05 (Q1–6, 15, 18) • KPP-06 • JEE Main PYQ (Q1–5, 9, 11–18, 21)",
    color: "amber",
    cards: [
      {
        id: "f-arc-chord",
        title: "1. Circular Path: Arc (Distance) vs Chord (Displacement)",
        formulaHtml: `Distance $(s) = R\\theta$ | Displacement $(|\\Delta \\vec{r}|) = 2R \\sin\\left(\\frac{\\theta}{2}\\right)$\n\nRatio $\\frac{\\text{Distance}}{\\text{Displacement}} = \\frac{\\theta / 2}{\\sin(\\theta / 2)}$ | $\\frac{v_{\\text{inst}}}{|\\vec{v}_{\\text{avg}}|} = \\frac{\\theta / 2}{\\sin(\\theta / 2)}$`,
        svgDiagram: `<svg viewBox="0 0 260 120" class="w-full h-28 mx-auto"><circle cx="70" cy="60" r="45" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="4 3"/><path d="M 70 15 A 45 45 0 0 1 115 60" fill="none" stroke="#dc2626" stroke-width="3"/><line x1="70" y1="15" x2="115" y2="60" stroke="#2563eb" stroke-width="2.5"/><line x1="70" y1="60" x2="70" y2="15" stroke="#64748b" stroke-width="1.5"/><line x1="70" y1="60" x2="115" y2="60" stroke="#64748b" stroke-width="1.5"/><text x="76" y="52" font-size="11" fill="#334155" font-weight="bold">θ</text><text x="132" y="38" font-size="11" fill="#dc2626" font-weight="bold">Arc = Rθ (Dist)</text><text x="132" y="62" font-size="11" fill="#2563eb" font-weight="bold">Chord = 2R sin(θ/2)</text><text x="132" y="86" font-size="10" fill="#475569">90° → √2 R | 120° → √3 R</text><text x="132" y="102" font-size="10" fill="#475569">180° → 2R | 360° → 0</text></svg>`,
        trigger: "Sawaal mein 'quarter circle (90°)', 'semicircle (180°)', 'turns by angle θ (120°, 135°)' ya 'cyclist on circular track' dikhe.",
        hinglishNote: "Bhai yaad rakh: Chord ki length hamesha $2R\\sin(\\theta/2)$ hoti hai! Quarter circle ($\\theta = \\pi/2$) ke liye Displacement $= R\\sqrt{2}$, $120^\\circ$ ke liye $R\\sqrt{3}$, aur semicircle ke liye $2R$. Agar particle constant speed $v$ se ghoom raha hai, toh Average Velocity $= \\frac{2R\\sin(\\theta/2)}{R\\theta / v} = v \\frac{\\sin(\\theta/2)}{\\theta/2}$.",
        trap: "Angle $\\theta$ ko upar numerator ($R\\theta$) mein hamesha RADIANS ($\\pi/2, 2\\pi/3$) mein rakhna! Degree mein rakh diya toh option match nahi karega.",
        questions: [
          {
            id: "q-kpp5-4",
            source: "Saleem Bhaiya KPP-05 Q4 & JEE Main 2023",
            topic: "Circular Arc vs Chord",
            question: "A body covered a distance of L m along a curved path of a quarter circle. The ratio of distance to displacement is:",
            options: ["π / (2√2)", "2√2 / π", "π / √2", "√2 / π"],
            correct: 0,
            aamZindagi: "Let radius be R. Quarter circle means distance L = (2πR)/4 = πR/2, so R = 2L/π. Displacement = √(R² + R²) = R√2. Ratio = L / (R√2) = (πR/2) / (R√2) = π / (2√2).",
            bhaiyaTrick: "Seedha Standard Ratio chipkao: Distance / Displacement = (θ/2) / sin(θ/2). Quarter circle matlab θ = π/2, toh θ/2 = π/4. Ratio = (π/4) / (1/√2) = π / (2√2). 3 second mein khatam!"
          },
          {
            id: "q-pyq1d-3",
            source: "JEE Main 6 April 2023 (Shift-I) [1D PYQ Q3]",
            topic: "Circular Arc vs Chord",
            question: "A particle is moving with constant speed in a circular path. When the particle turns by an angle 90°, the ratio of instantaneous velocity to its average velocity is π : x√2. The value of x will be:",
            options: ["2", "5", "1", "7"],
            correct: 0,
            aamZindagi: "Time taken for 90° = (πR/2)/v. Magnitude of displacement = R√2. Average velocity = R√2 / [(πR)/(2v)] = 2√2 v / π. Ratio v / v_avg = π / (2√2). Comparing with π : x√2 gives x = 2.",
            bhaiyaTrick: "Formula ratta hona chahiye: v_inst / v_avg = (θ/2) / sin(θ/2) = (π/4) / (1/√2) = π / (2√2). Compare kar π : x√2 se → x = 2!"
          },
          {
            id: "q-pyq1d-17",
            source: "JEE Main 6 April 2023 (Shift-II) [1D PYQ Q17]",
            topic: "Circular Arc vs Chord",
            question: "A particle is moving with constant speed π m/s on a circle. Considering its motion from A to B making an angle of 120° at the centre, the magnitude of the average velocity is:",
            options: ["π m/s", "√3 m/s", "2√3 m/s", "1.5√3 m/s"],
            correct: 3,
            aamZindagi: "Arc length = R(2π/3). Time t = [2πR/3] / π = 2R/3 sec. Chord AB = 2R sin(120°/2) = √3 R. So v_avg = √3 R / (2R/3) = 1.5√3 m/s.",
            bhaiyaTrick: "120° = 2π/3 rad, so θ/2 = π/3. Direct formula: v_avg = v · sin(π/3)/(π/3) = π · (√3/2) / (π/3) = 1.5√3 m/s!"
          }
        ]
      },
      {
        id: "f-3d-disp",
        title: "2. 2D / 3D Direction Steps (North-East-South-West & Box Walk)",
        formulaHtml: `$\\vec{r}_{\\text{net}} = (\\Sigma x)\\hat{i} + (\\Sigma y)\\hat{j} + (\\Sigma z)\\hat{k}$ | $|\\vec{r}_{\\text{net}}| = \\sqrt{(\\Sigma x)^2 + (\\Sigma y)^2 + (\\Sigma z)^2}$\n\n★ South-West / North-East Step of $A\\sqrt{2}$ = $A$ units along X and $A$ units along Y!`,
        trigger: "Sawaal mein '30m North, 20m East, 30√2m South-West' ya 'semicircle + parallel to z-axis' dikhe.",
        hinglishNote: "Kabhi diagram bana ke geometry mat khelna! Seedha East = $+\\hat{i}$, West = $-\\hat{i}$, North = $+\\hat{j}$, South = $-\\hat{j}$ likho. Aur jab bhi $30\\sqrt{2}\\text{ m}$ South-West dikhe, iska matlab $\\cos 45^\\circ$ se $-30\\hat{i} - 30\\hat{j}$ hai! Dono ko add karo, 5 second mein answer haath mein.",
        trap: "Distance poochha hai ya Displacement? Distance mein saare steps seedha jodte hain ($8+4+4+1 = 17$), Displacement mein sirf $(\\text{Final} - \\text{Initial})$ vector mod lete hain!",
        questions: [
          {
            id: "q-kpp5-5",
            source: "Saleem Bhaiya KPP-05 Q5 / KPP-06 Q5",
            topic: "Vector Displacement",
            question: "A person moves 30 m north and then 20 m towards east and finally 30√2 m in south-west direction. The displacement of the person from the origin will be:",
            options: ["10 m along north", "10 m along south", "10 m along west", "Zero"],
            correct: 2,
            aamZindagi: "Step 1: 30 ĵ. Step 2: 20 î. Step 3: 30√2 (–cos45° î – sin45° ĵ) = –30 î – 30 ĵ. Net r = (20–30)î + (30–30)ĵ = –10 î = 10 m along West.",
            bhaiyaTrick: "30√2 South-West ka matlab hai 30 South + 30 West! Pehle wala 30 North aur ye 30 South kat gaya! Bacha 20 East aur 30 West → Net = 10 m West!"
          },
          {
            id: "q-kpp5-1",
            source: "Saleem Bhaiya KPP-05 Q1",
            topic: "Path Distance vs Displacement",
            question: "A car moves from O to D along path OABCD: OA = 8 km East, AB = 4 km South, BC = 4 km West, CD = 1 km North. What is distance travelled and net displacement?",
            options: ["16, 5", "17, 5", "20, 4", "15, 3"],
            correct: 1,
            aamZindagi: "Total distance = 8 + 4 + 4 + 1 = 17 km. Net Δx = 8 - 4 = 4 km East. Net Δy = -4 + 1 = -3 km South. Displacement = √(4² + (-3)²) = 5 km.",
            bhaiyaTrick: "Distance = 8+4+4+1 = 17 (ek hi option mein 17 hai!). Displacement: East mein 8-4=4, South mein 4-1=3 → (3,4,5) triplet se 5!"
          }
        ]
      },
      {
        id: "f-avg-speed",
        title: "3. Average Speed Master Box: Equal Distance vs Equal Time vs Combo",
        formulaHtml: `Equal Distance: $v_{\\text{avg}} = \\frac{2v_1 v_2}{v_1 + v_2}$ (3 parts: $\\frac{3v_1 v_2 v_3}{v_1v_2 + v_2v_3 + v_3v_1}$)\nEqual Time: $v_{\\text{avg}} = \\frac{v_1 + v_2}{2}$ ($n$ intervals: $\\frac{\\Sigma v_i}{n}$)\nJEE Combo (Half Dist + 2 Equal Times): $v_{\\text{avg}} = \\frac{2 v_0 (v_1 + v_2)}{2v_0 + v_1 + v_2}$`,
        trigger: "Sawaal mein 'half the distance with v0 and remaining half in two equal time intervals v1 & v2' (JEE 2023, 2024 favourite!).",
        hinglishNote: "JEE Mains ka sabse chahita sawaal: Aadha rasta $v_0$ se, aur baaki aadha rasta barabar time ($t, t$) mein $v_1$ aur $v_2$ se! Doosre half ka average speed ban gaya $v' = \\frac{v_1+v_2}{2}$. Ab pehla half ($v_0$) aur doosra half ($v'$) barabar distance hain, toh dono pe Harmonic Mean $\\frac{2v_0 v'}{v_0 + v'}$ laga de! Bina $x$ aur $t$ maane 10 second mein solve!",
        trap: "Kabhi bhi Equal Distance mein $\\frac{v_1+v_2}{2}$ mat laga dena! Wo sirf Equal Time ke liye hota hai.",
        questions: [
          {
            id: "q-pyq1d-11",
            source: "JEE Main 09 April 2024 (Shift-I) [1D PYQ Q11]",
            topic: "Combo Average Speed",
            question: "A particle moving in a straight line covers half the distance with speed 6 m/s. The other half is covered in two equal time intervals with speeds 9 m/s and 15 m/s respectively. The average speed of the particle during the motion is:",
            options: ["8.8 m/s", "10 m/s", "9.2 m/s", "8 m/s"],
            correct: 3,
            aamZindagi: "Let total distance be 2d. First half time t1 = d/6. For second half, d = 9(t) + 15(t) = 24t ⇒ 2t = d/12. Total time = d/6 + d/12 = d/4. Avg speed = 2d / (d/4) = 8 m/s.",
            bhaiyaTrick: "Doosre half mein equal time hai → uska avg speed v' = (9 + 15)/2 = 12 m/s! Ab pehla half 6 m/s aur doosra half 12 m/s (equal distance) → 2×6×12 / (6+12) = 144/18 = 8 m/s! Pen bhi nahi uthana pada!"
          },
          {
            id: "q-pyq1d-14",
            source: "JEE Main 30 Jan 2023 (Shift-I) [1D PYQ Q14]",
            topic: "Combo Average Speed",
            question: "A horse rider covers half the distance with 5 m/s speed. The remaining part of the distance was travelled with speed 10 m/s for half the time and with speed 15 m/s for other half of the time. The mean speed of the rider is x/7 m/s. The value of x is:",
            options: ["50", "40", "35", "60"],
            correct: 0,
            aamZindagi: "Second half effective speed v' = (10+15)/2 = 12.5 m/s. Overall average speed = 2(5)(12.5)/(5 + 12.5) = 125 / 17.5 = 50/7 m/s. So x = 50.",
            bhaiyaTrick: "Same 2-Step Trick: Step 1: Equal time (10 & 15) ka mean = 12.5. Step 2: Equal distance (5 & 12.5) ka Harmonic Mean = (2 × 5 × 12.5) / 17.5 = 125 / 17.5 = 50/7 ⇒ x = 50!"
          },
          {
            id: "q-pyq1d-9",
            source: "JEE Main 6 April 2024 (Shift-I) [1D PYQ Q9]",
            topic: "Accelerated + Constant Speed Avg",
            question: "A train starting from rest first accelerates uniformly up to a speed of 80 km/h for time t, then it moves with a constant speed for time 3t. The average speed of the train for this duration of journey will be (in km/h):",
            options: ["80", "70", "30", "40"],
            correct: 1,
            aamZindagi: "In first time t (uniform acceleration from 0 to 80), average velocity is (0+80)/2 = 40 km/h, so distance s1 = 40t. In next 3t at constant 80 km/h, s2 = 80(3t) = 240t. Total avg speed = (40t + 240t) / (4t) = 280/4 = 70 km/h.",
            bhaiyaTrick: "0 se 80 uniform acceleration matlab pehle 't' sec ki avg speed = 40! Agle '3t' sec ki speed = 80. Weighted time average = (1×40 + 3×80) / (1+3) = 280/4 = 70 km/h!"
          }
        ]
      }
    ]
  },
  {
    id: "mod-1d-calculus",
    chapter: "1D",
    badge: "MODULE 02 • CALCULUS & VARIABLE ACCEL",
    title: "Differentiation, Integration & Implicit Manipulation Hacks",
    subtitle: "KPP-05 (Q7–14) • KPP-06 (Q29–56, 65) • JEE Main PYQ (Q6, 8, 10, 22, 23, 28, 38, 74–76)",
    color: "rose",
    cards: [
      {
        id: "f-calculus-chain",
        title: "1. The 3 Golden Forms of Acceleration & Cubic Direct Formula",
        formulaHtml: `$v = \\frac{dx}{dt}$ | $a = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$ | $a = v\\frac{dv}{dx} = \\frac{1}{2}\\frac{d(v^2)}{dx}$\n\n🔥 Cubic PYQ Direct Formula:\nIf $x(t) = at + bt^2 - ct^3$, then velocity when $a = 0$ is at $t = \\frac{b}{3c}$ and $v_{(a=0)} = a + \\frac{b^2}{3c}$`,
        trigger: "Sawaal mein cubic equation $x = at^3 + bt^2 + ct + d$ dekar 'velocity when acceleration becomes zero' poochhe.",
        hinglishNote: "Bhai, tere KPP aur PYQ mein ye sawaal 6 baar aaya hai! Seedha signs dekh: agar $t^3$ aur $t^2$ ke signs opposite hain ($bt^2 - ct^3$), toh $a=0$ hamesha positive time $t = \\frac{b}{3c}$ pe aata hai aur $v = a + \\frac{b^2}{3c}$! Aur agar $v$ as a function of $x$ diya ho ($v = 4\\sqrt{x}$), toh square maaro: $v^2 = 16x \\implies 2a = 16 \\implies a = 8$ m/s²!",
        trap: "Jab $v = 4\\sqrt{x}$ diya ho, root ko differentiate karne ki zaroorat hi nahi! $v^2 = 16x$ karke compare kar $v^2 = u^2 + 2ax$ se!",
        questions: [
          {
            id: "q-pyq1d-22",
            source: "JEE Main 9 April 2019 & KPP-06 Q48 [1D PYQ Q22]",
            topic: "Cubic x(t) Zero Acceleration",
            question: "The position of a particle as a function of time t is given by x(t) = at + bt² – ct³ where a, b and c are constants. When the particle attains zero acceleration, then its velocity will be:",
            options: ["a + b²/(4c)", "a + b²/c", "a + b²/(2c)", "a + b²/(3c)"],
            correct: 3,
            aamZindagi: "v = dx/dt = a + 2bt – 3ct². Acceleration A = dv/dt = 2b – 6ct = 0 ⇒ t = b/(3c). Put t in v: v = a + 2b(b/3c) – 3c(b²/9c²) = a + 2b²/3c – b²/3c = a + b²/(3c).",
            bhaiyaTrick: "Standard PYQ Result: x = at + bt² – ct³ ke liye v_(a=0) = a + b²/(3c). 2 second mein tick maaro!"
          },
          {
            id: "q-pyq1d-6",
            source: "JEE Main 29 Jan 2024 (Shift-II) & KPP-06 Q38 [1D PYQ Q6]",
            topic: "Cubic x(t) Zero Acceleration",
            question: "A particle is moving in a straight line. The variation of position 'x' as a function of time 't' is given as x = (t³ – 6t² + 20t + 15) m. The velocity of the body when its acceleration becomes zero is:",
            options: ["4 m/s", "8 m/s", "10 m/s", "6 m/s"],
            correct: 1,
            aamZindagi: "v = 3t² – 12t + 20. Acceleration a = 6t – 12 = 0 ⇒ t = 2 s. At t = 2 s, v = 3(4) – 12(2) + 20 = 12 – 24 + 20 = 8 m/s.",
            bhaiyaTrick: "a = dv/dt = 6t – 12 = 0 ⇒ t = 2 s. Velocity = 3(4) – 24 + 20 = 8 m/s!"
          },
          {
            id: "q-pyq1d-28",
            source: "JEE Main 1 Feb 2024 (Shift-II) [1D PYQ Q28]",
            topic: "v as a function of x",
            question: "A particle initially at rest starts moving from reference point x = 0 along x-axis, with velocity v that varies as v = 4√x m/s. The acceleration of the particle is _____ m/s².",
            options: ["4 m/s²", "8 m/s²", "16 m/s²", "2 m/s²"],
            correct: 1,
            aamZindagi: "dv/dx = 4 / (2√x) = 2/√x. Acceleration a = v(dv/dx) = (4√x)(2/√x) = 8 m/s².",
            bhaiyaTrick: "Dono taraf square maaro: v² = 16x. Compare karo v² = u² + 2ax se → 2a = 16 ⇒ a = 8 m/s²! Zero calculus!"
          }
        ]
      },
      {
        id: "f-implicit-hacks",
        title: "2. Implicit Time & Quadratic Position Shortcuts (Direct Ratlo Results)",
        formulaHtml: `1. Quadratic $t(x)$ Relation: If $t = mx^2 + nx$, then $a = -2m v^3$ (Retardation $= 2mv^3$)\n2. Quadratic $x^2(t)$ Relation: If $x^2 = at^2 + bt + c$, then $a \\propto x^{-3} \\implies n = 3$`,
        trigger: "Sawaal mein '$t = mx^2 + nx$' ya '$x^2 = 1 + t^2$, acceleration is $x^{-n}$, find $n$' dikhe.",
        hinglishNote: "Exam hall mein $t = mx^2 + nx$ ko double differentiate karne baithoge toh quotient rule mein sign galti pakki hai! $\\frac{dt}{dx} = \\frac{1}{v} = 2mx + n$. Differentiate: $-\\frac{1}{v^3}a = 2m \\implies a = -2mv^3$! Aur $x^2 = at^2 + bt + c$ mein hamesha $a \\propto x^{-3}$ aata hai ($n = 3$ Fixed!).",
        trap: "Retardation poochha ho toh minus sign hata ke $+2mv^3$ tick karna!",
        questions: [
          {
            id: "q-pyq1d-74",
            source: "JEE Main 25 July 2021 (Shift-II) [1D PYQ Q74]",
            topic: "Implicit t = mx² + nx",
            question: "The relation between time t and distance x for a moving body is given as t = mx² + nx, where m and n are constants. The retardation of the motion is: (Where v stands for velocity)",
            options: ["2n²v²", "2mnv³", "2mv³", "2nv³"],
            correct: 2,
            aamZindagi: "dt/dx = 2mx + n ⇒ 1/v = 2mx + n. Differentiating w.r.t. t: (-1/v²)(dv/dt) = 2m(dx/dt) = 2mv ⇒ a = dv/dt = -2mv³. Retardation = 2mv³.",
            bhaiyaTrick: "Direct Ratlo Result: t = mx² + nx ⇒ Retardation = 2mv³ ('n' toh gayab ho jata hai!). 1 second mein Option (c)!"
          },
          {
            id: "q-pyq1d-10",
            source: "JEE Main 6 April 2024 (Shift-II) & 9 Jan 2020 [1D PYQ Q10 & Q76]",
            topic: "x² = at² + bt + c Power Law",
            question: "A particle moves in a straight line so that its displacement x at any time t is given by x² = 1 + t². Its acceleration at any time t is x^(–n) where n = _____.",
            options: ["1", "2", "3", "4"],
            correct: 2,
            aamZindagi: "2x(dx/dt) = 2t ⇒ xv = t. Differentiate again: x(dv/dt) + v(dx/dt) = 1 ⇒ xa + v² = 1 ⇒ xa = 1 – t²/x² = (x² – t²)/x² = 1/x² ⇒ a = 1/x³ = x⁻³. So n = 3.",
            bhaiyaTrick: "Jab bhi x² = quadratic in t dikhe, acceleration hamesha 1/x³ ke proportional hota hai! Bina pen chalaye n = 3 bharo."
          }
        ]
      },
      {
        id: "f-retarding-uturn",
        title: "3. Speeding Up vs Slowing Down (Retardation) & Distance with U-Turn",
        formulaHtml: `Retardation Condition: $\\vec{v} \\cdot \\vec{a} < 0$ ($v$ and $a$ have OPPOSITE signs!)\nSpeeding up: $\\vec{v} \\cdot \\vec{a} > 0$ (Same sign, even if both negative!)\nDistance in $[0, T]$ with U-Turn at $t_0$: $\\text{Dist} = |x(t_0) - x(0)| + |x(T) - x(t_0)|$`,
        trigger: "Sawaal mein 'time interval for which particle retards' ya 'distance covered in first 3 seconds' poochhe.",
        hinglishNote: "Negative acceleration matlab retardation — BILKUL GALAT! Agar particle $-x$ direction mein bhaag raha hai ($v < 0$) aur $a$ bhi negative hai, toh uski speed BADH rahi hai! Retardation tabhi hota hai jab $v \\times a < 0$ ho.",
        trap: "Distance nikalte waqt seedha $x(3) - x(0)$ mat kar dena! Pehle check kar $0$ se $3$ ke beech $v=0$ kahan hua.",
        questions: [
          {
            id: "q-kpp6-65",
            source: "Saleem Bhaiya KPP-06 Q47 & Q65",
            topic: "Retardation Interval (v·a < 0)",
            question: "A particle starts moving rectilinearly at time t = 0 such that its velocity v changes with time t according to the equation v = t² – t. The time interval for which the particle retards (i.e., magnitude of velocity decreases) is:",
            options: ["t < 1/2", "1/2 < t < 1", "t > 1", "t < 1/2 and t > 1"],
            correct: 1,
            aamZindagi: "v = t(t – 1) and a = dv/dt = 2t – 1. For retardation, v·a < 0 ⇒ t(t – 1)(2t – 1) < 0. Since t > 0, we need (t – 1)(2t – 1) < 0, which gives 1/2 < t < 1.",
            bhaiyaTrick: "Retardation = (v × a < 0), NOT a < 0! Roots hain 1/2 aur 1 → Wavy curve se beech wala interval (1/2 < t < 1) negative aayega!"
          }
        ]
      }
    ]
  },
  {
    id: "mod-1d-gravity",
    chapter: "1D",
    badge: "MODULE 03 • CONSTANT ACCEL & GRAVITY",
    title: "Galileo Ratios, Stopping Hacks, Tower Trio & α–β Problems",
    subtitle: "KPP-08 (All 33 Qs) • JEE Main PYQ (Q24–58) • JEE Adv (Q1, 2, 5)",
    color: "emerald",
    cards: [
      {
        id: "f-galileo-sn",
        title: "1. Galileo's Odd Number Law (1:3:5:7) & n-th Second Formula",
        formulaHtml: `$S_n = u + \\frac{a}{2}(2n - 1)$\nIf $u = 0$: $S_1 : S_2 : S_3 : S_4 = 1 : 3 : 5 : 7 : \\dots : (2n-1)$\nEqual distances time ratio ($u=0$): $t_1 : t_2 : t_3 = 1 : (\\sqrt{2}-1) : (\\sqrt{3}-\\sqrt{2})$\n$S_{n+k} - S_n = k \\cdot a$`,
        trigger: "Particle starts from rest ($u=0$), 'distance in next t sec', 'water drops from tap', 'first half vs second half distance time ratio'.",
        hinglishNote: "Jab bhi 'starts from rest ($u=0$)' dikhe, 1 : 3 : 5 : 7 yaad kar! Pehle $t$ sec mein agar $x$ chala, toh agle $t$ sec mein $3x$ chalega. Aur $S_{n+2} - S_n = 2a$!",
        trap: "Jab particle decelerate karke ruk ke wapas mudta hai, tab $S_n$ formula direct mat lagana kyunki $S_n$ displacement deta hai, distance nahi!",
        questions: [
          {
            id: "q-pyq1d-29",
            source: "JEE Main 04 April 2024 (Shift-I) [1D PYQ Q29]",
            topic: "nth Second Shortcut",
            question: "A body travels 102.5 m in nth second and 115.0 m in (n + 2)th second. The acceleration is:",
            options: ["9 m/s²", "6.25 m/s²", "12.5 m/s²", "5 m/s²"],
            correct: 1,
            aamZindagi: "S_n = u + a(2n-1)/2 = 102.5. S_(n+2) = u + a(2n+3)/2 = 115. Subtracting first from second: a(4)/2 = 2a = 115 - 102.5 = 12.5 ⇒ a = 6.25 m/s².",
            bhaiyaTrick: "Har 1 second badhne par S_n mein 'a' judta hai! Toh 2 second (n se n+2) mein '2a' badhega: 2a = 115 – 102.5 = 12.5 ⇒ a = 6.25 m/s²!"
          },
          {
            id: "q-pyq1d-57",
            source: "JEE Main 27 Aug 2021 (Shift-II) [1D PYQ Q57]",
            topic: "Galileo 1:3 Water Drops",
            question: "Water drops are falling from a nozzle of a shower onto the floor, from a height of 9.8 m. When the first drop strikes the floor, at that instant, the third drop begins to fall. Locate the position of second drop from the floor when the first drop strikes the floor.",
            options: ["7.35 m", "2.45 m", "2.94 m", "4.18 m"],
            correct: 0,
            aamZindagi: "Total time for 1st drop T = √(2×9.8/9.8) = √2 s. 2nd drop has fallen for T/2 = 1/√2 s. Distance fallen by 2nd drop = ½(9.8)(1/2) = 2.45 m. Height from floor = 9.8 – 2.45 = 7.35 m.",
            bhaiyaTrick: "Galileo 1:3 Ratio! Niche floor se 2nd drop 3 parts (3/4 of 9.8) = 7.35 m par hogi!"
          },
          {
            id: "q-kpp8-6",
            source: "Saleem Bhaiya KPP-08 Q6",
            topic: "Free Fall Last Second",
            question: "A body falls freely from rest. It covers as much distance in the last second of its motion as covered in the first three seconds. The body has fallen for a time of:",
            options: ["3 s", "5 s", "7 s", "9 s"],
            correct: 1,
            aamZindagi: "Distance in first 3 s = ½ g(3)² = 9g/2. Distance in nth second = g(2n – 1)/2. Equating: 2n – 1 = 9 ⇒ 2n = 10 ⇒ n = 5 s.",
            bhaiyaTrick: "Galileo series: Pehle 3 sec ka sum = 1 + 3 + 5 = 9. 5th term (1, 3, 5, 7, 9) is 9 → Answer = 5 sec!"
          }
        ]
      },
      {
        id: "f-stopping-bullet",
        title: "2. Stopping Distance, Bullet Plank Loss & Train Mid-Point Velocity",
        formulaHtml: `1. Stopping Distance: $S_{\\text{stop}} = \\frac{u^2}{2a} \\propto u^2$\n2. Bullet Losses $1/n$ Speed in $x_1$: $x_2 = x_1 \\left( \\frac{(n-1)^2}{2n - 1} \\right)$\n3. Train Mid-Point Velocity: $v_{\\text{mid}} = \\sqrt{\\frac{u^2 + v^2}{2}}$`,
        trigger: "Sawaal mein 'loses 1/3rd of its velocity after 4 cm, how much further before rest', ya 'middle point of train passes signal'.",
        hinglishNote: "Agar bullet apni $1/3^{\\text{rd}}$ speed lose karti hai, matlab speed $\\frac{2}{3}u$ ho gayi! Pehle $4\\text{ cm}$ mein $\\frac{5}{9}u^2$ kharch hua, rukne tak baaki $\\frac{4}{9}u^2$ kharch hoga! Ratio $= 4/5 \\implies x_2 = 4 \\times 4/5 = 3.2\\text{ cm}$!",
        trap: "'Loses 1/3rd velocity' ka matlab final velocity $2u/3$ hota hai, $u/3$ nahi!",
        questions: [
          {
            id: "q-pyq1d-39",
            source: "JEE Main 25 Feb 2021 (Shift-I) [1D PYQ Q39]",
            topic: "Train Mid-Point Speed",
            question: "An engine of a train, moving with uniform acceleration, passes the signal-post with velocity u and the last compartment with velocity v. The velocity with which middle point of the train passes the signal post is:",
            options: ["(u + v)/2", "√[(v² + u²)/2]", "(v – u)/2", "√[(v² – u²)/2]"],
            correct: 1,
            aamZindagi: "For first half L/2: v_mid² – u² = 2a(L/2). For second half L/2: v² – v_mid² = 2a(L/2). Equating both: v_mid² – u² = v² – v_mid² ⇒ v_mid = √[(u² + v²)/2].",
            bhaiyaTrick: "Space-midpoint (L/2) par hamesha RMS formula √[(u² + v²)/2] aata hai, aur Time-midpoint (T/2) par (u + v)/2 aata hai!"
          },
          {
            id: "q-pyq1d-37",
            source: "JEE Main 25 July 2022 (Shift-I) [1D PYQ Q37]",
            topic: "Stopping Distance Scaling",
            question: "A car is moving with speed of 150 km/h and after applying the brake it will move 27 m before it stops. If the same car is moving with a speed of one third the reported speed then it will stop after travelling _____ m distance.",
            options: ["9 m", "3 m", "1 m", "6 m"],
            correct: 1,
            aamZindagi: "Stopping distance S = u²/(2a) ∝ u². Since u' = u/3, S' = S / 3² = 27 / 9 = 3 m.",
            bhaiyaTrick: "Speed 1/3 hui toh stopping distance (1/3)² = 1/9 ho jayega! 27 / 9 = 3 m!"
          }
        ]
      },
      {
        id: "f-tower-alpha-beta",
        title: "3. Tower Projection Trio ($t_1, t_2, t_0$) & α–β Motorcycle Problem",
        formulaHtml: `1. Tower Projection Trio:\n• Dropped from rest ($u=0$): $t_{\\text{drop}} = \\sqrt{t_1 t_2}$\n• Tower Height: $H = \\frac{1}{2} g t_1 t_2$ | Speed: $u = \\frac{1}{2}g(t_1 - t_2)$\n2. $\\alpha$–$\\beta$ Rest-to-Rest Motion:\n• $v_{\\max} = \\left(\\frac{\\alpha\\beta}{\\alpha+\\beta}\\right)T$ | $S = \\frac{1}{2}\\left(\\frac{\\alpha\\beta}{\\alpha+\\beta}\\right)T^2$`,
        trigger: "Sawaal mein 'thrown upward reaches in t1, downward in t2, dropped from rest reaches in?' ya 'motorcycle max accel α and retardation β'.",
        hinglishNote: "Effective acceleration $a_{\\text{eff}} = \\frac{\\alpha\\beta}{\\alpha+\\beta}$ hota hai! Bas $S = \\frac{1}{2} a_{\\text{eff}} T^2$ aur $v_{\\max} = a_{\\text{eff}} T$ laga de! Aur Tower Trio $t_{\\text{drop}} = \\sqrt{t_1 t_2}$!",
        trap: "Juggler question: Agar $n$ balls per second phenk raha hai, toh $H_{\\max} = \\frac{g}{2n^2}$!",
        questions: [
          {
            id: "q-pyq1d-43",
            source: "JEE Main 24 June 2022 & 06 April 2024 [1D PYQ Q32 & Q43]",
            topic: "Tower Projection Trio",
            question: "From the top of a tower, a ball is thrown vertically upward which reaches the ground in 6 s. A second ball thrown vertically downward from the same position with the same speed reaches the ground in 1.5 s. A third ball released from rest from the same location will reach the ground in _____ s.",
            options: ["3 s", "3.75 s", "4.5 s", "2.5 s"],
            correct: 0,
            aamZindagi: "For upward: -H = u(6) - ½g(36). For downward: -H = -u(1.5) - ½g(2.25). Eliminating u gives H = ½g(6)(1.5). For dropped ball, H = ½g t² ⇒ t = √(6 × 1.5) = √9 = 3 s.",
            bhaiyaTrick: "Direct Formula: t_drop = √(t1 × t2) = √(6 × 1.5) = √9 = 3 s! 2 second ka khel!"
          },
          {
            id: "q-kpp8-5",
            source: "Saleem Bhaiya KPP-08 Q5",
            topic: "α–β Rest-to-Rest Motion",
            question: "The engine of a motorcycle can produce a maximum acceleration 5 m/s². Its brakes can produce a maximum retardation 10 m/s². What is the minimum time in which it can cover 1.5 km starting from rest and coming to rest at B?",
            options: ["30 sec", "15 sec", "10 sec", "5 sec"],
            correct: 0,
            aamZindagi: "Let it accelerate for t1 and retard for t2. 5 t1 = 10 t2 ⇒ t1 = 2 t2. v_max = 10 t2. Area of v-t triangle = ½ (t1 + t2) v_max = 1500 ⇒ ½ (3 t2)(10 t2) = 1500 ⇒ 15 t2² = 1500 ⇒ t2 = 10 s. Total time = 3 t2 = 30 s.",
            bhaiyaTrick: "a_eff = (5×10)/(5+10) = 10/3 m/s². S = ½ a_eff T² ⇒ 1500 = ½ (10/3) T² ⇒ T² = 900 ⇒ T = 30 sec!"
          },
          {
            id: "q-kpp8-1",
            source: "Saleem Bhaiya KPP-08 Q1",
            topic: "Tower Symmetry",
            question: "From the top of a tower, a ball is thrown vertically upwards. When the ball reaches h below the tower, its speed is double of what it was at height h above the tower. Find the greatest height attained by the ball from the tower.",
            options: ["5h/3", "3h/2", "4h/3", "2h"],
            correct: 0,
            aamZindagi: "v1² = 2g(H – h), v2² = 2g(H + h). Given v2 = 2 v1 ⇒ H + h = 4(H – h) ⇒ 3H = 5h ⇒ H = 5h/3.",
            bhaiyaTrick: "Topmost point se distances (v² ∝ y) ka ratio 1:4 hoga! (H – h)/(H + h) = 1/4 ⇒ H = 5h/3!"
          }
        ]
      }
    ]
  },
  {
    id: "mod-1d-graphs",
    chapter: "1D",
    badge: "MODULE 04 • COMPLETE GRAPH MASTERY",
    title: "x–t, v–t, a–t, v–x & v²–x Graph Decoding & Conversions",
    subtitle: "KPP-06 (Part 2 & 3) • KPP-07 (All 20 Qs) • JEE Main PYQ (Q59–73) • JEE Adv Q4",
    color: "indigo",
    cards: [
      {
        id: "f-xt-concavity",
        title: "1. x–t Graph Decoder: Slope (Velocity) + Concavity (Smiling vs Crying Face)",
        formulaHtml: `Smiling (Cup UP 😊): $\\frac{d^2x}{dt^2} > 0 \\implies a > 0$ (Slope increasing)\nCrying (Cup DOWN ☹️): $\\frac{d^2x}{dt^2} < 0 \\implies a < 0$ (Slope decreasing)\nStraight Line: $a = 0$ (Constant velocity)`,
        svgDiagram: `<svg viewBox="0 0 320 105" class="w-full h-24 mx-auto"><g transform="translate(10,10)"><line x1="0" y1="80" x2="85" y2="80" stroke="#475569" stroke-width="1.5"/><line x1="0" y1="80" x2="0" y2="5" stroke="#475569" stroke-width="1.5"/><path d="M 8 72 Q 45 70 78 12" fill="none" stroke="#16a34a" stroke-width="3"/><text x="12" y="22" font-size="10" fill="#16a34a" font-weight="bold">😊 Cup Up: a &gt; 0</text><text x="12" y="36" font-size="9" fill="#334155">v &gt; 0, Speeding up</text></g><g transform="translate(115,10)"><line x1="0" y1="80" x2="85" y2="80" stroke="#475569" stroke-width="1.5"/><line x1="0" y1="80" x2="0" y2="5" stroke="#475569" stroke-width="1.5"/><path d="M 8 72 Q 25 15 78 12" fill="none" stroke="#dc2626" stroke-width="3"/><text x="10" y="65" font-size="10" fill="#dc2626" font-weight="bold">☹️ Cup Down: a &lt; 0</text><text x="10" y="76" font-size="9" fill="#334155">v &gt; 0, Slowing down</text></g><g transform="translate(220,10)"><line x1="0" y1="80" x2="85" y2="80" stroke="#475569" stroke-width="1.5"/><line x1="0" y1="80" x2="0" y2="5" stroke="#475569" stroke-width="1.5"/><path d="M 8 15 Q 55 15 78 75" fill="none" stroke="#9333ea" stroke-width="3"/><text x="8" y="45" font-size="10" fill="#9333ea" font-weight="bold">☹️ a &lt; 0, v &lt; 0</text><text x="8" y="58" font-size="9" fill="#334155">Speeding up in -x!</text></g></svg>`,
        trigger: "x–t graph dekar poochhe 'where is acceleration positive/negative', 'where is particle speeding up/slowing down'.",
        hinglishNote: "Saleem Bhaiya ka Katora Rule: Seedha katora (Cup Up 😊) $\\implies a > 0$. Ulta katora (Cup Down ☹️) $\\implies a < 0$. Tangent flat $\\implies v = 0$. Sign of v and a same $\\implies$ Speeding Up, opposite $\\implies$ Slowing Down!",
        trap: "Axis zaroor check kar! Agar vertical pe Time aur horizontal pe Displacement ho, toh $v = \\cot\\theta$, $\\tan\\theta$ nahi!",
        questions: [
          {
            id: "q-kpp7-16",
            source: "Saleem Bhaiya KPP-07 Q16",
            topic: "x–t Concavity & Turning Points",
            question: "In an x–t graph with a peak at C, a valley at E, concave down around BC/CD, and concave up around DE/EF, how many times does velocity become zero if the curve also starts horizontally at A and flattens at F?",
            options: ["Once", "Twice", "Three times (at A/C, E, F where tangent is horizontal)", "Never"],
            correct: 2,
            aamZindagi: "Instantaneous velocity v = dx/dt is the slope of the x–t graph. Wherever the tangent is parallel to the time axis (peaks, troughs, or horizontal inflections), v = 0.",
            bhaiyaTrick: "Jahan-jahan x–t graph par Chhat (Peak) ya Gadda (Valley) bane, wahan tangent flat hoti hai ⇒ v = 0! Aur Cup Up (EF) mein acceleration positive hota hai!"
          },
          {
            id: "q-kpp5-21",
            source: "Saleem Bhaiya KPP-05 Q21 (Classic Axis Trap!)",
            topic: "Swapped t–x Axis Trap",
            question: "In a graph where the VERTICAL axis is Time (sec) and HORIZONTAL axis is Displacement (m), the line makes an angle of 30° with the horizontal displacement axis. Find the velocity of the moving body:",
            options: ["1/√3 m/s", "3 m/s", "√3 m/s", "1/3 m/s"],
            correct: 2,
            aamZindagi: "Here tan 30° = Time / Displacement = 1 / Velocity. Therefore, Velocity = cot 30° = √3 m/s.",
            bhaiyaTrick: "90% bache bina axis dekhe tan 30° = 1/√3 tick kar dete hain! Yahan Time Y-axis pe hai, toh Velocity = dx/dt = cot 30° = √3 m/s!"
          }
        ]
      },
      {
        id: "f-vx-ax-conversion",
        title: "2. v–x to a–x Graph Conversion & v²–x Slope Trick",
        formulaHtml: `If $v$–$x$ is a Straight Line ($v = mx + c$):\n$a = v\\frac{dv}{dx} = (mx + c) \\cdot m = m^2 x + mc$ ($a$–$x$ is ALSO a straight line!)\n$v^2$ vs $x$ Straight Line Graph: $a = \\frac{1}{2} \\times (\\text{Slope of } v^2\\text{–}x \\text{ graph})$`,
        svgDiagram: `<svg viewBox="0 0 300 100" class="w-full h-24 mx-auto"><g transform="translate(15,10)"><line x1="0" y1="75" x2="105" y2="75" stroke="#334155" stroke-width="1.5"/><line x1="0" y1="75" x2="0" y2="5" stroke="#334155" stroke-width="1.5"/><line x1="0" y1="15" x2="85" y2="75" stroke="#2563eb" stroke-width="2.5"/><text x="5" y="12" font-size="10" fill="#2563eb" font-weight="bold">v vs x (m &lt; 0)</text><text x="80" y="88" font-size="10" fill="#334155">x₀</text></g><text x="135" y="48" font-size="16" fill="#d97706" font-weight="bold">⇒</text><g transform="translate(175,10)"><line x1="0" y1="20" x2="105" y2="20" stroke="#334155" stroke-width="1.5"/><line x1="0" y1="85" x2="0" y2="5" stroke="#334155" stroke-width="1.5"/><line x1="0" y1="80" x2="85" y2="20" stroke="#dc2626" stroke-width="2.5"/><text x="5" y="14" font-size="10" fill="#dc2626" font-weight="bold">a vs x (a = v·m &lt; 0)</text><text x="80" y="33" font-size="10" fill="#334155">x₀</text></g></svg>`,
        trigger: "v–x graph dekar a–x graph poochhe ya v²–x graph dekar acceleration poochhe.",
        hinglishNote: "Jab axis pe $x$ ho, toh $a = v \\times (\\text{slope})$ hota hai! Agar $v$–$x$ line niche gir rahi hai ($v_0$ se $0$ at $x_0$), toh slope negative hai: $x=0$ par $a$ negative hoga, aur $x=x_0$ par kyunki $v=0$ hai, isliye $a$ bhi $0$ ho jayega!",
        trap: "v²–x graph mein acceleration slope ke barabar NAHI hota, (Slope / 2) ke barabar hota hai!",
        questions: [
          {
            id: "q-pyq1d-65",
            source: "JEE Main 16 March 2021 (Shift-I) [1D PYQ Q65]",
            topic: "v–x to a–x Conversion",
            question: "The velocity-displacement (V–X) graph of a bicycle is a straight line going from V = 10 m/s at X = 0 to V = 50 m/s at X = 400 m. What is the acceleration at X = 0 and X = 400 m?",
            options: ["a = 1 m/s² to 5 m/s² (straight line)", "a = 2 m/s² to 8 m/s²", "a = 1 m/s² to 18 m/s²", "a = 2 m/s² to 10 m/s²"],
            correct: 0,
            aamZindagi: "Slope dV/dX = (50 – 10) / 400 = 40/400 = 0.1 s⁻¹. Since a = V(dV/dX): at X = 0, a = 10 × 0.1 = 1 m/s²; at X = 400 m, a = 50 × 0.1 = 5 m/s² (straight line).",
            bhaiyaTrick: "Slope m = (50–10)/400 = 1/10. Ab a = V × m: Shuru mein V=10 ⇒ a=1; End mein V=50 ⇒ a=5, aur beech mein seedhi line!"
          },
          {
            id: "q-pyq1d-68",
            source: "JEE Main 31 Aug 2021 (Shift-II) [1D PYQ Q68]",
            topic: "v² vs x Graph",
            question: "A particle is moving with constant acceleration 'a'. Its v² versus x (displacement) plot is a straight line passing through (0, 20) and (30, 80). The acceleration of the particle is _____ m/s².",
            options: ["2 m/s²", "1 m/s²", "0.5 m/s²", "4 m/s²"],
            correct: 1,
            aamZindagi: "From v² = u² + 2ax, slope of v²–x graph is 2a. From graph, slope = (80 – 20) / (30 – 0) = 60/30 = 2. Thus 2a = 2 ⇒ a = 1 m/s².",
            bhaiyaTrick: "a = ½ × (Slope of v²–x graph) = ½ × (80–20)/30 = ½ × 2 = 1 m/s²!"
          }
        ]
      }
    ]
  }
];

export const MODULES_2D: KinematicsModule[] = [
  {
    id: "mod-2d-projectile",
    chapter: "2D",
    badge: "MODULE 05 • PROJECTILE MOTION (GROUND, TOWER & INCLINE)",
    title: "Complementary Angles, Trajectory Decoder, Pole & Perpendicular Incline Hits",
    subtitle: "KPP-09 (All 20 Qs) • KPP-10 (All 29 Qs) • 2D PYQ (Q1–54 & JEE Adv Q8–21)",
    color: "orange",
    cards: [
      {
        id: "f-proj-standard",
        title: "1. Ground-to-Ground Master Relations & Complementary Angles (θ, 90°–θ)",
        formulaHtml: `$T = \\frac{2u\\sin\\theta}{g}$ | $H = \\frac{u^2\\sin^2\\theta}{2g} = \\frac{1}{8}gT^2$ | $R = \\frac{u^2\\sin 2\\theta}{g} = \\frac{2 u_x u_y}{g}$\n\nGolden Relation: $R \\tan\\theta = 4H$ (If $R = nH, \\tan\\theta = \\frac{4}{n}$)\nSame Range ($\\theta$ & $90^\\circ-\\theta$, same $u$):\n• $R = 4\\sqrt{H_1 H_2}$ | $R = \\frac{1}{2}g T_1 T_2$ | $H_1 + H_2 = \\frac{u^2}{2g}$`,
        trigger: "Sawaal mein 'same range at two angles', 'R = H', 'kinetic energy at highest point', 'same height at t1 = 3s and t2 = 5s'.",
        hinglishNote: "Complementary angles ($\\theta$ aur $90^\\circ-\\theta$) par ye 3 relations ungliyon pe hone chahiye: (1) $R = 4\\sqrt{H_1 H_2}$, (2) $T_1 T_2 = \\frac{2R}{g}$, (3) $H_1 + H_2 = \\frac{u^2}{2g}$! Same height at two times: $T = t_1 + t_2$ aur $h = \\frac{1}{2}g t_1 t_2$!",
        trap: "NTA Trap: 'Projected at angle $\\theta$ WITH THE VERTICAL'! Jab vertical se angle diya ho toh $\\sin\\theta$ aur $\\cos\\theta$ palat jate hain!",
        questions: [
          {
            id: "q-pyq2d-28",
            source: "JEE Main 31 Jan 2023 (Shift-II) [2D PYQ Q28]",
            topic: "Complementary Angles H1 + H2",
            question: "Two bodies are projected from ground with same speeds 40 m/s at two different angles with respect to horizontal and have the same range. If one body was projected at 60°, then the sum of the maximum heights (H₁ + H₂) attained by the two projectiles is _____ m. (g = 10 m/s²)",
            options: ["80 m", "160 m", "40 m", "120 m"],
            correct: 0,
            aamZindagi: "Angles are 60° and 30°. H1 = (40² sin²60°)/(2×10) = 60 m. H2 = (40² sin²30°)/(2×10) = 20 m. Sum = 80 m.",
            bhaiyaTrick: "60° ka koi kaam hi nahi hai! H₁ + H₂ = u²/(2g) = 40² / 20 = 80 m!"
          },
          {
            id: "q-pyq2d-27",
            source: "JEE Main 11 April 2023 (Shift-I) [2D PYQ Q27]",
            topic: "Two Times at Same Height",
            question: "A projectile fired at 30° to the ground is observed to be at same height at time 3 s and 5 s after projection. The speed of projection of the projectile is _____ m/s. (g = 10 m/s²)",
            options: ["40 m/s", "80 m/s", "60 m/s", "50 m/s"],
            correct: 1,
            aamZindagi: "T = t1 + t2 = 3 + 5 = 8 s. 2u sin30° / g = 8 ⇒ u / 10 = 8 ⇒ u = 80 m/s.",
            bhaiyaTrick: "Same height ke do times ka sum = Time of Flight! T = 3 + 5 = 8 s ⇒ u = 80 m/s!"
          },
          {
            id: "q-pyq2d-47",
            source: "JEE Main 12 April 2019 & 25 June 2022 [2D PYQ Q31 & Q47]",
            topic: "Same Range R vs H1, H2",
            question: "Two particles are projected from the same point with the same speed u such that they have the same range R, but different maximum heights h₁ and h₂. Which of the following is correct?",
            options: ["R² = 2 h₁h₂", "R² = 16 h₁h₂", "R² = 4 h₁h₂", "R² = h₁h₂"],
            correct: 1,
            aamZindagi: "h1·h2 = (u⁴ sin²θ cos²θ) / (4g²) = R²/16 ⇒ R² = 16 h₁h₂.",
            bhaiyaTrick: "Direct Formula: R = 4√(h₁h₂) ⇒ R² = 16 h₁h₂!"
          }
        ]
      },
      {
        id: "f-proj-trajectory",
        title: "2. Equation of Trajectory Decoder, Pole Trick & Perpendicular Velocity",
        formulaHtml: `Trajectory Master Form: $y = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right) = ax - bx^2$\n• $\\tan\\theta = a$ | $R = \\frac{a}{b}$ | $H_{\\max} = \\frac{a^2}{4b} = \\frac{R\\tan\\theta}{4}$\nPole Clearance ($x_1 = a, x_2 = b$): $y = \\frac{ab}{a+b} \\tan\\theta$\nWhen $\\vec{v} \\perp \\vec{u}$: $t = \\frac{u}{g\\sin\\theta}$ and $v = u\\cot\\theta$`,
        trigger: "Sawaal mein 'y = ax - bx²', 'touches top of pole at distance a and lands at b', ya 'moving perpendicular to initial direction'.",
        hinglishNote: "Trajectory Equation ($y = ax - bx^2$) ka 3-Second Post-Mortem: $y = x - \\frac{x^2}{20} \\implies \\tan\\theta = 1, R = 20\\text{ m}, H_{\\max} = \\frac{R\\tan\\theta}{4} = 5\\text{ m}$! Aur Pole problem (KPP-10 Q27): $h = \\frac{ab}{a+b}\\tan\\theta$, for $45^\\circ$ seedha $h = \\frac{ab}{a+b}$!",
        trap: "$\\vec{v} \\perp \\vec{u}$ sirf tabhi possible hai jab projection angle $\\theta > 45^\\circ$ ho!",
        questions: [
          {
            id: "q-pyq2d-20",
            source: "JEE Main 8 April 2023 (Shift-II) [2D PYQ Q20]",
            topic: "Equation of Trajectory",
            question: "The trajectory of projectile, projected from the ground is given by y = x – x²/20. Where x and y are measured in meter. The maximum height attained by the projectile will be:",
            options: ["5 m", "10√2 m", "200 m", "10 m"],
            correct: 0,
            aamZindagi: "Compare y = x(1 – x/20) with y = x tanθ (1 – x/R). So tanθ = 1 and R = 20 m. R tanθ = 4H ⇒ 20(1) = 4H ⇒ H = 5 m.",
            bhaiyaTrick: "y = ax – bx² mein H_max = a²/(4b) = 1² / [4 × (1/20)] = 5 m!"
          },
          {
            id: "q-kpp10-27",
            source: "Saleem Bhaiya KPP-10 Q27",
            topic: "Pole Clearance Formula",
            question: "From a point on the ground at a distance 'a' from the foot of a pole, a ball is thrown at an angle of 45°, which just touches the top of the pole and strikes the ground at a distance of 'b' on the other side of it. Find the height of the pole:",
            options: ["ab / (a + b)", "2ab / (a + b)", "(a + b) / ab", "√(ab)"],
            correct: 0,
            aamZindagi: "Range R = a + b. Trajectory equation: y = x tanθ (1 – x/R). At x = a, y = h and θ = 45°: h = a(1)[1 – a/(a+b)] = ab/(a+b).",
            bhaiyaTrick: "Yaad rakh: h = [ab / (a + b)] tanθ! θ = 45° rakhte hi h = ab / (a + b)!"
          },
          {
            id: "q-kpp8-12",
            source: "Saleem Bhaiya KPP-08 Q12 & KPP-09 Q3",
            topic: "Velocity Perpendicular to Initial",
            question: "A particle is projected upwards with a velocity of 100 m/s at an angle of 60° WITH THE VERTICAL. Find the time when the particle will move perpendicular to its initial direction (g = 10 m/s²):",
            options: ["20 s", "10 s", "10√3 s", "20/√3 s"],
            correct: 0,
            aamZindagi: "60° with vertical means θ = 30° with horizontal! Time when v ⊥ u is t = u / (g sinθ) = 100 / (10 × sin30°) = 100 / 5 = 20 s.",
            bhaiyaTrick: "Vertical se 60° matlab horizontal se θ = 30°! t = u / (g sinθ) = 100 / 5 = 20 sec!"
          }
        ]
      },
      {
        id: "f-proj-incline-stair",
        title: "3. Staircase Roll-Off & Striking an Inclined Plane PERPENDICULARLY",
        formulaHtml: `1. Staircase Problem ($n$ steps, height $h$, width $b$): $u = b \\sqrt{\\frac{n g}{2h}}$\n2. Horizontal Throw Hitting Incline ($\\beta$) at 90°: $V_0 = \\sqrt{\\frac{2gH}{2 + \\cot^2\\beta}}$\n(For $\\beta = 30^\\circ \\implies V_0 = \\sqrt{\\frac{2gH}{5}}$)`,
        svgDiagram: `<svg viewBox="0 0 300 105" class="w-full h-24 mx-auto"><g transform="translate(15,10)"><line x1="0" y1="85" x2="120" y2="85" stroke="#334155" stroke-width="1.5"/><line x1="0" y1="85" x2="0" y2="10" stroke="#334155" stroke-width="2"/><line x1="0" y1="85" x2="115" y2="25" stroke="#dc2626" stroke-width="2.5"/><path d="M 0 15 Q 45 15 68 50" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="3 2"/><circle cx="68" cy="50" r="3" fill="#2563eb"/><text x="6" y="14" font-size="10" fill="#2563eb" font-weight="bold">V₀ (horiz)</text><text x="24" y="81" font-size="10" fill="#dc2626" font-weight="bold">β=30°</text><text x="72" y="45" font-size="10" fill="#1e293b" font-weight="bold">90° hit!</text></g><g transform="translate(155,15)"><text x="0" y="15" font-size="11" fill="#0f172a" font-weight="bold">Bhaiya 3-Step Logic:</text><text x="0" y="33" font-size="10" fill="#334155">1. Hits ⊥ to β ⇒ v_y / V₀ = cot β ⇒ t = V₀ cotβ / g</text><text x="0" y="50" font-size="10" fill="#334155">2. x = V₀ t, drop y = ½ g t²</text><text x="0" y="67" font-size="10" fill="#dc2626" font-weight="bold">3. H = y + x tanβ ⇒ V₀ = √[2gH / (2 + cot²β)]</text></g></svg>`,
        trigger: "Sawaal mein 'hits the inclined plane perpendicularly' ya 'staircase steps'.",
        hinglishNote: "Jab particle horizontally ($V_0$) phenka jaye aur $30^\\circ$ wale incline pe $90^\\circ$ pe takraye, toh $V_0 = \\sqrt{\\frac{2gH}{2 + \\cot^2\\beta}} = \\sqrt{\\frac{2gH}{5}}$! Aur Two Intersecting Inclines ($30^\\circ$ & $60^\\circ$): dono ke beech angle $90^\\circ$ hota hai, toh $\\vec{v} \\perp \\vec{u}$ se seedha solve!",
        trap: "Staircase problem mein: 'hits edge of step n' vs 'hits surface of step n' dhyan se check karo!",
        questions: [
          {
            id: "q-kpp9-11",
            source: "Saleem Bhaiya KPP-09 Q11 & KPP-10 Q23",
            topic: "Hits Incline Perpendicularly",
            question: "The angle of inclination of an inclined plane is 30°. A particle is projected horizontally with velocity V₀ from a height H above the foot of the incline so that it hits the inclined plane perpendicularly. Then V₀ is:",
            options: ["√(2gH / 5)", "√(2gH / 7)", "√(gH / 5)", "√(gH / 7)"],
            correct: 0,
            aamZindagi: "Hits 30° incline perpendicularly ⇒ gt = √3 V0. H - ½gt² = (V0 t)/√3. Substituting t gives V0 = √(2gH/5).",
            bhaiyaTrick: "Direct Formula: V₀ = √[2gH / (2 + cot²β)]. β = 30° ⇒ cot²30° = 3 ⇒ V₀ = √(2gH / 5)!"
          },
          {
            id: "q-kpp10-15",
            source: "Saleem Bhaiya KPP-10 Q9 & Passage Q15–16",
            topic: "Two Inclined Planes (30° & 60°)",
            question: "Two inclined planes OA (30°) and OB (60°) intersect at O. A particle is projected from P on OA with u = 10√3 m/s perpendicular to OA, and strikes OB perpendicularly at Q. Find velocity at Q and time of flight:",
            options: ["10 m/s, 2 s", "15 m/s, 4 s", "20 m/s, 2 s", "10 m/s, 4 s"],
            correct: 0,
            aamZindagi: "Perpendicular to 30° incline means angle 60° with horizontal. Striking 60° incline perpendicularly means angle 30° below horizontal (v ⊥ u). v cos30° = u cos60° ⇒ v = 10 m/s, t = 2 s.",
            bhaiyaTrick: "v ⊥ u! Seedha v = u cot60° = 10√3 × (1/√3) = 10 m/s, aur t = u/(g sin60°) = 2 sec!"
          }
        ]
      }
    ]
  },
  {
    id: "mod-2d-relative",
    chapter: "2D",
    badge: "MODULE 06 • RELATIVE MOTION (1D & 2D)",
    title: "River-Swimmer, Rain-Man, Train-Tunnel & Mid-Air Collision Hacks",
    subtitle: "1D PYQ (Q77–82) • 2D PYQ (Q55–64) • JEE Adv (Q1, 20–26)",
    color: "cyan",
    cards: [
      {
        id: "f-river-swimmer",
        title: "1. River-Swimmer / Boat Complete Blueprint (Shortest Time vs Zero Drift)",
        formulaHtml: `Shortest Time: $t_{\\min} = \\frac{d}{v_{sr}}$ (Independent of river speed $v_r$!) | Drift $x = v_r \\left(\\frac{d}{v_{sr}}\\right)$\nShortest Path / Zero Drift: $\\sin\\theta = \\frac{v_r}{v_{sr}}$ | Angle with flow $= 90^\\circ + \\theta$ | $t = \\frac{d}{\\sqrt{v_{sr}^2 - v_r^2}}$`,
        trigger: "Sawaal mein 'crosses river in shortest time', 'reaches point directly opposite on other bank'.",
        hinglishNote: "River par karne ka kaam vertical component ($v_{sr}\\cos\\theta$) karta hai. Drift ka kaam horizontal ($v_r - v_{sr}\\sin\\theta$) karta hai. Zero drift ke liye $\\sin\\theta = \\frac{v_r}{v_{sr}}$! Angle with flow $= 90^\\circ + \\theta$!",
        trap: "Hamesha check kar ki angle 'with the normal' ($30^\\circ$) poochha hai ya 'with river flow' ($120^\\circ$)!",
        questions: [
          {
            id: "q-pyq2d-61",
            source: "JEE Main 16 March 2021 & 9 April 2019 [2D PYQ Q61 & Q64]",
            topic: "River-Swimmer Zero Drift Angle",
            question: "A swimmer can swim with velocity of 12 km/h in still water. Water flowing in a river has velocity 6 km/h. The direction with respect to the direction of flow of river water he should swim in order to reach the point on the other bank just opposite to his starting point is:",
            options: ["30°", "60°", "120°", "150°"],
            correct: 2,
            aamZindagi: "sinθ = v_r / v_s = 6 / 12 = 1/2 ⇒ θ = 30° upstream from normal. Angle with river flow = 90° + 30° = 120°.",
            bhaiyaTrick: "sinθ = 6/12 = 1/2 ⇒ θ = 30°. Flow se angle = 90° + 30° = 120°!"
          },
          {
            id: "q-pyq2d-55",
            source: "JEE Main 31 Jan 2023 (Shift-I) [2D PYQ Q55]",
            topic: "River Drift Calculation",
            question: "The speed of a swimmer is 4 km/h in still water. If the swimmer makes his strokes normal to the flow of river of width 1 km, he reaches a point 750 m down the stream on the opposite bank. The speed of the river water is _____ km/h.",
            options: ["3 km/h", "2 km/h", "1.5 km/h", "2.5 km/h"],
            correct: 0,
            aamZindagi: "t = 1/4 hr. Drift = v_r × (1/4) = 0.75 km ⇒ v_r = 3 km/h.",
            bhaiyaTrick: "(Drift / Width) = (v_river / v_swimmer)! 0.75 / 1 = v_r / 4 ⇒ v_r = 3 km/h!"
          }
        ]
      },
      {
        id: "f-rain-collision",
        title: "2. Rain-Man Vector Triangle & Relative Projectile / Closest Approach",
        formulaHtml: `Rain-Man ($\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m$): $v_{rx} = v_m$ and $v_{ry} = v_m \\cot\\theta$\nMid-Air Collision: $\\vec{a}_{\\text{rel}} = \\vec{g} - \\vec{g} = 0 \\implies$ Straight-Line relative motion!`,
        trigger: "Sawaal mein 'girl holds umbrella at 45°, when she runs rain hits vertically' ya 'two stones collide in mid-air'.",
        hinglishNote: "Ek ball pe khud baith ja! Kyunki dono par niche $g$ lag raha hai, toh $a_{\\text{rel}} = g - g = 0$! Time of meeting $= \\frac{\\text{Initial Separation}}{v_{\\text{rel}}}$!",
        trap: "Speed of rain with respect to GROUND ($30$) vs with respect to MOVING GIRL ($15\\sqrt{2}$) dhyan se padho!",
        questions: [
          {
            id: "q-pyq2d-57",
            source: "JEE Main 27 June 2022 (Shift-I) [2D PYQ Q57]",
            topic: "Rain-Man Relative Velocity",
            question: "A girl standing on road holds her umbrella at 45° with the vertical to keep the rain away. If she starts running without umbrella with a speed of 15√2 km/h, the rain drops hit her head vertically. The speed of rain drops with respect to the MOVING GIRL is:",
            options: ["30 km/h", "25/√2 km/h", "30/√2 km/h", "25 km/h"],
            correct: 2,
            aamZindagi: "Horizontal component v_rx = 15√2. Tan 45° = 1 ⇒ v_ry = 15√2 = 30/√2 km/h.",
            bhaiyaTrick: "Khade hoke 45° matlab v_rx = v_ry. Daudne pe vertical matlab v_rx = 15√2 = 30/√2! Moving girl ko sirf v_ry dikhega = 30/√2 km/h!"
          }
        ]
      }
    ]
  },
  {
    id: "mod-2d-circular",
    chapter: "2D",
    badge: "MODULE 07 • CIRCULAR KINEMATICS",
    title: "Uniform & Non-Uniform Circular Motion ($a_t = a_c$ Exponential Hack)",
    subtitle: "2D PYQ (Q65–78) • KPP-06 Q41, 46",
    color: "purple",
    cards: [
      {
        id: "f-circular-master",
        title: "1. Circular Vectors ($|\\Delta \\vec{v}| = 2v\\sin(\\theta/2)$) & The $a_t = a_c$ Exponential PYQ",
        formulaHtml: `Constant Speed: $|\\Delta \\vec{v}| = 2v \\sin\\left(\\frac{\\theta}{2}\\right)$ | $|\\vec{a}_{\\text{avg}}| = \\frac{2v^2 \\sin(\\theta/2)}{R\\theta}$\nWhen $a_t = a_c$ at any instant: $t = \\frac{R}{u}\\left(1 - e^{-\\theta}\\right)$ (Full rev: $t = \\frac{R}{u}(1 - e^{-2\\pi})$)`,
        trigger: "Sawaal mein 'normal and tangential components of acceleration are equal ($a_t = a_c$), time to complete 1st revolution'.",
        hinglishNote: "JEE Main 2023 aur 2024 dono mein exact same sawaal aaya hai: $a_t = a_c$! Exam mein integrate mat karna — bahar coefficient $\\frac{R}{u}$ aata hai! $t = \\frac{R}{u}(1 - e^{-2\\pi})$!",
        trap: "Speed $u$ agar km/h mein di ho (54 km/h), toh pehle $\\times \\frac{5}{18}$ karke 15 m/s banana mat bhoolna!",
        questions: [
          {
            id: "q-pyq2d-66",
            source: "JEE Main 29 Jan 2024 (Shift-II) & 29 Jan 2023 [2D PYQ Q66 & Q70]",
            topic: "a_t = a_c Exponential Time",
            question: "A particle is moving in a circle of radius 50 cm (0.5 m) in such a way that at any instant the normal and tangential components of its acceleration are equal. If its speed at t = 0 is 4 m/s, the time taken to complete the first revolution is (1/α)[1 – e^(–2π)] s, where α is:",
            options: ["8", "4", "2", "16"],
            correct: 0,
            aamZindagi: "v = u e^(s/R). Then t = (R/u)(1 - e^(-2π)) = (0.5 / 4)(1 - e^(-2π)) = (1/8)(1 - e^(-2π)) ⇒ α = 8.",
            bhaiyaTrick: "Bahar R/u aata hai! R/u = 0.5 / 4 = 1/8 ⇒ α = 8!"
          },
          {
            id: "q-pyq2d-77",
            source: "JEE Main 11 Jan 2019 (Shift-I) [2D PYQ Q77]",
            topic: "Change in Velocity Vector",
            question: "A particle is moving along a circular path with a constant speed of 10 m/s. What is the magnitude of the change in velocity of the particle, when it moves through an angle of 60° around the centre of the circle?",
            options: ["10√3 m/s", "0", "10√2 m/s", "10 m/s"],
            correct: 3,
            aamZindagi: "|Δv| = 2v sin(θ/2) = 2 × 10 × sin(30°) = 10 m/s.",
            bhaiyaTrick: "60° par isosceles triangle equilateral ban jata hai! |Δv| = v = 10 m/s!"
          }
        ]
      }
    ]
  }
];

export const ALL_KINEMATICS_MODULES: KinematicsModule[] = [...MODULES_1D, ...MODULES_2D];

// Flatten all questions
export const ALL_KINEMATICS_QUESTIONS: KinematicsQuestion[] = [];
ALL_KINEMATICS_MODULES.forEach((mod) => {
  mod.cards.forEach((card) => {
    (card.questions || []).forEach((q) => {
      ALL_KINEMATICS_QUESTIONS.push({
        ...q,
        chapter: mod.chapter,
        moduleTitle: mod.title,
        cardId: card.id,
        cardTitle: card.title,
      });
    });
  });
});

export const FLASHCARDS_DATA = [
  { id: "fc-1", cat: "1D Basics", front: "Circular path pe angle θ ghoomne par Distance / Displacement ka ratio kya hota hai?", back: "(θ / 2) / sin(θ / 2)  [Yaad rakh: Chord = 2R sin(θ/2), 90° pe R√2, 120° pe R√3]" },
  { id: "fc-2", cat: "1D Basics", front: "Aadha rasta speed v₀ se, aur baaki aadha rasta barabar time mein v₁ aur v₂ se — Average Speed?", back: "Step 1: Equal time part ka mean v' = (v₁ + v₂)/2. Step 2: Dono halves ka Harmonic Mean = 2 v₀ v' / (v₀ + v')!" },
  { id: "fc-3", cat: "1D Calculus", front: "x(t) = at + bt² – ct³ mein jab acceleration a = 0 hota hai, tab velocity v kitni hoti hai?", back: "v = a + b² / (3c)  [At time t = b / (3c)] — Repeated 6+ times in JEE Main!" },
  { id: "fc-4", cat: "1D Calculus", front: "Agar t = mx² + nx diya ho, toh acceleration 'a' kitna hota hai?", back: "a = –2m v³  (Retardation = 2m v³, 'n' pe depend hi nahi karta!)" },
  { id: "fc-5", cat: "1D Calculus", front: "Agar x² = at² + bt + c (ya x² = 1 + t²) diya ho, toh acceleration x ki kis power ke proportional hota hai?", back: "a ∝ x⁻³  (hamesha n = 3 aayega!)" },
  { id: "fc-6", cat: "1D Calculus", front: "Particle kab 'Retard' (slow down) karta hai? Kya a < 0 ka matlab retardation hai?", back: "NAHI! Retardation tab hota hai jab v · a < 0 (Velocity aur Acceleration ke signs OPPOSITE hon)!" },
  { id: "fc-7", cat: "1D Gravity", front: "Tower se u speed se upar phenka → t₁ laga; u speed se niche phenka → t₂ laga. Drop karne pe kitna time lagega?", back: "t_drop = √(t₁ t₂)  aur Tower ki Height H = ½ g t₁ t₂!" },
  { id: "fc-8", cat: "1D Gravity", front: "Rest se start hoke α se accelerate aur β se retard hoke ruk gaya (Total time T, dist S). Max velocity aur S?", back: "Effective accel a_eff = αβ / (α + β).  v_max = a_eff T  aur  S = ½ a_eff T²!" },
  { id: "fc-9", cat: "Graphs", front: "v vs x (velocity-displacement) graph straight line hai (slope m). Toh acceleration 'a' vs x kaisa hoga?", back: "a = v · (dv/dx) = v · m → a vs x bhi STRAIGHT LINE hoga! (Constant mat kar dena!)" },
  { id: "fc-10", cat: "Graphs", front: "x–t graph mein 'Smiling Face (Cup Up)' aur 'Crying Face (Cup Down)' kya batate hain?", back: "Smiling (Cup Up 😊) ⇒ a > 0 (Positive Accel). Crying (Cup Down ☹️) ⇒ a < 0 (Negative Accel)." },
  { id: "fc-11", cat: "2D Projectile", front: "Same speed u aur same Range R (angles θ & 90°–θ) ke liye R, H₁, H₂ aur T₁, T₂ ke 3 Golden Formulas?", back: "1) R = 4√(H₁H₂) [R² = 16 H₁H₂]   2) R = ½ g T₁T₂   3) H₁ + H₂ = u² / (2g)" },
  { id: "fc-12", cat: "2D Projectile", front: "Trajectory equation y = ax – bx² se tanθ, Range R aur Max Height H_max kaise nikalte hain?", back: "tanθ = a,   Range R = a / b,   H_max = a² / (4b) = (R tanθ) / 4!" },
  { id: "fc-13", cat: "2D Projectile", front: "Projectile apni initial velocity u ke perpendicular (90°) kab hota hai aur tab uski speed kya hoti hai?", back: "Time t = u / (g sinθ)   aur   Speed v = u cotθ  (Valid only when θ > 45°)" },
  { id: "fc-14", cat: "2D Projectile", front: "Height H se horizontal velocity V₀ se phenka aur β incline pe 90° (perpendicular) takraya. V₀ kitna hoga?", back: "V₀ = √[ 2gH / (2 + cot²β) ]   (Agar β = 30° hai, toh V₀ = √(2gH / 5) !)" },
  { id: "fc-15", cat: "Relative 2D", front: "Swimmer (v_s) river (v_r) ko Zero Drift (seedha opposite point) pe cross karna chahta hai. Flow se angle?", back: "Vertical se sinθ = v_r / v_s upstream → River flow ke saath angle = 90° + θ (e.g. 6 & 12 km/h ⇒ 120°)!" },
  { id: "fc-16", cat: "Circular", front: "Circle (radius R) mein har instant par a_t = a_c hai aur initial speed u hai. 1 revolution ka time?", back: "t = (R / u) [1 – e^(–2π)]   (Quarter circle ke liye 1 – e^(–π/2) — bahar hamesha R/u aata hai!)" }
];

export const HACKSHEET_DATA = [
  {
    title: "1. Magic Triangles & Angles (Har 2D Sawaal Mein Kaam Aayega)",
    items: [
      "<b>37°–53°–90° Triangle (3-4-5):</b> $\\sin 37^\\circ = 3/5 = 0.6$, $\\cos 37^\\circ = 4/5 = 0.8$, $\\tan 37^\\circ = 3/4$ | $\\sin 53^\\circ = 4/5 = 0.8$, $\\cos 53^\\circ = 3/5 = 0.6$, $\\tan 53^\\circ = 4/3$.",
      "<b>15° & 75° Shortcuts:</b> $\\sin 15^\\circ = \\cos 75^\\circ = \\frac{\\sqrt{3}-1}{2\\sqrt{2}} \\approx 0.26$ | $\\sin(2\\times 15^\\circ) = \\sin 30^\\circ = 1/2 \\implies R_{15^\\circ} = R_{75^\\circ} = \\frac{R_{\\max}}{2}$!",
      "<b>Standard $R = nH$ Angles:</b> $R = H \\implies \\tan\\theta = 4 (\\theta \\approx 76^\\circ)$ | $R = 4H \\implies \\tan\\theta = 1 (\\theta = 45^\\circ)$ | $R = 4\\sqrt{3}H \\implies \\theta = 30^\\circ$."
    ]
  },
  {
    title: "2. Gravity ($g = 9.8\\text{ m/s}^2$) Speed-Math Multiples",
    items: [
      "<b>Multiple Table:</b> $\\frac{g}{2} = 4.9$ | $g = 9.8$ | $1.5g = 14.7$ | $2g = 19.6$ | $3g = 29.4$ | $4g = 39.2$ | $5g = 49.0$ | $10g = 98$.",
      "<b>Free-Fall Heights ($h = 4.9 t^2$):</b> $t=1\\text{s} \\to 4.9\\text{m}$ | $t=2\\text{s} \\to 19.6\\text{m}$ | $t=3\\text{s} \\to 44.1\\text{m}$ | $t=4\\text{s} \\to 78.4\\text{m}$. (Jaise hi $19.6\\text{ m}$ dikhe, bina solve kiye $t = 2\\text{ s}$ aur $v = 19.6\\text{ m/s}$ bol!).",
      "<b>Unit Conversion:</b> $\\text{km/h} \\to \\text{m/s}$ multiply by $\\frac{5}{18}$ ($18 \\to 5, 36 \\to 10, 54 \\to 15, 72 \\to 20, 90 \\to 25, 108 \\to 30, 126 \\to 35$)."
    ]
  },
  {
    title: "3. Graph Slope & Area Master Cheat-Table",
    items: [
      "<b>$x$–$t$ Graph:</b> Slope $= v$ | Concavity $= a$ (Cup Up $+a$, Cup Down $-a$) | Area = Meaningless.",
      "<b>$v$–$t$ Graph:</b> Slope $= a$ | Net Area $(A_1 - A_2) = \\text{Displacement}$ | Absolute Area $(|A_1| + |A_2|) = \\text{Distance}$.",
      "<b>$a$–$t$ Graph:</b> Area $= \\Delta v = v_f - v_i$.",
      "<b>$v$–$x$ Graph:</b> $a = v \\cdot (\\text{Slope})$ | <b>$v^2$–$x$ Graph:</b> $a = \\frac{1}{2} \\cdot (\\text{Slope})$ | <b>$a$–$x$ Graph:</b> Area $= \\int a\\,dx = \\frac{v_f^2 - v_i^2}{2}$."
    ]
  },
  {
    title: "4. Top 5 Silly Mistake Traps (Jahan -1 Hota Hai)",
    items: [
      "<b>Trap 1 (Vertical Angle):</b> 'Projected at $60^\\circ$ with the vertical' $\\implies$ Horizontal se angle $30^\\circ$ hai!",
      "<b>Trap 2 (Swapped Graph Axes):</b> $t$ on Y-axis and $x$ on X-axis $\\implies v = \\cot\\theta$, NOT $\\tan\\theta$!",
      "<b>Trap 3 (U-Turn in Distance):</b> Distance in $0$ to $t$ poochha ho toh pehle $v=0$ karke turning time $t_0$ check karo!",
      "<b>Trap 4 (Average Acceleration during Bounce):</b> Ball drops with $v_1$ Down ($-v_1\\hat{j}$) and rebounds with $v_2$ Up ($+v_2\\hat{j}$) $\\implies |\\Delta \\vec{v}| = v_1 + v_2$ (minus mat kar dena!).",
      "<b>Trap 5 (Balloon / Moving Frame Drop):</b> Rising balloon ($+u$) se packet drop kiya toh packet ki initial velocity ZERO nahi hai, $+u$ UPWARD hai ($-H = u t - \\frac{1}{2}gt^2$)!"
    ]
  }
];
