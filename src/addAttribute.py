import json

def add_requirement_to_classes(input_file, output_file):
    # Open and load JSON data from the input file
    with open(input_file, 'r') as file:
        classes = json.load(file)
    
    # Add "Requirement": "HASS" to each class in the list
    for course in classes:
        course["Requirement"] = "HASS"
    
    # Write the updated data to the output file with indentation for readability
    with open(output_file, 'w') as file:
        json.dump(classes, file, indent=4)

if __name__ == "__main__":
    input_file = 'extracted_courses.json'           # Input file containing your JSON data
    output_file = 'extracted_courses.json'  # Output file for the modified JSON
    add_requirement_to_classes(input_file, output_file)
    print(f"Updated classes have been saved to {output_file}")
