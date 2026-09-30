/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Status_ReadyInputs */

const en_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ready`)
};

const es_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listo`)
};

const de_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bereit`)
};

const fr_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêt`)
};

const it_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto`)
};

const nl_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klaar`)
};

const pl_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gotowy`)
};

const pt_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pronto`)
};

const ru_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Готов`)
};

const sv_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klar`)
};

const tr_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hazır`)
};

const zh_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已就绪`)
};

const ja_bundles_status_ready = /** @type {(inputs: Bundles_Status_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`準備完了`)
};

/**
* | output |
* | --- |
* | "Ready" |
*
* @param {Bundles_Status_ReadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_status_ready = /** @type {((inputs?: Bundles_Status_ReadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Status_ReadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_status_ready(inputs)
	if (locale === "de") return de_bundles_status_ready(inputs)
	if (locale === "fr") return fr_bundles_status_ready(inputs)
	if (locale === "it") return it_bundles_status_ready(inputs)
	if (locale === "nl") return nl_bundles_status_ready(inputs)
	if (locale === "pl") return pl_bundles_status_ready(inputs)
	if (locale === "pt") return pt_bundles_status_ready(inputs)
	if (locale === "ru") return ru_bundles_status_ready(inputs)
	if (locale === "sv") return sv_bundles_status_ready(inputs)
	if (locale === "tr") return tr_bundles_status_ready(inputs)
	if (locale === "zh") return zh_bundles_status_ready(inputs)
	if (locale === "ja") return ja_bundles_status_ready(inputs)
	return en_bundles_status_ready(inputs)
});
