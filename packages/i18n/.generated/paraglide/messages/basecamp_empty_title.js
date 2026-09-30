/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Empty_TitleInputs */

const en_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your basecamp is empty`)
};

const es_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu campamento está vacío`)
};

const de_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Basislager ist leer`)
};

const fr_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ton camp de base est vide`)
};

const it_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo campo base è vuoto`)
};

const nl_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je basiskamp is leeg`)
};

const pl_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój obóz jest pusty`)
};

const pt_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu acampamento está vazio`)
};

const ru_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш лагерь пуст`)
};

const sv_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ditt basläger är tomt`)
};

const tr_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana kampın boş`)
};

const zh_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的营地还是空的`)
};

const ja_basecamp_empty_title = /** @type {(inputs: Basecamp_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプはまだ空です`)
};

/**
* | output |
* | --- |
* | "Your basecamp is empty" |
*
* @param {Basecamp_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_empty_title = /** @type {((inputs?: Basecamp_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_empty_title(inputs)
	if (locale === "de") return de_basecamp_empty_title(inputs)
	if (locale === "fr") return fr_basecamp_empty_title(inputs)
	if (locale === "it") return it_basecamp_empty_title(inputs)
	if (locale === "nl") return nl_basecamp_empty_title(inputs)
	if (locale === "pl") return pl_basecamp_empty_title(inputs)
	if (locale === "pt") return pt_basecamp_empty_title(inputs)
	if (locale === "ru") return ru_basecamp_empty_title(inputs)
	if (locale === "sv") return sv_basecamp_empty_title(inputs)
	if (locale === "tr") return tr_basecamp_empty_title(inputs)
	if (locale === "zh") return zh_basecamp_empty_title(inputs)
	if (locale === "ja") return ja_basecamp_empty_title(inputs)
	return en_basecamp_empty_title(inputs)
});
