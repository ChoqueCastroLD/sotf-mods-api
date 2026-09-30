/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Checks_FailedInputs */

const en_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checks failed`)
};

const es_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobaciones fallidas`)
};

const de_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfungen fehlgeschlagen`)
};

const fr_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contrôles échoués`)
};

const it_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlli non superati`)
};

const nl_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controles mislukt`)
};

const pl_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrole niezaliczone`)
};

const pt_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificações falharam`)
};

const ru_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверки не пройдены`)
};

const sv_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerna misslyckades`)
};

const tr_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontroller başarısız`)
};

const zh_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查未通过`)
};

const ja_ranger_checks_failed = /** @type {(inputs: Ranger_Checks_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェック不合格`)
};

/**
* | output |
* | --- |
* | "Checks failed" |
*
* @param {Ranger_Checks_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_failed = /** @type {((inputs?: Ranger_Checks_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_failed(inputs)
	if (locale === "de") return de_ranger_checks_failed(inputs)
	if (locale === "fr") return fr_ranger_checks_failed(inputs)
	if (locale === "it") return it_ranger_checks_failed(inputs)
	if (locale === "nl") return nl_ranger_checks_failed(inputs)
	if (locale === "pl") return pl_ranger_checks_failed(inputs)
	if (locale === "pt") return pt_ranger_checks_failed(inputs)
	if (locale === "ru") return ru_ranger_checks_failed(inputs)
	if (locale === "sv") return sv_ranger_checks_failed(inputs)
	if (locale === "tr") return tr_ranger_checks_failed(inputs)
	if (locale === "zh") return zh_ranger_checks_failed(inputs)
	if (locale === "ja") return ja_ranger_checks_failed(inputs)
	return en_ranger_checks_failed(inputs)
});
