1. Modify the DataTable component as follows
   1. Define a property named 'canDelete' of the type boolean with default as 'false'. If this property is set to true then each row of the table in DataTable component will generate 'Delete' button. When this button is clicked then delete the record from the collection passed to it from parent. (Mandatory)
   2. Add two radio buttons on the top of the table for Sort and Revese (Mandatory)
      1. The component must have 'SortKey' property which must be set by parent. By default data must be shown by sorted order in the DataTAble Compoenent base on SortKey. e.g. if SortKey = ProductNAme, then data must eb sorted based in ProductName. If the Sort radio button is clicked data will be sorted based on SortKey and if Reverse radio button is clicked then it must be reversed based on SortKey  
   3. Define PageSize property for DataTAble to set default number of rows top be displayed in table (Optional)
2. Write the following valiodators on the ProductInfo class properties (All Mandatory)
   1. ProductId must start from 'Prd-'
   2. ProductIs must be alphanumeric
   3. ProductName must start from UpperCase character and it cannot have the special characters
   4. BasePrice must be Positve numeric
   5. Write a custom validator that will make sure that the ProductId is not repeated 
3. Replace a select element by creating reusable custom component e.g. DropDownComponent that will have be used in 'ReactiveForms'. This component will have  DataList as an Input property to accept array from parent and will emit the selected data to parent component using the event.  (Mandatory)
4. Create a Custom-Component Diretive that will show all Validation Errors at the botton of the page (optional)



