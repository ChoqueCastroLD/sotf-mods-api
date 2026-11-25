/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Overview_TitleInputs */

const en_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What you can do with the API`)
};

const es_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué puedes hacer con la API`)
};

const de_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was du mit der API machen kannst`)
};

const fr_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que vous pouvez faire avec l’API`)
};

const it_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa puoi fare con l’API`)
};

const nl_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat je met de API kunt doen`)
};

const pl_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co możesz zrobić z API`)
};

const pt_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que você pode fazer com a API`)
};

const ru_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что можно делать через API`)
};

const sv_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad du kan göra med API:et`)
};

const tr_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API ile neler yapabilirsin`)
};

const zh_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 可以做什么`)
};

const ja_api_overview_title = /** @type {(inputs: Api_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API でできること`)
};

/**
* | output |
* | --- |
* | "What you can do with the API" |
*
* @param {Api_Overview_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_overview_title = /** @type {((inputs?: Api_Overview_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Overview_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_overview_title(inputs)
	if (locale === "de") return de_api_overview_title(inputs)
	if (locale === "fr") return fr_api_overview_title(inputs)
	if (locale === "it") return it_api_overview_title(inputs)
	if (locale === "nl") return nl_api_overview_title(inputs)
	if (locale === "pl") return pl_api_overview_title(inputs)
	if (locale === "pt") return pt_api_overview_title(inputs)
	if (locale === "ru") return ru_api_overview_title(inputs)
	if (locale === "sv") return sv_api_overview_title(inputs)
	if (locale === "tr") return tr_api_overview_title(inputs)
	if (locale === "zh") return zh_api_overview_title(inputs)
	if (locale === "ja") return ja_api_overview_title(inputs)
	return en_api_overview_title(inputs)
});
