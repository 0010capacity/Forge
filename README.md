# Forge - Game Data Editor

[![Feature Requests](https://img.shields.io/github/issues/microsoft/vscode/feature-request.svg)](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/microsoft/vscode/bug.svg)](https://github.com/microsoft/vscode/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-yellow.svg)](https://gitter.im/Microsoft/vscode)

## 소개

**Forge**는 "발더스 게이트 3"와 같은 DnD 스타일의 고자유도 CRPG를 위한 게임 데이터 에디터입니다. 이 프로젝트는 [Visual Studio Code](https://code.visualstudio.com)의 오픈 소스 리포지토리 (`Code - OSS`)를 기반으로 구축되었습니다.

Forge는 원시 JSON 데이터를 직접 수정하는 불편함을 해소하고, 캐릭터, 아이템, 퀘스트, 대화 등 다양한 게임 데이터를 위한 직관적인 GUI를 제공하는 것을 목표로 합니다.

## 핵심 기능

- **직관적인 GUI**: 모든 게임 데이터를 위한 그래픽 사용자 인터페이스를 제공합니다.
- **데이터 유형별 에디터**: 캐릭터, 아이템, 퀘스트, 대화 등 각 데이터 유형에 맞는 맞춤형 에디터를 지원합니다.
- **그래프 기반 노드 에디터**: 퀘스트와 대화처럼 복잡한 관계를 가지는 데이터는 노드 기반 에디터로 시각적이고 편리하게 편집할 수 있습니다.
- **스마트 파일 인식**: `{filename}.{type}.json` 형식의 파일명을 사용하여 데이터 유형을 자동으로 인식하고 해당 에디터를 엽니다.

## 원본 Repository (Code - OSS)

이 리포지토리는 Microsoft가 커뮤니티와 함께 [Visual Studio Code](https://code.visualstudio.com) 제품을 개발하는 곳입니다. 코드와 이슈뿐만 아니라 [로드맵](https://github.com/microsoft/vscode/wiki/Roadmap), [월간 반복 계획](https://github.com/microsoft/vscode/wiki/Iteration-Plans), [엔드게임 계획](https://github.com/microsoft/vscode/wiki/Running-the-Endgame)도 게시합니다. 이 소스 코드는 표준 [MIT 라이선스](https://github.com/microsoft/vscode/blob/main/LICENSE.txt)에 따라 모든 사람이 사용할 수 있습니다.

## 기여

이 프로젝트에 참여할 수 있는 방법은 여러 가지가 있습니다.

* [버그 및 기능 요청 제출](https://github.com/microsoft/vscode/issues)
* [소스 코드 변경 사항 검토](https://github.com/microsoft/vscode/pulls)
* [문서 검토](https://github.com/microsoft/vscode-docs) 및 오타 수정부터 새로운 내용 추가까지 Pull Request 생성

코드 베이스에 직접 문제를 해결하고 기여하는 데 관심이 있다면 다음 내용이 포함된 [기여 방법](https://github.com/microsoft/vscode/wiki/How-to-Contribute) 문서를 참조하세요.

* [소스에서 빌드하고 실행하는 방법](https://github.com/microsoft/vscode/wiki/How-to-Contribute)
* [디버깅 및 테스트 실행을 포함한 개발 워크플로](https://github.com/microsoft/vscode/wiki/How-to-Contribute#debugging)
* [코딩 지침](https://github.com/microsoft/vscode/wiki/Coding-Guidelines)
* [Pull Request 제출](https://github.com/microsoft/vscode/wiki/How-to-Contribute#pull-requests)
* [작업할 이슈 찾기](https://github.com/microsoft/vscode/wiki/How-to-Contribute#where-to-contribute)
* [번역에 기여](https://aka.ms/vscodeloc)

## 행동 강령

이 프로젝트는 [Microsoft 오픈 소스 행동 강령](https://opensource.microsoft.com/codeofconduct/)을 채택했습니다. 자세한 내용은 [행동 강령 FAQ](https://opensource.microsoft.com/codeofconduct/faq/)를 참조하거나 추가 질문이나 의견이 있는 경우 [opencode@microsoft.com](mailto:opencode@microsoft.com)으로 문의하세요.

## 라이선스

Copyright (c) Microsoft Corporation. All rights reserved.

[MIT](LICENSE.txt) 라이선스에 따라 라이선스가 부여됩니다.