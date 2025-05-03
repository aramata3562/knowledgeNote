import { useForm } from "react-hook-form";
import { TextInput } from "../../components/TextInput";
import { SelectField } from "../../components/SelectField";
import { MdTextArea } from "../../components/mdtextArea";
import { FormSection } from "../../components/FormSection";
import { Button } from "../../components/Button";

type FormValues = {
  title: string;
  url: string;
  topic: string;
  note: string;
  status: string;
};

export function AddMathPage() {
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("数学ノート登録:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
      <FormSection title="記事情報の入力">
        <TextInput
          label="タイトル"
          placeholder="例）ChatGPTによる思考プロセスの自動化"
          {...register("title", { required: true })}
        />
        <TextInput
          label="URL"
          placeholder="https://example.com"
          {...register("url", { required: true })}
        />
        <SelectField
          label="トピック"
          options={[
            { label: "AI", value: "AI" },
            { label: "経済", value: "経済" },
            { label: "教育", value: "教育" },
          ]}
          {...register("topic")}
        />
      </FormSection>

      <FormSection title="要点メモ">
        <MdTextArea
          label="要点"
          value={watch("note")}
          onChange={(val) => setValue("note", val)}
          placeholder="重要なポイント、引用などを記入"
          format="## 要点\n- "
        />
      </FormSection>

      <FormSection title="状態">
        <SelectField
          label="ステータス"
          options={[
            { label: "未読", value: "unread" },
            { label: "読了", value: "read" },
            { label: "再読希望", value: "reread" },
          ]}
          {...register("status")}
        />
      </FormSection>

      <div className="pt-4">
        <Button variant="primary">登録する</Button>
      </div>
    </form>
  );
}
