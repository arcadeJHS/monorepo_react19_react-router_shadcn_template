import { LoginFormNoGoogle } from "@ui/components/login-form-no-google"

export function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginFormNoGoogle />
      </div>
    </div>
  )
}
