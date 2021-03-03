1. Modify the DataTable component as follows
   1. Define a property named 'canDelete' of the type boolean with default as 'false'. If this property is set to true then each row of the table in DataTable component will generate 'Delete' button. When this button is clicked then delete the record from the collection passed to it from parent. (Mandatory)
   2. Add two radio buttons on the top of the table for Sort and Revese (Mandatory)
      1. The component must have 'SortKey' property which must be set by parent. By default data must be shown by sorted order in the DataTAble Compoenent base on SortKey. e.g. if SortKey = ProductNAme, then data must eb sorted based in ProductName. If the Sort radio button is clicked data will be sorted based on SortKey and if Reverse radio button is clicked then it must be reversed based on SortKey  
   3. Define PageSize property for DataTAble to set default number of rows top be displayed in table (Optional)
