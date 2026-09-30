/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, kind: NonNullable<unknown> }} Upload_Dependency_Add_AsInputs */

const en_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Add ${i?.name} as ${i?.kind}`)
};

const es_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Añadir ${i?.name} como ${i?.kind}`)
};

const de_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} als ${i?.kind} hinzufügen`)
};

const fr_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ajouter ${i?.name} comme ${i?.kind}`)
};

const it_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiungi ${i?.name} come ${i?.kind}`)
};

const nl_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} toevoegen als ${i?.kind}`)
};

const pl_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodaj ${i?.name} jako: ${i?.kind}`)
};

const pt_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adicionar ${i?.name} como ${i?.kind}`)
};

const ru_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Добавить ${i?.name}: ${i?.kind}`)
};

const sv_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lägg till ${i?.name} som ${i?.kind}`)
};

const tr_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} modunu ekle: ${i?.kind}`)
};

const zh_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将 ${i?.name} 添加为${i?.kind}`)
};

const ja_upload_dependency_add_as = /** @type {(inputs: Upload_Dependency_Add_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を「${i?.kind}」として追加`)
};

/**
* | output |
* | --- |
* | "Add {name} as {kind}" |
*
* @param {Upload_Dependency_Add_AsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dependency_add_as = /** @type {((inputs: Upload_Dependency_Add_AsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dependency_Add_AsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dependency_add_as(inputs)
	if (locale === "de") return de_upload_dependency_add_as(inputs)
	if (locale === "fr") return fr_upload_dependency_add_as(inputs)
	if (locale === "it") return it_upload_dependency_add_as(inputs)
	if (locale === "nl") return nl_upload_dependency_add_as(inputs)
	if (locale === "pl") return pl_upload_dependency_add_as(inputs)
	if (locale === "pt") return pt_upload_dependency_add_as(inputs)
	if (locale === "ru") return ru_upload_dependency_add_as(inputs)
	if (locale === "sv") return sv_upload_dependency_add_as(inputs)
	if (locale === "tr") return tr_upload_dependency_add_as(inputs)
	if (locale === "zh") return zh_upload_dependency_add_as(inputs)
	if (locale === "ja") return ja_upload_dependency_add_as(inputs)
	return en_upload_dependency_add_as(inputs)
});
