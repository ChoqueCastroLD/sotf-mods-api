/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_SinceInputs */

const en_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field-testing mods since 2023`)
};

const es_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probando mods en el terreno desde 2023`)
};

const de_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir testen Mods im Feld seit 2023`)
};

const fr_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods testés sur le terrain depuis 2023`)
};

const it_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collaudiamo mod sul campo dal 2023`)
};

const nl_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods in het veld getest sinds 2023`)
};

const pl_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testujemy mody w terenie od 2023 roku`)
};

const pt_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Testando mods em campo desde 2023`)
};

const ru_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверяем моды в полевых условиях с 2023 года`)
};

const sv_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi testar moddar i fält sedan 2023`)
};

const tr_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2023’ten beri modları sahada test ediyoruz`)
};

const zh_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自 2023 年起实地测试模组`)
};

const ja_common_footer_since = /** @type {(inputs: Common_Footer_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2023 年から MOD を現地でテストしています`)
};

/**
* | output |
* | --- |
* | "Field-testing mods since 2023" |
*
* @param {Common_Footer_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_since = /** @type {((inputs?: Common_Footer_SinceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_SinceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_since(inputs)
	if (locale === "de") return de_common_footer_since(inputs)
	if (locale === "fr") return fr_common_footer_since(inputs)
	if (locale === "it") return it_common_footer_since(inputs)
	if (locale === "nl") return nl_common_footer_since(inputs)
	if (locale === "pl") return pl_common_footer_since(inputs)
	if (locale === "pt") return pt_common_footer_since(inputs)
	if (locale === "ru") return ru_common_footer_since(inputs)
	if (locale === "sv") return sv_common_footer_since(inputs)
	if (locale === "tr") return tr_common_footer_since(inputs)
	if (locale === "zh") return zh_common_footer_since(inputs)
	if (locale === "ja") return ja_common_footer_since(inputs)
	return en_common_footer_since(inputs)
});
