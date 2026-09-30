/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Checks_PassedInputs */

const en_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checks passed`)
};

const es_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobaciones superadas`)
};

const de_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfungen bestanden`)
};

const fr_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contrôles réussis`)
};

const it_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlli superati`)
};

const nl_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controles geslaagd`)
};

const pl_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrole zaliczone`)
};

const pt_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificações aprovadas`)
};

const ru_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверки пройдены`)
};

const sv_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerna godkända`)
};

const tr_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontroller geçti`)
};

const zh_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查通过`)
};

const ja_ranger_checks_passed = /** @type {(inputs: Ranger_Checks_PassedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェック合格`)
};

/**
* | output |
* | --- |
* | "Checks passed" |
*
* @param {Ranger_Checks_PassedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_passed = /** @type {((inputs?: Ranger_Checks_PassedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_PassedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_passed(inputs)
	if (locale === "de") return de_ranger_checks_passed(inputs)
	if (locale === "fr") return fr_ranger_checks_passed(inputs)
	if (locale === "it") return it_ranger_checks_passed(inputs)
	if (locale === "nl") return nl_ranger_checks_passed(inputs)
	if (locale === "pl") return pl_ranger_checks_passed(inputs)
	if (locale === "pt") return pt_ranger_checks_passed(inputs)
	if (locale === "ru") return ru_ranger_checks_passed(inputs)
	if (locale === "sv") return sv_ranger_checks_passed(inputs)
	if (locale === "tr") return tr_ranger_checks_passed(inputs)
	if (locale === "zh") return zh_ranger_checks_passed(inputs)
	if (locale === "ja") return ja_ranger_checks_passed(inputs)
	return en_ranger_checks_passed(inputs)
});
