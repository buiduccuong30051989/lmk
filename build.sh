#!/bin/bash

echo "🏗️  Building Health Handbook Project..."
echo "=================================="

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "npm install -g pnpm"
    exit 1
fi

echo "✅ pnpm found"

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Run linting
echo "🔍 Running code quality checks..."
pnpm lint

if [ $? -ne 0 ]; then
    echo "⚠️  Linting found issues, but continuing..."
fi

# Run type checking
echo "🔍 Running TypeScript type checking..."
npx tsc --noEmit

if [ $? -ne 0 ]; then
    echo "❌ TypeScript errors found"
    exit 1
fi

echo "✅ TypeScript type checking passed"

# Build the project
echo "🏗️  Building for production..."
pnpm build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check build output
if [ -d "dist" ]; then
    echo "📊 Build statistics:"
    echo "   - Build directory: dist/"
    echo "   - Files created: $(find dist -type f | wc -l)"
    echo "   - Total size: $(du -sh dist | cut -f1)"
else
    echo "❌ Build directory not found"
    exit 1
fi

echo ""
echo "🎉 Build completed successfully!"
echo "📁 Output directory: dist/"
echo "🚀 To preview: pnpm preview"
echo "🌐 To deploy: Upload the dist/ folder to your web server"
