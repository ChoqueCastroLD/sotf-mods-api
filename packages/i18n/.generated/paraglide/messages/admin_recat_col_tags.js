/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Col_TagsInputs */

const en_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags to add`)
};

const es_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas que añadir`)
};

const de_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinzuzufügende Tags`)
};

const fr_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags à ajouter`)
};

const it_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag da aggiungere`)
};

const nl_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toe te voegen tags`)
};

const pl_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi do dodania`)
};

const pt_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags a adicionar`)
};

const ru_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить теги`)
};

const sv_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggar att lägga till`)
};

const tr_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eklenecek etiketler`)
};

const zh_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要添加的标签`)
};

const ja_admin_recat_col_tags = /** @type {(inputs: Admin_Recat_Col_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`追加するタグ`)
};

/**
* | output |
* | --- |
* | "Tags to add" |
*
* @param {Admin_Recat_Col_TagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_col_tags = /** @type {((inputs?: Admin_Recat_Col_TagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Col_TagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_col_tags(inputs)
	if (locale === "de") return de_admin_recat_col_tags(inputs)
	if (locale === "fr") return fr_admin_recat_col_tags(inputs)
	if (locale === "it") return it_admin_recat_col_tags(inputs)
	if (locale === "nl") return nl_admin_recat_col_tags(inputs)
	if (locale === "pl") return pl_admin_recat_col_tags(inputs)
	if (locale === "pt") return pt_admin_recat_col_tags(inputs)
	if (locale === "ru") return ru_admin_recat_col_tags(inputs)
	if (locale === "sv") return sv_admin_recat_col_tags(inputs)
	if (locale === "tr") return tr_admin_recat_col_tags(inputs)
	if (locale === "zh") return zh_admin_recat_col_tags(inputs)
	if (locale === "ja") return ja_admin_recat_col_tags(inputs)
	return en_admin_recat_col_tags(inputs)
});
