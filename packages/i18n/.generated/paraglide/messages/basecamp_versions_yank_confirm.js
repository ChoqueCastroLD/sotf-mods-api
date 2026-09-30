/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Yank_ConfirmInputs */

const en_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yank version`)
};

const es_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar la versión`)
};

const de_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version zurückziehen`)
};

const fr_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer la version`)
};

const it_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritira la versione`)
};

const nl_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie intrekken`)
};

const pl_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofaj wersję`)
};

const pt_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar a versão`)
};

const ru_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвать версию`)
};

const sv_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra tillbaka versionen`)
};

const tr_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümü geri çek`)
};

const zh_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤回版本`)
};

const ja_basecamp_versions_yank_confirm = /** @type {(inputs: Basecamp_Versions_Yank_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンを取り下げ`)
};

/**
* | output |
* | --- |
* | "Yank version" |
*
* @param {Basecamp_Versions_Yank_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yank_confirm = /** @type {((inputs?: Basecamp_Versions_Yank_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yank_confirm(inputs)
	if (locale === "de") return de_basecamp_versions_yank_confirm(inputs)
	if (locale === "fr") return fr_basecamp_versions_yank_confirm(inputs)
	if (locale === "it") return it_basecamp_versions_yank_confirm(inputs)
	if (locale === "nl") return nl_basecamp_versions_yank_confirm(inputs)
	if (locale === "pl") return pl_basecamp_versions_yank_confirm(inputs)
	if (locale === "pt") return pt_basecamp_versions_yank_confirm(inputs)
	if (locale === "ru") return ru_basecamp_versions_yank_confirm(inputs)
	if (locale === "sv") return sv_basecamp_versions_yank_confirm(inputs)
	if (locale === "tr") return tr_basecamp_versions_yank_confirm(inputs)
	if (locale === "zh") return zh_basecamp_versions_yank_confirm(inputs)
	if (locale === "ja") return ja_basecamp_versions_yank_confirm(inputs)
	return en_basecamp_versions_yank_confirm(inputs)
});
