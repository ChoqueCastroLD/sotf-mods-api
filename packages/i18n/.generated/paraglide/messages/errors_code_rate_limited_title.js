/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Rate_Limited_TitleInputs */

const en_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slow down a little`)
};

const es_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ve un poco más despacio`)
};

const de_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etwas langsamer, bitte`)
};

const fr_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doucement`)
};

const it_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rallenta un attimo`)
};

const nl_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Even rustig aan`)
};

const pl_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trochę wolniej`)
};

const pt_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vá com calma`)
};

const ru_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не так быстро`)
};

const sv_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta det lite lugnare`)
};

const tr_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biraz yavaşla`)
};

const zh_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`慢一点`)
};

const ja_errors_code_rate_limited_title = /** @type {(inputs: Errors_Code_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`少しペースを落としてください`)
};

/**
* | output |
* | --- |
* | "Slow down a little" |
*
* @param {Errors_Code_Rate_Limited_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_rate_limited_title = /** @type {((inputs?: Errors_Code_Rate_Limited_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Rate_Limited_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_rate_limited_title(inputs)
	if (locale === "de") return de_errors_code_rate_limited_title(inputs)
	if (locale === "fr") return fr_errors_code_rate_limited_title(inputs)
	if (locale === "it") return it_errors_code_rate_limited_title(inputs)
	if (locale === "nl") return nl_errors_code_rate_limited_title(inputs)
	if (locale === "pl") return pl_errors_code_rate_limited_title(inputs)
	if (locale === "pt") return pt_errors_code_rate_limited_title(inputs)
	if (locale === "ru") return ru_errors_code_rate_limited_title(inputs)
	if (locale === "sv") return sv_errors_code_rate_limited_title(inputs)
	if (locale === "tr") return tr_errors_code_rate_limited_title(inputs)
	if (locale === "zh") return zh_errors_code_rate_limited_title(inputs)
	if (locale === "ja") return ja_errors_code_rate_limited_title(inputs)
	return en_errors_code_rate_limited_title(inputs)
});
