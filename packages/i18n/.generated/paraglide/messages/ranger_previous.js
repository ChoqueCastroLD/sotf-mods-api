/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_PreviousInputs */

const en_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous`)
};

const es_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anterior`)
};

const de_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück`)
};

const fr_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Précédent`)
};

const it_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precedente`)
};

const nl_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorige`)
};

const pl_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poprzednia`)
};

const pt_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anterior`)
};

const ru_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад`)
};

const sv_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Föregående`)
};

const tr_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki`)
};

const zh_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一页`)
};

const ja_ranger_previous = /** @type {(inputs: Ranger_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前へ`)
};

/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Ranger_PreviousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_previous = /** @type {((inputs?: Ranger_PreviousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_PreviousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_previous(inputs)
	if (locale === "de") return de_ranger_previous(inputs)
	if (locale === "fr") return fr_ranger_previous(inputs)
	if (locale === "it") return it_ranger_previous(inputs)
	if (locale === "nl") return nl_ranger_previous(inputs)
	if (locale === "pl") return pl_ranger_previous(inputs)
	if (locale === "pt") return pt_ranger_previous(inputs)
	if (locale === "ru") return ru_ranger_previous(inputs)
	if (locale === "sv") return sv_ranger_previous(inputs)
	if (locale === "tr") return tr_ranger_previous(inputs)
	if (locale === "zh") return zh_ranger_previous(inputs)
	if (locale === "ja") return ja_ranger_previous(inputs)
	return en_ranger_previous(inputs)
});
