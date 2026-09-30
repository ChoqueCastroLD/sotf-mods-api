/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Human_TitleInputs */

const en_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You decide`)
};

const es_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tú decides`)
};

const de_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du entscheidest`)
};

const fr_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est vous qui décidez`)
};

const it_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Decidi tu`)
};

const nl_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jij beslist`)
};

const pl_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ty decydujesz`)
};

const pt_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você decide`)
};

const ru_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решаете вы`)
};

const sv_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bestämmer`)
};

const tr_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karar senin`)
};

const zh_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`由你决定`)
};

const ja_admin_recat_human_title = /** @type {(inputs: Admin_Recat_Human_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`決めるのはあなたです`)
};

/**
* | output |
* | --- |
* | "You decide" |
*
* @param {Admin_Recat_Human_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_human_title = /** @type {((inputs?: Admin_Recat_Human_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Human_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_human_title(inputs)
	if (locale === "de") return de_admin_recat_human_title(inputs)
	if (locale === "fr") return fr_admin_recat_human_title(inputs)
	if (locale === "it") return it_admin_recat_human_title(inputs)
	if (locale === "nl") return nl_admin_recat_human_title(inputs)
	if (locale === "pl") return pl_admin_recat_human_title(inputs)
	if (locale === "pt") return pt_admin_recat_human_title(inputs)
	if (locale === "ru") return ru_admin_recat_human_title(inputs)
	if (locale === "sv") return sv_admin_recat_human_title(inputs)
	if (locale === "tr") return tr_admin_recat_human_title(inputs)
	if (locale === "zh") return zh_admin_recat_human_title(inputs)
	if (locale === "ja") return ja_admin_recat_human_title(inputs)
	return en_admin_recat_human_title(inputs)
});
