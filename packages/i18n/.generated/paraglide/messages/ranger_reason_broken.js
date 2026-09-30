/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reason_BrokenInputs */

const en_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken`)
};

const es_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No funciona`)
};

const de_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defekt`)
};

const fr_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne fonctionne pas`)
};

const it_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non funziona`)
};

const nl_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkt niet`)
};

const pl_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie działa`)
};

const pt_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não funciona`)
};

const ru_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не работает`)
};

const sv_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar inte`)
};

const tr_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışmıyor`)
};

const zh_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法使用`)
};

const ja_ranger_reason_broken = /** @type {(inputs: Ranger_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`動作しない`)
};

/**
* | output |
* | --- |
* | "Broken" |
*
* @param {Ranger_Reason_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reason_broken = /** @type {((inputs?: Ranger_Reason_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reason_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reason_broken(inputs)
	if (locale === "de") return de_ranger_reason_broken(inputs)
	if (locale === "fr") return fr_ranger_reason_broken(inputs)
	if (locale === "it") return it_ranger_reason_broken(inputs)
	if (locale === "nl") return nl_ranger_reason_broken(inputs)
	if (locale === "pl") return pl_ranger_reason_broken(inputs)
	if (locale === "pt") return pt_ranger_reason_broken(inputs)
	if (locale === "ru") return ru_ranger_reason_broken(inputs)
	if (locale === "sv") return sv_ranger_reason_broken(inputs)
	if (locale === "tr") return tr_ranger_reason_broken(inputs)
	if (locale === "zh") return zh_ranger_reason_broken(inputs)
	if (locale === "ja") return ja_ranger_reason_broken(inputs)
	return en_ranger_reason_broken(inputs)
});
