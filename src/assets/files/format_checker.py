import json
import argparse
import os
from typing import List, Dict

def check_format(pred_file: str) -> bool:
    """Check if the submission file matches the required JSON format"""
    try:
        # Check file name
        if os.path.basename(pred_file) != 'submission.json':
            print("Error: File name must be exactly 'submission.json'")
            return False

        # Check the file extension (redundant if name is exact, but safe)
        if not pred_file.lower().endswith('.json'):
            print("Error: File must have .json extension")
            return False

        with open(pred_file, 'r') as f:
            data = json.load(f)  # Only works if file is valid JSON

        if not isinstance(data, list):
            print("Error: The root element should be a list of objects")
            return False

        for idx, item in enumerate(data):
            if not isinstance(item, dict):
                print(f"Error: Item at index {idx} is not a dictionary")
                return False

            required_keys = {'id', 'response'}
            item_keys = set(item.keys())

            if item_keys != required_keys:
                print(f"Error: Item at index {idx} must contain only keys 'id' and 'response', found: {item_keys}")
                return False

            if not isinstance(item['id'], int):
                print(f"Error: 'id' field at index {idx} must be an integer")
                return False

            if not isinstance(item['response'], str):
                print(f"Error: 'response' field at index {idx} must be a string")
                return False

        print("Format check passed successfully!")
        return True

    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON format - {str(e)}")
        print("Note: The file must be in proper JSON format (not JSONL)")
        return False
    except Exception as e:
        print(f"Error: {str(e)}")
        return False

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--pred-file", required=True,
                        help="Path to the JSON submission file to validate")
    args = parser.parse_args()

    success = check_format(args.pred_file)
    if not success:
        exit(1)
