/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_DedicatedInputs */

const en_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Works on dedicated servers`)
};

const es_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona en servidores dedicados`)
};

const de_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft auf dedizierten Servern`)
};

const fr_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne sur serveur dédié`)
};

const it_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona sui server dedicati`)
};

const nl_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt op dedicated servers`)
};

const pl_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa na serwerach dedykowanych`)
};

const pt_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciona em servidores dedicados`)
};

const ru_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает на выделенных серверах`)
};

const sv_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar på dedikerade servrar`)
};

const tr_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucularda çalışır`)
};

const zh_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持专用服务器`)
};

const ja_explore_dedicated = /** @type {(inputs: Explore_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバーで動作`)
};

/**
* | output |
* | --- |
* | "Works on dedicated servers" |
*
* @param {Explore_DedicatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_dedicated = /** @type {((inputs?: Explore_DedicatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_DedicatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_dedicated(inputs)
	if (locale === "de") return de_explore_dedicated(inputs)
	if (locale === "fr") return fr_explore_dedicated(inputs)
	if (locale === "it") return it_explore_dedicated(inputs)
	if (locale === "nl") return nl_explore_dedicated(inputs)
	if (locale === "pl") return pl_explore_dedicated(inputs)
	if (locale === "pt") return pt_explore_dedicated(inputs)
	if (locale === "ru") return ru_explore_dedicated(inputs)
	if (locale === "sv") return sv_explore_dedicated(inputs)
	if (locale === "tr") return tr_explore_dedicated(inputs)
	if (locale === "zh") return zh_explore_dedicated(inputs)
	if (locale === "ja") return ja_explore_dedicated(inputs)
	return en_explore_dedicated(inputs)
});
