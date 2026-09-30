/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Override_FailedInputs */

const en_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The verdict wasn’t saved`)
};

const es_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se guardó el veredicto`)
};

const de_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Urteil wurde nicht gespeichert`)
};

const fr_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le verdict n’a pas été enregistré`)
};

const it_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il verdetto non è stato salvato`)
};

const nl_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het oordeel is niet opgeslagen`)
};

const pl_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werdykt nie został zapisany`)
};

const pt_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O veredito não foi salvo`)
};

const ru_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вердикт не сохранён`)
};

const sv_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utlåtandet sparades inte`)
};

const tr_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karar kaydedilmedi`)
};

const zh_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`判定未保存`)
};

const ja_ranger_scan_override_failed = /** @type {(inputs: Ranger_Scan_Override_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`判定は保存されませんでした`)
};

/**
* | output |
* | --- |
* | "The verdict wasn’t saved" |
*
* @param {Ranger_Scan_Override_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_failed = /** @type {((inputs?: Ranger_Scan_Override_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_failed(inputs)
	if (locale === "de") return de_ranger_scan_override_failed(inputs)
	if (locale === "fr") return fr_ranger_scan_override_failed(inputs)
	if (locale === "it") return it_ranger_scan_override_failed(inputs)
	if (locale === "nl") return nl_ranger_scan_override_failed(inputs)
	if (locale === "pl") return pl_ranger_scan_override_failed(inputs)
	if (locale === "pt") return pt_ranger_scan_override_failed(inputs)
	if (locale === "ru") return ru_ranger_scan_override_failed(inputs)
	if (locale === "sv") return sv_ranger_scan_override_failed(inputs)
	if (locale === "tr") return tr_ranger_scan_override_failed(inputs)
	if (locale === "zh") return zh_ranger_scan_override_failed(inputs)
	if (locale === "ja") return ja_ranger_scan_override_failed(inputs)
	return en_ranger_scan_override_failed(inputs)
});
