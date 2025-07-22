"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, GitFork, Users, Shield, GitCommit, Clock, UserPlus, Settings, Eye, ExternalLink } from "lucide-react"

export default function RepositoryPage() {
  const repository = {
    name: "defi-protocol",
    description: "Decentralized finance protocol with automated market making capabilities",
    owner: "defi-labs",
    stars: 1247,
    forks: 234,
    contributors: 45,
    language: "Solidity",
    blockchain: "Ethereum",
    verified: true,
    license: "MIT",
    created: "2023-06-15",
    lastUpdate: "2 hours ago",
  }

  const commits = [
    {
      hash: "a1b2c3d",
      message: "Add liquidity pool optimization",
      author: "alice.eth",
      timestamp: "2 hours ago",
      verified: true,
      signature: "0x1a2b3c4d...",
    },
    {
      hash: "e4f5g6h",
      message: "Fix gas optimization in swap function",
      author: "bob.eth",
      timestamp: "6 hours ago",
      verified: true,
      signature: "0x5e6f7g8h...",
    },
    {
      hash: "i7j8k9l",
      message: "Update documentation for new features",
      author: "charlie.eth",
      timestamp: "1 day ago",
      verified: true,
      signature: "0x9i0j1k2l...",
    },
  ]

  const contributors = [
    {
      address: "alice.eth",
      role: "Maintainer",
      commits: 142,
      joined: "2023-06-15",
      verified: true,
    },
    {
      address: "bob.eth",
      role: "Contributor",
      commits: 89,
      joined: "2023-07-20",
      verified: true,
    },
    {
      address: "charlie.eth",
      role: "Reviewer",
      commits: 34,
      joined: "2023-08-10",
      verified: true,
    },
  ]

  const blockchainActivity = [
    {
      type: "Role Assignment",
      transaction: "0x1a2b3c4d5e6f...",
      block: "18,234,567",
      timestamp: "2 hours ago",
      gas: "21,000",
    },
    {
      type: "Commit Verification",
      transaction: "0x7g8h9i0j1k2l...",
      block: "18,234,445",
      timestamp: "6 hours ago",
      gas: "45,000",
    },
    {
      type: "Repository Update",
      transaction: "0x3m4n5o6p7q8r...",
      block: "18,234,123",
      timestamp: "1 day ago",
      gas: "32,000",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Repository Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-slate-900">{repository.name}</h1>
                {repository.verified && <Shield className="w-6 h-6 text-emerald-600" />}
                <Badge variant="outline">{repository.blockchain}</Badge>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={`/placeholder.svg?height=24&width=24`} />
                  <AvatarFallback className="text-xs">{repository.owner.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="text-slate-600">{repository.owner}</span>
              </div>
              <p className="text-slate-600 mb-4">{repository.description}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                Watch
              </Button>
              <Button variant="outline">
                <Star className="w-4 h-4 mr-2" />
                Star
              </Button>
              <Button variant="outline">
                <GitFork className="w-4 h-4 mr-2" />
                Fork
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Invite Contributor
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Invite Contributor</DialogTitle>
                    <DialogDescription>
                      Add a new contributor to this repository and assign their role.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Wallet Address or ENS</Label>
                      <Input id="address" placeholder="0x... or username.eth" />
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="contributor">Contributor</SelectItem>
                          <SelectItem value="reviewer">Reviewer</SelectItem>
                          <SelectItem value="maintainer">Maintainer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Send Invitation</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Repository Stats */}
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {repository.stars} stars
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {repository.forks} forks
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {repository.contributors} contributors
            </span>
            <span>Language: {repository.language}</span>
            <span>License: {repository.license}</span>
            <span>Updated {repository.lastUpdate}</span>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="code" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="commits">Commits</TabsTrigger>
            <TabsTrigger value="contributors">Contributors</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="code">
            <Card>
              <CardHeader>
                <CardTitle>Repository Files</CardTitle>
                <CardDescription>Browse the codebase and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded hover:bg-slate-50">
                    <span className="font-mono text-sm">📁 contracts/</span>
                    <span className="text-xs text-slate-500">Smart contracts</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded hover:bg-slate-50">
                    <span className="font-mono text-sm">📁 test/</span>
                    <span className="text-xs text-slate-500">Test files</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded hover:bg-slate-50">
                    <span className="font-mono text-sm">📄 README.md</span>
                    <span className="text-xs text-slate-500">Documentation</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded hover:bg-slate-50">
                    <span className="font-mono text-sm">📄 package.json</span>
                    <span className="text-xs text-slate-500">Dependencies</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="commits">
            <Card>
              <CardHeader>
                <CardTitle>Commit History</CardTitle>
                <CardDescription>Cryptographically signed commits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commits.map((commit) => (
                    <div key={commit.hash} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <GitCommit className="w-4 h-4 text-slate-500" />
                            <span className="font-mono text-sm text-slate-600">{commit.hash}</span>
                            {commit.verified && <Shield className="w-4 h-4 text-emerald-600" />}
                          </div>
                          <p className="font-medium text-slate-900 mb-1">{commit.message}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span>{commit.author}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {commit.timestamp}
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                      <div className="text-xs text-slate-500 font-mono bg-slate-50 p-2 rounded">
                        Signature: {commit.signature}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contributors">
            <Card>
              <CardHeader>
                <CardTitle>Contributors & Roles</CardTitle>
                <CardDescription>Manage repository access and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Contributor</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Commits</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contributors.map((contributor) => (
                      <TableRow key={contributor.address}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                              <AvatarFallback className="text-xs">
                                {contributor.address.slice(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-mono text-sm">{contributor.address}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              contributor.role === "Maintainer"
                                ? "default"
                                : contributor.role === "Contributor"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {contributor.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{contributor.commits}</TableCell>
                        <TableCell>{contributor.joined}</TableCell>
                        <TableCell>{contributor.verified && <Shield className="w-4 h-4 text-emerald-600" />}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Activity</CardTitle>
                <CardDescription>On-chain transactions and verifications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Activity Type</TableHead>
                      <TableHead>Transaction Hash</TableHead>
                      <TableHead>Block</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Gas Used</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blockchainActivity.map((activity, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Badge variant="outline">{activity.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className="font-mono text-sm">{activity.transaction}</span>
                        </TableCell>
                        <TableCell>{activity.block}</TableCell>
                        <TableCell>{activity.timestamp}</TableCell>
                        <TableCell>{activity.gas}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Repository Settings</CardTitle>
                  <CardDescription>Configure repository preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Repository Name</Label>
                    <Input defaultValue={repository.name} />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Input defaultValue={repository.description} />
                  </div>
                  <div>
                    <Label>Blockchain Network</Label>
                    <Select defaultValue={repository.blockchain.toLowerCase()}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                        <SelectItem value="arbitrum">Arbitrum</SelectItem>
                        <SelectItem value="solana">Solana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage cryptographic verification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Require Signed Commits</p>
                      <p className="text-sm text-slate-600">All commits must be cryptographically signed</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Blockchain Verification</p>
                      <p className="text-sm text-slate-600">Verify all activities on blockchain</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Role-based Access</p>
                      <p className="text-sm text-slate-600">Enforce role-based permissions</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
