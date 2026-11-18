/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Link_Reference_HintInputs */

const en_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every endpoint, try it in the browser`)
};

const es_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los endpoints, pruébalos en el navegador`)
};

const de_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Endpunkte, im Browser ausprobieren`)
};

const fr_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les endpoints, à essayer dans le navigateur`)
};

const it_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti gli endpoint, provali nel browser`)
};

const nl_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle endpoints, probeer ze in de browser`)
};

const pl_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie endpointy, do wypróbowania w przeglądarce`)
};

const pt_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os endpoints, teste no navegador`)
};

const ru_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все эндпоинты, можно попробовать в браузере`)
};

const sv_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla endpoints, prova i webbläsaren`)
};

const tr_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm uç noktalar, tarayıcıda dene`)
};

const zh_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有接口，可在浏览器中试用`)
};

const ja_api_link_reference_hint = /** @type {(inputs: Api_Link_Reference_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全エンドポイント、ブラウザで試せます`)
};

/**
* | output |
* | --- |
* | "Every endpoint, try it in the browser" |
*
* @param {Api_Link_Reference_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_link_reference_hint = /** @type {((inputs?: Api_Link_Reference_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Link_Reference_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_link_reference_hint(inputs)
	if (locale === "de") return de_api_link_reference_hint(inputs)
	if (locale === "fr") return fr_api_link_reference_hint(inputs)
	if (locale === "it") return it_api_link_reference_hint(inputs)
	if (locale === "nl") return nl_api_link_reference_hint(inputs)
	if (locale === "pl") return pl_api_link_reference_hint(inputs)
	if (locale === "pt") return pt_api_link_reference_hint(inputs)
	if (locale === "ru") return ru_api_link_reference_hint(inputs)
	if (locale === "sv") return sv_api_link_reference_hint(inputs)
	if (locale === "tr") return tr_api_link_reference_hint(inputs)
	if (locale === "zh") return zh_api_link_reference_hint(inputs)
	if (locale === "ja") return ja_api_link_reference_hint(inputs)
	return en_api_link_reference_hint(inputs)
});
