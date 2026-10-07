/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Area_YouInputs */

const en_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You`)
};

const es_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tú`)
};

const de_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du`)
};

const fr_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous`)
};

const it_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu`)
};

const nl_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jij`)
};

const pl_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ty`)
};

const pt_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você`)
};

const ru_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы`)
};

const sv_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du`)
};

const tr_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen`)
};

const zh_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的`)
};

const ja_console_area_you = /** @type {(inputs: Console_Area_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなた`)
};

/**
* | output |
* | --- |
* | "You" |
*
* @param {Console_Area_YouInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_area_you = /** @type {((inputs?: Console_Area_YouInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Area_YouInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_area_you(inputs)
	if (locale === "de") return de_console_area_you(inputs)
	if (locale === "fr") return fr_console_area_you(inputs)
	if (locale === "it") return it_console_area_you(inputs)
	if (locale === "nl") return nl_console_area_you(inputs)
	if (locale === "pl") return pl_console_area_you(inputs)
	if (locale === "pt") return pt_console_area_you(inputs)
	if (locale === "ru") return ru_console_area_you(inputs)
	if (locale === "sv") return sv_console_area_you(inputs)
	if (locale === "tr") return tr_console_area_you(inputs)
	if (locale === "zh") return zh_console_area_you(inputs)
	if (locale === "ja") return ja_console_area_you(inputs)
	return en_console_area_you(inputs)
});
