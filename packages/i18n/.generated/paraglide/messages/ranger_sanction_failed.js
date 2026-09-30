/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_FailedInputs */

const en_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The sanction wasn’t applied`)
};

const es_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se aplicó la sanción`)
};

const de_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Sanktion wurde nicht angewendet`)
};

const fr_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La sanction n’a pas été appliquée`)
};

const it_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La sanzione non è stata applicata`)
};

const nl_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De sanctie is niet toegepast`)
};

const pl_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sankcja nie została nałożona`)
};

const pt_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A sanção não foi aplicada`)
};

const ru_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Санкция не применена`)
};

const sv_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktionen tillämpades inte`)
};

const tr_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaptırım uygulanmadı`)
};

const zh_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处罚未生效`)
};

const ja_ranger_sanction_failed = /** @type {(inputs: Ranger_Sanction_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制裁は適用されませんでした`)
};

/**
* | output |
* | --- |
* | "The sanction wasn’t applied" |
*
* @param {Ranger_Sanction_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_failed = /** @type {((inputs?: Ranger_Sanction_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_failed(inputs)
	if (locale === "de") return de_ranger_sanction_failed(inputs)
	if (locale === "fr") return fr_ranger_sanction_failed(inputs)
	if (locale === "it") return it_ranger_sanction_failed(inputs)
	if (locale === "nl") return nl_ranger_sanction_failed(inputs)
	if (locale === "pl") return pl_ranger_sanction_failed(inputs)
	if (locale === "pt") return pt_ranger_sanction_failed(inputs)
	if (locale === "ru") return ru_ranger_sanction_failed(inputs)
	if (locale === "sv") return sv_ranger_sanction_failed(inputs)
	if (locale === "tr") return tr_ranger_sanction_failed(inputs)
	if (locale === "zh") return zh_ranger_sanction_failed(inputs)
	if (locale === "ja") return ja_ranger_sanction_failed(inputs)
	return en_ranger_sanction_failed(inputs)
});
