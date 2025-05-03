import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { SelectField } from "../components/SelectField";

type FormValues = {
  text: string;
  status: string;
};

export function AddPage() {
  const { category } = useParams<{ category: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbzBhS_LtaHpsnzvf2KvNSpXqJvjzdtIkmpJZ_90WlUWizQy8by8j80Q-09cqTxgPZ2e/exec";

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new URLSearchParams();
      formData.append("category", category || "");
      formData.append("text", data.text);
      formData.append("status", data.status);
      const response = await fetch(GAS_URL, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("送信成功:", result);
      // TODO: 必要なら登録完了後の処理をここに書く（リダイレクトとか）
    } catch (error) {
      console.error("送信エラー:", error);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">{category} の登録</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextInput
          label="入力内容"
          placeholder="例：apple"
          {...register("text", { required: "入力は必須です" })}
          error={errors.text?.message}
        />
        <SelectField
          label="ステータス"
          options={[
            { value: "", label: "選択してください" },
            { value: "new", label: "新規" },
            { value: "learning", label: "学習中" },
            { value: "done", label: "完了" },
          ]}
          {...register("status", { required: true })}
        />
        <div className="pt-2">
          <Button variant="primary" fullWidth>
            登録する
          </Button>
        </div>
      </form>
    </div>
  );
}
