# ToDo
import glob
import pathlib

programmingLannuageList = ["python", "c", "nodejs", "react", "javascript", "typescript"]
courseTitles = ["about", "environment", "hello_world", "variable", "constant"]

for lannuage in programmingLannuageList:
    courses = [False] * 5
    lannuageName = lannuage.capitalize()
    template = [
        f"# {lannuageName}コースへようこそ",
        f"# {lannuageName}の環境構築",
        f"""
import {{ GetCodeLink }} from "../../../components/GetCodeLink";

# {lannuageName}でHello World

今回のソースコードは<GetCodeLink>こちら</GetCodeLink>からダウンロードできます。
        """,
        f"""
import {{ GetCodeLink }} from "../../../components/GetCodeLink";

# {lannuageName}の変数

今回のソースコードは<GetCodeLink>こちら</GetCodeLink>からダウンロードできます。
        """,
        f"""
import {{ GetCodeLink }} from "../../../components/GetCodeLink";

# {lannuageName}の定数

今回のソースコードは<GetCodeLink>こちら</GetCodeLink>からダウンロードできます。
        """,
    ]
    dirs = glob.glob(f"./pages/chapters/{lannuage}/*.mdx")
    for dir in dirs:
        courses[int(pathlib.Path(dir).name[0]) - 1] = True
    print(courses)
    for i in range(len(courses)):
        if courses[i]:
            continue
        else:
            with open(
                f"./pages/chapters/{lannuage}/{i + 1}.{courseTitles[i]}.mdx", mode="w"
            ) as f:
                f.write(template[i])
                f.close()

for lannuage in programmingLannuageList:
    courses = [False] * 5
    for i in range(len(courseTitles) - 2):
        i += 2
        dir = pathlib.Path(f"./public/data/{lannuage}/{i + 1}.{courseTitles[i]}")
        if not dir.exists():
            dir.mkdir()
            pathlib.Path(
                f"./public/data/{lannuage}/{i + 1}.{courseTitles[i]}/src"
            ).mkdir()
            pathlib.Path(
                f"./public/data/{lannuage}/{i + 1}.{courseTitles[i]}/README.txt"
            ).touch()
