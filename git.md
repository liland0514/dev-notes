## GitHub 工作流程

```bash
# ===== 第一次建立專案並推送到 GitHub =====
git init
git add .
git commit -m "init commit"
git branch -M main
git remote add origin https://github.com/你的帳號/專案名稱.git
git push -u origin main

# ===== 之後在同一台電腦更新 =====
git add .
git commit -m "update"
git push

# ===== 在其他電腦繼續開發 =====
git clone https://github.com/你的帳號/專案名稱.git
cd 專案名稱
git add .
git commit -m "update"
git push origin main


# ===== 建立與切換分支 =====
git branch new-feature          # 建立分支 (但還在原本分支)
git checkout new-feature        # 切換到新分支
# 另一種寫法 (建立 + 切換一次完成)
git checkout -b new-feature

# ===== 推送分支到 GitHub =====
git push -u origin new-feature  # 第一次推送分支 (後續只要 git push)

# ===== 切回主分支 (main) =====
git checkout main

# ===== 合併分支 (在 main 上合併 new-feature) =====
git merge new-feature
git push


# Git 指令大全

這份文件整理了常用的 Git 指令及簡單說明，方便快速查閱。

---

## 1. 初始化與設定

- `git init`  
  在資料夾中初始化 Git 倉庫。

- `git clone <repo_url>`  
  複製遠端倉庫到本地。

- `git remote add origin <repo_url>`  
  新增遠端倉庫。

- `git remote -v`  
  查看遠端倉庫 URL。

- `git remote remove origin`  
  刪除遠端倉庫設定。

- `git config --global user.name "<name>"`  
  設定使用者名稱。

- `git config --global user.email "<email>"`  
  設定使用者 Email。

---

## 2. 工作區與暫存區管理

- `git status`  
  查看工作區狀態，哪些檔案有改動。

- `git add <file>`  
  將檔案加入暫存區（stage）。

- `git add .`  
  將所有改動加入暫存區。

- `git reset <file>`  
  從暫存區移除檔案（不刪除修改）。

- `git checkout -- <file>`  
  放棄工作區的改動，還原到最後一次 commit。

---

## 3. 提交與紀錄

- `git commit -m "<message>"`  
  提交暫存區到版本庫。

- `git commit -a -m "<message>"`  
  跳過 `git add`，直接提交已追蹤檔案的改動。

- `git log`  
  查看 commit 紀錄。

- `git log --oneline`  
  以簡潔一行顯示 commit。

- `git diff`  
  查看工作區與暫存區差異。

- `git diff --staged`  
  查看暫存區與最新 commit 差異。

---

## 4. 分支管理

- `git branch`  
  查看本地分支。

- `git branch <branch-name>`  
  新增分支。

- `git checkout <branch-name>`  
  切換分支。

- `git switch <branch-name>`  
  也是切換分支（Git 2.23+）。

- `git checkout -b <branch-name>`  
  建立新分支並切換。

- `git merge <branch-name>`  
  合併其他分支到目前分支。

- `git branch -d <branch-name>`  
  刪除本地分支。

---

## 5. 遠端操作

- `git push origin <branch>`  
  推送本地分支到遠端。

- `git push -u origin <branch>`  
  設定遠端上游分支，方便後續推送。

- `git pull origin <branch>`  
  從遠端拉取並合併分支。

- `git fetch`  
  從遠端取得最新資料，不合併。

- `git remote set-url origin <new_url>`  
  修改遠端網址。

---

## 6. 其他常用

- `git stash`  
  暫存當前改動，恢復乾淨工作區。

- `git stash pop`  
  取出暫存的改動並移除暫存區。

- `git reset --hard <commit>`  
  回到某個版本（注意會刪除後續改動）。

- `git revert <commit>`  
  反轉某次 commit，產生新的 commit。

- `git show <commit>`  
  顯示某次 commit 的內容。



