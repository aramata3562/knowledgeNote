import articleTemplate from "./md/Article.md?raw";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/TextInput";
import { SelectField } from "../../components/SelectField";
import { MdTextArea } from "../../components/mdtextArea";
import { FormSection } from "../../components/FormSection";
import { Button } from "../../components/Button";
import { submitToGAS } from "../../utils/submitToGAS";

type FormValues = {
  title: string;
  url: string;
  topic: string;
  note: string;
  status: string;
};

export function AddArticlePage() {
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await submitToGAS(data, "article");
      console.log("送信成功");
    } catch (error) {
      console.error("送信エラー:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
      <FormSection title="記事情報の入力">
        <TextInput
          label="タイトル"
          placeholder="記事のタイトルを入力"
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
            { label: "ML", value: "machineLearning" },
            { label: "統計", value: "statistics" },
            { label: "グラフ", value: "graph" },
            { label: "AI", value: "AI" },
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
          format={articleTemplate}
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
