import { useForm } from "react-hook-form";
import { TextInput } from "../../components/TextInput";
import { MdTextArea } from "../../components/mdtextArea";
import { FormSection } from "../../components/FormSection";
import { Button } from "../../components/Button";
import { submitToGAS } from "../../utils/submitToGAS";
import mathTemplate from "./md/math.md?raw";
import { SelectField } from "../../components/SelectField";

type FormValues = {
  title: string;
  note: string;
  status: string;
};

export function AddMathPage() {
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await submitToGAS(data, "math");
      console.log("送信成功");
    } catch (error) {
      console.error("送信エラー:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
      <FormSection title="数学ノートの入力">
        <TextInput
          label="用語"
          placeholder="ラグランジュの未定乗数法"
          {...register("title", { required: true })}
        />

        <MdTextArea
          label="要点"
          value={watch("note")}
          onChange={(val) => setValue("note", val)}
          format={mathTemplate}
          rows={20}
        />

        <SelectField
          label="理解度"
          options={[
            { label: "全くわからない", value: "0" },
            { label: "ほとんど理解できない", value: "1" },
            { label: "何となくわかる", value: "2" },
            { label: "大体わかる", value: "3" },
            { label: "完全にわかる", value: "4" },
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
