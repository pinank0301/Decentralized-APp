"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, GitFork, Users, Shield, Plus } from "lucide-react"
import Link from "next/link"

export default function RepositoriesPage() {
  const repositories = [
    {
      id: 1,
      name: "ethereum-bridge",
      description: "Cross-chain bridge protocol for Ethereum and Layer 2 solutions",
      owner: "bridge-dao",
      stars: 1247,
      forks: 234,
      contributors: 45,
      language: "Solidity",
      blockchain: "Ethereum",
      verified: true,
      lastUpdate: "2 hours ago",
      tags: ["DeFi", "Bridge", "Layer2"],
    },
    {
      id: 2,
      name: "nft-creator-tools",
      description: "Complete toolkit for creating and managing NFT collections",
      owner: "nft-collective",
      stars: 892,
      forks: 156,
      contributors: 28,
      language: "TypeScript",
      blockchain: "Polygon",
      verified: true,
      lastUpdate: "5 hours ago",
      tags: ["NFT", "Creator", "Tools"],
    },
    {
      id: 3,
      name: "dao-voting-system",
      description: "Decentralized voting mechanism with quadratic voting support",
      owner: "governance-labs",
      stars: 634,
      forks: 89,
      contributors: 19,
      language: "Rust",
      blockchain: "Solana",
      verified: false,
      lastUpdate: "1 day ago",
      tags: ["DAO", "Governance", "Voting"],
    },
    {
      id: 4,
      name: "defi-yield-optimizer",
      description: "Automated yield farming strategy optimizer",
      owner: "yield-hunters",
      stars: 445,
      forks: 67,
      contributors: 12,
      language: "Solidity",
      blockchain: "Arbitrum",
      verified: true,
      lastUpdate: "3 days ago",
      tags: ["DeFi", "Yield", "Automation"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Repositories</h1>
            <p className="text-slate-600 mt-1">Discover and contribute to decentralized projects</p>
          </div>
          <Link href="/repositories/new">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="w-4 h-4 mr-2" />
              New Repository
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input placeholder="Search repositories..." className="pl-10" />
                </div>
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Blockchain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Chains</SelectItem>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                    <SelectItem value="solana">Solana</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="solidity">Solidity</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                    <SelectItem value="rust">Rust</SelectItem>
                    <SelectItem value="go">Go</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {repositories.map((repo) => (
            <Card key={repo.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Link
                        href={`/repositories/${repo.id}`}
                        className="text-xl font-semibold text-slate-900 hover:text-emerald-600"
                      >
                        {repo.name}
                      </Link>
                      {repo.verified && <Shield className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={`/placeholder.svg?height=24&width=24`} />
                        <AvatarFallback className="text-xs">{repo.owner.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-slate-600">{repo.owner}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-2">
                    {repo.blockchain}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">{repo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {repo.contributors}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {repo.language}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Updated {repo.lastUpdate}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Star
                    </Button>
                    <Link href={`/repositories/${repo.id}`}>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Repositories
          </Button>
        </div>
      </div>
    </div>
  )
}
