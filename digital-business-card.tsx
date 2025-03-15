"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  Linkedin,
  Calculator,
  FileText,
  BarChart3,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  PieChart,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function DigitalBusinessCard() {
  const { toast } = useToast()
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)

    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
      duration: 2000,
    })

    setTimeout(() => {
      setCopiedField(null)
    }, 2000)
  }

  // Pulse animation for contact items
  useEffect(() => {
    const interval = setInterval(() => {
      const contactItems = document.querySelectorAll(".contact-item")
      const randomIndex = Math.floor(Math.random() * contactItems.length)
      const item = contactItems[randomIndex] as HTMLElement

      if (item) {
        item.classList.add("pulse-animation")
        setTimeout(() => {
          item.classList.remove("pulse-animation")
        }, 1000)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-white z-0">
        {/* Abstract accounting-themed pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-900" />
            <rect width="100%" height="100%" fill="url(#smallGrid)" className="text-slate-700" />
          </svg>
        </div>

        {/* Floating accounting symbols */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-slate-200 opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: `${Math.random() * 2 + 1}rem`,
                animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              }}
            >
              {i % 5 === 0 ? "$" : i % 5 === 1 ? "¥" : i % 5 === 2 ? "€" : i % 5 === 3 ? "£" : "%"}
            </div>
          ))}
        </div>

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-100/30 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-gradient-to-br from-purple-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4 min-h-screen">
        <div className="w-full max-w-md mx-auto">
          {/* Digital Business Card */}
          <div className="relative perspective-1000 mb-8">
            <div
              className={`relative transition-all duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
            >
              {/* Front of Card */}
              <Card
                className={`shadow-xl bg-white/90 backdrop-blur-sm border-0 rounded-xl overflow-hidden transition-all duration-500 backface-hidden ${isFlipped ? "opacity-0 invisible" : "opacity-100 visible"}`}
              >
                <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white overflow-hidden p-6">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="flex items-center justify-center border border-slate-600/20">
                          {i % 17 === 0 && <Calculator className="w-3 h-3" />}
                          {i % 23 === 0 && <FileText className="w-3 h-3" />}
                          {i % 19 === 0 && <BarChart3 className="w-3 h-3" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg border-2 border-white">
                      <Calculator className="w-8 h-8 text-slate-700" />
                    </div>

                    <div>
                      <h1 className="text-2xl font-bold text-white">Osama Siddiqui</h1>
                      <h2 className="text-sm font-medium text-white/90">External Auditor (ACCA)</h2>
                      <p className="text-xs text-white/80 mt-1">Balancing the Books, Building the Trust</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Phone Contact - Enhanced */}
                    <div className="contact-item relative overflow-hidden rounded-lg border border-transparent hover:border-green-200 transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative flex items-center p-3">
                        <div className="flex-shrink-0">
                          <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors duration-300 relative overflow-hidden">
                            <Phone className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                            <span className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 rounded-full animate-ping-slow"></span>
                          </div>
                        </div>

                        <div className="ml-3 flex-1">
                          <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                            Direct Line
                          </p>
                          <p className="font-medium group-hover:text-green-800 transition-colors duration-300">
                            0345-6198029
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-200"
                            onClick={() => copyToClipboard("0345-6198029", "Phone")}
                          >
                            {copiedField === "Phone" ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-green-600" />
                            )}
                          </Button>

                          <a
                            href="https://wa.me/03456198029"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative"
                          >
                            <ExternalLink className="h-4 w-4 text-green-600 group-hover:translate-x-1 transition-all duration-300" />
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-[10px] whitespace-nowrap bg-green-100 text-green-800 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Open WhatsApp
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="h-0.5 w-0 bg-gradient-to-r from-green-300 to-green-500 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>

                    {/* Email Contact - Enhanced */}
                    <div className="contact-item relative overflow-hidden rounded-lg border border-transparent hover:border-blue-200 transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative flex items-center p-3">
                        <div className="flex-shrink-0">
                          <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors duration-300 relative overflow-hidden">
                            <Mail className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                            <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 rounded-full animate-ping-slow"></span>
                          </div>
                        </div>

                        <div className="ml-3 flex-1">
                          <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                            Correspondence
                          </p>
                          <p className="font-medium truncate group-hover:text-blue-800 transition-colors duration-300">
                            osamasiddiqui7809@gmail.com
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-200"
                            onClick={() => copyToClipboard("osamasiddiqui7809@gmail.com", "Email")}
                          >
                            {copiedField === "Email" ? (
                              <Check className="h-4 w-4 text-blue-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-blue-600" />
                            )}
                          </Button>

                          <a
                            href="mailto:osamasiddiqui7809@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative"
                          >
                            <ExternalLink className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-[10px] whitespace-nowrap bg-blue-100 text-blue-800 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Send Email
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="h-0.5 w-0 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>

                    {/* LinkedIn Contact - Enhanced */}
                    <div className="contact-item relative overflow-hidden rounded-lg border border-transparent hover:border-purple-200 transition-all duration-300 group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative flex items-center p-3">
                        <div className="flex-shrink-0">
                          <div className="bg-purple-100 p-2 rounded-full group-hover:bg-purple-200 transition-colors duration-300 relative overflow-hidden">
                            <Linkedin className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                            <span className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-20 rounded-full animate-ping-slow"></span>
                          </div>
                        </div>

                        <div className="ml-3 flex-1">
                          <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                            Professional Network
                          </p>
                          <p className="font-medium group-hover:text-purple-800 transition-colors duration-300">
                            Osama Siddiqui, ACCA
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-200"
                            onClick={() =>
                              copyToClipboard("https://www.linkedin.com/in/osama-siddiqui-8b552a296/", "LinkedIn URL")
                            }
                          >
                            {copiedField === "LinkedIn URL" ? (
                              <Check className="h-4 w-4 text-purple-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-purple-600" />
                            )}
                          </Button>

                          <a
                            href="https://www.linkedin.com/in/osama-siddiqui-8b552a296/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative"
                          >
                            <ExternalLink className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-[10px] whitespace-nowrap bg-purple-100 text-purple-800 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              View Profile
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="h-0.5 w-0 bg-gradient-to-r from-purple-300 to-purple-500 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-300 hover:scale-105">
                      IFRS Compliance
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-all duration-300 hover:scale-105">
                      Financial Due Diligence
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-all duration-300 hover:scale-105">
                      Audit Assurance
                    </Badge>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 transition-all duration-300 hover:scale-105">
                      Tax Optimization
                    </Badge>
                  </div>

                  <Button
                    onClick={() => setIsFlipped(true)}
                    className="w-full mt-6 bg-slate-800 hover:bg-slate-700 group"
                  >
                    <span className="flex items-center justify-center gap-1">
                      View Portfolio
                      <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>

              {/* Back of Card */}
              <Card
                className={`absolute inset-0 shadow-xl bg-white/90 backdrop-blur-sm border-0 rounded-xl overflow-hidden transition-all duration-500 backface-hidden rotate-y-180 ${isFlipped ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <CardContent className="p-0">
                  <Tabs defaultValue="about" className="w-full">
                    <TabsList className="grid grid-cols-3 rounded-none bg-slate-800 text-white">
                      <TabsTrigger
                        value="about"
                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                      >
                        Profile
                      </TabsTrigger>
                      <TabsTrigger
                        value="services"
                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                      >
                        Services
                      </TabsTrigger>
                      <TabsTrigger
                        value="credentials"
                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-white"
                      >
                        Credentials
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="about" className="mt-0 p-6 max-h-[400px] overflow-y-auto">
                      <h3 className="text-lg font-bold text-slate-800 mb-4">The Balance Sheet of Excellence</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        As a meticulous External Auditor, I transform complex financial statements into clear insights
                        that drive business decisions. My approach combines analytical precision with strategic
                        foresight to ensure your financial records tell the true story of your business.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mt-2">
                        Every audit is an opportunity to not just verify numbers, but to uncover the narrative behind
                        them—revealing both risks and opportunities that might otherwise remain hidden in the ledger.
                      </p>

                      <div className="mt-4">
                        <h4 className="text-md font-semibold text-slate-800 mb-2">Sector Expertise</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-blue-50 p-2 rounded-lg text-center text-sm hover:bg-blue-100 transition-colors duration-300 hover:shadow-sm">
                            <p className="font-medium text-blue-800">Manufacturing Ledgers</p>
                          </div>
                          <div className="bg-green-50 p-2 rounded-lg text-center text-sm hover:bg-green-100 transition-colors duration-300 hover:shadow-sm">
                            <p className="font-medium text-green-800">Retail Accounting</p>
                          </div>
                          <div className="bg-purple-50 p-2 rounded-lg text-center text-sm hover:bg-purple-100 transition-colors duration-300 hover:shadow-sm">
                            <p className="font-medium text-purple-800">Public Sector Audits</p>
                          </div>
                          <div className="bg-amber-50 p-2 rounded-lg text-center text-sm hover:bg-amber-100 transition-colors duration-300 hover:shadow-sm">
                            <p className="font-medium text-amber-800">Real Estate Financials</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="services" className="mt-0 p-6 max-h-[400px] overflow-y-auto">
                      <div className="space-y-4">
                        <div
                          className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                          onClick={() => toggleSection("audit")}
                        >
                          <div className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                            <div className="flex items-center gap-2">
                              <ClipboardCheck className="h-4 w-4 text-blue-600" />
                              <h4 className="font-medium text-blue-800">Financial Statement Audits</h4>
                            </div>
                            {activeSection === "audit" ? (
                              <ChevronUp className="h-4 w-4 text-blue-600" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-blue-600" />
                            )}
                          </div>
                          {activeSection === "audit" && (
                            <div className="p-3 bg-white text-sm text-slate-700">
                              <p>
                                Rigorous examination of your financial statements to ensure they present a "true and
                                fair view" in accordance with IFRS and GAAP standards. My audit trail leaves no decimal
                                unturned.
                              </p>
                            </div>
                          )}
                        </div>

                        <div
                          className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                          onClick={() => toggleSection("risk")}
                        >
                          <div className="flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 transition-colors duration-300">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="h-4 w-4 text-green-600" />
                              <h4 className="font-medium text-green-800">Risk & Compliance Assurance</h4>
                            </div>
                            {activeSection === "risk" ? (
                              <ChevronUp className="h-4 w-4 text-green-600" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-green-600" />
                            )}
                          </div>
                          {activeSection === "risk" && (
                            <div className="p-3 bg-white text-sm text-slate-700">
                              <p>
                                Proactive identification of financial discrepancies and compliance gaps before they
                                impact your bottom line. Think of it as preventative accounting medicine for your
                                business.
                              </p>
                            </div>
                          )}
                        </div>

                        <div
                          className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                          onClick={() => toggleSection("optimization")}
                        >
                          <div className="flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-purple-600" />
                              <h4 className="font-medium text-purple-800">Fiscal Efficiency Optimization</h4>
                            </div>
                            {activeSection === "optimization" ? (
                              <ChevronUp className="h-4 w-4 text-purple-600" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-purple-600" />
                            )}
                          </div>
                          {activeSection === "optimization" && (
                            <div className="p-3 bg-white text-sm text-slate-700">
                              <p>
                                Strategic analysis to reconcile your spending with your revenue goals. I help businesses
                                reduce unnecessary debits and maximize creditable activities for improved profit
                                margins.
                              </p>
                            </div>
                          )}
                        </div>

                        <div
                          className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300"
                          onClick={() => toggleSection("fraud")}
                        >
                          <div className="flex items-center justify-between p-3 bg-red-50 hover:bg-red-100 transition-colors duration-300">
                            <div className="flex items-center gap-2">
                              <PieChart className="h-4 w-4 text-red-600" />
                              <h4 className="font-medium text-red-800">Forensic Financial Analysis</h4>
                            </div>
                            {activeSection === "fraud" ? (
                              <ChevronUp className="h-4 w-4 text-red-600" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-red-600" />
                            )}
                          </div>
                          {activeSection === "fraud" && (
                            <div className="p-3 bg-white text-sm text-slate-700">
                              <p>
                                Detailed examination to detect financial irregularities and strengthen internal
                                controls. I implement double-entry defenses against both errors and intentional
                                misstatements.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="credentials" className="mt-0 p-6 max-h-[400px] overflow-y-auto">
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors duration-300 hover:shadow-sm">
                          <h4 className="font-medium text-green-800">15+ Balanced Books</h4>
                          <p className="text-sm text-green-700 mt-1">
                            Successfully reconciled financial statements for clients across diverse industries, with
                            zero material misstatements.
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors duration-300 hover:shadow-sm">
                          <h4 className="font-medium text-blue-800">15% Cost Reduction</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            Identified and eliminated inefficiencies in client ledgers, resulting in significant
                            operational savings.
                          </p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors duration-300 hover:shadow-sm">
                          <h4 className="font-medium text-purple-800">20% Error Reduction</h4>
                          <p className="text-sm text-purple-700 mt-1">
                            Implemented robust internal controls that significantly decreased financial reporting
                            discrepancies.
                          </p>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-md font-semibold text-slate-800 mb-2">Professional Designations</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all duration-300 hover:scale-105">
                              ACCA Certified
                            </Badge>
                            <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all duration-300 hover:scale-105">
                              Internal Controls Specialist
                            </Badge>
                            <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all duration-300 hover:scale-105">
                              Financial Risk Analyst
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="p-4 border-t">
                    <Button
                      onClick={() => setIsFlipped(false)}
                      className="w-full bg-slate-800 hover:bg-slate-700 group"
                    >
                      <span className="flex items-center justify-center gap-1">
                        Return to Contact Details
                        <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex justify-center space-x-4">
            <a href="https://wa.me/03456198029" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-green-50 hover:border-green-200 transition-all duration-300 group"
              >
                <Phone className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-[10px] font-medium text-green-700">
                  WhatsApp
                </span>
              </Button>
            </a>
            <a href="mailto:osamasiddiqui7809@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-[10px] font-medium text-blue-700">
                  Email
                </span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/osama-siddiqui-8b552a296/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 text-[10px] font-medium text-purple-700">
                  LinkedIn
                </span>
              </Button>
            </a>
          </div>

          <div className="text-center text-xs text-slate-500 mt-4">
            "Precision in every calculation, integrity in every audit"
          </div>
        </div>
      </div>
    </div>
  )
}

