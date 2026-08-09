import { auth } from "@/auth"
import OnboardingForm from "@/components/auth/OnboardingForm"

interface PageProps {
  searchParams: Promise<{ email?: string; name?: string }>
}

export default async function OnboardingPage({ searchParams }: PageProps) {
  const session = await auth()
  const params = await searchParams

  const initialEmail = session?.user?.email || params.email || ""
  const initialName = session?.user?.name || params.name || ""
  const initialImage = session?.user?.image || ""

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
        
        {/* Welcome Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome{initialName ? `, ${initialName}` : ""}!
          </h1>
          <p className="text-sm text-gray-500">
            {"Let's finish setting up your account."}
          </p>
        </div>

        {/* Form Component with Image Upload */}
        <OnboardingForm
          key={initialEmail || initialImage}
          initialName={initialName}
          initialEmail={initialEmail}
          initialImage={initialImage}
        />

      </div>
    </div>
  )
}