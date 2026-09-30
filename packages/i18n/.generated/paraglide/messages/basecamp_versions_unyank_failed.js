/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Unyank_FailedInputs */

const en_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The yank could not be undone`)
};

const es_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo deshacer la retirada`)
};

const de_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Zurückziehen konnte nicht aufgehoben werden`)
};

const fr_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le retrait n’a pas pu être annulé`)
};

const it_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non è stato possibile annullare il ritiro`)
};

const nl_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het intrekken kon niet ongedaan worden gemaakt`)
};

const pl_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się cofnąć wycofania`)
};

const pt_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível desfazer a retirada`)
};

const ru_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отменить отзыв`)
};

const sv_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbakadragningen kunde inte ångras`)
};

const tr_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri çekme iptal edilemedi`)
};

const zh_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法取消撤回`)
};

const ja_basecamp_versions_unyank_failed = /** @type {(inputs: Basecamp_Versions_Unyank_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り下げを解除できませんでした`)
};

/**
* | output |
* | --- |
* | "The yank could not be undone" |
*
* @param {Basecamp_Versions_Unyank_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_unyank_failed = /** @type {((inputs?: Basecamp_Versions_Unyank_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Unyank_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_unyank_failed(inputs)
	if (locale === "de") return de_basecamp_versions_unyank_failed(inputs)
	if (locale === "fr") return fr_basecamp_versions_unyank_failed(inputs)
	if (locale === "it") return it_basecamp_versions_unyank_failed(inputs)
	if (locale === "nl") return nl_basecamp_versions_unyank_failed(inputs)
	if (locale === "pl") return pl_basecamp_versions_unyank_failed(inputs)
	if (locale === "pt") return pt_basecamp_versions_unyank_failed(inputs)
	if (locale === "ru") return ru_basecamp_versions_unyank_failed(inputs)
	if (locale === "sv") return sv_basecamp_versions_unyank_failed(inputs)
	if (locale === "tr") return tr_basecamp_versions_unyank_failed(inputs)
	if (locale === "zh") return zh_basecamp_versions_unyank_failed(inputs)
	if (locale === "ja") return ja_basecamp_versions_unyank_failed(inputs)
	return en_basecamp_versions_unyank_failed(inputs)
});
