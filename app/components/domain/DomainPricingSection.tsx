"use client"

import { motion } from "framer-motion"
import { Globe, ShieldCheck } from "lucide-react"
import domainConfig from "../../config/sections/domain.json"
import type { DomainConfig } from "../../types/domain"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"

const config = domainConfig as DomainConfig

export default function DomainPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()

  return (
    <div className="bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 card-primary px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-4 border border-secondary">
                <Globe className="w-4 h-4 icon-text-primary" />
                <span className="icon-text-primary text-sm">{t('domainPricing.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font">
                {t('domainPricing.title')}
              </h2>
              <p className="text-md text-gray-600 max-w-3xl dark:text-gray-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 icon-primary shrink-0" />
                {t('domainPricing.description')}
              </p>
            </div>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              className="w-full sm:w-64 mt-4 sm:mt-0"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {config.plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="relative bg-white dark:bg-gray-950/20 backdrop-blur-xl rounded-md overflow-hidden border border-secondary hover:border-secondary dark:hover:border-secondary transition-all duration-300 flex flex-col"
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium text-white button-primary rounded-tl-2xl rounded-br-2xl">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 orbitron-font">{plan.tld}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{t('domainPricing.domain')}</p>

                  <div className="mt-auto">
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-3xl font-bold orbitron-font text-gray-900 dark:text-white">
                        {convertPrice(`$${plan.price}`)}
                      </span>
                      <span className="ml-1 text-gray-500 dark:text-gray-400">{plan.period}</span>
                    </div>
                    <a
                      href={plan.orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="orbitron-font w-full button-primary text-button-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 border border-transparent hover:bg-[var(--hover-gradient)] hover:text-[var(--icon-text-primary)] hover:border-[var(--border-secondary)]"
                    >
                      {t('domainPricing.registerNow')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
