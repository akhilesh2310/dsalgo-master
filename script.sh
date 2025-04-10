#!/bin/bash

base_dir="3. TopicWisePractice/Strings"

echo "🔁 Renaming and flattening folders in '$base_dir'..."

# Loop through all subdirectories
for dir in "$base_dir"/*/; do
  folder_name=$(basename "$dir")
  file_path="${dir}index.js"
  new_file_path="${base_dir}/${folder_name}.js"

  if [[ -f "$file_path" ]]; then
    mv "$file_path" "$new_file_path"
    echo "✅ Moved: $file_path → $new_file_path"
    rm -r "$dir"
    echo "🗑️ Removed folder: $dir"
  else
    echo "⚠️ No index.js found in $dir — skipping"
  fi
done

echo "🎉 All done!"
