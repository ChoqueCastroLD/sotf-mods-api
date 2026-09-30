/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Empty_ActionInputs */

const en_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish your first mod`)
};

const es_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publica tu primer mod`)
};

const de_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersten Mod veröffentlichen`)
};

const fr_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier votre premier mod`)
};

const it_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica la tua prima mod`)
};

const nl_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceer je eerste mod`)
};

const pl_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj pierwszy mod`)
};

const pt_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar seu primeiro mod`)
};

const ru_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовать первый мод`)
};

const sv_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera din första mod`)
};

const tr_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk modunu yayınla`)
};

const zh_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布第一个模组`)
};

const ja_basecamp_empty_action = /** @type {(inputs: Basecamp_Empty_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の MOD を公開`)
};

/**
* | output |
* | --- |
* | "Publish your first mod" |
*
* @param {Basecamp_Empty_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_empty_action = /** @type {((inputs?: Basecamp_Empty_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Empty_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_empty_action(inputs)
	if (locale === "de") return de_basecamp_empty_action(inputs)
	if (locale === "fr") return fr_basecamp_empty_action(inputs)
	if (locale === "it") return it_basecamp_empty_action(inputs)
	if (locale === "nl") return nl_basecamp_empty_action(inputs)
	if (locale === "pl") return pl_basecamp_empty_action(inputs)
	if (locale === "pt") return pt_basecamp_empty_action(inputs)
	if (locale === "ru") return ru_basecamp_empty_action(inputs)
	if (locale === "sv") return sv_basecamp_empty_action(inputs)
	if (locale === "tr") return tr_basecamp_empty_action(inputs)
	if (locale === "zh") return zh_basecamp_empty_action(inputs)
	if (locale === "ja") return ja_basecamp_empty_action(inputs)
	return en_basecamp_empty_action(inputs)
});
