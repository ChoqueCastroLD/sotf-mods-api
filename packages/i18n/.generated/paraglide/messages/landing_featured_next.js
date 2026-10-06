/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Featured_NextInputs */

const en_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next mods`)
};

const es_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods siguientes`)
};

const de_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächste Mods`)
};

const fr_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods suivants`)
};

const it_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod successivi`)
};

const nl_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende mods`)
};

const pl_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następne mody`)
};

const pt_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próximos mods`)
};

const ru_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующие моды`)
};

const sv_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa mods`)
};

const tr_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki modlar`)
};

const zh_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一组模组`)
};

const ja_landing_featured_next = /** @type {(inputs: Landing_Featured_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のMOD`)
};

/**
* | output |
* | --- |
* | "Next mods" |
*
* @param {Landing_Featured_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_featured_next = /** @type {((inputs?: Landing_Featured_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Featured_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_featured_next(inputs)
	if (locale === "de") return de_landing_featured_next(inputs)
	if (locale === "fr") return fr_landing_featured_next(inputs)
	if (locale === "it") return it_landing_featured_next(inputs)
	if (locale === "nl") return nl_landing_featured_next(inputs)
	if (locale === "pl") return pl_landing_featured_next(inputs)
	if (locale === "pt") return pt_landing_featured_next(inputs)
	if (locale === "ru") return ru_landing_featured_next(inputs)
	if (locale === "sv") return sv_landing_featured_next(inputs)
	if (locale === "tr") return tr_landing_featured_next(inputs)
	if (locale === "zh") return zh_landing_featured_next(inputs)
	if (locale === "ja") return ja_landing_featured_next(inputs)
	return en_landing_featured_next(inputs)
});
