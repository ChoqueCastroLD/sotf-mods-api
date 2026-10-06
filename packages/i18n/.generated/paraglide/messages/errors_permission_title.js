/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Permission_TitleInputs */

const en_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No access`)
};

const es_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin acceso`)
};

const de_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Zugriff`)
};

const fr_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accès refusé`)
};

const it_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accesso negato`)
};

const nl_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen toegang`)
};

const pl_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak dostępu`)
};

const pt_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem acesso`)
};

const ru_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет доступа`)
};

const sv_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen åtkomst`)
};

const tr_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erişim yok`)
};

const zh_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无权访问`)
};

const ja_errors_permission_title = /** @type {(inputs: Errors_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクセスできません`)
};

/**
* | output |
* | --- |
* | "No access" |
*
* @param {Errors_Permission_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_permission_title = /** @type {((inputs?: Errors_Permission_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Permission_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_permission_title(inputs)
	if (locale === "de") return de_errors_permission_title(inputs)
	if (locale === "fr") return fr_errors_permission_title(inputs)
	if (locale === "it") return it_errors_permission_title(inputs)
	if (locale === "nl") return nl_errors_permission_title(inputs)
	if (locale === "pl") return pl_errors_permission_title(inputs)
	if (locale === "pt") return pt_errors_permission_title(inputs)
	if (locale === "ru") return ru_errors_permission_title(inputs)
	if (locale === "sv") return sv_errors_permission_title(inputs)
	if (locale === "tr") return tr_errors_permission_title(inputs)
	if (locale === "zh") return zh_errors_permission_title(inputs)
	if (locale === "ja") return ja_errors_permission_title(inputs)
	return en_errors_permission_title(inputs)
});
