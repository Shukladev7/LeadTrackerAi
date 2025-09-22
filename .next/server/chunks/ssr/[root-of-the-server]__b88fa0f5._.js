module.exports = {

"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[project]/src/lib/data/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f19fb9cefc9c18629c4a5201b33b0af5ef011f9b7":"deleteLeadSource","7f26338635b4242dedba8310c38b00c71440fddb97":"addQuotation","7f305347673cd2e626b8723eec75ebf896091e1469":"updateProduct","7f31b97c152d22d9bc696247993677c1b11fe1e88b":"addQuotationTemplate","7f3ebdab4c9e28219b3205095acd1a3d8a0c3dec24":"getProducts","7f3f860cd47bbf2fe754ae4f717bdf31a3698e7aac":"getLeadById","7f46213a8091b810e7a14daa64453e5be7820c2a90":"getRecentActivities","7f56f93c241f7c01286f7c88f26e31d654c2d7c2b1":"deleteDepartment","7f58fd92949b149001385fd1fdaa662a9a32ab5894":"updateQuotationTemplate","7f5f53c80e97d0c11178012ea42b95721ea78b0a5b":"deleteProduct","7f6cb176d1d5647b4969a77fed3288a5b9e4888c63":"addEmployee","7f6d7c10ae47238d9b5d60592d1c2b057bc2c0143a":"addLead","7f736ae484f62a94ed7e8798ec00bbb59fa37002c7":"getEmployees","7f749321751df8f1f89b8ad18ed82b69924e7ba756":"deleteQuotationTemplate","7f7a56e86d68b773394c70085491d7947f5f648311":"updateLead","7f7bc906ba116d805a4606fe084d083f2b10bea0cc":"getLeadSources","7f837e056e9d31ea40414af00a831552b723de26c3":"getQuotationById","7f850c28f98ec8187c680d70937ac96fed0c3e5802":"getQuotations","7f866aea47841d75914cccd8ae569ac6512311de07":"addDepartment","7f943d11209b09258ba74a15f5de093f133b91311c":"getQuotationTemplateById","7f988f4dc519373dbec21cd0ee7e9b4e6dce4aa270":"addLeadSource","7f9c708bc7a5f55867469681e784581b16dc74a99c":"addProduct","7fa75ba8b749bc49717bb11a5415faa578d301fd0a":"getEmployeeRoles","7fa7be6131932e219dd8a1891656b874c2d685a503":"addEmployeeRole","7fa9d7e516fc8cb015c7d22af3a110dcabc62e4687":"addActivityToLead","7fcb260124321b9f802463bbc2f160399cdf903d67":"deleteEmployeeRole","7fd329d70e4e457343cfcd4e75f8c40e93630e5a03":"getLeads","7fd6bb217a88bb3d7b604d3f5ff2ced56685aac9a4":"getEmployeeById","7ff3fc0e2eec05fe8cc1d0e87a246a6146e675ecb7":"updateLeadStatus","7ff62b18f9ee3406389dd03953ea89f9080d52d223":"getQuotationTemplates","7ff7411b226526fc8169ff773867f9419959cc5b8a":"getDepartments"},"",""] */ __turbopack_context__.s({
    "addActivityToLead": (()=>addActivityToLead),
    "addDepartment": (()=>addDepartment),
    "addEmployee": (()=>addEmployee),
    "addEmployeeRole": (()=>addEmployeeRole),
    "addLead": (()=>addLead),
    "addLeadSource": (()=>addLeadSource),
    "addProduct": (()=>addProduct),
    "addQuotation": (()=>addQuotation),
    "addQuotationTemplate": (()=>addQuotationTemplate),
    "deleteDepartment": (()=>deleteDepartment),
    "deleteEmployeeRole": (()=>deleteEmployeeRole),
    "deleteLeadSource": (()=>deleteLeadSource),
    "deleteProduct": (()=>deleteProduct),
    "deleteQuotationTemplate": (()=>deleteQuotationTemplate),
    "getDepartments": (()=>getDepartments),
    "getEmployeeById": (()=>getEmployeeById),
    "getEmployeeRoles": (()=>getEmployeeRoles),
    "getEmployees": (()=>getEmployees),
    "getLeadById": (()=>getLeadById),
    "getLeadSources": (()=>getLeadSources),
    "getLeads": (()=>getLeads),
    "getProducts": (()=>getProducts),
    "getQuotationById": (()=>getQuotationById),
    "getQuotationTemplateById": (()=>getQuotationTemplateById),
    "getQuotationTemplates": (()=>getQuotationTemplates),
    "getQuotations": (()=>getQuotations),
    "getRecentActivities": (()=>getRecentActivities),
    "updateLead": (()=>updateLead),
    "updateLeadStatus": (()=>updateLeadStatus),
    "updateProduct": (()=>updateProduct),
    "updateQuotationTemplate": (()=>updateQuotationTemplate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const dataPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src', 'lib', 'data');
async function readData(filename) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dataPath, filename);
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        if (isNodeError(error) && error.code === 'ENOENT') {
            // If the file doesn't exist, create it with an empty array
            await writeData(filename, []);
            return [];
        }
        console.error(`Error reading ${filename}:`, error);
        throw new Error(`Could not read ${filename}`);
    }
}
async function writeData(filename, data) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dataPath, filename);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Error writing ${filename}:`, error);
        throw new Error(`Could not write to ${filename}`);
    }
}
function isNodeError(error) {
    return error instanceof Error;
}
const getLeads = async (query, status)=>{
    let leads = await readData('leads.json');
    if (query) {
        const lowercasedQuery = query.toLowerCase();
        leads = leads.filter((lead)=>lead.name.toLowerCase().includes(lowercasedQuery) || lead.company.toLowerCase().includes(lowercasedQuery));
    }
    if (status) {
        leads = leads.filter((lead)=>lead.status === status);
    }
    return leads.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};
const getLeadById = async (id)=>{
    const leads = await getLeads();
    const lead = leads.find((lead)=>lead.id === id);
    if (!lead) return undefined;
    return {
        ...lead,
        activities: lead.activities.sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime())
    };
};
const getRecentActivities = async (limit)=>{
    const leads = await getLeads();
    const allActivities = leads.flatMap((lead)=>lead.activities.map((activity)=>({
                lead,
                activity
            })));
    return allActivities.sort((a, b)=>new Date(b.activity.date).getTime() - new Date(a.activity.date).getTime()).slice(0, limit);
};
const getProducts = async ()=>{
    return await readData('products.json');
};
const getLeadSources = async ()=>{
    return await readData('lead-sources.json');
};
const addProduct = async (productData)=>{
    const products = await getProducts();
    const newProduct = {
        ...productData,
        id: `prod-${Date.now()}`
    };
    products.unshift(newProduct);
    await writeData('products.json', products);
    return newProduct;
};
const updateProduct = async (id, productData)=>{
    const products = await getProducts();
    const productIndex = products.findIndex((p)=>p.id === id);
    if (productIndex === -1) {
        throw new Error('Product not found');
    }
    const updatedProduct = {
        ...products[productIndex],
        ...productData
    };
    products[productIndex] = updatedProduct;
    await writeData('products.json', products);
    return updatedProduct;
};
const deleteProduct = async (id)=>{
    let products = await getProducts();
    const initialLength = products.length;
    products = products.filter((p)=>p.id !== id);
    if (products.length === initialLength) {
        throw new Error('Product not found for deletion');
    }
    await writeData('products.json', products);
    return {
        success: true
    };
};
const addLeadSource = async (name)=>{
    const leadSources = await getLeadSources();
    const newSource = {
        id: `source-${Date.now()}`,
        name
    };
    leadSources.unshift(newSource);
    await writeData('lead-sources.json', leadSources);
    return newSource;
};
const deleteLeadSource = async (id)=>{
    let leadSources = await getLeadSources();
    const initialLength = leadSources.length;
    leadSources = leadSources.filter((source)=>source.id !== id);
    await writeData('lead-sources.json', leadSources);
    return {
        success: leadSources.length < initialLength
    };
};
const addLead = async (leadData)=>{
    const leads = await getLeads();
    const newId = `lead-${Date.now()}`;
    const initialActivity = [];
    if (leadData.notes) {
        initialActivity.push({
            id: `act-${newId}-1`,
            date: new Date().toISOString(),
            type: 'Email',
            notes: `Lead created in the system. Initial notes: ${leadData.notes}`
        });
    }
    const { notes, ...restOfLeadData } = leadData;
    const newLead = {
        ...restOfLeadData,
        id: newId,
        createdAt: new Date().toISOString(),
        activities: initialActivity
    };
    leads.unshift(newLead);
    await writeData('leads.json', leads);
    return newLead;
};
const addActivityToLead = async (leadId, activityData)=>{
    const leads = await getLeads();
    const leadIndex = leads.findIndex((l)=>l.id === leadId);
    if (leadIndex === -1) {
        throw new Error('Lead not found');
    }
    const lead = leads[leadIndex];
    const newActivity = {
        ...activityData,
        id: `act-${leadId}-${lead.activities.length + 1}`,
        date: new Date().toISOString()
    };
    lead.activities.unshift(newActivity);
    await writeData('leads.json', leads);
    return newActivity;
};
const updateLeadStatus = async (leadId, status)=>{
    const leads = await getLeads();
    const leadIndex = leads.findIndex((l)=>l.id === leadId);
    if (leadIndex === -1) {
        throw new Error('Lead not found');
    }
    leads[leadIndex].status = status;
    await writeData('leads.json', leads);
    return leads[leadIndex];
};
const updateLead = async (leadId, leadData)=>{
    const leads = await getLeads();
    const leadIndex = leads.findIndex((l)=>l.id === leadId);
    if (leadIndex === -1) {
        throw new Error('Lead not found');
    }
    const originalLead = leads[leadIndex];
    const updatedLead = {
        ...originalLead,
        ...leadData
    };
    leads[leadIndex] = updatedLead;
    await writeData('leads.json', leads);
    return updatedLead;
};
const getQuotations = async ()=>{
    const quotations = await readData('quotations.json');
    return quotations.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};
const getQuotationById = async (id)=>{
    const quotations = await getQuotations();
    return quotations.find((q)=>q.id === id);
};
const addQuotation = async (quotationData)=>{
    const quotations = await getQuotations();
    const newQuotationNumber = `QUO-${String(quotations.length + 1).padStart(4, '0')}`;
    const newQuotation = {
        ...quotationData,
        id: `quo-${Date.now()}`,
        quotationNumber: newQuotationNumber,
        createdAt: new Date().toISOString()
    };
    quotations.unshift(newQuotation);
    await writeData('quotations.json', quotations);
    return newQuotation;
};
const getQuotationTemplates = async ()=>{
    return await readData('quotation-templates.json');
};
const getQuotationTemplateById = async (id)=>{
    const templates = await getQuotationTemplates();
    return templates.find((t)=>t.id === id);
};
const addQuotationTemplate = async (templateData)=>{
    const templates = await getQuotationTemplates();
    const newTemplate = {
        ...templateData,
        id: `template-${Date.now()}`
    };
    templates.unshift(newTemplate);
    await writeData('quotation-templates.json', templates);
    return newTemplate;
};
const updateQuotationTemplate = async (id, templateData)=>{
    const templates = await getQuotationTemplates();
    const templateIndex = templates.findIndex((t)=>t.id === id);
    if (templateIndex === -1) {
        throw new Error('Template not found');
    }
    templates[templateIndex] = {
        ...templates[templateIndex],
        ...templateData
    };
    await writeData('quotation-templates.json', templates);
    return templates[templateIndex];
};
const deleteQuotationTemplate = async (id)=>{
    let templates = await getQuotationTemplates();
    const initialLength = templates.length;
    templates = templates.filter((t)=>t.id !== id);
    if (templates.length === initialLength) {
        throw new Error('Template not found for deletion');
    }
    await writeData('quotation-templates.json', templates);
    return {
        success: true
    };
};
const getEmployees = async ()=>{
    const employees = await readData('employees.json');
    return employees.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};
const getEmployeeById = async (id)=>{
    const employees = await getEmployees();
    return employees.find((employee)=>employee.id === id);
};
const addEmployee = async (employeeData)=>{
    const employees = await getEmployees();
    const newEmployee = {
        ...employeeData,
        id: `emp-${Date.now()}`,
        createdAt: new Date().toISOString()
    };
    employees.unshift(newEmployee);
    await writeData('employees.json', employees);
    return newEmployee;
};
const getEmployeeRoles = async ()=>{
    return await readData('employee-roles.json');
};
const addEmployeeRole = async (name)=>{
    const roles = await getEmployeeRoles();
    const newRole = {
        id: `role-${Date.now()}`,
        name
    };
    roles.push(newRole);
    await writeData('employee-roles.json', roles);
    return newRole;
};
const deleteEmployeeRole = async (id)=>{
    let roles = await getEmployeeRoles();
    const initialLength = roles.length;
    roles = roles.filter((role)=>role.id !== id);
    await writeData('employee-roles.json', roles);
    return {
        success: roles.length < initialLength
    };
};
const getDepartments = async ()=>{
    return await readData('departments.json');
};
const addDepartment = async (name)=>{
    const departments = await getDepartments();
    const newDepartment = {
        id: `dept-${Date.now()}`,
        name
    };
    departments.push(newDepartment);
    await writeData('departments.json', departments);
    return newDepartment;
};
const deleteDepartment = async (id)=>{
    let departments = await getDepartments();
    const initialLength = departments.length;
    departments = departments.filter((dept)=>dept.id !== id);
    await writeData('departments.json', departments);
    return {
        success: departments.length < initialLength
    };
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getLeads,
    getLeadById,
    getRecentActivities,
    getProducts,
    getLeadSources,
    addProduct,
    updateProduct,
    deleteProduct,
    addLeadSource,
    deleteLeadSource,
    addLead,
    addActivityToLead,
    updateLeadStatus,
    updateLead,
    getQuotations,
    getQuotationById,
    addQuotation,
    getQuotationTemplates,
    getQuotationTemplateById,
    addQuotationTemplate,
    updateQuotationTemplate,
    deleteQuotationTemplate,
    getEmployees,
    getEmployeeById,
    addEmployee,
    getEmployeeRoles,
    addEmployeeRole,
    deleteEmployeeRole,
    getDepartments,
    addDepartment,
    deleteDepartment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "7fd329d70e4e457343cfcd4e75f8c40e93630e5a03", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadById, "7f3f860cd47bbf2fe754ae4f717bdf31a3698e7aac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecentActivities, "7f46213a8091b810e7a14daa64453e5be7820c2a90", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "7f3ebdab4c9e28219b3205095acd1a3d8a0c3dec24", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeadSources, "7f7bc906ba116d805a4606fe084d083f2b10bea0cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProduct, "7f9c708bc7a5f55867469681e784581b16dc74a99c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "7f305347673cd2e626b8723eec75ebf896091e1469", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "7f5f53c80e97d0c11178012ea42b95721ea78b0a5b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLeadSource, "7f988f4dc519373dbec21cd0ee7e9b4e6dce4aa270", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLeadSource, "7f19fb9cefc9c18629c4a5201b33b0af5ef011f9b7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLead, "7f6d7c10ae47238d9b5d60592d1c2b057bc2c0143a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addActivityToLead, "7fa9d7e516fc8cb015c7d22af3a110dcabc62e4687", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeadStatus, "7ff3fc0e2eec05fe8cc1d0e87a246a6146e675ecb7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLead, "7f7a56e86d68b773394c70085491d7947f5f648311", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotations, "7f850c28f98ec8187c680d70937ac96fed0c3e5802", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationById, "7f837e056e9d31ea40414af00a831552b723de26c3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotation, "7f26338635b4242dedba8310c38b00c71440fddb97", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationTemplates, "7ff62b18f9ee3406389dd03953ea89f9080d52d223", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuotationTemplateById, "7f943d11209b09258ba74a15f5de093f133b91311c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuotationTemplate, "7f31b97c152d22d9bc696247993677c1b11fe1e88b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateQuotationTemplate, "7f58fd92949b149001385fd1fdaa662a9a32ab5894", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteQuotationTemplate, "7f749321751df8f1f89b8ad18ed82b69924e7ba756", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployees, "7f736ae484f62a94ed7e8798ec00bbb59fa37002c7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeById, "7fd6bb217a88bb3d7b604d3f5ff2ced56685aac9a4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployee, "7f6cb176d1d5647b4969a77fed3288a5b9e4888c63", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployeeRoles, "7fa75ba8b749bc49717bb11a5415faa578d301fd0a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addEmployeeRole, "7fa7be6131932e219dd8a1891656b874c2d685a503", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEmployeeRole, "7fcb260124321b9f802463bbc2f160399cdf903d67", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDepartments, "7ff7411b226526fc8169ff773867f9419959cc5b8a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addDepartment, "7f866aea47841d75914cccd8ae569ac6512311de07", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteDepartment, "7f56f93c241f7c01286f7c88f26e31d654c2d7c2b1", null);
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-rsc] (ecmascript)");
;
;
;
;
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data/index.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f3ebdab4c9e28219b3205095acd1a3d8a0c3dec24": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"]),
    "7f46213a8091b810e7a14daa64453e5be7820c2a90": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecentActivities"]),
    "7f850c28f98ec8187c680d70937ac96fed0c3e5802": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuotations"]),
    "7fd329d70e4e457343cfcd4e75f8c40e93630e5a03": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data/index.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/data/index.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7f3ebdab4c9e28219b3205095acd1a3d8a0c3dec24": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f3ebdab4c9e28219b3205095acd1a3d8a0c3dec24"]),
    "7f46213a8091b810e7a14daa64453e5be7820c2a90": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f46213a8091b810e7a14daa64453e5be7820c2a90"]),
    "7f850c28f98ec8187c680d70937ac96fed0c3e5802": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f850c28f98ec8187c680d70937ac96fed0c3e5802"]),
    "7fd329d70e4e457343cfcd4e75f8c40e93630e5a03": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fd329d70e4e457343cfcd4e75f8c40e93630e5a03"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data/index.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/data/index.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/page.tsx", "default");
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b88fa0f5._.js.map