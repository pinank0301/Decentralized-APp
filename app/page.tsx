"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitBranch, Users, Shield, Activity, Plus, Star, GitFork } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const repositories = [
    {
      id: 1,
      name: "defi-protocol",
      description: "Decentralized finance protocol with automated market making",
      role: "Maintainer",
      commits: 142,
      contributors: 8,
      stars: 234,
      forks: 45,
      lastActivity: "2 hours ago",
      blockchain: "Ethereum",
      verified: true,
    },
    {
      id: 2,
      name: "nft-marketplace",
      description: "Peer-to-peer NFT trading platform",
      role: "Contributor",
      commits: 67,
      contributors: 12,
      stars: 189,
      forks: 23,
      lastActivity: "1 day ago",
      blockchain: "Polygon",
      verified: true,
    },
    {
      id: 3,
      name: "dao-governance",
      description: "Decentralized autonomous organization governance system",
      role: "Reviewer",
      commits: 89,
      contributors: 15,
      stars: 156,
      forks: 34,
      lastActivity: "3 days ago",
      blockchain: "Arbitrum",
      verified: false,
    },
  ]

  const recentActivity = [
    {
      type: "commit",
      user: "alice.eth",
      action: "pushed 3 commits to defi-protocol",
      time: "2 hours ago",
      verified: true,
    },
    {
      type: "role",
      user: "bob.eth",
      action: "was assigned Contributor role in nft-marketplace",
      time: "4 hours ago",
      verified: true,
    },
    {
      type: "review",
      user: "charlie.eth",
      action: "approved pull request #42 in dao-governance",
      time: "6 hours ago",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Manage your decentralized repositories</p>
          </div>
          <div className="flex gap-3">
            <Link href="/repositories/new">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                New Repository
              </Button>
            </Link>
            <Link href="/repositories">
              <Button variant="outline">Browse Repositories</Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Repositories</CardTitle>
              <GitBranch className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Contributors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified Commits</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">100% verification rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blockchain Activity</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">Transactions this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Repositories */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>My Repositories</CardTitle>
                <CardDescription>Repositories you own or contribute to</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {repositories.map((repo) => (
                  <div key={repo.id} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Link
                            href={`/repositories/${repo.id}`}
                            className="font-semibold text-slate-900 hover:text-emerald-600"
                          >
                            {repo.name}
                          </Link>
                          {repo.verified && <Shield className="w-4 h-4 text-emerald-600" />}
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{repo.description}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {repo.stars}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3 h-3" />
                            {repo.forks}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {repo.contributors}
                          </span>
                          <span>{repo.commits} commits</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant={
                            repo.role === "Maintainer"
                              ? "default"
                              : repo.role === "Contributor"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {repo.role}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {repo.blockchain}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Last activity: {repo.lastActivity}</span>
                      <Link href={`/repositories/${repo.id}`}>
                        <Button variant="ghost" size="sm">
                          View Repository
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest blockchain-verified actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                      <AvatarFallback>{activity.user.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-slate-900">{activity.user}</p>
                        {activity.verified && <Shield className="w-3 h-3 text-emerald-600" />}
                      </div>
                      <p className="text-sm text-slate-600">{activity.action}</p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
