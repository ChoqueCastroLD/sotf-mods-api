/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_UnyankInputs */

const en_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo yank`)
};

const es_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deshacer la retirada`)
};

const de_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurückziehen aufheben`)
};

const fr_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler le retrait`)
};

const it_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla il ritiro`)
};

const nl_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intrekken ongedaan maken`)
};

const pl_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij wycofanie`)
};

const pt_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desfazer a retirada`)
};

const ru_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить отзыв`)
};

const sv_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ångra tillbakadragning`)
};

const tr_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri çekmeyi iptal et`)
};

const zh_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消撤回`)
};

const ja_basecamp_versions_unyank = /** @type {(inputs: Basecamp_Versions_UnyankInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り下げを解除`)
};

/**
* | output |
* | --- |
* | "Undo yank" |
*
* @param {Basecamp_Versions_UnyankInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_unyank = /** @type {((inputs?: Basecamp_Versions_UnyankInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_UnyankInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_unyank(inputs)
	if (locale === "de") return de_basecamp_versions_unyank(inputs)
	if (locale === "fr") return fr_basecamp_versions_unyank(inputs)
	if (locale === "it") return it_basecamp_versions_unyank(inputs)
	if (locale === "nl") return nl_basecamp_versions_unyank(inputs)
	if (locale === "pl") return pl_basecamp_versions_unyank(inputs)
	if (locale === "pt") return pt_basecamp_versions_unyank(inputs)
	if (locale === "ru") return ru_basecamp_versions_unyank(inputs)
	if (locale === "sv") return sv_basecamp_versions_unyank(inputs)
	if (locale === "tr") return tr_basecamp_versions_unyank(inputs)
	if (locale === "zh") return zh_basecamp_versions_unyank(inputs)
	if (locale === "ja") return ja_basecamp_versions_unyank(inputs)
	return en_basecamp_versions_unyank(inputs)
});
