/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Status_PendingInputs */

const en_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building`)
};

const es_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Generando`)
};

const de_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird erstellt`)
};

const fr_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours`)
};

const it_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In preparazione`)
};

const nl_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezig`)
};

const pl_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W budowie`)
};

const pt_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A gerar`)
};

const ru_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборка`)
};

const sv_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggs`)
};

const tr_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hazırlanıyor`)
};

const zh_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成中`)
};

const ja_bundles_status_pending = /** @type {(inputs: Bundles_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成中`)
};

/**
* | output |
* | --- |
* | "Building" |
*
* @param {Bundles_Status_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_status_pending = /** @type {((inputs?: Bundles_Status_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Status_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_status_pending(inputs)
	if (locale === "de") return de_bundles_status_pending(inputs)
	if (locale === "fr") return fr_bundles_status_pending(inputs)
	if (locale === "it") return it_bundles_status_pending(inputs)
	if (locale === "nl") return nl_bundles_status_pending(inputs)
	if (locale === "pl") return pl_bundles_status_pending(inputs)
	if (locale === "pt") return pt_bundles_status_pending(inputs)
	if (locale === "ru") return ru_bundles_status_pending(inputs)
	if (locale === "sv") return sv_bundles_status_pending(inputs)
	if (locale === "tr") return tr_bundles_status_pending(inputs)
	if (locale === "zh") return zh_bundles_status_pending(inputs)
	if (locale === "ja") return ja_bundles_status_pending(inputs)
	return en_bundles_status_pending(inputs)
});
