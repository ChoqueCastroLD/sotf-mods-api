/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_NextInputs */

const en_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

const es_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente`)
};

const de_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter`)
};

const fr_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivant`)
};

const it_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Successiva`)
};

const nl_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende`)
};

const pl_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następna`)
};

const pt_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próxima`)
};

const ru_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вперёд`)
};

const sv_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa`)
};

const tr_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki`)
};

const zh_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一页`)
};

const ja_ranger_next = /** @type {(inputs: Ranger_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次へ`)
};

/**
* | output |
* | --- |
* | "Next" |
*
* @param {Ranger_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_next = /** @type {((inputs?: Ranger_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_next(inputs)
	if (locale === "de") return de_ranger_next(inputs)
	if (locale === "fr") return fr_ranger_next(inputs)
	if (locale === "it") return it_ranger_next(inputs)
	if (locale === "nl") return nl_ranger_next(inputs)
	if (locale === "pl") return pl_ranger_next(inputs)
	if (locale === "pt") return pt_ranger_next(inputs)
	if (locale === "ru") return ru_ranger_next(inputs)
	if (locale === "sv") return sv_ranger_next(inputs)
	if (locale === "tr") return tr_ranger_next(inputs)
	if (locale === "zh") return zh_ranger_next(inputs)
	if (locale === "ja") return ja_ranger_next(inputs)
	return en_ranger_next(inputs)
});
