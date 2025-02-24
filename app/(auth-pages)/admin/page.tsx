import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Spinner } from "@heroui/spinner";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col gap-2 w-1/2 ">
        <h1 className="text-2xl font-medium text-center">관리자 로그인</h1>
        <Label htmlFor="email">이메일</Label>
        <Input name="email" placeholder="" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">비밀번호</Label>
        </div>
        <Input type="password" name="password" placeholder="" required />
        <SubmitButton pendingText="로딩중..." formAction={signInAction}>
          로그인
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
