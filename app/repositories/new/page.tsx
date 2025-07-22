"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, GitBranch, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function NewRepositoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/repositories">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Create New Repository</h1>
            <p className="text-slate-600 mt-1">Set up a new decentralized code repository</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5" />
                    Repository Details
                  </CardTitle>
                  <CardDescription>Basic information about your repository</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="owner">Owner</Label>
                      <Select defaultValue="personal">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal Account</SelectItem>
                          <SelectItem value="defi-labs">defi-labs</SelectItem>
                          <SelectItem value="nft-collective">nft-collective</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="name">Repository Name *</Label>
                      <Input id="name" placeholder="my-awesome-dapp" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="A brief description of your project..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="license">License</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a license" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mit">MIT License</SelectItem>
                          <SelectItem value="apache">Apache 2.0</SelectItem>
                          <SelectItem value="gpl">GPL v3</SelectItem>
                          <SelectItem value="bsd">BSD 3-Clause</SelectItem>
                          <SelectItem value="unlicense">Unlicense</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="visibility">Visibility</Label>
                      <RadioGroup defaultValue="public" className="flex gap-6 mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="public" id="public" />
                          <Label htmlFor="public">Public</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="private" id="private" />
                          <Label htmlFor="private">Private</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Blockchain Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Blockchain Configuration
                  </CardTitle>
                  <CardDescription>Configure blockchain integration and verification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="blockchain">Primary Blockchain</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select blockchain network" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ethereum">Ethereum Mainnet</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                        <SelectItem value="arbitrum">Arbitrum One</SelectItem>
                        <SelectItem value="optimism">Optimism</SelectItem>
                        <SelectItem value="solana">Solana</SelectItem>
                        <SelectItem value="avalanche">Avalanche</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label>Security Features</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="signed-commits" defaultChecked />
                        <Label htmlFor="signed-commits" className="text-sm">
                          Require cryptographically signed commits
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="blockchain-verification" defaultChecked />
                        <Label htmlFor="blockchain-verification" className="text-sm">
                          Enable blockchain activity verification
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="role-enforcement" defaultChecked />
                        <Label htmlFor="role-enforcement" className="text-sm">
                          Enforce role-based access control
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="immutable-history" defaultChecked />
                        <Label htmlFor="immutable-history" className="text-sm">
                          Immutable commit history on blockchain
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Initial Setup */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Initial Setup
                  </CardTitle>
                  <CardDescription>Configure initial repository structure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Label>Initialize with:</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="readme" defaultChecked />
                        <Label htmlFor="readme" className="text-sm">
                          Add a README file
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gitignore" />
                        <Label htmlFor="gitignore" className="text-sm">
                          Add .gitignore template
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contributing" />
                        <Label htmlFor="contributing" className="text-sm">
                          Add CONTRIBUTING.md
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="code-of-conduct" />
                        <Label htmlFor="code-of-conduct" className="text-sm">
                          Add Code of Conduct
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="template">Project Template</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a template (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No template</SelectItem>
                        <SelectItem value="solidity-dapp">Solidity DApp</SelectItem>
                        <SelectItem value="nft-collection">NFT Collection</SelectItem>
                        <SelectItem value="defi-protocol">DeFi Protocol</SelectItem>
                        <SelectItem value="dao-governance">DAO Governance</SelectItem>
                        <SelectItem value="web3-frontend">Web3 Frontend</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" size="lg">
                  Create Repository
                </Button>
                <Link href="/repositories">
                  <Button variant="outline" size="lg">
                    Cancel
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Repository Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                      <span className="text-sm text-slate-600">owner/</span>
                      <span className="font-semibold">repository-name</span>
                    </div>
                    <p className="text-sm text-slate-600">Repository description will appear here...</p>
                    <div className="flex gap-2">
                      <Badge variant="outline">Public</Badge>
                      <Badge variant="outline">Ethereum</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Included Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Cryptographic commit signing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Blockchain verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Role-based access control</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Immutable activity tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Decentralized collaboration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle>Blockchain Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Repository creation:</span>
                      <span className="font-semibold">~$2.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Per commit verification:</span>
                      <span className="font-semibold">~$0.15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Role assignment:</span>
                      <span className="font-semibold">~$1.20</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Estimated setup cost:</span>
                        <span>~$2.50</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
