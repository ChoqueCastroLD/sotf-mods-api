/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Manage_TitleInputs */

const en_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage`)
};

const es_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestionar`)
};

const de_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwalten`)
};

const fr_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gérer`)
};

const it_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestisci`)
};

const nl_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beheren`)
};

const pl_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarządzaj`)
};

const pt_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerenciar`)
};

const ru_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Управление`)
};

const sv_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hantera`)
};

const tr_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yönet`)
};

const zh_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理`)
};

const ja_kits_manage_title = /** @type {(inputs: Kits_Manage_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理`)
};

/**
* | output |
* | --- |
* | "Manage" |
*
* @param {Kits_Manage_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_manage_title = /** @type {((inputs?: Kits_Manage_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Manage_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_manage_title(inputs)
	if (locale === "de") return de_kits_manage_title(inputs)
	if (locale === "fr") return fr_kits_manage_title(inputs)
	if (locale === "it") return it_kits_manage_title(inputs)
	if (locale === "nl") return nl_kits_manage_title(inputs)
	if (locale === "pl") return pl_kits_manage_title(inputs)
	if (locale === "pt") return pt_kits_manage_title(inputs)
	if (locale === "ru") return ru_kits_manage_title(inputs)
	if (locale === "sv") return sv_kits_manage_title(inputs)
	if (locale === "tr") return tr_kits_manage_title(inputs)
	if (locale === "zh") return zh_kits_manage_title(inputs)
	if (locale === "ja") return ja_kits_manage_title(inputs)
	return en_kits_manage_title(inputs)
});
