# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Build production version with Turbopack
- `npm start`: Start production server
- `npm run lint`: Run ESLint

## Code Architecture

This is a Next.js 15 application using the App Router architecture with React 19. Key structural elements:

- **App Router**: Uses `src/app/` directory structure with `layout.tsx` and `page.tsx`
- **TypeScript**: Strict TypeScript configuration with path aliases (`@/*` maps to `./src/*`)
- **Turbopack**: Enabled for both development and build processes
- **ESLint**: Uses Next.js recommended ESLint config with TypeScript support

The application follows Next.js App Router conventions where each route is defined by folders containing `page.tsx` files, with `layout.tsx` providing shared UI structure.

## Project Purpose

This is an interactive examples collection site for testing and demonstrating various algorithms and UI patterns including:

- **LexoRank**: Lexicographical ranking algorithm for drag-and-drop ordering
- **Horizontal Scroll**: Custom horizontal scrolling implementations and patterns
- **Other Interactive Examples**: Visual testing ground for various algorithms and UI components

Each example should be self-contained with interactive demos, clear visual feedback, and educational value.

# claude.md — Code Generation Rules

## Goal

- **최소구현 + 가독성 + 기능 완성**을 우선한다.
- 불필요한 추상화·의존성·보일러플레이트 금지. “짧고 명확하게”.

## Workflow (중요: Plan → 승인 → 구현)

1. **수정/구현에 앞서 반드시 Plan 제시**
   - 형식: 10줄 내 요약(목표, 접근, 변경 파일/함수 시그니처, 리스크/대안 1줄씩).
   - 출력 예:
     - **Approach**: …
     - **Changes**: `components/X.tsx`, `hooks/useY.ts` …
     - **Open question(<=2)**: …
2. **사용자 승인 후에만 코드 작성/기존 코드 수정**
   - 승인 신호: “진행/Proceed/오케이”류 답변.
   - 승인 전에는 실제 코드/디프를 만들지 않는다.
3. **구현/수정 단계**
   - 최소 변경으로 동작 보장 → 필요 시에만 분리/리팩터.
   - 기존 코드 수정 시 **패치 형식(unified diff)** 또는 변경 전/후 블록으로 제시.
   - 후속 피드백이 있으면 **변경 범위 최소**로 추가 패치만 제시.

## Output Format

1. (승인 전) **Plan만**.
2. (승인 후) **코드 먼저**, 설명은 **최대 5줄**.
3. 여러 파일은 **파일 경로 목록 → 개별 코드블록**.
4. 외부 라이브러리 추가 필요 시, 코드 위에 `추가: pkg@ver` **1줄**만.
5. 요구가 모호하면 **한 번만** 핵심 가정(`// ASSUMPTION:` 1~2줄) 표기 후 합리적 기본값 사용.

## Language/Framework Baseline

- **TypeScript** `strict`. `any` 금지(불가피 시 좁혀 쓰고 사유 1줄).
- **React (FC + Hooks)**: 함수형만.
- **Styling**: `@emotion/styled` 사용. **SSR 설정 필수** (`EmotionProvider`). CSS-in-JS로 컴포넌트 기반 스타일링. 인라인 스타일은 1회성만. **비표준 props는 `$` prefix 필수** (예: `$isActive`). **외부 컴포넌트 래핑시 `shouldForwardProp` 사용**.
- **Next.js**: 불필요한 SSR 지양, 표준 에러/404 경로 우선.
- **a11y**: 클릭 가능한 요소는 `button`/`a`; 키보드 포커스·aria 준수.

## Code Style Rules (MUST/SHOULD)

- **MUST**: **작동하는 가장 단순한 해법**. 사용되지 않는 prop/함수/유틸 금지.
- **MUST**: 명확한 네이밍(역할이 드러나게). 추상적 이름 금지.
- **MUST**: 단일 책임. 파일 200줄·함수 40줄 넘으면 분리 고려.
- **MUST**: 상태 최소화(파생값은 계산으로). 전역 상태 남발 금지.
- **MUST**: 에러 처리는 **지역적**으로 감싼다.
- **MUST**: 타입을 정의 할 때는 type 을 사용할 것.
- **MUST**: 파일 구조 순서: **Props 타입 → 함수 정의 → export default → 스타일**
- **MUST**: 함수는 `const ComponentName = () => {}` 형식 사용, `export default function` 금지
- **SHOULD**: `useCallback/useMemo`는 전달 최적화 필요 시에만.
- **SHOULD**: 주석은 "왜(Why)" 중심 1~2줄. 장문 해설 금지.

## Project Conventions (맞춤)

- **코드 분리 원칙**
  - **Types**: Props 제외한 모든 타입은 별도 파일로 분리 (`types/`, `@/types/`)
  - **Hooks**: 상태 관리와 로직은 커스텀 훅으로 분리, 컴포넌트는 렌더링에만 집중
  - **Utils**: 계산식, 복잡한 로직은 가독성 있는 유틸 함수로 분리 (`utils/`, `@/utils/`)
  - **Components**: 단일 관심사 원칙 준수, 재사용성과 가독성 우선
- **메모리 최적화**
  - 기본적으로 메모리 최적화를 고려하되, **가독성과 성능 사이에서 신중히 판단**
  - `mouseup` 같은 단발성 이벤트는 `useCallback` 필요성을 케이스별로 검토
  - 렌더링 최적화가 확실히 필요한 경우에만 `useCallback/useMemo` 적용
- **이벤트/스크롤 패턴**
  - 드래그 스크롤: 임계값 초과 시에만 드래그 전환, **드래그 발생 시에만 클릭 억제**
  - 포인터 캡처 사용(`setPointerCapture`), `pointercancel/leave` 정리 필수
- **데이터**
  - **런타임 스키마 라이브러리 미사용.** TS 타입/타입 가드 정도의 **경량 검증**만 수행
  - API 실패 시 사용자 피드백은 간결하게(토스트 1줄 등)
- **스타일**
  - 토큰/스케일 우선, 매직 넘버 지양

## Forbidden

- 미래 확장만을 위한 과한 추상화/레이어링.
- 불필요한 글로벌 상태/컨텍스트.
- 장황한 설명/템플릿성 주석.
- 단일 호출 래퍼 유틸(읽기성 저해).
- 테스트/실행 확인 없이 복잡 로직 변경.

## Minimal Example Policy

- 예시는 **사용 예 1개**, 5~10줄 내. 데모/스토리북은 요청 시에만.

## Review Checklist (Self-check)

- [ ] 지금 **필요한 기능만** 담았는가? 더 단순한 구조가 가능한가?
- [ ] 네이밍만 보고 역할이 이해되는가?
- [ ] 불필요한 상태/의존성이 없는가?
- [ ] 실패 시 사용자에게 **짧은 피드백**이 표시되는가?
- [ ] (수정 작업) 변경 범위가 **최소**인가? 디프로 검토 가능한가?

## Example — “과하지 않게”의 기준

**DON’T**: 먼저 추상화/훅/전역 상태를 만든다.  
**DO**: 한 파일에서 작동하는 가장 단순한 버전 → 실제 재사용 필요 시 **작게** 분리.

## When In Doubt

- 질문은 **한 번만**(핵심 불확실성 ≤2개). 답이 없으면 합리적 기본값 + `// TODO:` 표기.
