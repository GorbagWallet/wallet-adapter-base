# Gorbag Wallet Adapter Base

[![npm](https://img.shields.io/npm/v/@gorbag/wallet-adapter-base)](https://www.npmjs.com/package/@gorbag/wallet-adapter-base)
[![license](https://img.shields.io/npm/l/@gorbag/wallet-adapter-base)](https://github.com/DavidNzube101/gorbag-wallet/blob/main/packages/base/LICENSE)

Base classes and utilities for creating Gorbag-compatible wallet adapters that follow the Solana wallet standard.

## Installation

```bash
npm install @gorbag/wallet-adapter-base
```

## Overview

This package contains the foundational classes and utilities needed to create wallet adapters compatible with the Solana wallet standard. It provides base classes that wallet adapters can extend, error classes, and utility functions used across the Gorbag wallet ecosystem.

## Features

- Base wallet adapter classes
- Standard error classes for wallet operations
- Transaction utilities (legacy and versioned transactions)
- Detection strategies
- iOS redirection helpers

## Usage

This package is intended to be used as a dependency for wallet adapter implementations, including the main `@gorbag/wallet-adapter` package.

## License

Apache 2.0 - See [LICENSE](./LICENSE) for details.

## Author

David Nzube (Skipp)