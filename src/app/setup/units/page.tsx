import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Ruler } from "lucide-react";
import { getUnitsOfMeasurement } from "@/lib/data";
import { addUnitOfMeasurementAction, deleteUnitOfMeasurementAction } from "@/lib/actions";

export default async function UnitsPage() {
  const units = await getUnitsOfMeasurement();

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Units of Measurement</h2>
          <p className="text-muted-foreground mt-1">
            Define and manage the units of measurement used for your products (e.g. pcs, kg, meter).
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Ruler className="h-5 w-5" />
            Units of Measurement
          </CardTitle>
          <CardDescription>
            These units are available when creating and editing products.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {units.length === 0 ? (
              <p className="text-sm text-muted-foreground">No units defined yet. Add your first unit below.</p>
            ) : (
              units.map((unit) => (
                <div
                  key={unit.id}
                  className="flex items-center justify-between p-2 rounded-md bg-secondary"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{unit.name}</Badge>
                  </div>
                  {unit.id && (
                    <form
                      action={async () => {
                        "use server";
                        await deleteUnitOfMeasurementAction(unit.id!);
                      }}
                    >
                      <Button type="submit" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                        <span className="sr-only">Delete unit</span>
                        ×
                      </Button>
                    </form>
                  )}
                </div>
              ))
            )}
          </div>

          <form action={addUnitOfMeasurementAction} className="flex w-full flex-col sm:flex-row items-center gap-2 pt-4 border-t mt-4">
            <Input name="name" placeholder="Add new unit (e.g. pcs, kg, meter)" />
            <Button type="submit" className="w-full sm:w-auto">
              Add Unit
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
