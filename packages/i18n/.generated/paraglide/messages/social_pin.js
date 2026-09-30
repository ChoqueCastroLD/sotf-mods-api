/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_PinInputs */

const en_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pin`)
};

const es_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fijar`)
};

const de_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anheften`)
};

const fr_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Épingler`)
};

const it_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fissa in alto`)
};

const nl_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vastzetten`)
};

const pl_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przypnij`)
};

const pt_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixar`)
};

const ru_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрепить`)
};

const sv_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fäst`)
};

const tr_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sabitle`)
};

const zh_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置顶`)
};

const ja_social_pin = /** @type {(inputs: Social_PinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピン留め`)
};

/**
* | output |
* | --- |
* | "Pin" |
*
* @param {Social_PinInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_pin = /** @type {((inputs?: Social_PinInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_PinInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_pin(inputs)
	if (locale === "de") return de_social_pin(inputs)
	if (locale === "fr") return fr_social_pin(inputs)
	if (locale === "it") return it_social_pin(inputs)
	if (locale === "nl") return nl_social_pin(inputs)
	if (locale === "pl") return pl_social_pin(inputs)
	if (locale === "pt") return pt_social_pin(inputs)
	if (locale === "ru") return ru_social_pin(inputs)
	if (locale === "sv") return sv_social_pin(inputs)
	if (locale === "tr") return tr_social_pin(inputs)
	if (locale === "zh") return zh_social_pin(inputs)
	if (locale === "ja") return ja_social_pin(inputs)
	return en_social_pin(inputs)
});
