/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Yank_FailedInputs */

const en_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The version could not be yanked`)
};

const es_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo retirar la versión`)
};

const de_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Version konnte nicht zurückgezogen werden`)
};

const fr_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La version n’a pas pu être retirée`)
};

const it_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile ritirare la versione`)
};

const nl_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De versie kon niet worden ingetrokken`)
};

const pl_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wycofać wersji`)
};

const pt_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível retirar a versão`)
};

const ru_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отозвать версию`)
};

const sv_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen kunde inte dras tillbaka`)
};

const tr_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm geri çekilemedi`)
};

const zh_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法撤回该版本`)
};

const ja_basecamp_versions_yank_failed = /** @type {(inputs: Basecamp_Versions_Yank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョンを取り下げられませんでした`)
};

/**
* | output |
* | --- |
* | "The version could not be yanked" |
*
* @param {Basecamp_Versions_Yank_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yank_failed = /** @type {((inputs?: Basecamp_Versions_Yank_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yank_failed(inputs)
	if (locale === "de") return de_basecamp_versions_yank_failed(inputs)
	if (locale === "fr") return fr_basecamp_versions_yank_failed(inputs)
	if (locale === "it") return it_basecamp_versions_yank_failed(inputs)
	if (locale === "nl") return nl_basecamp_versions_yank_failed(inputs)
	if (locale === "pl") return pl_basecamp_versions_yank_failed(inputs)
	if (locale === "pt") return pt_basecamp_versions_yank_failed(inputs)
	if (locale === "ru") return ru_basecamp_versions_yank_failed(inputs)
	if (locale === "sv") return sv_basecamp_versions_yank_failed(inputs)
	if (locale === "tr") return tr_basecamp_versions_yank_failed(inputs)
	if (locale === "zh") return zh_basecamp_versions_yank_failed(inputs)
	if (locale === "ja") return ja_basecamp_versions_yank_failed(inputs)
	return en_basecamp_versions_yank_failed(inputs)
});
