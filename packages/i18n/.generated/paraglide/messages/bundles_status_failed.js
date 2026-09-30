/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Status_FailedInputs */

const en_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed`)
};

const es_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falló`)
};

const de_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlgeschlagen`)
};

const fr_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec`)
};

const it_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non riuscito`)
};

const nl_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mislukt`)
};

const pl_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błąd`)
};

const pt_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falhou`)
};

const ru_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ошибка`)
};

const sv_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misslyckades`)
};

const tr_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarısız`)
};

const zh_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败`)
};

const ja_bundles_status_failed = /** @type {(inputs: Bundles_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗`)
};

/**
* | output |
* | --- |
* | "Failed" |
*
* @param {Bundles_Status_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_status_failed = /** @type {((inputs?: Bundles_Status_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Status_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_status_failed(inputs)
	if (locale === "de") return de_bundles_status_failed(inputs)
	if (locale === "fr") return fr_bundles_status_failed(inputs)
	if (locale === "it") return it_bundles_status_failed(inputs)
	if (locale === "nl") return nl_bundles_status_failed(inputs)
	if (locale === "pl") return pl_bundles_status_failed(inputs)
	if (locale === "pt") return pt_bundles_status_failed(inputs)
	if (locale === "ru") return ru_bundles_status_failed(inputs)
	if (locale === "sv") return sv_bundles_status_failed(inputs)
	if (locale === "tr") return tr_bundles_status_failed(inputs)
	if (locale === "zh") return zh_bundles_status_failed(inputs)
	if (locale === "ja") return ja_bundles_status_failed(inputs)
	return en_bundles_status_failed(inputs)
});
