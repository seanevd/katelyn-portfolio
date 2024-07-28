---
title: 'NASA'
description: 'Leading the effort to design and build a comprehensive design system to support the CPIDS design and development team in building CPIDS software applications and internal tools'
order: 7
summary: 'Research, design, and design systems for Cross Program Data Integration - a suite of web applications that support mission operations for the Moon to Mars program'
heroImage: '/project-images/nasa/nasaHome.png'
tags: ['Design Systems', 'Design Leadership', 'UX Design', 'User Research']
companyImages: ['nasa.png', 'artemis.png']
---

### PROJECT SUMMARY

Over the course of 3 years, I worked as the design lead of a small team of three designers and two engineers to design, document, build, and implement a design system to support the Cross Program Integrated Data Systems suite of legacy software applications and internal tools. The primary goal was to **reduce dependencies on third party libraries, modernize the user interface, improve consistency, and streamline the design process using a customized version of MUI Core and MUI for Figma.** This project demonstrated the effectiveness of modernizing legacy systems with a well-crafted design system, **leveraging MUI Core and MUI for Figma to deliver a cohesive and efficient user experience.**

#### Problem Space

Creating and implementing a design system in legacy applications involves overcoming significant hurdles such as ensuring UI consistency, addressing technical debt, managing complex integration, supporting user adoption, and maintaining scalability. Successfully navigating these challenges requires a strategic approach, close collaboration between teams, and a commitment to clear communication and thorough documentation.

Because we were working with legacy systems with sometimes outdated codebases, it was difficult to modify existing systems and integrate with our new design systems. Success required **meticulous planning, coordination between design and development teams, training, and adaptation when things weren’t going according to plan.**

#### Challenges

A significant challenge that we discovered when beginning the project and again during implementation was that **some CPIDS applications were using several UI component libraries each with conflicting styling rules, resulting in a smattering of custom overrides and dependencies that required ongoing maintenance.** This became a pretty significant hurdle throughout the project as we worked to create a single design system that could support all of our requirements and then again during implementation when we were trying establish consistent design patterns across the applications.

### Result

The result is CPIDS Design System, a comprehensive design system that leverages MUI Core and MUI for Figma to deliver a customized component library for CPIDS designers and developers to utilize when building software for CPIDS software applications. **CPIDS Design System consists of a code repository, Storybook, Figma UI Kit, Confluence documentation hub for design guidance, and CPIDS academy which contains training modules for designers and developers using CPIDS DS in their work.**

#### Component Library

![CPIDS DS preview](/project-images/nasa/nasa1.png)

**A robust MUI component library customized with CPIDS theme** for use in CPIDS software applications, available in both Figma and code formats.

#### Design System Documentation and Training

![CPIDS DS documentation and training preview](/project-images/nasa/nasa2.png)

Provided **detailed guidelines, including component usage, design patterns, and best practices.** We also created **a library of training modules and conducted live training** sessions with functional areas to ensure successful adoptions into teams’ established workflows and processes.

#### Implementation Plan

Application specific **strategic plans for phased implementation, minimizing disruptions to existing workflows.** With each implementation effort, we conducted **a component audit, documenting current UI library usage and replacement needs (customization, 1:1, effort level, etc).** This helped us prioritize which components to replace and when, tailor documentation for each application, and more accurately determine resource allocation.

#### Cross-functional Communication and Collaboration

Designers and developers now have access to designed and coded components, design patterns and guidelines, and a shared language to help streamline the design and development process, reducing time and effort for future updates and features.

#### Enhanced User Experience

Significantly improved the visual consistency, usability, and accessibility of the legacy software suite. **By unifying all frontend component styling to a single component library and ensuring accessibility at the component library level, the CPIDS team is able to confidently deliver a more consistent and accessible user experience.**

### Process

We began **by talking to professionals in the women’s health space.** This, coupled with a survey and extensive secondary research into the current state, enriched our knowledge of the problem space. **We also worked to involve women in the community** through a co-design workshop, speed dating, desirability studies, and user testing.

#### Background Research

In order to get started, we need to identify long term resource availability and measure that against the needs across applications, including components to support the UI and a survey to assess existing knowledge and experience with design systems. **Resourcing and maintenance requirements long term would influence whether we built a custom library from the ground up or used an existing library and customized it to meet our needs.**

We conducted a **thorough audit of the existing software suite to identify inconsistencies and areas for improvement as well as which components would be need to support the UI.** We also conducted a competitive analysis of existing Component Libraries in order to find one that was comprehensive, supported, and easily customized.

#### Key Findings

**Finding 1. While complex, CPIDS applications did not require an extensive amount of custom components beyond what existing libraries could support**\
Based on our research, we determined that existing libraries, such as MUI Core would be able to sufficiently support the needs of CPIDS applications with theming customizations and a few custom components which we could build and maintain internally.

**Finding 2. Long term resourcing warranted a not fully custom approach**\
Due to resourcing constraints, we determined that our likelihood for success greatly increased by utilizing existing infrastructure provided by a component library like MUI, rather than attempting to build each component custom.

**Finding 3. Functional areas would benefit from knowledge sharing and skill building**\
The CPIDS team understood the advantages that using a design system could provide, but there wasn’t an extensive amount of design system experience on the team. From the beginning, we determined that we would need to provide some form of training and ongoing support in order to successfully integrate a design system into established workflows.

**Finding 4. Current implementation relied on several third party libraries, some of which were no longer supported**\
CPIDS applications had adopted multiple component libraries over the years, resulting in conflicting style definitions, custom overrides, and broken components that were no longer supported. The maintenance cost of relying on these libraries became an unacceptable burden for CPIDS developers long term.

#### Final Design Decisions

Our ideation and rapid prototyping and testing exercises allowed us to identify key features and user values that would be later incorporated into our final design decisions. We identified 3 priorities that women held in making decisions for their on feminine care.

**Priority 1. Modernize legacy UI and reduce dependence on third party libraries**\
Update the visual and interactive elements of the existing software suite to align with contemporary design standards and consolidate all UI components into a single library.

**Priority 2. Enhance consistency and improve accessibility**\
Establish a unified design language to ensure a cohesive user experience across all applications. Establish and implement accessibility standards in all aspects of the design system.

**Priority 3. Streamline workflow and provide ongoing support**\
Implement a design system that integrates seamlessly with development and design tools. Provide robust documentation and training so designers and developers can utilize design system resources to improve efficiency and communication across the product development workflow. 