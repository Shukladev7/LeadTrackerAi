import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { getAllCurrencies } from "@/lib/firestore-service";
import { AddCurrencySheet } from "./add-currency-sheet";
import { EditCurrencySheet } from "./edit-currency-sheet";
import { DeleteCurrencyButton } from "./delete-currency-button";
import { Badge } from "@/components/ui/badge";

export default async function CurrenciesPage() {
  const currenciesRaw = await getAllCurrencies();
  
  // Serialize currencies to remove Firestore Timestamps
  const currencies = currenciesRaw.map(currency => ({
    ...currency,
    createdAt: currency.createdAt?.toString() || '',
    updatedAt: currency.updatedAt ? new Date(currency.updatedAt.seconds * 1000).toISOString() : undefined,
  }));

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Currency Management</h2>
          <p className="text-muted-foreground mt-1">
            Manage currencies for quotations. INR is the base currency.
          </p>
        </div>
        <AddCurrencySheet />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Currencies
          </CardTitle>
          <CardDescription>
            Configure currency codes, symbols, and conversion rates relative to INR.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currencies.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <DollarSign className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>No currencies configured yet.</p>
                <p className="text-sm">Add your first currency to get started.</p>
              </div>
            ) : (
              currencies.map((currency) => (
                <div
                  key={currency.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">
                      {currency.symbol}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{currency.name}</h3>
                        <Badge variant="outline" className="font-mono">
                          {currency.code}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        1 {currency.code} = ₹{currency.conversionRate.toFixed(2)} INR
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <EditCurrencySheet currency={currency} />
                    <DeleteCurrencyButton currencyId={currency.id!} />
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="mt-6 border-blue-200 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="text-blue-900">About Currency Conversion</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-blue-800 space-y-2">
          <p>
            <strong>Base Currency:</strong> INR (Indian Rupee) is the base currency with a conversion rate of 1.0.
          </p>
          <p>
            <strong>Conversion Rate:</strong> Enter how many INR equals 1 unit of the foreign currency.
          </p>
          <p className="text-xs text-blue-600 mt-3">
            Example: If 1 USD = 83 INR, enter 83 as the conversion rate for USD.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
